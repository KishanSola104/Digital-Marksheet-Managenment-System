function FormTextarea({
  label,
  name,
  value,
  onChange,
  error,
  rows = 3,
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

      <textarea
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />

      {error && (
        <p className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormTextarea;