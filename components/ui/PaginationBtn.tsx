"use client";

import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

interface IPaginationBtnProps {
  count: number;
  take: number;
  url: string;
}

const PaginationBtn = ({ count, take, url }: IPaginationBtnProps) => {
  const [page, setPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const current = Number(searchParams.get("page"));
    if (isNaN(current)) {
      redirect("/");
    } else {
      setPage(current);
    }

    if (current === 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.push(`${url}?` + params.toString());
      setPage(1);
    }
    setPageGroup(Math.floor((current - 1) / 5));
  }, [searchParams, url, router]);

  const createHref = (url: string, index: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", `${index}`);
    return `${url}?${params.toString()}`;
  };

  function createPageArray(totalItems: number, itemsPerPage: number) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const totalPages = Math.ceil(count / take);
  const maxGroup = Math.floor((totalPages - 1) / 5);

  return (
    <div className="flex justify-center items-center gap-3 mt-20">
      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          if (pageGroup > 0) {
            setPageGroup(pageGroup - 1);
            const newPage = pageGroup * 5;
            router.push(createHref(url, newPage));
          }
        }}
      >
        <CgChevronDoubleLeft className="size-6 text-gray-300" />
      </div>

      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          if (page > 1) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", `${page - 1}`);
            router.push(`${url}?` + params.toString());
          }
        }}
      >
        <BiChevronLeft className="size-6 text-gray-300" />
      </div>

      {createPageArray(count, take)
        .slice(pageGroup * 5, pageGroup * 5 + 5)
        .map((item) => (
          <Link key={item} href={createHref(url, item)}>
            <div
              key={item}
              className={`size-9 rounded-md font-medium text-center backdrop-filter backdrop-blur-md flex justify-center items-center ${
                item === page ? "btn-bg text-white" : ""
              }`}
            >
              <span>{item}</span>
            </div>
          </Link>
        ))}

      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          if (page < totalPages) {
            const params = new URLSearchParams(searchParams.toString());
            params.set("page", `${page + 1}`);
            router.push(`${url}?` + params.toString());
          }
        }}
      >
        <BiChevronRight className="size-6 text-gray-300" />
      </div>

      <div
        className="p-2 cursor-pointer"
        onClick={() => {
          if (pageGroup < maxGroup) {
            setPageGroup(pageGroup + 1);
            const newPage = pageGroup * 5 + 6;
            router.push(createHref(url, newPage));
          }
        }}
      >
        <CgChevronDoubleRight className="size-6 text-gray-300" />
      </div>
    </div>
  );
};

export default PaginationBtn;
