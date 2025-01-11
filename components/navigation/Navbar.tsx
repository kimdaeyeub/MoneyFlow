/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 로고 및 로그인 버튼 다크 모드 토글 검색 바 등을 포함한 상단바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-19
 */

import React from "react";
import { Theme } from "../theme/Theme";
import Link from "next/link";
import db from "@/lib/db";
import Image from "next/image";
import UserDropdownMenu from "../btn/UserDropdownMenu";
import getSession from "@/lib/session";

const getUserInfo = async () => {
  const session = await getSession();
  const userId = session.id;

  if (!userId) return null;
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

const Navbar = async () => {
  const userInfo = await getUserInfo();
  return (
    <nav className="w-full px-7 py-3 fixed shadow-md z-50 bg-white dark:bg-[#121212] dark:border border-gray-800 flex justify-between items-center">
      <div className="flex gap-1 justify-center items-center">
        <Image
          src="/icons/logo.png"
          width={40}
          height={40}
          style={{ width: "40px", height: "auto" }}
          alt="logo"
        />
        <p className="text-2xl font-bold">
          Money<span className="text-[#FF7000]">Flow</span>
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Theme />
        {userInfo?.id ? (
          <UserDropdownMenu avatar={userInfo?.avatar} />
        ) : (
          <Link href="/sign-in">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
