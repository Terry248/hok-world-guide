/**
 * 站点配置 — 根据部署目标区分国内版 / 海外版
 * 
 * 国内版（腾讯云）：NEXT_PUBLIC_SITE_VARIANT=domestic
 * 海外版（Vercel）： NEXT_PUBLIC_SITE_VARIANT=overseas (默认)
 */
const variant = process.env.NEXT_PUBLIC_SITE_VARIANT || 'overseas';
const isDomestic = variant === 'domestic';

export const SITE_VARIANT = variant as 'domestic' | 'overseas';
export const IS_DOMESTIC = isDomestic;
export const IS_OVERSEAS = !isDomestic;

export const FEATURES = {
  /** 留言墙：备案已通过，国内版和海外版均开启 */
  community: true,
  /** 广告：海外版显示AdSense，国内版显示百度联盟/腾讯优量汇 */
  ads: true,
  /** 备案号：仅国内版显示 */
  icpFooter: isDomestic,
} as const;

export const DEPLOY_INFO = {
  domestic: {
    name: '国内版',
    domain: 'hokworld.site',
    platform: '腾讯云',
    ip: '110.40.181.128',
  },
  overseas: {
    name: '海外版',
    domain: 'hok-world-guide.vercel.app',
    platform: 'Vercel',
  },
} as const;
