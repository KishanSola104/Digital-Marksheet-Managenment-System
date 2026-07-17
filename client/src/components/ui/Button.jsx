const variantClasses = {
  primary:
    "bg-blue-700 text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",

  secondary:
    "bg-blue-50 text-blue-800 hover:bg-blue-100",

  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  outline:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-5 py-2.5 text-sm gap-2",
};

function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  loading = false,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        font-medium
        transition-all duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}

      {children}
    </button>
  );
}

export default Button;