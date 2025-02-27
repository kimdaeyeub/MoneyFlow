/*
작성자: 김대엽
파일의 역할: 전역으로 사용할 타입 정의
생성 일자: 2024-12-22
수정 일자: 2024-12-28
 */

interface Expense {
  id: string;
  name: string;
  date: Date;
  money: number;
  categoryId: string;
  category: {
    name: string;
    color: string;
  };
}

interface Category {
  id: string;
  name: string;
  color: string;
  expenses: {
    id: string;
    name: string;
    date: Date;
    money: number;
    categoryId: string;
  }[];
}

interface Goal {
  id: string;
  day: number;
  week: number;
  month: number;
}
