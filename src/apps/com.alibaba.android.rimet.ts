import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.android.rimet',
  name: 'GKD',
  groups: [
    {
      key: 1,
      name: '功能类 - 快捷打卡',
      matchRoot: true,
      actionMaximum: 1,
      order: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          fastQuery: true,
          name: '进入工作台',
          activityIds:
            'com.alibaba.lightapp.runtime.ariver.TheOneActivityMainTask',
          matches: '[vid="home_app_item" && clickable=true && desc="工作台"]',
        },
      ],
    },
  ],
});
