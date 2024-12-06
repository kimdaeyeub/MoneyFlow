import React from "react";
import NavLink from "./NavLink";

const lists: string[] = ["Dashboard", "Calendar", "Graph", "Daily", "Weekly"];

const LeftSideBar = () => {
  return (
    <div className="sticky left-0 top-0 h-screen border-r shadow-sm pt-32 px-6 flex flex-col justify-start items-center gap-6 lg:w-[266px]">
      {lists.map((item) => (
        <NavLink key={item} item={item} />
      ))}
    </div>
  );
};

export default LeftSideBar;
