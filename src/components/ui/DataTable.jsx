import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "./Badge";

export default function DataTable({
  headers,
  rows,
  onAction,
  search = "",
  selectable = false,
}) {
  const filtered = rows.filter((row) =>
    row.join(" ").toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {selectable && (
              <th className="check-cell">
                <input type="checkbox" aria-label="Select all" />
              </th>
            )}
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th />
          </tr>
        </thead>
        <tbody>
          {filtered.map((row, index) => (
            <tr key={index}>
              {selectable && (
                <td>
                  <input
                    type="checkbox"
                    aria-label={`Select row ${index + 1}`}
                  />
                </td>
              )}
              {row.map((value, cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === 0 && String(value).match(/^[A-Z]{1,3}-\d+/) ? (
                    <span className="muted mono">{value}</span>
                  ) : cellIndex === 1 && String(value).length > 0 ? (
                    <strong>{value}</strong>
                  ) : cellIndex === row.length - 1 ? (
                    <Badge
                      tone={
                        /active|approved|open|completed|accepted|processed/i.test(
                          String(value),
                        )
                          ? "green"
                          : /pending|review|screening|expiring|feedback/i.test(
                                String(value),
                              )
                            ? "amber"
                            : "neutral"
                      }
                    >
                      {value}
                    </Badge>
                  ) : (
                    value
                  )}
                </td>
              ))}
              <td>
                <button
                  className="icon-button"
                  onClick={() => onAction?.(row)}
                  aria-label="Row actions"
                >
                  <MoreHorizontal size={17} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filtered.length === 0 && (
        <div className="empty">No matching records found.</div>
      )}
      <div className="table-footer">
        <span>
          Showing {filtered.length} of {rows.length} records
        </span>
        <div className="pagination">
          <button className="icon-button">
            <ChevronLeft size={15} />
          </button>
          <span>1</span>
          <button className="icon-button">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
