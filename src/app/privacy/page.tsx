import { SectionHeading } from '@/components/shared/section-heading';
import { Shield } from 'lucide-react';

export const metadata = {
  title: '隐私政策',
  description: '王者荣耀世界攻略站隐私政策说明',
};

export default function PrivacyPage() {
  return (
    <div className="relative">
      {/* 背景图 */}
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
        <div>
          <SectionHeading title="隐私政策" icon={<Shield className="w-6 h-6" />} />
          <div className="bg-card rounded-xl border border-border p-6 space-y-6 text-text-muted leading-relaxed">
            <p className="text-sm text-text-muted/70">最后更新日期：2026年5月9日</p>

            <section>
              <h3 className="text-foreground font-semibold mb-2">1. 概述</h3>
              <p>
                王者荣耀世界攻略站（以下简称"本站"）重视用户的隐私保护。本隐私政策说明我们如何收集、使用和保护您的个人信息。
                使用本站即表示您同意本隐私政策的条款。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">2. 信息收集</h3>
              <p className="mb-2">本站可能收集以下类型的信息：</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>日志数据：</strong>当您访问本站时，服务器会自动记录您的IP地址、浏览器类型、访问时间、访问页面等信息。</li>
                <li><strong>Cookies：</strong>本站使用Cookies来改善用户体验。Cookies是存储在您浏览器中的小型文本文件。</li>
                <li><strong>第三方服务：</strong>本站使用Google Analytics和Google AdSense等第三方服务，这些服务可能会收集额外的数据。</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">3. 信息使用</h3>
              <p className="mb-2">收集的信息用于：</p>
              <ul className="list-disc list-inside space-y-1">
                <li>分析和改进网站性能与用户体验</li>
                <li>展示相关广告内容（通过Google AdSense）</li>
                <li>防止欺诈和滥用行为</li>
                <li>生成匿名的流量统计报告</li>
              </ul>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">4. Google AdSense</h3>
              <p>
                本站使用Google AdSense展示广告。Google可能会使用DoubleClick Cookie来根据用户在本站或其他网站的访问记录展示相关广告。
                您可以通过访问 <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google广告设置</a> 来管理您的广告偏好。
                更多详情请参阅 <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google广告政策</a>。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">5. Cookie管理</h3>
              <p>
                大多数浏览器默认接受Cookies，但您可以通过浏览器设置拒绝或删除Cookies。请注意，禁用Cookies可能会影响本站的部分功能。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">6. 数据安全</h3>
              <p>
                我们采取合理的安全措施保护您的信息。但请注意，互联网传输并非绝对安全，我们无法保证数据传输的完全安全。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">7. 第三方链接</h3>
              <p>
                本站可能包含指向第三方网站的链接。我们对这些网站的隐私政策不承担任何责任，建议您查阅各第三方网站的隐私政策。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">8. 政策更新</h3>
              <p>
                我们可能会不时更新本隐私政策。更新后的政策将发布在本页面，并标注最后更新日期。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">9. 联系我们</h3>
              <p>
                如果您对本隐私政策有任何疑问，请通过网站留言或其他方式联系我们。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
