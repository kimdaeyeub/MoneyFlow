import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  description:
    "가계부를 체계적이고 시각적으로 관리하세요. 예산 관리, 지출 분석, 통계 대시보드 기능으로 최적화된 돈 관리 솔루션을 지금 만나보세요!",
};

// 랜딩 페이지
const page = () => {
  return (
    <div>
      {/* 랜딩 페이지 상단바 */}
      <nav className="w-full px-16 py-3 fixed bg-[#121212] bg-opacity-90 z-50 flex justify-between items-center">
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
      <section className="pt-32 px-40">
        <Image
          className="w-full bg-cover"
          src="/images/dashboard.png"
          width={500}
          height={500}
          // alt="대시보드뷰 홍보이미지"
          alt="dashboard"
        />
      </section>
      <section className="py-40 flex flex-col justify-center items-center gap-5 max-w-3xl text-center mx-auto">
        <h1 className="text-slate-200 font-bold text-3xl font-noto-sans">
          &quot;효율적인 돈 관리의 시작.&quot;
        </h1>
        <p className="text-lg font-medium font-noto-sans text-gray-500">
          시간에 따라 변화하는 지출 데이터를 직관적으로 파악할 수 있는 다양한
          뷰를 제공하는 MoneyFlow는 재정 관리의 효율성을 극대화합니다. 예산
          설정과 지출 추적은 물론, 당신의 재정 목표 달성에 맞춰 맞춤형 추천을
          제공하여 더 나은 재정 관리를 돕습니다. 데이터를 시간적으로 인지하고
          분석할 수 있어, 재정적으로 더 나은 미래를 향해 나아갈 수 있는 최적의
          도구로 자리잡을 것입니다.
        </p>
        <p className="mt-5 text-lg font-medium font-noto-sans text-gray-500">
          MoneyFlow와 함께라면, 언제 어디서나 효율적인 돈 관리를 경험할 수
          있습니다.
        </p>

        <Link
          href={"/sample/dashboard"}
          className="mt-12 px-10 py-3 font-bold font-noto-sans text-lg bg-[#FF7000] rounded-full"
        >
          둘러보기
        </Link>
      </section>
      <section id="feature" className="min-h-screen bg-black"></section>
    </div>
  );
};

export default page;
