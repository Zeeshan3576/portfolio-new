import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ITextLinkProps {
  href: string;
  label: string;
  withArrow?: boolean;
}

/** Lime, underlined uppercase link ("Live demo", "More about me"). */
export function TextLink({ href, label, withArrow = false }: ITextLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 text-base font-bold uppercase text-accent transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {label}
      {withArrow && <ArrowUpRight aria-hidden="true" className="size-5" strokeWidth={2} />}
    </Link>
  );
}
