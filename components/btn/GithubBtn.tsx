import Image from "next/image";
import Link from "next/link";
import React from "react";

const GithubBtn = () => {
  return (
    <Link
      href="/github/start"
      className="w-full bg-black dark:bg-white dark:text-black font-semibold text-white rounded-md py-4 flex justify-center items-center gap-2"
    >
      <Image
        src="/icons/github.svg"
        alt="Github Logo"
        width={25}
        height={25}
        className="mr-2.5 object-contain dark:invert"
      />
      <p>Continue with Github</p>
    </Link>
  );
};

export default GithubBtn;
