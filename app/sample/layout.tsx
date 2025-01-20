import LeftSideBar from "@/components/navigation/LeftSideBar";
import SampleRightSideBar from "@/components/sample/SampleRightSidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full">
      <nav className="w-full px-7 py-3 fixed z-50 flex justify-between items-center bg-[#121212] border border-gray-800">
        <Link href="/" className="flex gap-1 justify-center items-center">
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
        </Link>

        <Link
          className="hidden md:block btn-bg px-4 py-2 text-white rounded-lg font-bold"
          href={"/sign-in"}
        >
          시작하기
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden rounded-full hover:bg-gray-900 p-3 outline-none">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-slate-400 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              ></path>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-96 mr-3">
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/sample/dashboard"
                className="py-2 font-medium w-full"
              >
                대시보드
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/sample/today" className="py-2 font-medium w-full">
                오늘의 지출
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/sample/this-week"
                className="py-2 font-medium w-full"
              >
                이번주 지출
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="flex">
        <LeftSideBar sample />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-8 pb-6 pt-24 max-md:pb-14">
          <div className="mx-auto w-full">{children}</div>
        </section>
        <SampleRightSideBar />
      </div>
    </main>
  );
};

export default layout;
