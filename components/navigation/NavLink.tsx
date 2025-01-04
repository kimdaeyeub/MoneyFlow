"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLink = ({ item, href }: { item: string; href: string }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-center text-lg w-full py-3 ${
        pathname === href
          ? "btn-bg font-bold text-white rounded-lg"
          : "font-medium"
      }`}
    >
      {item}
    </Link>
  );
};

export default NavLink;
