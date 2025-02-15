import App from '@/app';
import { getUserName, MessageBox } from '@/lib';
import React from 'react';
import { createRoot } from 'react-dom/client';

const start = () => {
  const username = getUserName();
  if (username) {
    import('@/utils/loadStyle');

    // 初始化消息盒子
    MessageBox.generate();

    // 添加根元素
    const rootDiv = document.createElement('div');
    rootDiv.id = 'jkforum-helper';
    document.body.prepend(rootDiv);

    const root = createRoot(rootDiv); // createRoot(container!) if you use TypeScript
    root.render(<App username={username} />);
  }
};

if (PRODUCTION) {
  start();
} else {
  // 在生产环境打包时 webpack 会把 else 部分代码移除。使用动态导入就不会把这些代码打包进生产环境
  import('@/utils/environment').then(({ isTampermonkey }) => {
    if (isTampermonkey()) {
      // 开发环境油猴脚本从这里开始运行
      import('@/utils/hotReload').then(({ hotReload }) => {
        // 载入在线调试热刷新
        hotReload();
        start();
      });
    } else {
      // 运行不需要油猴环境的js，用于模拟目标网页原本逻辑。不需要模拟可以删除
    }
  });
}
