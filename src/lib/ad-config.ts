/**
 * 广告配置 — 国内版(腾讯优量汇) / 海外版(Google AdSense)
 * 
 * 腾讯优量汇申请地址：https://e.qq.com/ads/
 * Google AdSense：https://www.google.com/adsense
 */

import { IS_DOMESTIC } from './site-config';

// ============================================================
// Google AdSense 配置（海外版）
// ============================================================
export const ADSENSE_CONFIG = {
  /** 发布商ID — 已有账号，审核中 */
  publisherId: 'ca-pub-4441684825498793',
  /** 广告单元ID — 审核通过后在 AdSense 后台创建 */
  slots: {
    sidebarLeft: '',   // 左侧悬浮广告位
    sidebarRight: '',  // 右侧悬浮广告位
    mobileBottom: '',  // 移动端底部广告位
  } as Record<string, string>,
};

// ============================================================
// 腾讯优量汇配置（国内版）
// ============================================================
export const GDT_CONFIG = {
  /** 媒体ID — 在 e.qq.com 注册后获取 */
  appId: '',
  /** 广告位ID — 审核通过后在后台创建广告位 */
  placements: {
    sidebarLeft: '',   // 左侧悬浮 300x600
    sidebarRight: '',  // 右侧悬浮 300x600
    mobileBanner: '',  // 移动端底部 Banner
    inFeed: '',        // 信息流广告
  } as Record<string, string>,
};

// ============================================================
// 当前生效的广告平台
// ============================================================
export const CURRENT_AD_PLATFORM = IS_DOMESTIC ? 'gdt' : 'adsense';

// 是否已接入真实广告（有ID才视为已接入）
export const HAS_REAL_ADS = IS_DOMESTIC
  ? Boolean(GDT_CONFIG.appId && GDT_CONFIG.placements.sidebarLeft)
  : Boolean(ADSENSE_CONFIG.slots.sidebarLeft);
