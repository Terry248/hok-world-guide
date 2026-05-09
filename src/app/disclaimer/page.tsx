import { SectionHeading } from '@/components/shared/section-heading';
import { AlertTriangle } from 'lucide-react';

export const metadata = {
  title: '免责声明',
  description: '王者荣耀世界攻略站免责声明',
};

export default function DisclaimerPage() {
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
          <SectionHeading title="免责声明" icon={<AlertTriangle className="w-6 h-6" />} />
          <div className="bg-card rounded-xl border border-border p-6 space-y-6 text-text-muted leading-relaxed">
            <p className="text-sm text-text-muted/70">最后更新日期：2026年5月9日</p>

            <section>
              <h3 className="text-foreground font-semibold mb-2">1. 非官方声明</h3>
              <p>
                <strong className="text-foreground">王者荣耀世界攻略站</strong> 是由玩家自发创建和维护的非官方攻略网站。
                本站与腾讯游戏、天美工作室群以及《王者荣耀世界》官方没有任何关联。
                本站使用的游戏相关图片、名称、角色等信息版权归属于其 respective 所有者。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">2. 内容准确性</h3>
              <p>
                本站所有攻略、数据和信息均来源于玩家社区贡献、游戏内实测和公开资料整理。
                我们尽力确保信息的准确性和时效性，但不保证所有内容的绝对正确。
                游戏版本更新可能导致部分数据过时，请以游戏内实际内容为准。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">3. 知识产权</h3>
              <p>
                本站原创内容（文章、攻略、分析等）的版权归本站所有。
                游戏相关的图片、角色形象、logo等知识产权归腾讯游戏所有。
                如果本站使用的任何内容侵犯了您的版权，请联系我们，我们将立即删除相关内容。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">4. 使用风险</h3>
              <p>
                使用本站信息产生的任何后果由用户自行承担。
                本站不对因使用本站内容而导致的任何直接或间接损失负责。
                建议用户在游戏内自行验证关键信息。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">5. 第三方链接</h3>
              <p>
                本站可能包含指向第三方网站的链接。我们对这些第三方网站的内容、隐私政策或 practices 不承担任何责任。
                访问第三方链接的风险由用户自行承担。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">6. 广告内容</h3>
              <p>
                本站可能展示由Google AdSense等第三方广告网络提供的广告。
                这些广告内容由第三方提供，本站不对广告内容的真实性、准确性或合法性负责。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">7. 政策变更</h3>
              <p>
                我们保留随时修改本免责声明的权利。修改后的声明将发布在本页面，并标注最后更新日期。
                继续使用本站即表示您接受修改后的条款。
              </p>
            </section>

            <section>
              <h3 className="text-foreground font-semibold mb-2">8. 联系我们</h3>
              <p>
                如果您对本免责声明有任何疑问，或发现本站内容存在侵权问题，请通过网站留言或其他方式联系我们。
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
