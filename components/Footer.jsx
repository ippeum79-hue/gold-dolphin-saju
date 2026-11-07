import { Sparkles, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";

export default function Footer({ onOpenReservation }) {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/80 text-slate-400 text-sm mt-auto pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 to-amber-200 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-navy-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                황금돌고래<span className="text-gold-400">사주</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              황금돌고래사주는 맹목적인 불안을 조성하지 않고, 타고난 오행의 기운과 대운의 타이밍을 정밀 분석하여 내 삶의 주인이 되는 명쾌한 지혜를 선물합니다.
            </p>
            <div className="flex items-center gap-4 text-xs text-gold-400/90 pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" /> 100% 철저한 비밀보장
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-gold-400" /> 공포 없는 바른 상담
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4 tracking-wider uppercase">상담 서비스</h4>
            <ul className="space-y-2.5 text-slate-400 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  202X 신년운세 풀이
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  정통 평생 사주 (대운/세운)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  심층 인연 & 궁합 분석
                </a>
              </li>
              <li>
                <button onClick={onOpenReservation} className="hover:text-gold-300 transition-colors text-left">
                  1:1 상담 예약 신청
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Notice */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4 tracking-wider uppercase">상담 운영 안내</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <p>
                <span className="text-slate-200">운영 시간:</span> 매일 10:00 - 22:00
              </p>
              <p>
                <span className="text-slate-200">상담 형태:</span> 비대면 전화 상담 / Zoom 화상 / 1:1 대면
              </p>
              <p className="pt-2 text-[11px] text-slate-500 leading-normal">
                * 모든 상담은 100% 사전 예약제로 운영되며, 예약 확정 후 상담 일정이 배정됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-navy-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 황금돌고래사주. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">개인정보처리방침</span>
            <span>|</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
