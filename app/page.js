"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessAndFaq from "@/components/ProcessAndFaq";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenReservation = (serviceTitle = "") => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation Header */}
      <Header onOpenReservation={() => handleOpenReservation()} />

      {/* Hero Section */}
      <HeroSection onOpenReservation={() => handleOpenReservation()} />

      {/* 3대 핵심 서비스 섹션 (신년운세, 정통 사주, 궁합) */}
      <ServicesSection onOpenReservation={(service) => handleOpenReservation(service)} />

      {/* 상담 철학 및 차별점 */}
      <PhilosophySection />

      {/* 3단계 진행 절차 및 FAQ */}
      <ProcessAndFaq onOpenReservation={() => handleOpenReservation()} />

      {/* Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />

      {/* 모바일 하단 항상 떠 있는 플로팅 CTA & 데스크톱 퀵 플로팅 버튼 */}
      <FloatingCTA onOpenReservation={() => handleOpenReservation()} />

      {/* 상담 예약 모달 (인터랙티브 폼) */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseReservation}
        initialService={selectedService}
      />
    </main>
  );
}
