/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 지출내역 리스트
생성 일자: 2024-12-08
수정 일자: 2024-12-22
 */

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Tag from "./Tag";
import { Card } from "./ui/card";

interface IProp {
  expenses: Expense[];
}

const ExpenseList = ({ expenses }: IProp) => {
  if (expenses.length === 0) {
    return (
      <Card className="flex justify-center items-center mt-4 min-h-40 font-medium text-gray-400 w-full">
        지출 내역이 존재하지 않습니다.
      </Card>
    );
  }
  return (
    <Card className="mt-5 w-full px-5 py-4">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                <Tag name={expense.category.name} />
              </TableCell>
              <TableCell>{expense.date.toLocaleDateString("kr-ko")}</TableCell>
              <TableCell>{expense.name}</TableCell>
              <TableCell className="text-right">₩{expense.money}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ExpenseList;
