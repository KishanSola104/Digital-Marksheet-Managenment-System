import { LogOut } from "lucide-react";

import Button from "../ui/Button";
import UserCard from "./UserCard";

function SidebarFooter({
    user,
    onLogout,
}) {
    return (
        <div className="border-t border-slate-700 p-4">

            <UserCard
                name={user?.name}
                role={user?.role}
                employeeId={user?.employeeId}
                avatar={user?.avatar}
            />

            <Button
                variant="ghost"
                className="mt-4 flex w-full items-center justify-start gap-3 rounded-xl text-slate-300 hover:bg-red-600 hover:text-white"
                onClick={onLogout}
            >
                <LogOut size={18} />

                Logout
            </Button>

        </div>
    );
}

export default SidebarFooter;