/*
작성자: 김대엽
파일의 역할: 홈화면에 들어갈 Dashboard
생성 일자: 2024-12-10
수정 일자: 2024-12-28
 */
import ExpenseList from "../expense/ExpenseList";
import {
  getExpensesList,
  userTotalExpensesCount,
} from "@/lib/actions/expense.action";
import PaginationBtn from "../ui/PaginationBtn";
import { redirect } from "next/navigation";

const DashboardView = async ({ page }: { page: string }) => {
  if (isNaN(Number(page))) redirect("/?page=1");
  const expenses = await getExpensesList(Number(page ? page : 1));
  if (expenses?.length === 0 && Number(page) > 1)
    redirect(`/?page=${Number(page) - 1}`);
  const count = await userTotalExpensesCount();
  return (
    <>
      <h1 className="text-3xl font-bold xl:hidden block">Dashboard</h1>
      <ExpenseList expenses={expenses} />
      {count !== null && count > 20 && (
        <PaginationBtn count={count} take={20} url="/" />
      )}
    </>
  );
};

export default DashboardView;
