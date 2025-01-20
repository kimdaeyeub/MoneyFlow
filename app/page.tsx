import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "MoneyFlow",
  description:
    "가계부를 체계적이고 시각적으로 관리하세요. 예산 관리, 지출 분석, 통계 대시보드 기능으로 최적화된 돈 관리 솔루션을 지금 만나보세요!",
};

interface IFeature {
  title: string;
  description: string;
}

const features: IFeature[] = [
  {
    title: "지출 상한 목표 설정",
    description:
      "소비 한도를 설정하여 예산 내에서 관리할 수 있도록 도와줍니다.",
  },
  {
    title: "진행 상황 원형 프로그래스바",
    description:
      "목표 상한액까지의 진행 상황을 한눈에 확인할 수 있는 시각적 도구입니다.",
  },
  {
    title: "카테고리별 지출 관리",
    description:
      "각 소비 항목을 카테고리별로 구분하여 세부적인 지출을 추가하고 관리할 수 있습니다.",
  },
  {
    title: "세분화된 지출 내역 분석",
    description:
      "카테고리별로 지출 내역을 분석하여 더 명확한 소비 패턴을 확인할 수 있습니다.",
  },
  {
    title: "지출 추이 시각화 그래프",
    description:
      "지출 변화를 그래프로 시각적으로 표현해, 시간에 따른 소비 패턴을 쉽게 파악할 수 있습니다.",
  },
  {
    title: "오늘의 지출 현황",
    description:
      "오늘까지의 총 지출액을 확인하고, 일일 예산을 체크할 수 있습니다.",
  },
  {
    title: "주간 지출 분석",
    description:
      "이번 주의 지출을 요일별로 파악하여, 주간 소비 패턴을 분석할 수 있습니다.",
  },
  {
    title: "카테고리 색상 커스터마이징",
    description:
      "각 카테고리의 색상을 사용자가 직접 설정하여, 지출 항목을 더 쉽게 구별하고 눈에 띄게 할 수 있습니다.",
  },
];

