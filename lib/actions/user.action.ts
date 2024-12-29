"use server";

import db from "../db";
import bcrypt from "bcrypt";
import getSession from "../session";
import { redirect } from "next/navigation";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "../constants";
import { z } from "zod";

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const createAccountFormSchema = z
  .object({
    name: z.string().min(2),
    username: z
      .string({
        invalid_type_error: "유저네임은 문자만 가능합니다.",
        required_error: "유저네임은 필수 항목입니다.",
      })
      .toLowerCase()
      .trim(),

    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(10),
  })
  .refine(checkPassword, {
    path: ["confirm_password"],
    message: "비밀번호가 일치하지 않습니다.",
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 사용중인 이메일입니다.",
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
  });

export const createAccount = async (prevState: unknown, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await createAccountFormSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const newUser = await db.user.create({
      data: {
        name: result.data.name,
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });

    const session = await getSession();
    session.id = newUser.id;
    await session.save();
    redirect("/");
  }
};

export const logOut = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
    select: {
      password: true,
      id: true,
    },
  });
  const ok = await bcrypt.compare(password, user!.password ?? "");
  // log the user in
  if (ok) {
    const session = await getSession();
    session.id = user!.id;
    await session.save();
    redirect("/profile");
  } else {
    return {
      fieldErrors: {
        password: ["잘못된 비밀번호입니다."],
        email: [],
      },
    };
  }
};
