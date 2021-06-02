# 油猴脚本：捷克论坛助手

## 一键签到，自动投票任务，一键批量感谢，一键批量回帖

安装地址：https://greasyfork.org/zh-CN/scripts/427246-jkforum-helper

项目地址：https://github.com/Eished/jkforum_helper

## 已完成功能：

1. 一键签到
2. 定时签到（可选）
3. 自动完成投票任务
4. 一键批量感谢
5. 一键批量回帖
6. 自定义回帖内容
7. 输入 `版块+页码起点+页码终点`，大批量自动回帖或感谢

## 使用说明

- 【签到/投票】：点击按钮运行 签到+投票。
- 【感谢/回帖】：
  - 在`https://www.jkforum.net/forum-` URL开头的版块页面运行 ：
     1. 输入框输入回帖内容（或不输入，有默认值）。
     2. 弹出对话框，选择回帖或感谢。
  - 在其它页面运行：
     1. 在【版块-1-2】输入框 输入，格式：`版块代码-起点页-终点页` ；例如：`640-1-2` ；版块代码见版块URL中间数字：`forum-640-1`
     2. 点击【感谢/回帖】，弹出对话框，选择回帖或感谢，会记住选择直到执行完本次任务。
     3. 详细运行进度在控制台查看。
- 定时签到版: `https://github.com/Eished/jkforum_helper/tree/zero`
  - 复制代码到新建油猴脚本，保存后可以选择定时签到按钮。

**注意：保持脚本页面前台运行，否则会导致进程休眠！建议单开一个浏览器窗口跑脚本。**

