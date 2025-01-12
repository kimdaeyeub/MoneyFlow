import LoginForm from "@/components/forms/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "로그인",
  description: "MoneyFlow 로그인 페이지입니다.",
};

const page = () => {
  return <LoginForm />;
};

export default page;
