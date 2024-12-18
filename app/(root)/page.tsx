/*
작성자: 김대엽
파일의 역할: 웹사이트 홈페이지
생성 일자: 2024-12-06
수정 일자: 2024-12-11
 */

import DashboardView from "@/components/views/DashboardView";
import GraphView from "@/components/views/GraphView";
import TodayView from "@/components/views/TodayView";
import WeeklyView from "@/components/views/WeeklyView";
import db from "@/lib/db";

const addUserForTest = async () => {
  const newUser = await db.user.create({
    data: {
      name: "kim",
      username: "kimdaeyeub",
      email: "kdy@naver.com",
      password: "helloWorld",
    },
  });
  return newUser;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { view: string };
}) {
  const newUser = await addUserForTest();
  console.log(newUser, { message: "success" });
  return (
    <section>
      {searchParams.view === "dashboard" && <DashboardView />}
      {searchParams.view === "graph view" && <GraphView />}
      {searchParams.view === "today" && <TodayView />}
      {searchParams.view === "this week" && <WeeklyView />}
    </section>
  );
}
