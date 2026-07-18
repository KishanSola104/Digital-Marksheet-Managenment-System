import { NavLink } from "react-router-dom";

function SidebarItem({
  title,
  icon: Icon,
  path,
  isCollapsed = false,
  onClick,
}) {
  return (
    <NavLink
      to={path}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `
        group
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all
        duration-200

        ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }

        ${isCollapsed ? "justify-center px-3" : ""}
        `
      }
    >
      <Icon size={20} className="flex-shrink-0" />

      {!isCollapsed && <span className="truncate">{title}</span>}
    </NavLink>
  );
}

export default SidebarItem;
