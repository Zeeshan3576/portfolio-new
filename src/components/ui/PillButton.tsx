import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface IPillButtonProps {
  href: string;
  label: string;
  /** Shown inside a dark circle on mobile; desktop shows a dot as in the design. */
  icon: LucideIcon;
  download?: boolean;
}

export function PillButton({ href, label, icon: Icon, download }: IPillButtonProps) {
  return (
    <Link
      href={href}
      download={download}
      className="inline-flex h-12 items-center gap-4 rounded-full bg-accent pr-1 pl-4 text-sm font-bold uppercase text-background transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:h-[54px] lg:gap-8 lg:pr-6 lg:pl-6 lg:text-base"
    >
      {label}
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-full bg-background text-foreground lg:hidden"
      >
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <span aria-hidden="true" className="hidden size-2.5 rounded-full bg-background lg:block" />
    </Link>
  );
}
