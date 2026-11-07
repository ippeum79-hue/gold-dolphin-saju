"use client";

import { Sparkles, Calendar, BookOpen, Heart, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    id: "new-year",
    title: "신년운세 풀이",
    tag: "한 해의 길흉화복 선점",
    icon: Calendar,
    accentColor: "from-amber-400 to-gold-600",
    description:
      "새로운 한 해, 당신에게 찾아올 결정적 기회와 주의해야 할 시기를 월별 흐름으로 명쾌하게 짚어드립니다.",
    target: "올해 이직, 시험, 투자, 사업 등 중요한 결정을 앞두신 분",
    features: [
      "1년 12개월 월별 운의 상승·하강 곡선 분석",
      "금전·재물운 및 직장·사업 변동 타이밍 예측",
      "조심해야 할 달, 피해야 할 방위와 사람의 기운",
      "상승운을 극대화하는 개운(開運) 실천 행동 팁",
    ],
    duration: "약 40~50분 (상세 리포트 안내 포함)",
    badge: "가장 인기 있는 프로그램",
  },
  {
    id: "saju-lifetime",
    title: "정통 사주 풀이",
    tag: "평생의 대운(大運) 지도",
    icon: BookOpen,
    accentColor: "from-gold-300 to-yellow-600",
    description:
      "생년월일시에 담긴 음양오행의 균형을 분석하여 타고난 기질과 10년 주기 대운의 흐름을 심층 해석합니다.",
    target: "내 타고난 잠재력과 평생의 운명적 방향성을 명확히 알고 싶은 분",
    features: [
      "사주 원국(사주팔자 8글자) 정밀 오행 균형 분석",
      "10년마다 바뀌는 대운(大運)의 큰 흐름과 현재 위치",
      "천직·진로 적성 및 재물 그릇 크기 진단",
      "부족한 오행 에너지를 채워주는 맞춤 라이프 가이드",
    ],
    duration: "약 50~60분 (심층 1:1 집중 분석)",
    badge: "정통 명리학 시그니처",
  },
  {
    id: "compatibility",
    title: "심층 인연 & 궁합",
    tag: "서로의 결을 맞추는 처방",
    icon: Heart,
    accentColor: "from-rose-400 to-gold-500",
    description:
      "단순한 점수가 아닌, 두 사람의 기운이 만나 일으키는 화학 반응과 오랜 동행을 위한 상호 보완법을 제시합니다.",
    target: "결혼을 앞둔 연인, 잦은 다툼으로 힘든 커플, 사업 동업자",
    features: [
      "두 사람의 성향 및 감정 표출 방식 비교 분석",
      "갈등이 생기는 근본적인 오행 충돌 지점 진단",
      "결혼/동업의 최적 타이밍 및 주의해야 할 시기",
      "관계를 단단하게 유지하기 위한 실질적 소통 비결",
    ],
    duration: "약 50~60분 (2인 종합 분석)",
    badge: "커플·예비부부 추천",
  },
];

export default function ServicesSection({ onOpenReservation }) {
  return (
    <section id="services" className="py-24 bg-navy-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            황금돌고래사주 <span className="text-gold-400">3대 핵심 상담</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            뜬구름 잡는 일반론이 아닌, 내 삶의 현재 위치를 정확히 진단하고 실질적인 해결책을 주는 정통 명리 상담 프로그램입니다.
          </p>
        </div>

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-navy-950/80 border border-navy-800 p-8 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-gold-500/10"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center group-hover:border-gold-500/40 transition-colors">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-900 border border-gold-500/20 text-gold-300">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <span className="text-xs font-medium text-slate-400 tracking-wide block mb-1">
                    {service.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-navy-800/80 text-xs text-slate-300 mb-6">
                    <span className="text-gold-400 font-semibold block mb-1">🎯 추천 대상</span>
                    {service.target}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      상담 핵심 구성:
                    </span>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-navy-800/80">
                  <div className="text-xs text-slate-400 mb-3 flex items-center justify-between">
                    <span>소요 시간</span>
                    <span className="text-slate-200 font-medium">{service.duration}</span>
                  </div>
                  <button
                    onClick={() => onOpenReservation(service.title)}
                    className="w-full py-3 rounded-xl bg-navy-800 hover:bg-gold-500 text-slate-200 hover:text-navy-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-gold-500 group-hover:to-amber-400 group-hover:text-navy-950"
                  >
                    <span>{service.title} 예약하기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
