import { GraduationCap } from "lucide-react";

function SidebarHeader({
    role = "Administrator",
}) {
    return (
        <div className="border-b border-slate-700 px-6 py-5">

            <div className="flex items-center gap-4">

                {/* Logo */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">

                    <GraduationCap
                        size={24}
                        className="text-white"
                    />

                </div>

                {/* Application Details */}

                <div className="min-w-0">

                    <h2 className="truncate text-lg font-bold text-white">
                        DMMS
                    </h2>

                    <p className="truncate text-sm text-blue-400">
                        {role?.name}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default SidebarHeader;