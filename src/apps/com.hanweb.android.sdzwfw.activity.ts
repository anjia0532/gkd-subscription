import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hanweb.android.sdzwfw.activity',
  name: '爱山东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '跳过按钮',
          matches: '[text*="跳过" && text.length<10][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '倒计时跳过',
          matches: '[vid="tv_skip" || vid="skip_view" || vid="splash_skip"]',
          snapshotUrls: [],
        },
        {
          key: 2,
          name: '关闭按钮',
          matches: '[text*="关闭" && text.length<10][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 3,
          name: '通用跳过',
          matches:
            '[text="跳过" || text="跳过广告"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
