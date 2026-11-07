"use client";

import { useState, useEffect } from "react";
import { X, CalendarCheck, CheckCircle, MessageCircle, AlertCircle } from "lucide-react";

export default function ReservationModal({ isOpen, onClose, initialService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    calendarType: "solar", // solar (양력), lunar (음력), lunarLeap (윤달)
    birthDate: "",
    birthTime: "모름",
    gender: "female",
    service: initialService || "신년운세 풀이",
    consultType: "phone", // phone, zoom, inperson
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Esc 키 누를 때 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.birthDate) {
      alert("이름, 연락처, 생년월일은 필수 입력 항목입니다.");
      return;
    }
    // 프론트엔드 제출 완료 상태로 전환
    setIsSubmitted(true);
  };

  const handleKakaoLink = () => {
    window.open("https://pf.kakao.com", "_blank");
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={resetAndClose} />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-lg bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-200">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Submission Success View */
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              상담 신청이 정상 접수되었습니다
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              <strong className="text-gold-300">{formData.name}</strong> 님의 사주 분석 준비를 시작합니다.
              남겨주신 연락처로 상담 일정 및 확인 안내 문자가 발송됩니다.
            </p>
            <div className="p-4 rounded-xl bg-navy-950/60 border border-navy-800 text-xs text-slate-400 text-left space-y-1.5">
              <p>• 신청 서비스: <span className="text-white font-medium">{formData.service}</span></p>
              <p>• 연락처: <span className="text-white font-medium">{formData.phone}</span></p>
              <p>• 생년월일: <span className="text-white font-medium">{formData.birthDate} ({formData.calendarType === "solar" ? "양력" : "음력"}) {formData.birthTime}</span></p>
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleKakaoLink}
                className="w-full py-3 px-4 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm flex items-center justify-center gap-2 hover:brightness-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>카카오톡 채널로 추가 문의하기</span>
              </button>
              <button
                onClick={resetAndClose}
                className="w-full py-3 px-4 rounded-xl bg-navy-800 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                닫기
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form View */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold mb-1">
                <CalendarCheck className="w-4 h-4" />
                <span>프라이빗 1:1 예약</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                황금돌고래사주 상담 신청
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                정밀한 명리 사주 분석을 위해 정확한 생년월일시를 입력해 주세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* 이름 & 연락처 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    이름 <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    연락처 <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* 양력 / 음력 구분 & 성별 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">양력/음력</label>
                  <select
                    value={formData.calendarType}
                    onChange={(e) => setFormData({ ...formData, calendarType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="solar">양력</option>
                    <option value="lunar">음력 (평달)</option>
                    <option value="lunarLeap">음력 (윤달)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">성별</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="female">여성</option>
                    <option value="male">남성</option>
                  </select>
                </div>
              </div>

              {/* 생년월일 & 태어난 시간 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    생년월일 <span className="text-gold-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">태어난 시간</label>
                  <select
                    value={formData.birthTime}
                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="모름">시간 모름</option>
                    <option value="자시 (23:30 ~ 01:30)">자시 (23:30 ~ 01:30)</option>
                    <option value="축시 (01:30 ~ 03:30)">축시 (01:30 ~ 03:30)</option>
                    <option value="인시 (03:30 ~ 05:30)">인시 (03:30 ~ 05:30)</option>
                    <option value="묘시 (05:30 ~ 07:30)">묘시 (05:30 ~ 07:30)</option>
                    <option value="진시 (07:30 ~ 09:30)">진시 (07:30 ~ 09:30)</option>
                    <option value="사시 (09:30 ~ 11:30)">사시 (09:30 ~ 11:30)</option>
                    <option value="오시 (11:30 ~ 13:30)">오시 (11:30 ~ 13:30)</option>
                    <option value="미시 (13:30 ~ 15:30)">미시 (13:30 ~ 15:30)</option>
                    <option value="신시 (15:30 ~ 17:30)">신시 (15:30 ~ 17:30)</option>
                    <option value="유시 (17:30 ~ 19:30)">유시 (17:30 ~ 19:30)</option>
                    <option value="술시 (19:30 ~ 21:30)">술시 (19:30 ~ 21:30)</option>
                    <option value="해시 (21:30 ~ 23:30)">해시 (21:30 ~ 23:30)</option>
                  </select>
                </div>
              </div>

              {/* 서비스 선택 */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">희망 상담 프로그램</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                >
                  <option value="신년운세 풀이">202X 신년운세 풀이 (1년 월별 흐름)</option>
                  <option value="정통 사주 풀이">정통 사주 풀이 (평생 대운 및 진로/재물)</option>
                  <option value="심층 인연 & 궁합">심층 인연 & 궁합 (연인/부부/동업자)</option>
                </select>
              </div>

              {/* 상담 형태 */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">상담 진행 방식</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "phone", label: "전화 상담" },
                    { id: "zoom", label: "화상 (Zoom)" },
                    { id: "inperson", label: "1:1 대면 상담" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center justify-center py-2 px-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        formData.consultType === item.id
                          ? "border-gold-500 bg-gold-500/10 text-gold-300 font-semibold"
                          : "border-navy-700 bg-navy-950 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultType"
                        value={item.id}
                        checked={formData.consultType === item.id}
                        onChange={() => setFormData({ ...formData, consultType: item.id })}
                        className="sr-only"
                      />
                      {item.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* 주요 고민 메모 */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  집중적으로 풀고 싶은 고민 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 올해 이직 시기, 연인과의 성향 차이, 사업 시작 시점 등"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-navy-950 border border-navy-700 text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 text-xs sm:text-sm"
                />
              </div>

              {/* 안내 문구 */}
              <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-navy-950/80 p-2.5 rounded-lg border border-navy-800">
                <AlertCircle className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>입력하신 개인정보는 오직 사주 분석 및 상담 연락 목적으로만 안전하게 사용됩니다.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-400 text-navy-950 font-bold text-sm sm:text-base hover:brightness-110 gold-glow transition-all active:scale-98 mt-2"
              >
                상담 예약 접수 완료하기
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
