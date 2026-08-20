# 微信读书 macOS 客户端

一个基于 Electron 的微信读书 macOS 客户端外壳，使用官方网页端提供阅读服务。

## 功能

- macOS 原生窗口体验
- 使用持久化 Electron 会话保存登录状态
- 登录后再次打开无需重复登录
- 自动使用微信读书官网图标
- 微信读书站内页面正常打开
- 外部链接交由系统浏览器打开
- 支持 Apple Silicon（arm64）DMG 打包

应用不会读取、保存或上传账号密码。书籍内容、阅读权限、目录、划线、笔记和同步能力由微信读书官方网页控制。

## 环境要求

- macOS 12 或更高版本
- Apple Silicon Mac（当前 Release 提供 arm64 架构）
- Node.js 20 或更高版本
- npm

## 本地运行

```bash
npm install
npm start
```

首次启动后，在微信读书页面完成登录。登录信息保存在 Electron 的持久化会话分区中，数据由本机管理。

## 构建 DMG

```bash
npm install
npm run dist
```

构建产物位于 `dist/微信读书-1.0.0-arm64.dmg`。

当前构建没有 Apple Developer ID 签名。首次打开时，如果 macOS 显示安全提示，请在 Finder 中右键应用并选择“打开”，或在“系统设置 → 隐私与安全性”中允许打开。

## 项目结构

```text
main.js       Electron 主进程与窗口配置
preload.js    隔离的预加载脚本
package.json  依赖、运行脚本和 electron-builder 配置
icon.icns     微信读书应用图标
```

## 合规说明

本项目只提供对微信读书官方网页的桌面容器，不绕过登录、付费、访问控制或 DRM，不抓取或导出受版权保护的书籍内容。请遵守微信读书服务条款及适用法律法规。

## License

MIT
