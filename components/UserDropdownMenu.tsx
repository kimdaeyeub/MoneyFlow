import { getUserName } from "@/lib/actions/user.action";
import LogoutBtn from "./btn/LogoutBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategoriesList } from "@/lib/actions/category.action";
import CategoryCard from "./CategoryCard";

interface IProp {
  avatar: string | null | undefined;
}

const UserDropdownMenu = async ({ avatar }: IProp) => {
  // TODO: shadcn Dropdown menu로 변경
  const username = await getUserName();
  const categories = await getCategoriesList();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {avatar ? (
          <div
            style={{ backgroundImage: `url(${avatar})` }}
            className="rounded-full size-12 bg-gray-100 bg-cover bg-center"
          />
        ) : (
          <div className="rounded-full size-12 bg-blue-300" />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuLabel className="py-3">{username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="lg:hidden flex flex-col items-start gap-3 py-2">
          <h1>카테고리</h1>
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
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
