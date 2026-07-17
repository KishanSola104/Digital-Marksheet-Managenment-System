const variantClasses = {
  blue: "bg-blue-100 text-blue-800",
  gray: "bg-slate-100 text-slate-600",
  red: "bg-red-100 text-red-700",
  green: "bg-emerald-100 text-emerald-700",
  yellow: "bg-amber-100 text-amber-700",
};

function Badge({
  children,
  variant = "blue",
  size = "sm",
}) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-full font-medium
        ${
          size === "sm"
            ? "px-2 py-0.5 text-xs"
            : "px-3 py-1 text-sm"
        }
        ${variantClasses[variant]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;

/* ------------------------------------------
   Active / Inactive Badge
------------------------------------------- */

export function StatusBadge({ active }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full
        px-2 py-0.5
        text-xs font-medium
        ${
          active
            ? "bg-blue-100 text-blue-800"
            : "bg-slate-100 text-slate-600"
        }
      `}
    >
      <span
        className={`
          w-2 h-2 rounded-full
          ${active ? "bg-blue-600" : "bg-slate-400"}
        `}
      />

      {active ? "Active" : "Inactive"}
    </span>
  );
}

/* ------------------------------------------
   Exam Status Badge
------------------------------------------- */

export function ExamStatusBadge({ status }) {
  const statusClasses = {
    upcoming: "bg-blue-100 text-blue-800",
    ongoing: "bg-amber-100 text-amber-700",
    completed: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        px-2 py-0.5
        text-xs font-medium
        ${statusClasses[status]}
      `}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}