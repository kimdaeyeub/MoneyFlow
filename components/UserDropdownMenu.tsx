"use client";

import React, { useState } from "react";
import LogoutBtn from "./btn/LogoutBtn";

interface IProp {
  avatar: string | null | undefined;
}

const UserDropdownMenu = ({ avatar }: IProp) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {avatar ? (
        <div
          style={{ backgroundImage: `url(${avatar})` }}
          onClick={() => setOpen(!open)}
          className="rounded-full size-12 bg-gray-100 bg-cover bg-center"
        />
      ) : (
        <div
          onClick={() => setOpen(!open)}
          className="rounded-full size-12 bg-gray-100"
        />
      )}
      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-md border">
          <LogoutBtn />
        </div>
      )}
    </div>
  );
};

export default UserDropdownMenu;
