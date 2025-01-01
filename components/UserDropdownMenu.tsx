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

interface IProp {
  avatar: string | null | undefined;
}

const UserDropdownMenu = async ({ avatar }: IProp) => {
  // TODO: shadcn Dropdown menu로 변경
  const username = await getUserName();
  return (
    // <div className="relative">

    //   {open && (
    //     <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-md border">
    //       <LogoutBtn />
    //     </div>
    //   )}
    // </div>

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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdownMenu;
