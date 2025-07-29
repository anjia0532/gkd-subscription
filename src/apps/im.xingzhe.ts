import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'im.xingzhe',
  name: '行者',
  groups: [
    {
      key: 1,
      name: '功能类 - 直接开始运动',
      fastQuery: true,
      actionMaximum: 1,
      order: 1,
      actionDelay: 1000,
      matchTime: 5000,
      resetMatch: 'app',
      actionMaximumKey: 555,
      rules: [
        {
          key: 1,
          fastQuery: true,
          actionCd: 10000,
          actionDelay: 1000,
          actionMaximumKey: 555,
          name: '进入运动界面',
          activityIds: 'im.xingzhe.mvp.view.activity.MainTabActivity',
          matches: '[vid="btn_start_sport"]',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          actionCd: 10000,
          actionDelay: 1000,
          actionMaximumKey: 555,
          name: '开始运动',
          activityIds: 'im.xingzhe.activity.sport.SportActivity',
          matches: '[vid="dashboard_start_sport"]',
        },
      ],
    },
  ],
});
