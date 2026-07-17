import { Link } from "react-router-dom";

function UserCard({
    name = "Kishan Solanki",
    role = "Administrator",
    employeeId = "ADMIN-001",
    avatar = "",
}) {

    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    return (
        <Link
            to="/profile"
            className="block rounded-xl transition-all duration-200 hover:bg-slate-800"
        >
            <div className="flex items-center gap-3 p-3">

                {/* Avatar */}

                {
                    avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            className="h-11 w-11 rounded-full object-cover"
                        />
                    ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">

                            {initials}

                        </div>
                    )
                }

                {/* User Details */}

                <div className="min-w-0 flex-1">

                    <h3 className="truncate text-sm font-semibold text-white">
                        {name}
                    </h3>

                    <p className="truncate text-xs text-slate-400">
                        {employeeId}
                    </p>

                    <p className="truncate text-xs text-blue-400">
                        {role}
                    </p>

                </div>

            </div>
        </Link>
    );
}

export default UserCard;