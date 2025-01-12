"use client";

import { ExpenseForm } from "@/components/forms/ExpenseForm";
import React, { useEffect } from "react";
import { z } from "zod";
import { addExpense } from "@/lib/actions/expense.action";
import { expenseFormSchema } from "@/lib/validation";
import { redirect, useRouter } from "next/navigation";

const AddExpensePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRedirect = () => {
        if (window.innerWidth > 768) {
          router.push("/dashboard");
        }
      };

      handleRedirect();

      window.addEventListener("resize", handleRedirect);

      return () => {
        window.removeEventListener("resize", handleRedirect);
      };
    }
  }, [router]);

  async function onSubmit(values: z.infer<typeof expenseFormSchema>) {
    const { title, category, date, money } = values;

    const newExpnese = await addExpense({
      title,
      category,
      date,
      expense: money,
    });
    if (newExpnese) {
      redirect("/dashboard");
    }
  }
  return (
    <section className="px-3">
      <ExpenseForm
        onSubmit={onSubmit}
        defaultValues={{
          title: "",
          category: "",
          date: new Date(),
          money: 0,
        }}
        mode="ADD"
      />
    </section>
  );
};

export default AddExpensePage;
