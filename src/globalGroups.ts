import { defineGkdGlobalGroups } from '@gkd-kit/define';

export const OPEN_AD_ORDER = -10; // 开屏广告
export const YOUTH_MODE = -9; // 青少年模式
export const UPDATE_PROMPT = -8; // 更新提示
export const REVIEW_PROMPT = -7; // 评价提示
export const NOTIFICATION_PROMPT = -6; // 通知提示
export const LOCATION_PROMPT = -5; // 定位提示
export const PERMISSION_PROMPT = -4; // 权限提示
export const PARTIAL_AD = -3; // 局部广告
export const FULLSCREEN_AD = -2; // 全屏广告
export const SEGMENTED_AD = -1; // 分段广告

const diabledAppIds: string[] = [
  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'li.songe.gkd',

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器 Google Play 版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器 Google Play 版
  'com.mycompany.app.soulbrowser', // soul浏览器
];

const COMMON_PREFIX =
  '[name!$=".CheckBox"][name!$=".EditText"][childCount=0][visibleToUser=true][height>0&&width>0][top>0&&left>0]';

const NEGATION_PART_RULE_TEXT = `${COMMON_PREFIX}[(((text^="不"||text^="现在不要")&&text$="谢谢")||text="没兴趣"||text="否"||text="关闭"||text="跳过"||text="关闭按钮"||text="我没空"||text="不开启"||text="暂时不用"||text="暂时不要"||text="我已知晓"||text="不用了"||text="本次忽略"||text="考虑一下"||text="考慮一下"||text="先不了"||text="不允许"||text^="不了"||text^="不再"||(text^="稍后"&&text!="稍后再看")||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再说"||text$="拒绝"||text$="再想想"||text$="知道了"||text$="稍后提醒我"||text$="稍後提醒我"||((text^="不"||text^="現在不要")&&text$="謝謝")||text="關閉"||text="關閉按鈕"||text="我已知曉"||text="不開啟"||text$="再說"||text$="拒絕"||text^="暫不"||text~="close"||text~="not now"||text~="(?is)Ignore.*"||text~="(?is)cancel.*"||text~="(?is).*later"||text~="(?is).*refuse"||text~="(?is).*i see")&&(text!*="取消全部")&&text.length<=7]`;
const NEGATION_PART_RULE_DESC = `${COMMON_PREFIX}[(((desc^="不"||desc^="现在不要")&&desc$="谢谢")||desc="没兴趣"||desc="否"||desc="关闭"||desc="跳过"||desc="关闭按钮"||desc="我没空"||desc="不开启"||desc="暂时不用"||desc="暂时不要"||desc="我已知晓"||desc="不用了"||desc="本次忽略"||desc="考虑一下"||desc="考慮一下"||desc="先不了"||desc="不允许"||desc^="不了"||desc^="不再"||(desc^="稍后"&&desc!="稍后再看")||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc$="知道了"||desc$="稍后提醒我"||desc$="稍後提醒我"||((desc^="不"||desc^="現在不要")&&desc$="謝謝")||desc="關閉"||desc="關閉按鈕"||desc="我已知曉"||desc="不開啟"||desc$="再說"||desc$="拒絕"||desc^="暫不"||desc~="close"||desc~="not now"||desc~="(?is)Ignore.*"||desc~="(?is)cancel.*"||desc~="(?is).*later"||desc~="(?is).*refuse"||desc~="(?is).*i see")&&(desc!*="取消全部")&&desc.length<=7]`;
const NEGATION_PART_RULE_BUTTON = `${COMMON_PREFIX}[(vid~="(?is).*dismiss.*"||vid~="(?is).*iv.*"||vid~="(?is).*guide.*"||vid~="(?is).*alert"||vid~="(?is).*notific.*"||vid~="(?is).*dialog.*"||vid~="(?is).*btn.*"||vid~="(?is).*ad.*"||vid~="(?is).*ab.*")&&(vid~="(?is).*close"||vid~="(?is).*delete"||vid~="(?is).*cancel"||vid~="(?is).*cancle"||vid~="(?is).*exit")||vid~="(?is)close.*"||vid~="(?is)ab.*"||vid~="(?is)closeIv.*"||vid~="(?is)ivDelete.*"||vid~="(?is)deleteIv.*"||vid~="(?is)iv_close_bt.*"||vid~="(?is).*_close"||text=""||desc=""||text="×"||desc="×"||text="✕"||desc="✕"||text="퀺"||desc="퀺"||text=""||desc=""]`;

