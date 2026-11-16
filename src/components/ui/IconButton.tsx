import type { ReactNode } from "react";

interface IIconButtonProps {
  href: string;
  label: string;
  children: ReactNode;
  /** "filled" is the round dark button; "plain" is the bare icon used in the Connect section. */
  variant?: "filled" | "plain";
}

const VARIANT_CLASSES = {
  filled: "size-12 rounded-full bg-raised hover:bg-surface lg:size-[54px]",
  plain: "size-8 hover:opacity-80",
} as const;

export function IconButton({ href, label, children, variant = "filled" }: IIconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center text-accent transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${VARIANT_CLASSES[variant]}`}
    >
      {children}
    </a>
  );
}
