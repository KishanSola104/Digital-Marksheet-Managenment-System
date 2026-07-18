import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

import useAuth from "../../hooks/useAuth";

function Sidebar({
    menu,
    isCollapsed = false,
    isMobileOpen = false,
    closeMobileSidebar,
}) {
    /*
    ---------------------------------------------------
    Authentication
    ---------------------------------------------------
    */

    const { user } = useAuth();

    return (
        <aside
            className={`
                fixed
                inset-y-0
                left-0
                z-50
                flex
                flex-col
                border-r
                border-slate-700
                bg-slate-900
                transition-all
                duration-300
                ease-in-out

                ${
                    isMobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }

                lg:translate-x-0
                ${isCollapsed ? "lg:w-20" : "lg:w-72"}
                w-72
            `}
        >
            {/* Header */}

            <SidebarHeader
                role={user?.designation}
                isCollapsed={isCollapsed}
            />

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto px-3 py-4">
                <div className="space-y-2">
                    {menu.map((item) => (
                        <SidebarItem
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            path={item.path}
                            isCollapsed={isCollapsed}
                            onClick={closeMobileSidebar}
                        />
                    ))}
                </div>
            </nav>

            {/* Footer */}

            <SidebarFooter
                isCollapsed={isCollapsed}
            />
        </aside>
    );
}

export default Sidebar;