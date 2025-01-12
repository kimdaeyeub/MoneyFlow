import React from "react";

const SampleRightSideBar = async () => {
  const data = [
    { id: 1, tag: "식료품", count: 12 },
    { id: 2, tag: "월세", count: 1 },
    { id: 3, tag: "공과금", count: 5 },
    { id: 4, tag: "여가", count: 7 },
    { id: 5, tag: "교통비", count: 8 },
    { id: 6, tag: "저축", count: 10 },
    { id: 7, tag: "구독", count: 3 },
    { id: 8, tag: "외식", count: 6 },
    { id: 9, tag: "건강", count: 4 },
    { id: 10, tag: "교육", count: 2 },
  ];

  return (
    <nav className="hidden lg:block sticky right-0 top-0 h-screen border-l dark:border-gray-800 shadow-sm pt-28 px-7 xl:w-[300px] lg:w-[250px]">
      <h1 className="font-bold text-xl">카테고리</h1>
      <ul className="flex flex-col justify-start items-start gap-5 mt-7">
        {data.map((category, index) => (
          <li
            key={index}
            className="lg:w-full w-fit flex justify-between items-center"
          >
            <div className="text-[#858ead] cursor-pointer bg-[#f4f6f8] dark:bg-gray-800 border dark:border-gray-700 px-5 py-1.5 rounded-md font-medium text-sm">
              {category.tag}
            </div>

            <span className="text-[#3f4354] font-semibold text-sm hidden lg:block">
              {category.count}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SampleRightSideBar;
