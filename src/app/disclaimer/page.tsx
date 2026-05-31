import { SectionHeading } from '@/components/shared/section-heading';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
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
        <SectionHeading title="免责声明" icon={<AlertTriangle className="w-6 h-6" />} />
        <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-text-muted leading-relaxed">
          <h3 className="text-foreground font-semibold">1. 非官方声明</h3>
          <p>
            本站为玩家自制的非官方攻略网站，与腾讯游戏、天美工作室及《王者荣耀世界》官方无任何关联。
            本站所有内容不代表官方立场，也不构成任何形式的官方背书。
          </p>
          
          <h3 className="text-foreground font-semibold">2. 知识产权</h3>
          <p>
            游戏中相关的角色形象、名称、技能描述、世界观设定等知识产权均归属于腾讯游戏及其 respective 所有者。
            本站仅出于玩家交流学习目的进行整理和展示，无意侵犯任何知识产权。
            如权利人认为本站内容侵犯了其合法权益，请联系我们，我们将立即删除相关内容。
          </p>
          
          <h3 className="text-foreground font-semibold">3. 内容准确性</h3>
          <p>
            本站攻略内容基于玩家社区贡献和游戏内实测整理，我们尽力确保信息的准确性，
            但不保证所有内容完全准确无误。游戏版本更新可能导致部分数据过时，请以游戏内实际情况为准。
          </p>
          
          <h3 className="text-foreground font-semibold">4. 使用风险</h3>
          <p>
            用户在使用本站攻略内容时，应自行判断其适用性。因使用本站内容造成的任何损失，本站不承担法律责任。
          </p>
          
          <h3 className="text-foreground font-semibold">5. 第三方链接</h3>
          <p>
            本站可能包含指向第三方网站的外部链接。我们不对这些第三方网站的内容和隐私政策负责。
          </p>
          
          <h3 className="text-foreground font-semibold">6. 广告内容</h3>
          <p>
            本站展示的第三方广告内容由广告平台提供，本站不对广告内容的真实性负责。
            用户与广告商的任何交易与本站无关。
          </p>
        </div>
      </div>
    </div>
  );
}
