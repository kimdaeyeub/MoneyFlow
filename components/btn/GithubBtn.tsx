import Image from "next/image";
import Link from "next/link";
import React from "react";

const GithubBtn = () => {
  return (
    <Link
      href="/github/start"
      className="w-full bg-black font-semibold text-white rounded-md py-3 flex justify-center items-center gap-2"
    >
      <Image
        src="/icons/github.svg"
        alt="Github Logo"
        width={20}
        height={20}
        className="mr-2.5 object-contain"
      />
      <p>Continue with Github</p>
    </Link>
  );
};

export default GithubBtn;
