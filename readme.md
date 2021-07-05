# 油猴脚本：捷克论坛助手

## 自动签到、自动感谢、自动加载原图、自动播放图片、自动支付购买主题贴、自动完成投票任务，优化浏览体验，一键批量回帖/感谢，一键打包下载帖子图片

安装地址：`https://greasyfork.org/zh-CN/scripts/427246-jkforum-helper`

项目地址：`https://github.com/Eished/jkforum_helper`

## 已完成功能

1. **自动签到、定时签到**：自定义签到参数、定时签到参数；
2. **自动完成投票任务**：自定义投票参数；
3. **一键批量回帖、批量感谢**：
   - 自动获取快速回帖内容；
   - 自定义回帖内容，回帖内容存储；
   - 随机内容回帖，回帖历史记录、进度存储，回帖任务管理，自动跳过已回复贴；
   - 自定义回帖基础间隔时间和随机间隔时间范围；
   - 一键添加当前页面的帖子到任务列表；
   - 输入 `版块+页码起点+页码终点`，大批量添加任务，页码存储；
4. 防止浏览器长时间运行后休眠；
5. **自动加载原图**，移除图片上的下载提示；可关闭；
6. **自动感谢** `感谢可见` 的贴，自动感谢浏览过的贴；可关闭；
7. **自动支付**购买主题 `购买可见` 的贴；可关闭；
8. 图片模式下，移除标题高亮；**已阅的帖子，标题变成灰色**，防止重复点击。
9. 版本更新时保留用户历史数据。
10. **一键打包下载帖子图片**。
11. **自动播放图片。**

## 使用说明

- 登录后脚本开始运行。
  
  - 只兼容油猴 Tampermonkey 。
  - 图片不显示、下载返回404时，需更换代理。
  
- 【**定时签到**】按钮：
  
  - 在[签到页面](https://www.jkforum.net/plugin/?id=dsu_paulsign:sign)找到【定时签到】按钮；
  - 在**零点前提前运行定时签到**，在控制台查看进度。
  
- 【**添加本页**】按钮：
  - 在 `https://www.jkforum.net/forum-` URL 开头的**版块页面**激活 ；

  - 功能为添加本页列表所有帖子到任务列表；

  - 帖子重复添加检测，自动跳过重复贴；

  - 可输入批量回帖内容，可粘贴带有格式的文本，空则使用内置随机回复；输入多条内容时使用**中文分号**分隔 `；`，将每次随机选择一条用于回帖；

  - 回帖内容获取顺序：

    1.用户当前输入内容；

    2.内置快速回复（前者为空时，弹窗提示使用）；

    3.历史自定义输入过的内容（没有获取到前两者时，弹窗提示使用）；

  - **注意**：内置的获取快速回复，需要用户在可快速回复的版块有浏览权限，否则不可用，需手动输入回复。每次版本更新后自动重新获取。

- 【**添加任务**】按钮：
   - 在首页激活；
   - 功能为添加指定范围所有帖子到任务列表；
   - 帖子重复添加检测，自动跳过重复贴；
   - 输入功能和【**添加本页**】按钮相同。
   - 在【版块-1-2】输入框 输入，格式：**`版块代码-起点页-终点页`** ；例如：`640-1-2` ；版块代码见版块URL中间数字：`forum-640-1`
   - 可任意添加不同版块帖子，按添加顺序执行。
   
- 【**回帖**】按钮 、【**感谢**】按钮：

   - 在首页激活；
   - 顺序回复\感谢任务列表里所有帖子。
   - 进度记忆，刷新页面可以继续上次 回帖\感谢。
   - 两个按钮不能同时使用，会造成进度记忆只有一个生效。
   - 详细运行进度在控制台查看。

- 【**下载图片**】按钮：

   - 在帖子页面激活；
   - 功能为打包下载本页所有图片。
   - 顺序依次下载，文件夹按帖子标题+图片数量命名，图片按图片标题命名。

- 【**自动播放**】按钮：

   - 浏览大图时激活，图片右上角黄色长方形播放按钮；
   - 可设置播放间隔时间；
   - 离开页面自动暂停播放。

- **参数自定义**：

  - 先打开网页运行一次，就可以在脚本看到存储页面：

    ![image-20210611163109214](readme.assets/image-20210611163109214.png)

  - 可自定义的值：

    ```javascript
            version: "0.5.1",
            today: '', // 签到日期
            signtime: '23:59:59', // 签到时间
            signNum: 10, // 签到重试次数
            interTime: 200, // 签到重试间隔时间ms
            todaysay: '簽到', // 签到输入内容
            mood: 'fd', // 签到心情
            autoPlayDiff: 2000, // 自动播放间隔时间ms
            autoPaySw: 1, // 自动支付开关
            autoThkSw: 1, // 自动感谢开关
            autoRePicSw: 1, // 自动加载原图开关
            differ: 10000, // 回帖随机间隔时间ms
            interval: 20000, // 回帖基础间隔时间ms
            thkDiffer: 1000, // 批量感谢间隔时间ms
            page: '', // 批量回帖页码
            votedMessage: '+1', // 投票输入内容
            userReplyMessage: [], // 用户保存的回复，历史回帖内容
            replyMessage: [], // 用于回复的内容，临时回帖内容
            fastReply: [], // 保存的快速回复，快速回帖内容
            replyThreads: [], // 回帖数据
    ```
    
  - 如果参数改错了或出现异常，删掉 `"version": "0.3.8",` 和错误的参数行，运行脚本会自动初始化缺失的参数。

**注意：保持脚本页面前台运行，否则会导致进程休眠！建议单开一个浏览器窗口跑脚本。**

## 待完成功能

- 任务列表功能，用于管理回帖任务。
- 存储互斥锁，变动监听

## 觉得好用就好评吧！你的支持是我前进的动力！