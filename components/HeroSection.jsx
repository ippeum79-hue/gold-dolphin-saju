"use client";

import { Sparkles, CalendarCheck, MessageCircle, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function HeroSection({ onOpenReservation }) {
  const handleKakaoClick = () => {
    window.open("https://pf.kakao.com", "_blank");
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-gold-500/10 via-amber-300/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>정통 명리학 1:1 프라이빗 운명 카운슬링</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            인생의 큰 흐름을 알면 <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-amber-200 to-gold-400 bg-clip-text text-transparent">
              불안은 확신이 됩니다.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl">
            어두운 밤바다를 헤쳐가는 당신을 위해, <strong className="text-gold-200 font-semibold">황금돌고래사주</strong>가 
            정통 명리의 이치로 타고난 기운과 다가올 대운(大運)의 결정적 타이밍을 짚어드립니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-400 text-navy-950 font-bold text-base hover:brightness-110 gold-glow transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-xl"
            >
              <CalendarCheck className="w-5 h-5 text-navy-950" />
              <span>상담 예약 신청하기</span>
            </button>
            <button
              onClick={handleKakaoClick}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FEE500] text-[#191919] font-bold text-base hover:brightness-95 transition-all active:scale-95 flex items-center justify-center gap-2.5 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>카카오톡 1:1 빠른 문의</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-3 sm:gap-8 w-full max-w-2xl pt-6 border-t border-navy-800/80">
            <div className="flex flex-col items-center p-3 rounded-xl bg-navy-900/50 border border-navy-800/50">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">3,500+</span>
              <span className="text-xs text-slate-400 mt-0.5">누적 심층 상담</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-navy-900/50 border border-navy-800/50">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">100%</span>
              <span className="text-xs text-slate-400 mt-0.5">철저한 비밀 보장</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-xl bg-navy-900/50 border border-navy-800/50">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-400">0%</span>
              <span className="text-xs text-slate-400 mt-0.5">공포·부적 강요 없음</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
