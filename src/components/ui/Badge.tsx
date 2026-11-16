interface IBadgeProps {
  label: string;
  className?: string;
}

/** Small dark label on a project ("Professional Work"). */
export function Badge({ label, className = "" }: IBadgeProps) {
  return (
    <span className={`rounded-full bg-surface px-4 py-2 text-sm ${className}`}>
      {label}
    </span>
  );
}
