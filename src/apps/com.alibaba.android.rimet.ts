import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: '钉钉',
  groups: [
    {
      key: 1,
      name: '功能类 - 快捷打卡',
      desc: '功能类 - 快捷打卡',
      matchRoot: true,
      actionMaximum: 1,
      order: 10,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds:
            'com.alibaba.lightapp.runtime.ariver.TheOneActivityMainTask',
          matches: '[vid="home_app_item" && clickable=true && desc="工作台"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          matchTime: 10000,
          actionDelay: 5000,
          actionCd: 5000,
          activityIds:
            'com.alibaba.lightapp.runtime.ariver.TheOneActivityMainTask',
          matches: '[vid="common_webview" && clickable=true]',
          position: {
            top: 'height * 0.52',
            left: 'width * 0.126',
          },
        },
      ],
    },
  ],
});
