// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        hongdan:cc.Node,




        
        hongdan8RT: {
            default: [],
            type: [cc.Node],
            tooltip: '红单按钮颜色'
        },

        qingkongTOPRIGHT49:{
            default: [],
            type: [cc.Node],
            tooltip: '清空节点背景颜色'
        },

        hongshuangRT9:{
            default: [],
            type: [cc.Node],
            tooltip: '红双按钮颜色'
        }

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.coloryellow = cc.color(182, 218, 54);
        this.colorwrate=cc.color(255,255,255);
     },

    start () {

    },

    hongdanbutton(){
        for(let i=0;i<8;++i){
            this.setNodeColor(this.findDeepByName(this.hongdan8RT[i],"Background"),this.coloryellow);
        }
    },


    qingkongRT(){
         for(let i=0;i<49;++i){
            this.setNodeColor(this.findDeepByName(this.qingkongTOPRIGHT49[i],"Background"),this.colorwrate);
        }
    },

    hongshuangbutton(){
        for(let i=0;i<9;++i){
            this.setNodeColor(this.findDeepByName(this.hongshuangRT9[i],"Background"),this.coloryellow);
        }
    },
    // update (dt) {},

    /** 递归查找任意层级子物体（按名字完全匹配） */
    findDeepByName(root, targetName){
        if (!root) return null;
        if (root.name === targetName) return root;
        for (const c of root.children) {
            const hit = this.findDeepByName(c, targetName);
            if (hit) return hit;
        }
        return null;
    },

/** 给节点及其可渲染子节点统一上色（Sprite/Label 等） */
    setNodeColor (node, color){
        // v2.x 节点本身支持 color（会影响其直系渲染组件）
        if (node.color) node.color = color;

        
    }
    });
