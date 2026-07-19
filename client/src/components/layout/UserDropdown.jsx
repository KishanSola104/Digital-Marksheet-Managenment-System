import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    ChevronDown,
    User,
    KeyRound,
    LogOut,
} from "lucide-react";

import useAuth from "../../hooks/useAuth";

function UserDropdown() {

    /*
    ---------------------------------------------------
    Authentication
    ---------------------------------------------------
    */

    const { user, logout, basePath } = useAuth();

    /*
    ---------------------------------------------------
    State
    ---------------------------------------------------
    */

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

    /*
    ---------------------------------------------------
    Close Dropdown on Outside Click
    ---------------------------------------------------
    */

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    /*
    ---------------------------------------------------
    Logout
    ---------------------------------------------------
    */

    function handleLogout() {

        setIsOpen(false);

        logout();

    }

    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            {/* User Button */}

            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-2
                    transition
                    hover:bg-slate-100
                "
            >

                {/* Avatar */}

                <div
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-600
                        font-semibold
                        text-white
                    "
                >
                    {user?.userName?.[0]?.toUpperCase() || "U"}
                </div>

                {/* User Info */}

                <div className="hidden text-left md:block">

                    <p className="text-sm font-semibold text-slate-800">
                        {user?.userName}
                    </p>

                    <p className="text-xs text-slate-500">
                        {user?.role}
                    </p>

                </div>

                <ChevronDown
                    size={18}
                    className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />

            </button>

            {/* Dropdown */}

            {isOpen && (

                <div
                    className="
                        absolute
                        right-0
                        mt-3
                        w-60
                        overflow-hidden
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        shadow-lg
                    "
                >

                    <Link
                        to={`${basePath}/profile`}
                        className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                        onClick={() => setIsOpen(false)}
                    >
                        <User size={18} />
                        My Profile
                    </Link>

                    <Link
                        to={`${basePath}/change-password`}
                        className="
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                        onClick={() => setIsOpen(false)}
                    >
                        <KeyRound size={18} />
                        Change Password
                    </Link>

                    <hr />

                    <button
                        onClick={handleLogout}
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            px-4
                            py-3
                            text-red-600
                            transition
                            hover:bg-red-50
                        "
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>

            )}

        </div>

    );

}

export default UserDropdown;