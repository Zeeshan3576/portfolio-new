import type { IProjectInfoRow } from "@/types/content";

interface IProjectInfoTableProps {
  rows: IProjectInfoRow[];
}

export function ProjectInfoTable({ rows }: IProjectInfoTableProps) {
  return (
    <div>
      <h4 className="pb-4 text-base font-medium uppercase">Project info</h4>
      <dl className="border-b border-divider">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between gap-4 border-t border-divider py-4 text-base"
          >
            <dt>{row.label}</dt>
            <dd className="text-right text-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