const page = () => {
  return (
    <>
      <nav className="w-full sm:px-16 px-5 py-3 fixed bg-[#121212] bg-opacity-90 z-50 flex justify-between items-center">
        <Link href="/" className="flex gap-1 justify-center items-center">
          <Image src="/icons/logo.png" width={40} height={40} alt="logo" />
          <p className="text-2xl font-bold text-white">
            Money<span className="text-[#FF7000]">Flow</span>
          </p>
        </Link>
        <div className="text-gray-500 flex space-x-6 font-medium sm:text-xl">
          <Link href={"/#home"}>Home</Link>
          <Link href={"/#feature"}>Feature</Link>
        </div>
      </nav>
      {/* 섹션1 */}
      <section
        id="home"
        className="py-56 px-10 text-white flex justify-center items-center flex-col relative"
      >
        <Image
          src={"/images/auth-dark.webp"}
          alt="hero_section"
          fill
          className="absolute"
        />
        <div className="flex justify-center items-center flex-col z-10">
          <div className="flex md:flex-row flex-col justify-center items-center gap-2.5 sm:text-5xl text-3xl font-bold mb-16">
            <h1>
              Money<span className="text-[#FF7000]">Flow</span>
            </h1>
            {/* <span className="font-medium hidden md:block">|</span>
            <h1 className="font-semibold">당신의 효율적인 돈 관리 파트너</h1> */}
          </div>
          <p className="sm:text-xl text-lg font-medium text-gray-500">
            &quot;효율적인 돈 관리의 시작.&quot;
          </p>
          <p className="text-lg sm:text-xl font-medium text-gray-500">
            예산 설정, 지출 추적, 그리고 재정 목표 달성을 위한 완벽한 도구.
          </p>
          <Link
            href="/sign-in"
            className="sm:mt-20 mt-14 px-8 py-3.5 font-bold sm:text-xl text-lg bg-[#FF7000] rounded-full"
          >
            지금바로 시작하기
          </Link>
        </div>
      </section>
      <section className="md:pt-32 pt-8 md:px-40 px-8">
        <Image
          className="w-full bg-cover"
          src="/images/dashboard.png"
          width={500}
          height={500}
          // alt="대시보드뷰 홍보이미지"
          alt="dashboard"
        />
      </section>
      <section className="md:py-40 py-20 px-10 flex flex-col justify-center items-center gap-5 max-w-3xl text-center mx-auto">
        <h1 className="text-slate-200 font-bold md:text-3xl text-2xl">
          &quot;효율적인 돈 관리의 시작.&quot;
        </h1>
        <p className="md:text-lg font-medium text-gray-500">
          시간에 따라 변화하는 지출 데이터를 직관적으로 파악할 수 있는 다양한
          뷰를 제공하는 MoneyFlow는 재정 관리의 효율성을 극대화합니다. 예산
          설정과 지출 추적은 물론, 당신의 재정 목표 달성에 맞춰 맞춤형 추천을
          제공하여 더 나은 재정 관리를 돕습니다. 데이터를 시간적으로 인지하고
          분석할 수 있어, 재정적으로 더 나은 미래를 향해 나아갈 수 있는 최적의
          도구로 자리잡을 것입니다.
        </p>
        <p className="md:mt-5 md:text-lg font-medium text-gray-500">
          MoneyFlow와 함께라면, 언제 어디서나 효율적인 돈 관리를 경험할 수
          있습니다.
        </p>

        <Link
          href={"/sample/dashboard"}
          className="md:mt-12 mt-7 md:px-10 px-8 md:py-3 py-2.5 font-bold md:text-lg bg-[#FF7000] rounded-full"
        >
          둘러보기
        </Link>
      </section>
      <section className="md:px-20 px-10 grid md:grid-cols-2 grid-cols-1 w-full md:pt-52 pt-32 gap-14 bg-black">
        <Image
          src="/images/goal.png"
          alt="goal_landing"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="flex flex-col justify-center gap-6 items-start">
          <div className="md:text-2xl text-xl font-bold text-slate-200">
            <h1>손쉬운 목표 달성,</h1>
            <h1>똑똑한 소비 관리</h1>
          </div>
          <p className="md:text-lg font-medium text-gray-500">
            하루, 1주일, 1달 단위로 지출 목표를 설정하고 실시간으로 진행 상황을
            확인하세요. 직관적인 시각적 도구로 더 나은 소비 습관을 만들어
            보세요.
          </p>
        </div>
      </section>
      <section className="md:px-20 px-10 md:grid md:grid-cols-2 flex flex-col-reverse w-full md:py-52 py-32 gap-14 bg-black">
        <div className="flex flex-col justify-center gap-6 items-start">
          <div className="md:text-2xl text-xl font-bold text-slate-200">
            <h1>한눈에 보는 지출 데이터,</h1>
            <h1>시각적인 소비 관리</h1>
          </div>
          <p className="md:text-lg font-medium text-gray-500">
            3개월, 1달, 1주일 단위로 제공되는 그래프를 통해 지출 데이터를
            시각적으로 확인하세요. 길게는 3개월, 짧게는 1주일의 흐름을 한눈에
            파악하며 소비 패턴을 분석하고, 더 현명한 재정 결정을 내릴 수
            있습니다.
          </p>
        </div>
        <Image
          src="/images/graph.png"
          alt="graph_landing"
          width={500}
          height={500}
          className="w-full"
        />
      </section>
      <section
        id="feature"
        className="flex flex-col justify-center items-center md:pt-40 pt-20 px-10 pb-32"
      >
        <h1 className="text-3xl font-bold text-slate-200">Features</h1>
        <div className="max-w-4xl mt-20 mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-7">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:gap-5 gap-2 justify-start items-start w-full"
            >
              <div className="flex gap-2 items-center">
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="size-5 text-[#FF7000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  ></path>
                </svg>
                <h2 className="text-xl font-bold text-slate-200">
                  {feature.title}
                </h2>
              </div>
              <p className="font-medium text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
