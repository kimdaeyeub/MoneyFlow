"use client";

import GithubBtn from "@/components/btn/GithubBtn";
import AuthInput from "@/components/forms/AuthInput";
import { login } from "@/lib/actions/user.action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Link from "next/link";
import React, { useActionState, useState } from "react";

const LoginPage = () => {
  const [state, action] = useActionState(login, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full flex flex-col gap-4">
      <form action={action} className="flex flex-col gap-10 w-full">
        <div className="w-full flex flex-col gap-3">
          <AuthInput
            value={email}
            setState={setEmail}
            name="email"
            type="email"
            placeholder="Email"
            required
            errors={state?.fieldErrors.email}
          />
          <AuthInput
            value={password}
            setState={setPassword}
            name="password"
            type="text"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
        </div>
        <div className="w-full flex gap-4 flex-col justify-center items-center">
          <button className="w-full btn-bg font-semibold text-white rounded-md py-3">
            Login
          </button>
          <div className="flex justify-center gap-2 font-medium text-sm items-center">
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
      <div className="w-full h-0.5 rounded-full bg-gray-200" />
      <GithubBtn />
    </div>
  );
};

export default LoginPage;
