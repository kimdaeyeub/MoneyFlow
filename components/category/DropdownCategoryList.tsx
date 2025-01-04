import React from "react";
import { getCategoriesList } from "@/lib/actions/category.action";
import CategoryCard from "./CategoryCard";

const DropdownCategoryList = async () => {
  const categories = await getCategoriesList();
  return (
    <div className="w-full flex flex-wrap gap-2">
      {categories &&
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            tag={category.name}
            count={category.expenses.length}
            id={category.id}
          />
        ))}
    </div>
  );
};

export default DropdownCategoryList;
