import { Menu } from "lucide-react";

import Breadcrumb from "./Breadcrumb";
import UserDropdown from "./UserDropdown";

function Navbar({
    user,
    academicYear,
    academicYears,
    onAcademicYearChange,
    onSidebarToggle,
    onLogout,
}) {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">

            <div className="flex items-center justify-between">

                {/* Left Section */}

                <div className="flex items-center gap-4">

                    <button
                        onClick={onSidebarToggle}
                        className="
                            rounded-lg
                            p-2
                            transition
                            hover:bg-slate-100
                        "
                    >
                        <Menu size={22} />
                    </button>

                    <Breadcrumb />

                </div>

                {/* Right Section */}

                <div className="flex items-center gap-4">

                    <select
                        value={academicYear}
                        onChange={onAcademicYearChange}
                        className="
                            rounded-lg
                            border
                            border-slate-300
                            bg-white
                            px-4
                            py-2
                            text-sm
                            outline-none
                            focus:border-blue-600
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

                    <UserDropdown
                        user={user}
                        onLogout={onLogout}
                    />

                </div>

            </div>

        </header>
    );
}

export default Navbar;