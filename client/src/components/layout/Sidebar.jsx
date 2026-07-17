import adminMenu from "../../menus/adminMenu";

import SidebarHeader from "./SidebarHeader";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

function Sidebar({
    user,
    onLogout,
    isCollapsed = false,
}) {
    return (
        <aside
            className={`
                flex
                h-screen
                flex-col
                border-r
                border-slate-700
                bg-slate-900
                transition-all
                duration-300
                ${
                    isCollapsed
                        ? "w-20"
                        : "w-72"
                }
            `}
        >
            {/* Header */}

            <SidebarHeader
                role={user?.role}
            />

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto px-3 py-4">

                <div className="space-y-2">

                    {adminMenu.map((item) => (
                        <SidebarItem
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            path={item.path}
                            isCollapsed={isCollapsed}
                        />
                    ))}

                </div>

            </nav>

            {/* Footer */}

            <SidebarFooter
                user={user}
                onLogout={onLogout}
            />

        </aside>
    );
}

export default Sidebar;