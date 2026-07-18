import { Menu } from "lucide-react";

import Breadcrumb from "./Breadcrumb";
import UserDropdown from "./UserDropdown";

function Navbar({
    academicYear,
    academicYears,
    onAcademicYearChange,
    onSidebarToggle,
}) {
    return (
        <header
            className="
                sticky
                top-0
                z-30
                border-b
                border-slate-200
                bg-white
                shadow-sm
            "
        >
            <div
                className="
                    flex
                    h-16
                    items-center
                    justify-between
                    gap-4
                    px-4
                    sm:px-6
                "
            >
                {/* Left Section */}

                <div className="flex min-w-0 items-center gap-3">

                    {/* Sidebar Toggle */}

                    <button
                        onClick={onSidebarToggle}
                        className="
                            rounded-lg
                            p-2
                            transition
                            hover:bg-slate-100
                            active:scale-95
                        "
                        aria-label="Toggle Sidebar"
                    >
                        <Menu size={22} />
                    </button>

                    {/* Breadcrumb */}

                    <div className="hidden md:block">
                        <Breadcrumb />
                    </div>

                </div>

                {/* Right Section */}

                <div className="flex items-center gap-3">

                    {/* Academic Year */}

                    <select
                        value={academicYear}
                        onChange={onAcademicYearChange}
                        className="
                            hidden
                            rounded-lg
                            border
                            border-slate-300
                            bg-white
                            px-3
                            py-2
                            text-sm
                            outline-none
                            transition
                            focus:border-blue-600
                            sm:block
                        "
                    >
                        {academicYears.map((year) => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>

                    {/* User */}

                    <UserDropdown />

                </div>
            </div>
        </header>
    );
}

export default Navbar;