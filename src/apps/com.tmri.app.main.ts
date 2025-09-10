import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmri.app.main',
  name: '交管12123',
  groups: [
    {
      key: 7,
      name: '权限提示',
      desc: '通知授权',
      rules: [
        {
          fastQuery: true,
          matches: '[vid="btn_cancel"]',
        },
      ],
    },
  ],
});
