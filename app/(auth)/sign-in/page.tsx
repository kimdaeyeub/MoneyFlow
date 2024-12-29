"use client";

import AuthInput from "@/components/forms/AuthInput";
import { login } from "@/lib/actions/user.action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import React, { useActionState, useState } from "react";

const LoginPage = () => {
  const [state, action] = useActionState(login, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
      <button className="btn-bg font-semibold text-white rounded-md py-3">
        Create Account
      </button>
    </form>
  );
};

export default LoginPage;
