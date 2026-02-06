import { ReactNode } from "react";

interface Column {
  key: string;
  header: string;
  className?: string;
}

interface ClinicalTableProps {
  columns: Column[];
  data: Record<string, ReactNode>[];
  caption?: string;
}

const ClinicalTable = ({ columns, data, caption }: ClinicalTableProps) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm mb-6">
      {caption && (
        <div className="px-4 py-3 bg-muted border-b border-border">
          <p className="text-sm font-medium text-foreground">{caption}</p>
        </div>
      )}
      <table className="table-clinical">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key} className={col.className}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicalTable;