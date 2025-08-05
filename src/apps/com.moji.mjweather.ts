import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.moji.mjweather',
  name: '墨迹天气',
  groups: [
    {
      key: 10,
      name: '其他-引导提示',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.moji.novice.membertutorial.MemberTutorialActivity',
          matches: '[text="下一步"]',
        },
        {
          fastQuery: true,
          activityIds: 'com.moji.novice.membertutorial.MemberTutorialActivity',
          matches: '[text="下一步"]',
        },
        {
          fastQuery: true,
          activityIds: 'com.moji.novice.membertutorial.MemberTutorialActivity',
          matches: '[vid="rl_layout_skip"]',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.moji.mjweather.MainActivity',
          matches: '[vid="iv_moji_ad_close"]',
        },
        {
          fastQuery: true,
          activityIds: 'com.moji.mjweather.MainActivity',
          matches: '[text="不感兴趣"]',
        },
      ],
    },
  ],
});
