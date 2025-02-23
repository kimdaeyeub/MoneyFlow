/*
작성자: 김대엽
파일의 역할: form에 필요한 validation을 정의한 파일
생성 일자: 2024-12-24
ㅅ정 일자: 2024-12-28
 */

import { z } from "zod";

export const expenseFormSchema = z.object({
  title: z.string().min(2),
  category: z.string().min(1),
  date: z.date({
    required_error: "A date of birth is required.",
  }),
  money: z.coerce.number().min(1),
});

export const goalFormSchema = z.object({
  day: z.coerce.number().min(1),
  week: z.coerce.number().min(1),
  month: z.coerce.number().min(1),
});
