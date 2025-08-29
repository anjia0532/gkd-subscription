import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jxj',
  name: '京粉',
  groups: [
    {
      key: 7,
      name: '全屏广告-弹框广告',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.jd.jxj.modules.main.SlidingTabActivity',
          matches: '[vid="popup_close_imgid"]',
        },
      ],
    },
  ],
});
