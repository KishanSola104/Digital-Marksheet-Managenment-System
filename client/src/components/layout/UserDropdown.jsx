import { useEffect, useRef, useState } from "react";
import {
    ChevronDown,
    User,
    KeyRound,
    LogOut,
} from "lucide-react";

function UserDropdown({
    user,
    onLogout,
}) {

    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);

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

    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            <button
                onClick={() => setIsOpen(!isOpen)}
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

                <div className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    font-semibold
                    text-white
                ">

                    {user?.name?.charAt(0)}

                </div>

                <div className="hidden text-left md:block">

                    <p className="text-sm font-semibold text-slate-800">
                        {user?.name}
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

                    <button
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                    >
                        <User size={18} />

                        My Profile
                    </button>

                    <button
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                    >
                        <KeyRound size={18} />

                        Change Password
                    </button>

                    <hr />

                    <button
                        onClick={onLogout}
                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            px-4
                            py-3
                            text-red-600
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