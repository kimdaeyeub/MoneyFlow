"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const NavLink = ({ item }: { item: string }) => {
  const view = useSearchParams().get("view");

  return (
    <Link
      href={`/?view=${item.toLowerCase()}`}
      className={`text-center text-lg w-full py-3 ${
        view === item.toLowerCase() || (!view && item === "Dashboard")
          ? "btn-bg font-bold text-white rounded-lg"
          : "font-medium"
      }`}
    >
      {item === "Dashboard" ? item : `${item} View`}
    </Link>
  );
};

export default NavLink;
