import { useState } from "react";

function Table({
  columns = [],
  data = [],
  keyField = "id",
  emptyMessage = "No records found.",
  loading = false,
  selectable = false,
  onSelectionChange,
}) {
  const [selected, setSelected] = useState(new Set());

  const toggleAll = () => {
    if (selected.size === data.length) {
      setSelected(new Set());
      onSelectionChange?.([]);
      return;
    }

    const allRows = new Set(
      data.map((row) => String(row[keyField]))
    );

    setSelected(allRows);
    onSelectionChange?.([...allRows]);
  };

  const toggleRow = (key) => {
    const next = new Set(selected);

    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }

    setSelected(next);
    onSelectionChange?.([...next]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          <span className="text-sm">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">

        {/* ================= HEADER ================= */}

        <thead className="bg-slate-50 border-b border-slate-200">

          <tr>

            {selectable && (
              <th className="w-12 px-4 py-3">

                <input
                  type="checkbox"
                  checked={
                    data.length > 0 &&
                    selected.size === data.length
                  }
                  onChange={toggleAll}
                  className="rounded border-slate-300"
                />

              </th>
            )}

            {columns.map((column) => (
              <th
                key={column.key}
                style={
                  column.width
                    ? { width: column.width }
                    : {}
                }
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                {column.header}
              </th>
            ))}

          </tr>

        </thead>

        {/* ================= BODY ================= */}

        <tbody>

          {data.length === 0 ? (

            <tr>

              <td
                colSpan={
                  columns.length +
                  (selectable ? 1 : 0)
                }
                className="px-4 py-12 text-center"
              >

                <div className="flex flex-col items-center gap-2 text-slate-400">

                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="16"
                      rx="2"
                    />

                    <path d="M3 9h18" />

                    <path d="M9 9v11" />
                  </svg>

                  {emptyMessage}

                </div>

              </td>

            </tr>

          ) : (

            data.map((row) => {

              const key = String(row[keyField]);

              return (

                <tr
                  key={key}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  {selectable && (
                    <td className="px-4 py-3">

                      <input
                        type="checkbox"
                        checked={selected.has(key)}
                        onChange={() => toggleRow(key)}
                        className="rounded border-slate-300"
                      />

                    </td>
                  )}

                  {columns.map((column) => (

                    <td
                      key={column.key}
                      className="px-4 py-3 text-slate-700"
                    >
                      {column.render
                        ? column.render(row)
                        : row[column.key]}
                    </td>

                  ))}

                </tr>

              );

            })

          )}

        </tbody>

      </table>
    </div>
  );
}

export default Table;

/* ===========================================================
   PAGINATION
=========================================================== */

export function Pagination({
  total,
  page,
  perPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3">

      <p className="text-xs text-slate-500">
        Showing{" "}
        {Math.min(
          (page - 1) * perPage + 1,
          total
        )}
        –
        {Math.min(
          page * perPage,
          total
        )}{" "}
        of {total}
      </p>

      <div className="flex items-center gap-1">

        <button
          onClick={() =>
            onPageChange(page - 1)
          }
          disabled={page === 1}
          className="rounded border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50 disabled:opacity-40"
        >
          Prev
        </button>

        {Array.from(
          {
            length: Math.min(
              totalPages,
              5
            ),
          },
          (_, index) => index + 1
        ).map((p) => (

          <button
            key={p}
            onClick={() =>
              onPageChange(p)
            }
            className={`px-3 py-1 text-xs rounded border ${
              p === page
                ? "bg-blue-700 text-white border-blue-700"
                : "border-slate-200 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>

        ))}

        <button
          onClick={() =>
            onPageChange(page + 1)
          }
          disabled={page === totalPages}
          className="rounded border border-slate-200 px-3 py-1 text-xs hover:bg-slate-50 disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </div>
  );
}