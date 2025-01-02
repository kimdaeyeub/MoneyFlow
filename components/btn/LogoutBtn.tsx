"use client";

import { logOut } from "@/lib/actions/user.action";
import React from "react";

const LogoutBtn = () => {
  return (
    <button
      onClick={async () => logOut()}
      className="w-full py-2 text-start font-medium"
    >
      로그아웃
    </button>
  );
};

export default LogoutBtn;
