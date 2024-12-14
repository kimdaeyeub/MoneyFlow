import { model, models, Schema, Types } from "mongoose";

export interface IExpense {
  title: string;
  category: string;
  user: Types.ObjectId;
  money: number;
}

const ExpenseSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    money: { type: Number },
  },
  { timestamps: true }
);

const Expense = models?.Expense || model<IExpense>("Expense", ExpenseSchema);

export default Expense;
