import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cloudy.component',
  name: '广汽传祺',
  groups: [
    {
      key: 105,
      name: '功能类 - 直接进入远控',
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
