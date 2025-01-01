"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { categoryColorList } from "@/lib/colors";
import { Button } from "../ui/button";
import { updateCategory } from "@/lib/actions/category.action";

const UpdateCategoryBtn = ({ category }: { category: Category }) => {
  const [color, setColor] = useState(category.color);
  const [name, setName] = useState(category.name);
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    await updateCategory({ id: category.id, name, color });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>수정</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{category.name} 카테고리 수정</DialogTitle>
          <div className="flex flex-col justify-start items-start pt-10">
            <span>카테고리명</span>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="새로운 카테고리명을 입력해주세요."
              className="mt-3"
            />
            <span className="mt-5">카테고리 색상 변경</span>
            <div className="w-full grid grid-cols-10 mt-3 gap-2 h-fit">
              {categoryColorList.map((item) => (
                <div
                  onClick={() => setColor(item)}
                  className={`w-full aspect-square rounded-sm ${
                    item === color ? "ring-2 dark:ring-white ring-offset-2" : ""
                  }`}
                  key={item}
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
            <div className="w-full flex justify-end mt-7">
              <Button onClick={handleSubmit}>수정하기</Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryBtn;
