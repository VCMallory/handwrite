// assets/scripts/PopupCapture.js
cc.Class({
  extends: cc.Component,

  properties: {
    // 指向弹框的内容节点（只截这个区域）；不填则截 PopupRoot
    content: cc.Node,
    heji:cc.Node,
    // 保存相对路径（写在可写目录里）
    saveRelPath: {
      default: 'captures/popup1.png'
    },

    // 清晰度缩放（>1 更清晰，代价是更大图）
    scaleFactor: {
      default: 1,
      type: cc.Integer,
      tooltip: '渲染缩放：1=原尺寸，2=2倍像素'
    }
  },

  onLoad () {
    // 若没指定 content，就用自身
    this._targetNode = this.content || this.node;

    // 创建一台捕捉相机（只渲染 popup 分组）
    const camNode = new cc.Node('CaptureCam');
    camNode.parent = this._targetNode;          // 绑到目标节点中，自动居中
    this._capCam = camNode.addComponent(cc.Camera);
    this._capCam.enabled = false;               // 手动调用 render
    this._capCam.ortho = true;

    // 只渲染 popup 分组
    const mask = 1 << this._targetNode.groupIndex;
    this._capCam.cullingMask = mask;
  },

  // 显示/隐藏弹框
  show () { this.node.active = true; }
  ,
  hide () { this.node.active = false; }
  ,

  // —— 截图并保存（仅原生/模拟器）——
  captureAndSave () {
  if (!(cc.sys.isNative && typeof jsb !== 'undefined' && jsb.fileUtils)) {
    cc.warn('[captureAndSave] 仅原生/模拟器可用');
    return;
  }

  const node = this._targetNode;
  const w = Math.max(1, Math.round(node.width  * Math.abs(node.scaleX) * this.scaleFactor));
  const h = Math.max(1, Math.round(node.height * Math.abs(node.scaleY) * this.scaleFactor));

  // —— 保存路径（缺少这个就会报错）——
  this.saveRelPath="captures/"+this.heji.getComponent(cc.EditBox).string+".png";
  const fu  = jsb.fileUtils;
  const abs = this._join(fu.getWritablePath(), this.saveRelPath);
  this._ensureDir(abs);

  // 相机参数
  this._capCam.orthoSize = node.height / 2;
  this._capCam.zoomRatio = this.scaleFactor;
  this._capCam.clearFlags = cc.Camera.ClearFlags.COLOR;
  this._capCam.backgroundColor = cc.color(0,0,0,0);

  // 渲染到 RT
  const rt = new cc.RenderTexture();
  rt.initWithSize(w, h);
  //if (rt.setFlipY) rt.setFlipY(true);          // 纠正上下颠倒

  this._capCam.enabled = true;                 // 手动渲染前启用
  this._capCam.targetTexture = rt;
  this._capCam.node.setPosition(cc.v2(0, 0));
  this._capCam.render();

  // 读像素
  let data = rt.readPixels();
  if (!data || data.length !== w * h * 4) {
    cc.error('[capture] readPixels failed');
    this._capCam.targetTexture = null;
    this._capCam.enabled = false;
    rt.destroy();
    return;
  }

  // 若 setFlipY 不生效则手工翻转
  //if (!rt.setFlipY) 
    {
    const row = w * 4, flipped = new Uint8Array(row * h);
    for (let y = 0; y < h; y++) {
      const src = y * row, dst = (h - 1 - y) * row;
      flipped.set(data.subarray(src, src + row), dst);
    }
    data = flipped;
  }

  // 保存 PNG
  const ok = jsb.saveImageData(data, w, h, abs);
  cc.log('[popup saved]', abs, ok);

  // 清理
  this._capCam.targetTexture = null;
  this._capCam.enabled = false;
  rt.destroy();
},


  // —— 工具：拼路径/确保目录 —— //
  _join (root, rel) {
    rel = String(rel || '').replace(/^[\/\\]+/, '');
    return (root + (root.endsWith('/') ? '' : '/') + rel).replace(/\\/g, '/');
  },

  _ensureDir (absPath) {
    const fu = jsb.fileUtils;
    const dir = absPath.replace(/\/[^\/]*$/, '/');
    fu.createDirectory(dir);
  },
});
