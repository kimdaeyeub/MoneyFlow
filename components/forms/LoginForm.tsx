"use client";

import GithubBtn from "@/components/btn/GithubBtn";
import AuthInput from "@/components/forms/AuthInput";
import { login } from "@/lib/actions/user.action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useState } from "react";

const LoginForm = () => {
  const [state, action] = useActionState(login, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-2xl font-bold">MoneyFlow 시작하기</h1>
          <span className="text-gray-500 text-[15px]">
            돈 관리를 체계적이고, 시각적으로
          </span>
        </div>
        <Image src="/icons/logo.png" width={45} height={45} alt="logo" />
      </div>
      <form action={action} className="flex flex-col gap-8 w-full">
        <div className="w-full flex flex-col gap-3">
          <label className="text-lg font-semibold">이메일</label>
          <AuthInput
            value={email}
            setState={setEmail}
            name="email"
            type="email"
            required
            errors={state?.fieldErrors.email}
          />
          <label className="text-lg font-semibold">비밀번호</label>
          <AuthInput
            value={password}
            setState={setPassword}
            name="password"
            type="password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
        </div>
        <div className="w-full flex gap-8 flex-col justify-center items-center">
          <button className="w-full btn-bg font-semibold text-white rounded-md py-4">
            로그인
          </button>
          <div className="w-full flex justify-start gap-2 font-medium items-center">
            <p>계정이 존재하지 않으신가요?</p>
            <Link
              href="/create-account"
              className="text-orange-300 font-medium hover:underline underline-offset-2"
            >
              회원가입
            </Link>
          </div>
        </div>
      </form>
      <GithubBtn />
    </div>
  );
};

export default LoginForm;
