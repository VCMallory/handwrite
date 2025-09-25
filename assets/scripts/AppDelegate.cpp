// Classes/AppDelegate.cpp
extern bool register_all_file_dialog_bridge();   // 声明

bool AppDelegate::applicationDidFinishLaunching() {
    auto se = se::ScriptEngine::getInstance();
    // ...
    se->addRegisterCallback(register_all_file_dialog_bridge);  // ★ 注册桥接
    // ...
    return true;
}
