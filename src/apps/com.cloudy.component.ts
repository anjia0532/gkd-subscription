import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cloudy.component',
  name: '广汽传祺',
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
          matches:
            '[vid="tv_skip_time" || vid="skip_view" || vid="splash_skip"]',
          snapshotUrls: [],
        },
        {
          key: 2,
          name: '关闭按钮',
          matches: '[desc*="跳过" && desc.length<10][visibleToUser=true]',
          snapshotUrls: [],
        },
      ],
    },
    {
      key: 9,
      name: '功能类-直接进入爱车界面',
      fastQuery: true,
      actionMaximum: 3,
      order: 1,
      matchTime: 10000,
      forcedTime: 10000,
      priorityTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          actionCd: 1000,
          name: '点击服务',
          matches: [
            '@BottomTabItemView <4 CustomItemLayout < [vid="bottom_tab"]',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          actionCd: 1000,
          name: '点击爱车',
          matches: ['@FrameLayout <2 LinearLayout < [vid="tab_love_car"]'],
        },
      ],
    },
  ],
});
