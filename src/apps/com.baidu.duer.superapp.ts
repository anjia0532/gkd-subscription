import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.duer.superapp',
  name: '小度',
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
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [],
        },
        {
          key: 1,
          matches:
            '[vid="splash_skip_view" || vid="tv_skip" || vid="skip_button"]',
          snapshotUrls: [],
        },
        {
          key: 2,
          matches: '[desc*="跳过"][desc.length<10][visibleToUser=true]',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '[text*="立即更新" || text*="马上升级"] + [text*="以后再说" || text*="取消"]',
          snapshotUrls: [],
        },
        {
          key: 1,
          matches: '[vid="update_cancel_btn" || vid="btn_cancel_update"]',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="ad_close" || vid="iv_close" || vid="close_button"]',
          snapshotUrls: [],
        },
        {
          key: 1,
          matches: '[text="关闭"][visibleToUser=true][clickable=true]',
          snapshotUrls: [],
        },
      ],
    },
  ],
});
