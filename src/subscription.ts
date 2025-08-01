import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 7788,
  name: '自用GKD规则',
  version: 0,
  author: 'AnJia',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/anjia0532/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
