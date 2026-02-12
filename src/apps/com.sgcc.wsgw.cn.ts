import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 6,
      name: '局部广告-弹窗广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '通用弹窗关闭',
          matches:
            '[vid="dialog_close" || vid="popup_close" || vid="btn_close"]',
          snapshotUrls: [],
        },
        {
          key: 1,
          name: '右上角关闭按钮',
          matches: '[vid="iv_close" || vid="close_iv" || vid="img_close"]',
          snapshotUrls: [],
        },
        {
          key: 2,
          name: '文字关闭按钮',
          matches:
            '[text="关闭" || text="×" || text="✕"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
        {
          key: 3,
          name: '描述关闭按钮',
          matches:
            '[desc="关闭" || desc="叉号"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
        {
          key: 4,
          name: 'ImageView关闭按钮',
          matches: '@ImageView < ViewGroup[desc="关闭"]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
