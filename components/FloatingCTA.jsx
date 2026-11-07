"use client";

import { MessageCircle, CalendarCheck } from "lucide-react";

export default function FloatingCTA({ onOpenReservation }) {
  const handleKakaoClick = () => {
    window.open("https://pf.kakao.com", "_blank");
  };

  return (
    <>
      {/* Mobile Fixed Bottom Bar (화면 하단 상시 고정) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-navy-950/95 backdrop-blur-lg border-t border-navy-800/80 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* 카카오톡 버튼 */}
          <button
            onClick={handleKakaoClick}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#FEE500] text-[#191919] font-semibold text-sm active:scale-95 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="truncate">카톡 실시간 문의</span>
          </button>

          {/* 상담 예약하기 버튼 */}
          <button
            onClick={onOpenReservation}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 font-bold text-sm active:scale-95 transition-all shadow-md gold-glow"
          >
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span className="truncate">상담 예약 신청</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Speed Dial (화면 우측 하단 퀵 플로팅 버튼) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3">
        <button
          onClick={handleKakaoClick}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#FEE500] text-[#191919] font-medium text-sm shadow-xl hover:scale-105 transition-all"
          title="카카오톡 문의하기"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-semibold">
            카카오톡 1:1 빠른 상담
          </span>
        </button>

        <button
          onClick={onOpenReservation}
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-400 text-navy-950 font-bold text-sm shadow-2xl gold-glow hover:brightness-110 hover:scale-105 active:scale-95 transition-all"
        >
          <CalendarCheck className="w-5 h-5" />
          <span>사주 상담 예약</span>
        </button>
      </div>
    </>
  );
}
