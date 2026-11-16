interface IChipProps {
  label: string;
}

/** Outlined pill used for the skills list. */
export function Chip({ label }: IChipProps) {
  return (
    <li className="rounded-full border border-foreground/40 px-6 py-3 text-sm font-semibold uppercase lg:py-3.5">
      {label}
    </li>
  );
}
