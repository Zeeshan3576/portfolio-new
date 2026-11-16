import type { ReactNode } from "react";

interface ISectionTitleProps {
  children: ReactNode;
  as?: "h1" | "h2";
  size?: "hero" | "section";
  className?: string;
}

const SIZE_CLASSES = {
  hero: "text-[52px] lg:text-[101px]",
  section: "text-[44px] lg:text-[76px]",
} as const;

/** Bebas Neue heading used for every large uppercase title in the design. */
export function SectionTitle({
  children,
  as: Tag = "h2",
  size = "section",
  className = "",
}: ISectionTitleProps) {
  return (
    <Tag className={`font-display leading-[0.9] uppercase ${SIZE_CLASSES[size]} ${className}`}>
      {children}
    </Tag>
  );
}
