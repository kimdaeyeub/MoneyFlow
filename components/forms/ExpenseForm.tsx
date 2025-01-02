/*
작성자: 김대엽
파일의 역할: 지출추가 다이얼로그에 들어갈 form
생성 일자: 2024-12-15
수정 일자: 2024-12-25
 */

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PopoverContent } from "@radix-ui/react-popover";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { expenseFormSchema } from "@/lib/validation";

interface IProp {
  onSubmit: (values: z.infer<typeof expenseFormSchema>) => Promise<void>;
  defaultValues: {
    title: string;
    category: string;
    date: Date | undefined;
    money: number;
  };
  mode: "EDIT" | "ADD";
  deleteAction?: () => void;
}

export function ExpenseForm({
  onSubmit,
  defaultValues,
  mode,
  deleteAction,
}: IProp) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof expenseFormSchema>>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues: defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 flex flex-col justify-start items-start w-full"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>지출 내용</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>카테고리</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="money"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>비용</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>지출 날짜</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal py-5",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        // format(field.value, "PPP")
                        <span>{field.value.toDateString()}</span>
                      ) : (
                        <span></span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 bg-white dark:bg-[#1E293B] dark:border-gray-600 border shadow-sm rounded-md"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end gap-5 pt-10">
          {mode === "EDIT" && (
            <div
              onClick={deleteAction}
              className="bg-red-500 px-5 text-center py-2 rounded-md text-white hover:bg-red-600 cursor-pointer"
            >
              삭제하기
            </div>
          )}
          <Button type="submit">
            {mode === "ADD" ? "추가하기" : "수정하기"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
