/*
작성자: 김대엽
파일의 역할: 루트레이아웃에서 사용자가 여러 방식으로 데이터를 비교할 수 있도록 여러 뷰를 선택할 수 있는 
기능을 지원하는 화면 좌측 사이드 바이다.
생성 일자: 2024-12-06
수정 일자: 2024-12-19
 */

import DialogBtn from "../btn/DialogBtn";
import NavLink from "./NavLink";

const lists: string[] = ["Dashboard", "Graph View", "Today", "This Week"];

const LeftSideBar = () => {
  return (
    <section className="sticky left-0 top-0 h-screen border-r dark:border-none shadow-sm pt-32 px-7 flex flex-col justify-between items-center lg:w-[266px] pb-10">
      <div className="flex flex-col justify-start items-center gap-6 w-full">
        {lists.map((item) => (
          <NavLink key={item} item={item} />
        ))}
      </div>
      <DialogBtn />
    </section>
  );
};

export default LeftSideBar;
