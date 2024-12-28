/*
작성자: 김대엽
파일의 역할: 목표 설정 폼
생성 일자: 2024-12-28
 */

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { goalFormSchema } from "@/lib/validation";
import { z } from "zod";

interface IProp {
  onSubmit: (values: z.infer<typeof goalFormSchema>) => void;
  defaultValues: {
    day: number;
    week: number;
    month: number;
  };
}

const GoalForm = ({ onSubmit, defaultValues }: IProp) => {
  const form = useForm<z.infer<typeof goalFormSchema>>({
    resolver: zodResolver(goalFormSchema),
    defaultValues: defaultValues,
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3">
        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-nowrap">Daily Goal</FormLabel>
              <FormControl>
                <Input type="number" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="week"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="text-nowrap">Weekly Goal</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="month"
          render={({ field }) => (
            <FormItem className="mt-3">
              <FormLabel className="text-nowrap">Monthly Goal</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end">
          <Button className="mt-6" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default GoalForm;
