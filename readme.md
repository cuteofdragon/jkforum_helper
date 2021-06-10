# 油猴脚本：捷克论坛助手

## 自动签到、自动感谢、自动加载原图、自动支付购买主题贴、自动完成投票任务，一键批量回帖/感谢

安装地址：`https://greasyfork.org/zh-CN/scripts/427246-jkforum-helper`

项目地址：`https://github.com/Eished/jkforum_helper`

## 已完成功能

1. 自动签到，定时签到
3. 自动完成投票任务
3. 一键批量回帖（已关闭）
   1. 自定义回帖内容，回帖内容存储
4. 一键批量感谢
   1. 输入 `版块+页码起点+页码终点`，大批量自动回帖或感谢，页码存储
   2. 防止浏览器长时间运行后休眠
5. 自动加载原图，移除图片上的下载提示
6. 自动感谢`感谢可见`的贴，自动感谢浏览过的贴
7. 自动支付购买主题`购买可见`的贴

## 使用说明

- 【感谢/回帖】按钮：
  - 在`https://www.jkforum.net/forum-` URL开头的版块页面运行 ：
     1. 输入框输入回帖内容（或不输入，有默认值）；
     2. 弹出对话框，选择回帖或感谢。
  - 在首页激活【批量感谢】功能；
     1. 在【版块-1-2】输入框 输入，格式：`版块代码-起点页-终点页` ；例如：`640-1-2` ；版块代码见版块URL中间数字：`forum-640-1`
     2. 点击【感谢/回帖】，弹出对话框，选择回帖或感谢，会记住选择直到刷新页面。
     3. 详细运行进度在控制台查看。
  - 在版块帖子列表页激活【感谢本页】功能；
- 【定时签到】按钮：
  - 在签到页面激活按钮：`https://www.jkforum.net/plugin/?id=dsu_paulsign:sign`；
  - 默认为零点签到，进度在控制台查看。

**注意：保持脚本页面前台运行，否则会导致进程休眠！建议单开一个浏览器窗口跑脚本。**

## 待完成功能

- 批量下载原图，并按`img.alt`命名
- 防封号：随机间隔时间，随机快速回帖内容