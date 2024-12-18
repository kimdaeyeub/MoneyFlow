/*
작성자: 김대엽
파일의 역할: 세션 인증을 위해 사용할 코드. getSession의 id가 존재한다면 로그인이 된 상태이다.
생성 일자: 2024-12-18
 */

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  return getIronSession<SessionContent>(await cookies(), {
    cookieName: "account",
    password: process.env.COOKIE_PASSWORD!,
  });
}
