const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

function Card({
  children,
  className = "",
  onClick,
  hoverable = false,
  padding = "md",
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        border border-slate-200
        rounded-xl
        shadow-sm
        transition-all duration-200
        ${paddingClasses[padding]}
        ${hoverable ? "cursor-pointer hover:border-blue-300 hover:shadow-md" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;

/* =====================================================
   STAT CARD
===================================================== */

export function StatCard({
  label,
  value,
  icon,
  subtitle,
  onClick,
  color = "blue",
}) {
  return (
    <div
      onClick={onClick}
      className={`
        group
        bg-white
        border border-slate-200
        rounded-xl
        p-5
        shadow-sm
        transition-all duration-200
        ${
          onClick
            ? "cursor-pointer hover:border-blue-300 hover:shadow-md"
            : ""
        }
      `}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <h2
            className={`mt-1 text-3xl font-bold ${
              color === "blue"
                ? "text-blue-700"
                : "text-slate-800"
            }`}
          >
            {value}
          </h2>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`
            w-11 h-11
            rounded-lg
            flex items-center justify-center
            ${
              color === "blue"
                ? "bg-blue-50 text-blue-700"
                : "bg-slate-100 text-slate-600"
            }
            ${
              onClick
                ? "group-hover:bg-blue-100"
                : ""
            }
          `}
        >
          {icon}
        </div>
      </div>

      {onClick && (
        <p className="mt-4 text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </p>
      )}
    </div>
  );
}

/* =====================================================
   GRID CARD
===================================================== */

export function GridCard({
  title,
  subtitle,
  meta,
  badge,
  icon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        border border-slate-200
        rounded-xl
        p-4
        shadow-sm
        transition-all duration-200
        ${
          onClick
            ? "cursor-pointer hover:border-blue-300 hover:shadow-md"
            : ""
        }
      `}
    >
      <div className="flex items-start gap-3">

        {icon && (
          <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
            {icon}
          </div>
        )}

        <div className="flex-1 min-w-0">

          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-slate-900">
              {title}
            </h3>

            {badge}
          </div>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-500 truncate">
              {subtitle}
            </p>
          )}

          {meta && (
            <p className="mt-1 text-xs text-slate-400">
              {meta}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}