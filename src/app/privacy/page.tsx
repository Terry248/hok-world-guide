import { SectionHeading } from '@/components/shared/section-heading';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="relative">
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/home-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        <SectionHeading title="隐私政策" icon={<Shield className="w-6 h-6" />} />
        <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-text-muted leading-relaxed">
          <p>最后更新日期：2026年5月31日</p>
          
          <h3 className="text-foreground font-semibold">1. 信息收集</h3>
          <p>
            本站在正常浏览过程中不会主动收集用户的个人信息。
            但为了提高用户体验和网站质量，我们可能会通过第三方服务收集匿名的访问统计数据。
          </p>
          
          <h3 className="text-foreground font-semibold">2. Cookie 使用</h3>
          <p>
            本站可能使用 Cookie 来改善用户体验，例如记住用户的偏好设置。
            用户可以在浏览器设置中禁用 Cookie，但这可能会影响部分功能的使用。
          </p>
          
          <h3 className="text-foreground font-semibold">3. 第三方服务</h3>
          <p>
            本站可能使用以下第三方服务：
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>百度统计 / 百度联盟（用于网站分析和广告展示）</li>
            <li>腾讯优量汇（用于广告展示）</li>
            <li>Google AdSense（海外版用于广告展示）</li>
          </ul>
          <p>
            这些第三方服务可能会收集用户的浏览数据以提供个性化广告，具体请参见各平台的隐私政策。
          </p>
          
          <h3 className="text-foreground font-semibold">4. 数据安全</h3>
          <p>
            我们采取合理的技术措施保护用户数据安全，但无法保证互联网传输的绝对安全。
          </p>
          
          <h3 className="text-foreground font-semibold">5. 政策变更</h3>
          <p>
            我们保留随时更新本隐私政策的权利。变更后的政策将在本页面公布。
          </p>
          
          <h3 className="text-foreground font-semibold">6. 联系我们</h3>
          <p>
            如对本隐私政策有任何疑问，请通过留言墙与我们联系。
          </p>
        </div>
      </div>
    </div>
  );
}
