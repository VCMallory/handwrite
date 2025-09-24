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
        },
        landan8RT: {
            default: [],
            type: [cc.Node],
            tooltip: '蓝单按钮颜色'
        },
        lanshuangRT8:{
            default: [],
            type: [cc.Node],
            tooltip: '蓝双按钮颜色'
        },
        lvdan8RT: {
            default: [],
            type: [cc.Node],
            tooltip: '绿单按钮颜色'
        },
        lvshuangRT8:{
            default: [],
            type: [cc.Node],
            tooltip: '绿双按钮颜色'
        },
        hongdaRT:{
            default: [],
            type: [cc.Node],
            tooltip: '红大按钮颜色'
        },
        hongxiaoRT:{
            default: [],
            type: [cc.Node],
            tooltip: '红小按钮颜色'
        },
        landaRT:{
            default: [],
            type: [cc.Node],
            tooltip: '蓝大按钮颜色'
        },
        lanxiaoRT:{
            default: [],
            type: [cc.Node],
            tooltip: '蓝小按钮颜色'
        },
        lvdaRT:{
            default: [],
            type: [cc.Node],
            tooltip: '绿大按钮颜色'
        },
        lvxiaoRT:{
            default: [],
            type: [cc.Node],
            tooltip: '绿小按钮颜色'
        },
        danRT25:{
            default: [],
            type: [cc.Node],
            tooltip: '单按钮颜色'
        },
        shuangRT25:{
            default: [],
            type: [cc.Node],
            tooltip: '双按钮颜色'
        },
        daRT25:{
            default: [],
            type: [cc.Node],
            tooltip: '大按钮颜色'
        },
        xiaoRT25:{
            default: [],
            type: [cc.Node],
            tooltip: '小按钮颜色'
        },

        //鼠按钮
        shuRT:{
            default: [],
            type: [cc.Node],
            tooltip: '鼠按钮颜色'
        },
         niuRT:{
            default: [],
            type: [cc.Node],
            tooltip: '牛按钮颜色'
        },
        huRT:{
            default: [],
            type: [cc.Node],
            tooltip: '虎按钮颜色'
        },
        tuRT:{
            default: [],
            type: [cc.Node],
            tooltip: '兔按钮颜色'
        },
        longRT:{
            default: [],
            type: [cc.Node],
            tooltip: '龙按钮颜色'
        },
        sheRT:{
            default: [],
            type: [cc.Node],
            tooltip: '蛇按钮颜色'
        },
        maRT:{
            default: [],
            type: [cc.Node],
            tooltip: '马按钮颜色'
        },
        yangRT:{
            default: [],
            type: [cc.Node],
            tooltip: '羊按钮颜色'
        },
        houRT:{
            default: [],
            type: [cc.Node],
            tooltip: '猴按钮颜色'
        },
        jiRT:{
            default: [],
            type: [cc.Node],
            tooltip: '鸡按钮颜色'
        },
        gouRT:{
            default: [],
            type: [cc.Node],
            tooltip: '狗按钮颜色'
        },
        zhuRT:{
            default: [],
            type: [cc.Node],
            tooltip: '猪按钮颜色'
        },

         myToggleRT: cc.Toggle,
         editboxRT: cc.EditBox,
        editboxzongfuzhi:cc.EditBox, 
        lablezongjine:cc.Label,
        lablegeshu:cc.Label,

        ///////////////////////////////////////
        //最右下角的对象
        editboxRB49:{
            default: [],
            type: [cc.Node],
            tooltip: '最右下角的输入框对象'
        },


        ///////////////////////////////////
          node49LC0:{
            default: [],
            type: [cc.Node],
            tooltip: '最左边的输入框对象'
        },
        node49LC1:{
            default: [],
            type: [cc.Node],
            tooltip: '最左边的输入框对象'
        },
        nodeeditvalue0:{
            default: [],
            type: [cc.Integer],
            tooltip: '49个值'
        },
         nodeeditvalue1:{
            default: [],
            type: [cc.Integer],
            tooltip: '49个值'
        },
        editboxLheji:cc.EditBox,
        myToggleRB: cc.Toggle,

        ////////////////////////////////
        //上一步 下一步 提出 保存 v分析
        shangyibu:{
            default: [],
            type: [cc.Integer],
            tooltip: '98个值'
        },
        xiayibu:{
            default: [],
            type: [cc.Integer],
            tooltip: '98个值'
        },
         editboxfenxi:cc.EditBox,


         ///////
         //十二生肖
         shiershengxiao0:{//下面的输入框
            default: [],
            type: [cc.Node],
            tooltip: '中间的输入框对象'
        },
        shiershengxiao1:{//上面的输入框
            default: [],
            type: [cc.Node],
            tooltip: '中间的输入框对象'
        },
        editboxhejicenter:cc.EditBox,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.coloryellow = cc.color(182, 218, 54);
        this.colorwrate=cc.color(255,255,255);
        if (this.myToggleRT) {
            this.myToggleRT.node.on('toggle', this.onToggleChanged, this);
        }
        if (this.myToggleRB) {
            this.myToggleRB.node.on('toggle', this.onToggleChanged1, this);
        }
        if (this.editboxRT) {
            this.editboxRT.node.on('text-changed',      this.onTextChanged, this); // 文本实时变化
            
        }
        // if(this.editboxzongfuzhi){
        //     this.editboxzongfuzhi.node.on('editing-return',    this.onEditReturn,  this);
        // }
        // PC：系统键盘回车兼容
        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onEditReturn, this);


        this.boolmyToggleRT=false;
        this.boolmyToggleRB=false;
        this.editboxRTString=0;
        this.AddNodeList=[];

        //分析
        this.node49lv=[];
        this.nn=this.readLinesFromWritable('data/node49lv.txt');
        for(let i=0;i<this.nn.length;++i){
            var ss =this.nn[i].split('=');
            this.node49lv.push(ss[0]);
            this.node49lv.push(ss[1]);
        }

        //十二生肖
        this.shiershengxiaostring=[];
        this.nn1=this.readLinesFromWritable('data/shiershengxiao.txt');
        for(let i=0;i<this.nn1.length;++i){
            var ss =this.nn1[i].split('=');
            this.shiershengxiaostring.push(ss[0]);
            this.shiershengxiaostring.push(ss[1]);
        }

        this.shiershengxiaostring1=[];
        this.nn1=this.readLinesFromWritable('data/shiershengxiaoweizhi.txt');
        for(let i=0;i<this.nn1.length;++i){
            var ss =this.nn1[i].split('=');
            this.shiershengxiaostring.push(ss[0]);
            var ss1=ss[1].split(',');
            for(let j=0;j<ss1.length;++j){

            }
            
        }
     },

    start () {

    },

     onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onEditReturn, this);
    },
    hongdanbutton(){
        for(let i=0;i<8;++i){
            this.setNodeColor(this.findDeepByName(this.hongdan8RT[i],"Background"),this.coloryellow);
        }
        
        for(let i=0;i<8;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.hongdan8RT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.hongdan8RT[i]);
            }
        }
        cc.log('[addnode]',this.AddNodeList.length);
    },


    qingkongRT(){
         for(let i=0;i<49;++i){
            this.setNodeColor(this.findDeepByName(this.qingkongTOPRIGHT49[i],"Background"),this.colorwrate);
        }
        for(let i=this.AddNodeList.length-1;i>=0;--i){
            this.AddNodeList.splice(i,1);
        }
    },

    hongshuangbutton(){
        for(let i=0;i<9;++i){
            this.setNodeColor(this.findDeepByName(this.hongshuangRT9[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<9;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.hongshuangRT9[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.hongshuangRT9[i]);
            }
        }
    },
     landanbutton(){
        for(let i=0;i<8;++i){
            this.setNodeColor(this.findDeepByName(this.landan8RT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<8;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.landan8RT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.landan8RT[i]);
            }
        }
    },
    lanshuangbutton(){
        for(let i=0;i<8;++i){
            this.setNodeColor(this.findDeepByName(this.lanshuangRT8[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<8;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lanshuangRT8[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lanshuangRT8[i]);
            }
        }
    },
     lvdanbutton(){
        for(let i=0;i<9;++i){
            this.setNodeColor(this.findDeepByName(this.lvdan8RT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<9;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lvdan8RT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lvdan8RT[i]);
            }
        }
    },
    lvshuangbutton(){
        for(let i=0;i<7;++i){
            this.setNodeColor(this.findDeepByName(this.lvshuangRT8[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<7;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lvshuangRT8[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lvshuangRT8[i]);
            }
        }
    },
     hongdabutton(){
        for(let i=0;i<7;++i){
            this.setNodeColor(this.findDeepByName(this.hongdaRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<7;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.hongdaRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.hongdaRT[i]);
            }
        }
    },
    hongxiaobutton(){
        for(let i=0;i<10;++i){
            this.setNodeColor(this.findDeepByName(this.hongxiaoRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<10;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.hongxiaoRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.hongxiaoRT[i]);
            }
        }
    },
    landabutton(){
        for(let i=0;i<9;++i){
            this.setNodeColor(this.findDeepByName(this.landaRT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<9;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.landaRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.landaRT[i]);
            }
        }
    },
    lanxiaobutton(){
        for(let i=0;i<7;++i){
            this.setNodeColor(this.findDeepByName(this.lanxiaoRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<7;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lanxiaoRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lanxiaoRT[i]);
            }
        }
    },
    lvdabutton(){
        for(let i=0;i<9;++i){
            this.setNodeColor(this.findDeepByName(this.lvdaRT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<9;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lvdaRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lvdaRT[i]);
            }
        }
    },
    lvxiaobutton(){
        for(let i=0;i<7;++i){
            this.setNodeColor(this.findDeepByName(this.lvxiaoRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<7;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.lvxiaoRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.lvxiaoRT[i]);
            }
        }
    },
     danbutton(){
        for(let i=0;i<25;++i){
            this.setNodeColor(this.findDeepByName(this.danRT25[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<25;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.danRT25[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.danRT25[i]);
            }
        }
    },
     shuangbutton(){
        for(let i=0;i<24;++i){
            this.setNodeColor(this.findDeepByName(this.shuangRT25[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<24;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.shuangRT25[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.shuangRT25[i]);
            }
        }
    },
     dabutton(){
        for(let i=0;i<25;++i){
            this.setNodeColor(this.findDeepByName(this.daRT25[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<25;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.daRT25[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.daRT25[i]);
            }
        }
    },
     xiaobutton(){
        for(let i=0;i<24;++i){
            this.setNodeColor(this.findDeepByName(this.xiaoRT25[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<24;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.xiaoRT25[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.xiaoRT25[i]);
            }
        }
    },
    shubutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.shuRT[i],"Background"),this.coloryellow);
        }
         for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.shuRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.shuRT[i]);
            }
        }
    },
    niubutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.niuRT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.niuRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.niuRT[i]);
            }
        }
    },
    hubutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.huRT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.huRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.huRT[i]);
            }
        }
    },
    tubutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.tuRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.tuRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.tuRT[i]);
            }
        }
    },
    longbutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.longRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.longRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.longRT[i]);
            }
        }
    },
    shebutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.sheRT[i],"Background"),this.coloryellow);
        }

         for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.sheRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.sheRT[i]);
            }
        }
    },

     mabutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.maRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.maRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.maRT[i]);
            }
        }
    },
    yangbutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.yangRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.yangRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.yangRT[i]);
            }
        }
    },
    houbutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.houRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.houRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.houRT[i]);
            }
        }
    },

     jibutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.jiRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.jiRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.jiRT[i]);
            }
        }
    },
    goubutton(){
        for(let i=0;i<4;++i){
            this.setNodeColor(this.findDeepByName(this.gouRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<4;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.gouRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.gouRT[i]);
            }
        }
    },
    zhubutton(){
        for(let i=0;i<5;++i){
            this.setNodeColor(this.findDeepByName(this.zhuRT[i],"Background"),this.coloryellow);
        }

        for(let i=0;i<5;++i){
            var pan = false;
            for(let j=0;j<this.AddNodeList.length;++j){
                if(this.AddNodeList[j].name===this.zhuRT[i].name){
                    pan=true;
                    break;
                }
            }
            if(!pan){
                this.AddNodeList.push(this.zhuRT[i]);
            }
        }
    },
    // 在“Check Events”里绑这个函数也可以（第二个参数是自定义数据）
    onToggleChanged (toggle, customEventData) {
        cc.log(`toggle: ${toggle.node.name}, checked?`, toggle.isChecked, 'data=', customEventData);
        // 读取选中
        if (toggle.isChecked) {
        // do something...
            this.boolmyToggleRT=true;
        }else{
            this.boolmyToggleRT=false;
        }
    },
    onToggleChanged1(toggle, customEventData){
        cc.log(`toggle: ${toggle.node.name}, checked?`, toggle.isChecked, 'data=', customEventData);
        // 读取选中
        if (toggle.isChecked) {
        // do something...
            this.boolmyToggleRB=true;
        }else{
            this.boolmyToggleRB=false;
        }
    },
     onTextChanged (editBox) {
        cc.log('[text-changed]', editBox.string);
        this.editboxRTString=Number(editBox.string);
    },

    okRT(){
        for(let i=0;i<49;++i){
            this.shangyibu[i]=this.xiayibu[i]
        }



        if(this.AddNodeList.length>0&&this.editboxRTString!=""){
            for(let i=0;i<this.AddNodeList.length;++i){
                for(let j=0;j<this.node49LC0.length;++j){
                    if(this.AddNodeList[i].name===this.node49LC0[j].name){
                        if(this.boolmyToggleRT){
                            this.nodeeditvalue0[j]-=this.editboxRTString;
                        }else{
                            this.nodeeditvalue0[j]+=this.editboxRTString;
                        }
                        
                         cc.log('[value]', this.nodeeditvalue0[j]);
                        break;
                    }
                }
            }

            
            for(let i=0;i<this.nodeeditvalue0.length;++i){
                if(this.nodeeditvalue0[i]!=0){
                    this.node49LC0[i].getComponent(cc.EditBox).string=this.nodeeditvalue0[i];
                    // cc.log('[value1]', this.node49LC0[i].string);
                    this.xiayibu[i]=this.nodeeditvalue0[i];
                }
            }

            this.qingkongRT();
            this.editboxRT.string="";

            var sum=0;
            for(let i=0;i<this.node49LC0.length;++i){
                if(this.node49LC0[i].getComponent(cc.EditBox).string!=""){
                     sum+=Number(this.node49LC0[i].getComponent(cc.EditBox).string);
                     //cc.log('[value2]', Number(this.node49LC0[i].getComponent(cc.editBox).string));
                }
               
            }
            this.editboxLheji.string=sum;
        }
    },

    onnum49(arg1,customEventData){
        var pan=false;
        var j=0;
        for(let i=0;i<this.AddNodeList.length;++i){
            if(customEventData===this.AddNodeList[i].name){
                pan=true;
                j=i;
                break;
            }
        }

        if(!pan){
            this.AddNodeList.push(arg1.target);
            this.setNodeColor(this.findDeepByName(arg1.target,"Background"),this.coloryellow);
        }else{
             this.setNodeColor(this.findDeepByName(this.AddNodeList[j],"Background"),this.colorwrate);
             this.AddNodeList.splice(j,1);

        }
        cc.log('[onnum49]', this.AddNodeList.length);
    },

    ///////////////////////////////////////////////////////////////////////
    //右下角功能函数
    onEditReturn (event)
    {
        
         
    },

    quedingcenter(){

        for(let i=0;i<49;++i){
            this.shangyibu[i]=this.xiayibu[i]
        }


        console.log('[return]', this.editboxzongfuzhi.string); 

         const raw = (this.editboxzongfuzhi?.string || '').trim();
         const arr = raw.split(/[,\s，、;；]+/).filter(Boolean);
        
        
        //const unique = [...new Set(arr)];     // 对字符串数组
         console.log('[arr]', arr[0]); 
        for(let i=0;i<arr.length;++i){
            for(let j=0;j<this.qingkongTOPRIGHT49.length;++j){
                if(arr[i]===this.qingkongTOPRIGHT49[j].name){
                    this.AddNodeList.push(this.qingkongTOPRIGHT49[j]);
                    break;
                }
            }
        }

        for(let i=0;i<this.AddNodeList.length;++i){
             this.setNodeColor(this.findDeepByName(this.AddNodeList[i],"Background"),this.coloryellow);
        }


        //确认个数和总金额
        this.editboxRTString=Number(this.editboxRT.string);
        this.lablezongjine.getComponent(cc.Label).string="所选号码总金额:"+this.editboxRTString*this.AddNodeList.length;
        this.lablegeshu.getComponent(cc.Label).string="所选号码总个数:"+this.AddNodeList.length;

        if(this.AddNodeList.length>0&&this.editboxRTString!=""){
            for(let i=0;i<this.AddNodeList.length;++i){
                for(let j=0;j<this.node49LC0.length;++j){
                    if(this.AddNodeList[i].name===this.node49LC0[j].name){
                        this.nodeeditvalue0[j]+=this.editboxRTString;
                         cc.log('[value]', this.nodeeditvalue0[j]);
                        break;
                    }
                }
            }

            
            for(let i=0;i<this.nodeeditvalue0.length;++i){
                if(this.nodeeditvalue0[i]!=0){
                    this.node49LC0[i].getComponent(cc.EditBox).string=this.nodeeditvalue0[i];
                    // cc.log('[value1]', this.node49LC0[i].string);
                    this.xiayibu[i]=this.nodeeditvalue0[i];
                }
            }

            //this.qingkongRT();
            //this.editboxRT.string="";

            var sum=0;
            for(let i=0;i<this.node49LC0.length;++i){
                if(this.node49LC0[i].getComponent(cc.EditBox).string!=""){
                     sum+=Number(this.node49LC0[i].getComponent(cc.EditBox).string);
                     //cc.log('[value2]', Number(this.node49LC0[i].getComponent(cc.editBox).string));
                }
               
            }
            this.editboxLheji.string=sum;
        }





    },

    quedingrightbottom(){

        for(let i=0;i<49;++i){
            this.shangyibu[i]=this.xiayibu[i]
        }

        for(let i=0;i<49;++i){
            if(this.editboxRB49[i].getComponent(cc.EditBox).string!=""){
                if(this.boolmyToggleRB){//递减
                    this.nodeeditvalue0[i]-=Number(this.editboxRB49[i].getComponent(cc.EditBox).string);
                }else{
                    this.nodeeditvalue0[i]+=Number(this.editboxRB49[i].getComponent(cc.EditBox).string);
                    cc.log('[nodeeditvalue0]', Number(this.editboxRB49[i].getComponent(cc.EditBox).string));
                }
            }
        }

        for(let i=0;i<this.nodeeditvalue0.length;++i){
                if(this.nodeeditvalue0[i]!=0){
                    this.node49LC0[i].getComponent(cc.EditBox).string=this.nodeeditvalue0[i];
                    // cc.log('[value1]', this.node49LC0[i].string);
                    this.xiayibu[i]=this.nodeeditvalue0[i];
                }
            }


            var sum=0;
            for(let i=0;i<this.node49LC0.length;++i){
                if(this.node49LC0[i].getComponent(cc.EditBox).string!=""){
                     sum+=Number(this.node49LC0[i].getComponent(cc.EditBox).string);
                     //cc.log('[value2]', Number(this.node49LC0[i].getComponent(cc.editBox).string));
                }
               
            }
            this.editboxLheji.string=sum;


            //写入文件
            // 覆盖写入多行
            var str=[];
            for(let i=0;i<this.nodeeditvalue0.length;++i){
                var ss = Number(i+1)+"="+this.nodeeditvalue0[i];
                str.push(ss);
            }
            this.writeLinesToWritable('data/node49.txt', str);//['1=0', '2=0', '3=0']

            // var str1=[];
            // for(let i=0;i<this.nodeeditvalue0.length;++i){
            //     var ss = Number(i+1)+"="+46;
            //     str1.push(ss);
            // }
            // this.writeLinesToWritable('data/node49lv.txt', str1);//['1=0', '2=0', '3=0']

    },

    qingkongRB(){
        for(let i=0;i<49;++i){
            this.editboxRB49[i].getComponent(cc.EditBox).string="";
        }
    },



    ////////
    //上一步



    /////////
    //下一步


    /////////
    //分析
    fenxi(){

        for(let i=0;i<49;++i){
            this.shangyibu[i]=this.nodeeditvalue0[i]
        }
        for(let i=0;i<49;++i){
            this.shangyibu[i+49]=this.nodeeditvalue1[i]
        }
        var sum=0;
            for(let i=0;i<this.node49LC0.length;++i){
                if(this.node49LC0[i].getComponent(cc.EditBox).string!=""){
                     sum+=Number(this.node49LC0[i].getComponent(cc.EditBox).string);
                     //cc.log('[value2]', Number(this.node49LC0[i].getComponent(cc.editBox).string));
                }
               
            }
        
        sum=sum*Number(this.editboxfenxi.string)+sum;
        for(let i=0;i<this.nodeeditvalue0.length;++i){
            if(this.nodeeditvalue0[i]>0){
                var value0 = Number(this.node49lv[i*2+1])*this.nodeeditvalue0[i];
                cc.log('[fenxi]', value0);
                if(value0-sum>0){
                    var value1 = Math.round((value0-sum)/ Number(this.node49lv[i*2+1]));
                    this.nodeeditvalue1[i]=value1;
                    this.nodeeditvalue0[i]-=value1;
                }
            }
        }


        for(let i=0;i<this.nodeeditvalue0.length;++i){
                if(this.nodeeditvalue0[i]!=0){
                    this.node49LC0[i].getComponent(cc.EditBox).string=this.nodeeditvalue0[i];
                    // cc.log('[value1]', this.node49LC0[i].string);
                    this.xiayibu[i]=this.nodeeditvalue0[i];
                }
            }

        for(let i=0;i<this.nodeeditvalue1.length;++i){
            if(this.nodeeditvalue1[i]!=0){
                    this.node49LC1[i].getComponent(cc.EditBox).string=this.nodeeditvalue1[i];
                    // cc.log('[value1]', this.node49LC0[i].string);
                    this.xiayibu[i+49]=this.nodeeditvalue1[i];

                   // this.editboxRB49[i].getComponent(cc.EditBox).string=Number(this.nodeeditvalue1[i]);
                }
        }


            var sum=0;
            for(let i=0;i<this.node49LC0.length;++i){
                if(this.node49LC0[i].getComponent(cc.EditBox).string!=""){
                     sum+=Number(this.node49LC0[i].getComponent(cc.EditBox).string);
                     //cc.log('[value2]', Number(this.node49LC0[i].getComponent(cc.editBox).string));
                }
               
            }
            this.editboxLheji.string=sum;



    },

    //////////
    //提出
    tichu(){
        for(let i=0;i<this.nodeeditvalue1.length;++i){
            if(this.nodeeditvalue1[i]!=0){

                   this.editboxRB49[i].getComponent(cc.EditBox).string=Number(this.nodeeditvalue1[i]);
                }
        }
    },



    /////////
    //保存







    ////////////////////
    //中间的功能
    //确定
    shiershengxiaook(){

        var sum=0;
        for(let i=0;i<this.shiershengxiao1.length;++i){
            if(this.shiershengxiao0[i].getComponent(cc.EditBox).string!=""){
                this.shiershengxiao1[i].getComponent(cc.EditBox).string=this.shiershengxiao0[i].getComponent(cc.EditBox).string;
                sum+=Number(this.shiershengxiao1[i].getComponent(cc.EditBox).string);
            }
        }

       this.editboxhejicenter.string=sum;
    },



    //清空
    shiershengxiaoclear(){
        for(let i=0;i<this.shiershengxiao0.length;++i){
            this.shiershengxiao0[i].getComponent(cc.EditBox).string="";
             //this.shiershengxiao1[i].getComponent(cc.EditBox).string="";
        }
    },

    //清空数据
    shiershengxiaoclear1(){
        for(let i=0;i<this.shiershengxiao1.length;++i){
            this.shiershengxiao1[i].getComponent(cc.EditBox).string="";
             //this.shiershengxiao1[i].getComponent(cc.EditBox).string="";
        }
        this.editboxhejicenter.string="";
    },

    //添加


    //图片


    //统计结果
    tongjijieguo(){
        var sum=0;
        for(let i=0;i<this.shiershengxiao1.length;++i){
            if(this.shiershengxiao1[i].getComponent(cc.EditBox).string!=""){
                this.shiershengxiao1[i].getComponent(cc.EditBox).string=Number(this.shiershengxiao1[i].getComponent(cc.EditBox).string)*Number(this.shiershengxiaostring[i*2+1]);
                sum+=Number(this.shiershengxiao1[i].getComponent(cc.EditBox).string);
            }
        }
        this.editboxhejicenter.string=sum;  
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

        
    },


    ///////////////////////////////////////////////
    //原生读写文件
    // 是否可用原生文件系统
