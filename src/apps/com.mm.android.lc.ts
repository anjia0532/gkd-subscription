import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mm.android.lc',
  name: '乐橙',
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
          matches: '[vid="ad_close" || vid="close_ad" || vid="iv_ad_close"]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '弹窗广告关闭',
          matches:
            '[vid="dialog_close" || vid="popup_close" || vid="btn_close"]',
          snapshotUrls: [],
        },
        {
          key: 2,
          preKeys: [0, 1],
          name: '选择不感兴趣',
          matches:
            '[text="不感兴趣" || text="减少此类推荐" || text="屏蔽此广告"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
        {
          key: 3,
          name: '通用关闭按钮',
          matches:
            '[desc="关闭" || desc="叉号"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
