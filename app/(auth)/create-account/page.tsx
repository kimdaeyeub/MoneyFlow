import CreateAccountForm from "@/components/forms/CreateAccountForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "회원가입",
  description: "MoneyFlow 계정 생성 페이지입니다.",
};

const page = () => {
  return <CreateAccountForm />;
};

export default page;
