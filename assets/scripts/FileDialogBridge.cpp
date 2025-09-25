// Classes/FileDialogBridge.cpp
#include "bindings/sebind/sebind.h"
#include "cocos/platform/CCPlatformConfig.h"
#include "cocos/base/StringUtil.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
  #include <windows.h>
  #include <commdlg.h>
#endif

using namespace se;

static bool js_native_openTxtDialog(State& s) {
    std::string out;  // utf8 结果

#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
    OPENFILENAMEW ofn;  ZeroMemory(&ofn, sizeof(ofn));
    wchar_t file[4096] = L"";
    ofn.lStructSize  = sizeof(ofn);
    ofn.hwndOwner    = GetActiveWindow();
    ofn.lpstrFilter  = L"Text Files\0*.txt\0All Files\0*.*\0";
    ofn.lpstrFile    = file;
    ofn.nMaxFile     = 4096;
    ofn.Flags        = OFN_FILEMUSTEXIST | OFN_PATHMUSTEXIST;

    if (GetOpenFileNameW(&ofn)) {
        // 转 UTF8
        out = cc::StringUtil::WideToUtf8(file);
    }
#endif
    if (out.empty()) s.rval().setNull();       // 用户取消
    else             s.rval().setString(out);  // 绝对路径
    return true;
}
SE_BIND_FUNC(js_native_openTxtDialog)

static bool register_file_dialog_bridge(Object* global) {
    Value nsVal;
    if (!global->getProperty("NativeBridge", &nsVal) || nsVal.isNull()) {
        auto obj = Object::createPlainObject();
        nsVal.setObject(obj);
        global->setProperty("NativeBridge", nsVal);
    }
    auto ns = nsVal.toObject();
    ns->defineFunction("openTxtDialog", _SE(js_native_openTxtDialog));
    return true;
}

// 导出注册入口
bool register_all_file_dialog_bridge() {
    return ScriptEngine::getInstance()->addRegisterCallback(register_file_dialog_bridge);
}
