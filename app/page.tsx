import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  description:
    "가계부를 체계적이고 시각적으로 관리하세요. 예산 관리, 지출 분석, 통계 대시보드 기능으로 최적화된 돈 관리 솔루션을 지금 만나보세요!",
};

const page = () => {
  return (
    <div>
      {/* 랜딩 페이지 상단바 */}
      <nav className="w-full px-16 py-3 fixed z-50 flex justify-between items-center">
        <div className="flex gap-1 justify-center items-center">
          <Image
            src="/icons/logo.png"
            width={40}
            height={40}
            style={{ width: "40px", height: "auto" }}
            alt="logo"
          />
          <p className="text-2xl font-bold text-white">
            Money<span className="text-[#FF7000]">Flow</span>
          </p>
        </div>
        <div className="text-gray-500 flex space-x-6 font-medium text-xl">
          <Link href={"/#home"}>Home</Link>
          <Link href={"/#feature"}>Feature</Link>
        </div>
      </nav>
      {/* 섹션1 */}
      <section
        id="home"
        className="py-56 bg-auth-dark bg-cover bg-center text-white flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center gap-2.5 text-4xl font-bold mb-16">
          <h1>
            Money<span className="text-[#FF7000]">Flow</span>
          </h1>
          <span className="font-medium">|</span>
          <h1 className="font-semibold font-noto-sans">
            당신의 효율적인 돈 관리 파트너
          </h1>
        </div>
        <p className="text-xl font-medium font-noto-sans">
          &quot;효율적인 돈 관리의 시작.&quot;
        </p>
        <p className="text-xl font-medium font-noto-sans">
          예산 설정, 지출 추적, 그리고 재정 목표 달성을 위한 완벽한 도구.
        </p>
        <button className="mt-20 px-8 py-3.5 font-bold font-noto-sans text-xl bg-[#FF7000] rounded-full">
          지금바로 시작하기
        </button>
      </section>
      <section id="feature" className="min-h-screen bg-black"></section>
    </div>
  );
};

export default page;
