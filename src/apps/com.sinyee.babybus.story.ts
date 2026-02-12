import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinyee.babybus.story',
  name: '小布咕',
  groups: [
    {
      key: 1,
      name: '局部广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '关闭广告按钮',
          matches: '[vid="common_dialog_big_pic_close"]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