export default defineGkdGlobalGroups([
  {
    key: 5,
    name: '通知提示',
    desc: '! 该规则会自动拒绝 APP 一些申请通知提示，如果有影响请关闭',
    enable: false,
    order: NOTIFICATION_PROMPT,
    disableIfAppGroupMatch: '通知提示',
    matchTime: 10000,
    resetMatch: 'activity',
    actionCdKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          `${COMMON_PREFIX}[(text*="将使用"||text*="可能错过"||text*="是否允许"||text*="申请"||text*="开启"||text*="啟用"||text="開啟"||text*="打开"||text*="获取"||text*="获得"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*"||text~="(?is).*Enable.*")&&(text*="通知"||text*="推送"||text*="消息"||text~="(?is).*notification.*")&&(text!*="定位"&&text!*="位置"&&!(text~="(?is).*location.*")&&(text!*="权限"||text*="通知权限"||text*="通知栏权限")&&text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))]`,
          `${COMMON_PREFIX}[(((text*="打开"||text*="開啟"||text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="允许")&&(text*="通知"||text*="推送"))||text="是"||text="好"||text="启用"||text="确认"||text="确定"||text="同意"||text="开启"||text*="啟用"||text="開啟"||text="设置"||text="允许"||text="好的"||((text*="去"||text*="立即"||text*="立刻"||text*="马上"||text*="前往"||text*="现在")&&(text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="授权"))||text="尝试一下"||text="开启设置"||text="立即打开"||text~="Authorize"||text~="Let’s go")&&text.length<10]`,
          `${NEGATION_PART_RULE_TEXT}`,
        ],
      },
      {
        key: 1,
        matches: [
          `${COMMON_PREFIX}[(desc*="将使用"||desc*="可能错过"||desc*="是否允许"||desc*="申请"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="打开"||desc*="获取"||desc*="获得"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*"||desc~="(?is).*Enable.*")&&(desc*="通知"||desc*="推送"||desc*="消息"||desc~="(?is).*notification.*")&&(desc!*="定位"&&desc!*="位置"&&!(desc~="(?is).*location.*")&&(desc!*="权限"||desc*="通知权限"||desc*="通知栏权限")&&desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))]`,
          `${COMMON_PREFIX}[(((desc*="打开"||desc*="開啟"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="允许")&&(desc*="通知"||desc*="推送"))||desc="是"||desc="好"||desc="启用"||desc="确认"||desc="确定"||desc="同意"||desc="开启"||desc="设置"||desc="允许"||desc="好的"||((desc*="去"||desc*="立即"||desc*="立刻"||desc*="马上"||desc*="前往"||desc*="现在")&&(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="授权"))||desc="尝试一下"||desc="开启设置"||desc="立即打开"||desc~="Authorize"||desc~="Let’s go")&&desc.length<10]`,
          `${NEGATION_PART_RULE_DESC}`,
        ],
      },
      {
        key: 2,
        matches: [
          `${COMMON_PREFIX}[(text*="将使用"||text*="可能错过"||text*="是否允许"||text*="申请"||text*="开启"||text*="啟用"||text="開啟"||text*="打开"||text*="获取"||text*="获得"||text*="订阅"||text*="接收"||text~="(?is).*Turn on.*"||text~="(?is).*Enable.*")&&(text*="通知"||text*="推送"||text*="消息"||text~="(?is).*notification.*")&&(text!*="定位"&&text!*="位置"&&!(text~="(?is).*location.*")&&(text!*="权限"||text*="通知权限"||text*="通知栏权限")&&text!*="成功"&&text!*="失败"&&(text!*="已"||text*="已知"))]`,
          `${COMMON_PREFIX}[(((text*="打开"||text*="開啟"||text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="允许")&&(text*="通知"||text*="推送"))||text="是"||text="好"||text="启用"||text="确认"||text="确定"||text="同意"||text="开启"||text="设置"||text="允许"||text="好的"||((text*="去"||text*="立即"||text*="立刻"||text*="马上"||text*="前往"||text*="现在")&&(text*="开启"||text*="啟用"||text="開啟"||text*="设置"||text*="授权"))||text="尝试一下"||text="开启设置"||text="立即打开"||text~="Authorize"||text~="Let’s go")&&text.length<10]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
      {
        key: 3,
        matches: [
          `${COMMON_PREFIX}[(desc*="将使用"||desc*="可能错过"||desc*="是否允许"||desc*="申请"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="打开"||desc*="获取"||desc*="获得"||desc*="订阅"||desc*="接收"||desc~="(?is).*Turn on.*"||desc~="(?is).*Enable.*")&&(desc*="通知"||desc*="推送"||desc*="消息"||desc~="(?is).*notification.*")&&(desc!*="定位"&&desc!*="位置"&&!(desc~="(?is).*location.*")&&(desc!*="权限"||desc*="通知权限"||desc*="通知栏权限")&&desc!*="成功"&&desc!*="失败"&&(desc!*="已"||desc*="已知"))]`,
          `${COMMON_PREFIX}[(((desc*="打开"||desc*="開啟"||desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="允许")&&(desc*="通知"||desc*="推送"))||desc="是"||desc="好"||desc="启用"||desc="确认"||desc="确定"||desc="同意"||desc="开启"||desc="设置"||desc="允许"||desc="好的"||((desc*="去"||desc*="立即"||desc*="立刻"||desc*="马上"||desc*="前往"||desc*="现在")&&(desc*="开启"||desc*="啟用"||desc="開啟"||desc*="设置"||desc*="授权"))||desc="尝试一下"||desc="开启设置"||desc="立即打开"||desc~="Authorize"||desc~="Let’s go")&&desc.length<10]`,
          `${NEGATION_PART_RULE_BUTTON}`,
        ],
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
]);
