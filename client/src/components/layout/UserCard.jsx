import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function UserCard({ isCollapsed = false }) {
    /*
    -----------------------------------------
    Authentication
    -----------------------------------------
    */

    const { user, basePath } = useAuth();

    console.log("UserCard user:", user);

    /*
    -----------------------------------------
    User Details
    -----------------------------------------
    */

    const name = user?.userName || "Unknown User";
    const employeeId = user?.employeeId || "";
    const role = user?.role?.name || "";
    const avatar = user?.profileImage || "";

    /*
    -----------------------------------------
    Avatar Initials
    -----------------------------------------
    */

    const initials = name
        .trim()
        .split(" ")
        .map((word) => word.charAt(0))
        .join("")
        .substring(0, 2)
        .toUpperCase();

    return (
        <Link
            to={`${basePath}/profile`}
            className="block rounded-xl transition hover:bg-slate-800"
        >
            <div className="flex items-center gap-3 p-3">

                {/* Avatar */}

                {avatar ? (
                    <img
                        src={avatar}
                        alt={name}
                        className="h-11 w-11 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                        {initials}
                    </div>
                )}

                {!isCollapsed && (
                    <div className="min-w-0 flex-1">

                        <h3 className="truncate text-sm font-semibold text-white">
                            {name}
                        </h3>

                        {employeeId && (
                            <p className="truncate text-xs text-slate-400">
                                {employeeId}
                            </p>
                        )}

                        <p className="truncate text-xs font-medium text-blue-400">
                            {role}
                        </p>

                    </div>
                )}

            </div>
        </Link>
    );
}

export default UserCard;