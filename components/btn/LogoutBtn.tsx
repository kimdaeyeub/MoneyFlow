"use client";

import { logOut } from "@/lib/actions/user.action";
import React from "react";

const LogoutBtn = () => {
  return (
    <button onClick={async () => logOut()} className="px-12 py-2.5">
      Logout
    </button>
  );
};

export default LogoutBtn;
