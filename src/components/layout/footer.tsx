import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { FEATURES } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary font-bold mb-2">{SITE_CONFIG.title}</h3>
            <p className="text-text-muted text-sm">{SITE_CONFIG.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">导航</h4>
            <div className="grid grid-cols-2 gap-1">
              {SITE_CONFIG.nav.filter(n => n.href !== '/').map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-text-muted hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">说明</h4>
            <p className="text-text-muted text-sm">
              本站为玩家自制攻略站，与游戏官方无关。<br />
              数据来源：玩家社区贡献与游戏内实测。<br />
              欢迎提交修正与建议。
            </p>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-4 text-center text-text-muted text-xs space-y-2">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/about" className="hover:text-primary transition-colors">关于本站</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">隐私政策</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">免责声明</Link>
          </div>
          <p>
            &copy; 2025 王者荣耀世界攻略站. Player-made guide site.
          </p>
          {FEATURES.icpFooter && (
            <p>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                赣ICP备2026010150号
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
