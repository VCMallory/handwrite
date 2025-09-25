cc.Class({
    extends: cc.Component,

    properties: {
        filePathLabel: cc.Label,
        fileContentLabel: cc.Label
    },

    onLoad() {
        //this.node.on('click', this.openFileDialog, this);
        // 将实例注册到全局，供 C++ 调用
        window.fileChooserInstance = this;
    },

    onDestroy() {
        // 清理全局引用
        if (window.fileChooserInstance === this) {
            window.fileChooserInstance = null;
        }
    },

    openFileDialog() {
       
    },

    receiveFilePath(filePath) {
        console.log('接收到文件路径:', filePath);
        
        if (this.filePathLabel) {
            this.filePathLabel.string = filePath || "未选择文件";
        }
        
        if (filePath && filePath !== "") {
            this.readFileContent(filePath);
        }
    },

    readFileContent(filePath) {
        try {
            if (jsb.fileUtils.isFileExist(filePath)) {
                let content = jsb.fileUtils.getStringFromFile(filePath);
                console.log('文件内容:', content);
                
                if (this.fileContentLabel) {
                    this.fileContentLabel.string = content.length > 200 ? 
                        content.substring(0, 200) + "..." : content;
                }
            } else {
                console.error('文件不存在:', filePath);
                if (this.fileContentLabel) {
                    this.fileContentLabel.string = "文件不存在";
                }
            }
        } catch (error) {
            console.error('读取文件失败:', error);
            if (this.fileContentLabel) {
                this.fileContentLabel.string = "读取文件失败: " + error.message;
            }
        }
    }
    


});