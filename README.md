<!--suppress HtmlDeprecatedAttribute -->

<div align="center">
  <p>
    <img src="https://s1.imagehub.cc/images/2023/03/07/8d09e153dd83ad9d523f14c28447a02e.png" alt="autojs6-vscode-ext-banner_1024×310" border="0" width="496" />
  </p>

  <p>OBS (OBS 调试工具 (VSCode 插件)</p>
  <p>Debugger for OBS on VSCode</p>

  <p>
    <a href="https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/issues"><img alt="GitHub closed issues" src="https://img.shields.io/github/issues/SuperMonster003/AutoJs6-VSCode-Extension?color=009688"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6"><img alt="GitHub AutoJs6 repository" src="https://img.shields.io/badge/auto.js->= 6.3.3-67a91b"/></a>
    <a href="https://github.com/topics/javascript"><img alt="GitHub top language" src="https://img.shields.io/github/languages/top/SuperMonster003/AutoJs6-VSCode-Extension?color=eb8031"/></a>
    <br>
    <a href="https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/commit/d43a0119b214a17062501ea8a938b13bd97d2028"><img alt="Created" src="https://img.shields.io/date/1638929280?color=2e7d32&label=created"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/find/master"><img alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/SuperMonster003/AutoJs6-VSCode-Extension?color=795548"/></a>
    <a href="https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/blob/master/LICENSE"><img alt="GitHub License" src="https://img.shields.io/github/license/SuperMonster003/AutoJs6-VSCode-Extension?color=534BAE"/></a>
  </p>
</div>

******

### OBS VSCode 开发插件

> 功能开发中, 如有问题请到QQ群[12567596]中交流

******

* 支持 [OBS](https://open-book-source.github.io/) 脚本调试与运行的 [VSCode](https://code.visualstudio.com/) 插件
* 克隆 (Clone) 自 [SuperMonster003/AutoJs6-VSCode-Extension](https://github.com/SuperMonster003/AutoJs6-VSCode-Extension)
* 克隆 (Clone) 自 [hyb1996/Auto.js-VSCode-Extension](https://github.com/hyb1996/Auto.js-VSCode-Extension)

******

### 安装 (Install)

******

- VSCode 菜单 `View / 查看` - `Extensions / 扩展` `[ Ctrl+Shift+X ]`
- 搜索 "OBS"
- 选择 "OBS VSCode Extension" 插件并安装 (或更新)

******

### 功能 (Features)

******

- 在 VSCode 中连接设备并操作 OBS 的脚本或项目 (运行 / 停止 / 保存 等)
- 在 VSCode 中实时显示 OBS 的日志

******

### 使用 (Usage)

******

0. 基本操作

- `< 命令面板 >`
    - VSCode 菜单 `View / 查看` - `Command Palette / 命令面板` `[ Ctrl+Shift+P ]`
- `< 开发人员工具 >`
    - VSCode 菜单 `Help / 帮助` - `Toggle Developer Tools / 切换开发人员工具`

1. 连接到计算机

- 打开 `< 命令面板 >` 选择 `OBS: 建立设备连接 (Connect)` `[ Ctrl+Alt+F6 ]`
- 使用下述方式之一建立设备连接 (任选其一)
    - `OBS (服务端) < VSCode (客户端) | 局域网`
        - 在 OBS 相关应用中开启 SOCKET 服务
        - VSCode 输入 OBS 所在设备的 IP 地址
    - `OBS (服务端) < VSCode (客户端) | ADB (USB)`
        - 在 OBS 相关应用中开启 SOCKET 服务
        - OBS 所在设备通过 USB 连接到 VSCode 所在计算机
        - OBS 所在设备需启用 USB 调试模式并勾选信任上述计算机
        - 不同设备操作方式可能不同 详见设备厂商手册或相关互联网资料
    - `历史记录 (IP)`
        - 连接成功后的设备 IP 地址会记录在列表中方便选择
        - 在 OBS 相关应用中开启 SOCKET 服务
        - 设备 IP 地址可能发生改变
        - 使用 "清理" 选项清除所有已保存的记录
- VSCode 弹窗显示 `OBS 设备接入: ${DEVICE} (${IP_ADDRESS})` 完成设备连接

1. 执行命令

- 打开 `< 命令面板 >` 查看并执行支持的命令 (快捷键详见下述 "命令" 板块)
- 如 `OBS: 运行脚本 (Run)` `OBS: 停止所有脚本 (Stop All)` 等

3. 查看日志

- 采用下述方式之一查看来自 OBS 的日志 (任选其一)
    - 在建立设备连接后弹出的 `OUTPUT / 输出` 面板 `[ F12 ]` 查看
    - 打开 `< 开发人员工具 >` 在 `Console` 面板查看

4. 断开连接

- 采用下述方式之一断开所有 OBS 与 VSCode 建立的连接 (任选其一)
    - 打开 `< 命令面板 >` 选择 `OBS: 断开所有连接 (Disconnect All)` `[ Ctrl+Alt+Shift+F6 ]`
    - - 在 OBS 相关应用中关闭 SOCKET 服务

******

### 命令 (Commands)

******

- 查看在线文档 (View Online Document) `[ Alt+Shift+F6 ]`
    - 查看 OBS 在线开发文档
- 建立设备连接 (Connect) `[ Ctrl+Alt+F6 ]`
    - 建立 OBS 与 VSCode 的连接
    - OBS 相关开关可能需要手动开启
- 断开所有连接 (Disconnect All) `[ Ctrl+Alt+Shift+F6 ]`
    - 断开所有已建立的连接
    - OBS 相关开关状态可能被重置
- 运行脚本 (Run) `[ F6 ]`
    - 运行当前 VSCode 对应的脚本
    - 对所有已连接的设备有效
- 重新运行脚本 (Rerun)
    - 停止当前 VSCode 对应的脚本并重新运行
    - 对所有已连接的设备有效
- 停止当前脚本 (Stop) `[ Ctrl+F6 ]`
    - 停止当前 VSCode 对应的脚本
    - 对所有已连接的设备有效
- 停止所有脚本 (Stop All) `[ Ctrl+Shift+F6 ]`
    - 停止所有正在运行的脚本
    - 对所有已连接的设备有效
- 保存到所有设备 (Save)
    - 保存当前文件到已连接设备的 OBS 工作目录
    - 对所有已连接的设备有效
- 指定设备运行 (Run On Device)
    - 弹出设备菜单并指定运行 OBS 对应脚本的设备
- 保存到指定设备 (Save To Device)
    - 弹出设备菜单并在指定保存 VSCode 对应脚本的设备
- 新建项目 (New Project) `[ CTRL+ALT+6 N ]`
    - 选择 (或创建后选择) 一个空文件夹用于新建 OBS 项目
- 运行项目 (Run Project) `[ CTRL+ALT+6 R / Alt+F6 ]`
    - 运行一个 OBS 项目
- 保存项目到设备 (Save Project) `[ CTRL+ALT+6 S ]`
    - 保存一个 OBS 项目

******

### 版本历史 (Release Notes)

******

# v1.0.6

###### 2023/07/21

* `修复` 服务端发送消息长度超过四位十进制数时长度数据被截断的问题 _[`issue #7`](http://vscext-project.autojs6.com/issues/7)_ _[`issue #9`](http://vscext-project.autojs6.com/issues/9)_

# v1.0.5

###### 2023/07/06

* `新增` 支持通过 HTTP 协议携带参数执行插件命令 _[`issue #6`](http://vscext-project.autojs6.com/issues/6)_
* `新增` 已建立连接的历史客户端支持显示最近连接时间
* `修复` 无法保存文件到设备以及无法运行或保存项目的问题 _[`issue #5`](http://vscext-project.autojs6.com/issues/5)_
* `优化` 插件命令选择窗口增加详细说明便于用户了解并选择合适的连接方式
* `优化` 实现 VSCode 插件与 AutoJs6 的双向版本检测并提示异常检测结果
* `优化` 支持同一设备使用同一方式重复连接的行为检测及提示
* `优化` 清除连接设备历史记录时增加确认操作提示

# v1.0.4

###### 2022/02/05

* `修复` 当 AutoJs6 单次生成日志长度较大时无法正常拼接的问题  _[`issue #4`](https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/issues/4)_
* `修复` 新设备建立连接后焦点自动转移至输出面板 (OUTPUT) 的问题

##### 更多版本历史可参阅

* [CHANGELOG.md](https://github.com/SuperMonster003/AutoJs6-VSCode-Extension/blob/master/assets/docs/CHANGELOG.md)

******

### 相关项目

******

* [AutoJs6](http://autojs6.com) { author: [SuperMonster003](https://github.com/SuperMonster003) }
    - `安卓平台 JavaScript 自动化工具 (二次开发项目)`
* [AutoJs6-TypeScript-Declarations](http://dts-project.autojs6.com) { author: [SuperMonster003](https://github.com/SuperMonster003) }
    - `AutoJs6 声明文件 (代码智能补全)`
* [Auto.js-VSCode-Extension](https://github.com/hyb1996/Auto.js-VSCode-Extension) { author: [hyb1996](https://github.com/hyb1996) }
    - `Auto.js VSCode 开发插件`
* [Auto.js-VSCode-Extension](https://github.com/710850609/Auto.js-VSCode-Extension) { author: [710850609](https://github.com/710850609) }
    - `Auto.js VSCode 开发插件 (二次开发项目)`
* [Auto.js-VSCode-Extension](https://github.com/kkevsekk1/Auto.js-VSCode-Extension) { author: [kkevsekk1](https://github.com/kkevsekk1) }
    - `Auto.js VSCode 开发插件 (二次开发项目)`

### 本地打包

安装打包工具:
```shell
npm i vsce -g
```

打包:
```shell
vsce package
```

安装:

- 从 `vscode` 扩展的右上角选择 Install from VSIX 安装. (我使用这个方式安装时, 每次重启之后插件都不见了)

- 使用命令安装

  Macos:
  ```shell
  /vscode app path/Contents/Resources/app/bin/code --install-extension vscode-ext.vsix
  ```
