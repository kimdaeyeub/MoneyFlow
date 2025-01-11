import LeftSideBar from "@/components/navigation/LeftSideBar";
import SampleRightSideBar from "@/components/sample/SampleRightSidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full">
      <nav className="w-full px-16 py-3 fixed z-50 flex justify-between items-center bg-[#121212] border border-gray-800">
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
        <Link
          className="btn-bg px-4 py-2 text-white rounded-lg font-bold font-noto-sans"
          href={"/sign-in"}
        >
          로그인
        </Link>
      </nav>
      <div className="flex">
        <LeftSideBar sample />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-8 pb-6 pt-36 max-md:pb-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        <SampleRightSideBar />
      </div>
    </main>
  );
};

export default layout;
