function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
  ...props
}) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-10
          pr-4
          py-2
          text-sm
          border
          border-slate-300
          rounded-lg
          bg-white
          placeholder:text-slate-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
        "
        {...props}
      />
    </div>
  );
}

export default SearchInput;

/* ======================================================
   FORM FIELD
====================================================== */

export function FormField({
  label,
  required = false,
  error,
  children,
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}

      {error && (
        <p className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/* ======================================================
   INPUT
====================================================== */

export function Input({
  error = false,
  className = "",
  ...props
}) {
  return (
    <input
      className={`
        w-full
        rounded-lg
        border
        px-3
        py-2
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-transparent
        ${
          error
            ? "border-red-400"
            : "border-slate-300"
        }
        ${className}
      `}
      {...props}
    />
  );
}

/* ======================================================
   SELECT
====================================================== */

export function Select({
  options = [],
  className = "",
  ...props
}) {
  return (
    <select
      className={`
        w-full
        rounded-lg
        border
        border-slate-300
        bg-white
        px-3
        py-2
        text-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        ${className}
      `}
      {...props}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.value === ""}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

/* ======================================================
   TEXTAREA
====================================================== */

export function Textarea({
  rows = 3,
  className = "",
  ...props
}) {
  return (
    <textarea
      rows={rows}
      className={`
        w-full
        rounded-lg
        border
        border-slate-300
        px-3
        py-2
        text-sm
        resize-none
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        ${className}
      `}
      {...props}
    />
  );
}