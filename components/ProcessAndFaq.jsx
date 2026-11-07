"use client";

import { useState } from "react";
import { ChevronDown, CalendarClock, PhoneCall, Sparkles } from "lucide-react";

export default function ProcessAndFaq({ onOpenReservation }) {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      num: "01",
      title: "간편 신청 접수",
      desc: "홈페이지 예약폼 또는 카카오톡으로 생년월일시와 희망 상담 서비스를 선택합니다.",
    },
    {
      num: "02",
      title: "일정 확정 및 사전 분석",
      desc: "상담 시간을 최종 조율하고, 상담 시작 전 명리학적 사주 원국과 대운을 미리 심층 분석합니다.",
    },
    {
      num: "03",
      title: "1:1 프라이빗 상담 진행",
      desc: "전화, Zoom, 대면 중 편안한 방식으로 1:1 맞춤형 풀이 및 궁금했던 점들을 모두 해소합니다.",
    },
  ];

  const faqs = [
    {
      q: "태어난 시간을 정확히 몰라도 사주 상담이 가능한가요?",
      a: "네, 가능합니다. 생년월일(년주, 월주, 일주)의 3주 6글자만으로도 성향과 대운의 큰 흐름을 충분히 읽어낼 수 있습니다. 살아오신 삶의 주요 변곡점을 대조하여 시간을 유추해 드리는 보정 작업도 함께 진행해 드립니다.",
    },
    {
      q: "비대면(전화/화상) 상담도 대면 상담만큼 정확한가요?",
      a: "사주는 명리학적 데이터(생년월일시)를 바탕으로 분석하는 학문이므로, 상담 방식(전화/화상/대면)에 따른 해석의 정확도 차이는 전혀 없습니다. 이동 시간 없이 집에서 편안하게 상담받으실 수 있어 비대면 전화 상담을 가장 많이 선호하십니다.",
    },
    {
      q: "상담 내용은 비밀이 철저히 보장되나요?",
      a: "네, 황금돌고래사주는 고객님의 사생활과 상담 내용을 무엇보다 소중히 여깁니다. 모든 상담 기록 및 입력하신 개인정보는 100% 비공개로 안전하게 보호됩니다.",
    },
    {
      q: "궁합을 볼 때 상대방의 어떤 정보가 필요한가요?",
      a: "상대방의 생년월일(양력/음력 구분)과 성별이 필수이며, 태어난 시간까지 아시면 더욱 정밀한 시기별 심층 분석이 가능합니다.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-navy-950 relative border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Process */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
            Easy 3 Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            편안하고 투명한 <span className="text-gold-400">상담 절차</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            복잡한 과정 없이 3단계로 간편하게 상담을 신청하고 진행하실 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-navy-900/60 border border-navy-800 text-center flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-serif font-bold text-lg flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto pt-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 block mb-2">
              FAQ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              자주 묻는 질문
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              상담 신청 전 가장 많이 궁금해하시는 질문들을 모았습니다.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-navy-900/50 border border-navy-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-200 hover:text-gold-300 font-medium text-sm sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-navy-800/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Banner inside FAQ */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 text-center space-y-4 gold-glow">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              더 궁금한 점이 있으시거나 빠른 일정 확인이 필요하신가요?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              카카오톡 실시간 상담창으로 편하게 문의 주시면 신속하게 답변해 드립니다.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 font-bold text-sm hover:brightness-110 transition-all shadow-md"
              >
                지금 상담 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
