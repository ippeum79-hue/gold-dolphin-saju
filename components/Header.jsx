"use client";

import { useState } from "react";
import { Sparkles, MessageCircle, CalendarCheck, Menu, X } from "lucide-react";

export default function Header({ onOpenReservation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleKakaoClick = () => {
    // 실제 카카오톡 채널 URL (예: http://pf.kakao.com/_xxxxxx)
    window.open("https://pf.kakao.com", "_blank");
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-navy-950/80 border-b border-navy-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-amber-200 flex items-center justify-center p-0.5 shadow-md shadow-gold-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block">
              황금돌고래<span className="text-gold-400">사주</span>
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-light tracking-wider block -mt-1">
              정통 명리 1:1 맞춤 카운슬링
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors">
            3대 핵심 서비스
          </a>
          <a href="#philosophy" className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors">
            상담 철학
          </a>
          <a href="#process" className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors">
            상담 절차
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-gold-300 transition-colors">
            자주 묻는 질문
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleKakaoClick}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FEE500] text-[#191919] font-medium text-sm hover:brightness-95 transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>카톡 1:1 문의</span>
          </button>
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 font-semibold text-sm hover:brightness-110 gold-glow transition-all active:scale-95"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>상담 예약하기</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-gold-300"
            >
              3대 핵심 서비스
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-gold-300"
            >
              상담 철학
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-gold-300"
            >
              상담 절차
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-200 hover:text-gold-300"
            >
              자주 묻는 질문
            </a>
          </nav>
          <div className="pt-4 border-t border-navy-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleKakaoClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FEE500] text-[#191919] font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>카카오톡 1:1 빠른 문의</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 font-semibold text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>상담 예약하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
