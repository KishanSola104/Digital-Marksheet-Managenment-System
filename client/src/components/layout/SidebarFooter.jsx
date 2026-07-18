import { LogOut } from "lucide-react";

import Button from "../ui/Button";
import UserCard from "./UserCard";

import useAuth from "../../hooks/useAuth";

function SidebarFooter({ isCollapsed = false }) {
  /*
    ---------------------------------------------------
    Authentication
    ---------------------------------------------------
    */

  const { logout } = useAuth();

  return (
    <div className="border-t border-slate-700 p-4">
      <UserCard isCollapsed={isCollapsed} />

      <Button
        variant="ghost"
        className="mt-4 flex w-full items-center justify-start gap-3 rounded-xl text-slate-300 hover:bg-red-600 hover:text-white"
        onClick={logout}
      >
        <LogOut size={18} />

        {!isCollapsed && "Logout"}
      </Button>
    </div>
  );
}

export default SidebarFooter;