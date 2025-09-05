import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.thestore.main',
  name: '1号会员店',
  groups: [
    {
      key: 7,
      name: '全屏广告',
      desc: '惊喜福利弹窗广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.thestore.main.app.home.HomeActivity',
          matches: '[id="com.thestore.main.home.feature:id/j"]',
        },
      ],
    },
  ],
});
