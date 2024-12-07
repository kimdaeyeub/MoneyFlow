/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 지출내역 리스트
생성 일자: 2024-12-08
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

const ExpenseList = () => {
  return (
    <Table className="mt-6">
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
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <TableRow key={item}>
            <TableCell className="font-medium">
              <Tag />
            </TableCell>
            <TableCell>2024.12.08</TableCell>
            <TableCell>마트 쇼핑</TableCell>
            <TableCell className="text-right">₩25,000</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpenseList;
