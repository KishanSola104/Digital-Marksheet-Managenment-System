function FormInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder = "",
  required = false,
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}

        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      {error && (
        <p className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;