isNativeFS () {
  return cc.sys.isNative && typeof jsb !== 'undefined' && jsb.fileUtils;
},
// 拼路径（相对可写目录）
_join (root, rel) {
  rel = String(rel || '').replace(/^[\/\\]+/, '');
  return (root + (root.endsWith('/') ? '' : '/') + rel).replace(/\\/g, '/');
},
// 确保目录存在
_ensureDir (absPath) {
  const fu = jsb.fileUtils;
  const dir = absPath.replace(/\/[^\/]*$/, '/');
  fu.createDirectory(dir);
},

// —— 逐行读取（相对“可写目录”）——
readLinesFromWritable (relPath) {
  if (!this.isNativeFS()) { cc.warn('readLines: 仅原生可用'); return []; }
  const fu  = jsb.fileUtils;
  const abs = this._join(fu.getWritablePath(), relPath);
  if (!fu.isFileExist(abs)) return [];
  const text = fu.getStringFromFile(abs) || '';
  // 统一换行后拆分：支持 \r\n / \n / \r
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
},

// —— 覆盖写入（把数组每一项按一行写入）——
writeLinesToWritable (relPath, lines) {
  if (!this.isNativeFS()) { cc.warn('writeLines: 仅原生可用'); return false; }
  const fu  = jsb.fileUtils;
  const abs = this._join(fu.getWritablePath(), relPath);
  this._ensureDir(abs);
  // 用 \n 作为标准行分隔
  const body = (lines || []).map(s => String(s ?? '')).join('\n');
  return fu.writeStringToFile(body, abs);
},

// —— 追加一行（若文件不存在则创建）——
appendLineToWritable (relPath, line) {
  if (!this.isNativeFS()) { cc.warn('appendLine: 仅原生可用'); return false; }
  const fu  = jsb.fileUtils;
  const abs = this._join(fu.getWritablePath(), relPath);
  this._ensureDir(abs);

  let old = '';
  if (fu.isFileExist(abs)) old = fu.getStringFromFile(abs) || '';
  const hasContent = old.length > 0;
  const sep = hasContent ? (/\r\n/.test(old) ? '\r\n' : '\n') : '';
  const body = hasContent ? (old + sep + String(line ?? '')) : String(line ?? '');
  return fu.writeStringToFile(body, abs);
},





    });
