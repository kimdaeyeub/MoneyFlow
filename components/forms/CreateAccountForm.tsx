"use client";

import GithubBtn from "@/components/btn/GithubBtn";
import AuthInput from "@/components/forms/AuthInput";
import { createAccount } from "@/lib/actions/user.action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useState } from "react";

const CreateAccountForm = () => {
  const [state, action] = useActionState(createAccount, null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="w-full flex flex-col gap-4">
      {/* TODO: 로고 넣기 */}
      <div className="w-full flex justify-center">
        <Image src="/icons/logo.png" width={45} height={45} alt="logo" />
      </div>
      <form action={action} className="flex flex-col gap-10 w-full">
        <div className="w-full flex flex-col gap-3">
          <AuthInput
            value={name}
            setState={setName}
            name="name"
            type="text"
            placeholder="Name"
            required
            errors={state?.fieldErrors.name}
            minLength={3}
            maxLength={10}
          />
          <AuthInput
            value={username}
            setState={setUsername}
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
            minLength={3}
            maxLength={10}
          />
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
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <AuthInput
            value={confirmPassword}
            setState={setConfirmPassword}
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required
            minLength={PASSWORD_MIN_LENGTH}
            errors={state?.fieldErrors.confirm_password}
          />
        </div>
        <div className="w-full flex gap-4 flex-col justify-center items-center">
          <button className="w-full btn-bg font-semibold text-white rounded-md py-4">
            회원가입
          </button>
          <div className="flex justify-start w-full gap-2 font-medium items-center">
            <p>이미 계정이 존재하시나요?</p>
            <Link
              href="/sign-in"
              className="text-[#FF7000] font-semibold hover:underline underline-offset-2"
            >
              로그인
            </Link>
          </div>
        </div>
      </form>
      <GithubBtn />
    </div>
  );
};

export default CreateAccountForm;
