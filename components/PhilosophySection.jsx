import { ShieldCheck, Compass, HeartHandshake, Award } from "lucide-react";

export default function PhilosophySection() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "불안을 조장하지 않는 바른 해석",
      desc: "단순히 겁을 주거나 부적, 굿을 권유하지 않습니다. 어떤 난관이든 피하고 극복할 수 있는 실질적인 대안과 행동 지침을 제시합니다.",
    },
    {
      icon: Compass,
      title: "정통 명리학에 기반한 정밀 분석",
      desc: "수천 년간 축적된 음양오행과 사주 명리의 원리를 철저히 따르며, 타고난 사주 원국과 10년 주기 대운의 톱니바퀴를 꼼꼼하게 읽어냅니다.",
    },
    {
      icon: HeartHandshake,
      title: "100% 철저한 비밀 보장과 경청",
      desc: "누구에게도 털어놓지 못했던 깊은 고민도 편견 없이 귀 기울입니다. 모든 상담 내용과 개인정보는 완벽하게 보호됩니다.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 bg-navy-950 relative border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            황금돌고래사주가 지키는 <span className="text-gold-400">3가지 약속</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            점(占)은 맞추는 것보다, 앞으로 어떻게 살아가야 할지 지혜를 얻는 것이 본질입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-navy-900/40 border border-navy-800/80 hover:border-gold-500/30 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
