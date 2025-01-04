import { getUserName } from "@/lib/actions/user.action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import DropdownCategoryList from "../category/DropdownCategoryList";
import { Suspense } from "react";

interface IProp {
  avatar: string | null | undefined;
}

const UserDropdownMenu = async ({ avatar }: IProp) => {
  // TODO: shadcn Dropdown menu로 변경
  const username = await getUserName();

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
      <DropdownMenuContent className="w-96 mr-3">
        <DropdownMenuLabel className="py-3">{username}</DropdownMenuLabel>
        <div className="lg:hidden block">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/?view=today" className="py-2 font-medium">
              Today
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/?view=dashboard" className="py-2 font-medium">
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/?view=this week" className="py-2 font-medium">
              This week
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </div>
        <DropdownMenuLabel className="lg:hidden flex flex-col items-start gap-3 py-2">
          <h1 className="font-medium">카테고리</h1>
          {/*  TODO: component화 하기 */}
          <Suspense
            fallback={
              <div className="w-full flex flex-wrap gap-2">
                {[...new Array(6)].map((_, i) => (
                  <div key={i} className="w-20 h-5 rounded-full bg-gray-800" />
                ))}
              </div>
            }
          >
            <DropdownCategoryList />
          </Suspense>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
