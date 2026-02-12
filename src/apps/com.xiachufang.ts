import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
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
          name: '首页横幅广告关闭',
          matches: '[vid="ad_close" || vid="close_ad" || vid="iv_close"]',
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
          name: '信息流广告关闭',
          matches:
            '[text="广告" || text="推广"] + [vid="close_button" || vid="ad_dislike"]',
          snapshotUrls: [],
        },
        {
          key: 3,
          name: '通用关闭按钮',
          matches:
            '[desc="关闭" || desc="叉号"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
        {
          key: 4,
          name: '评论区局部广告',
          matches: '@ImageView <2 FrameLayout < [vid="fl_container"]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
