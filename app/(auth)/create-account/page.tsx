"use client";

import AuthInput from "@/components/forms/AuthInput";
import { createAccount } from "@/lib/actions/user.action";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import React, { useActionState, useState } from "react";

const CreateAccountPage = () => {
  const [state, action] = useActionState(createAccount, null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
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
          type="text"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
          minLength={PASSWORD_MIN_LENGTH}
        />
        <AuthInput
          value={confirmPassword}
          setState={setConfirmPassword}
          name="confirm_password"
          type="text"
          placeholder="Confirm Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.confirm_password}
        />
      </div>
      <button className="btn-bg font-semibold text-white rounded-md py-3">
        Create Account
      </button>
    </form>
  );
};

export default CreateAccountPage;
