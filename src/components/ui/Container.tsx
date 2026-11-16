import type { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centres content at the design's 1224px width with a 16px mobile gutter. */
export function Container({ children, className = "" }: IContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1256px] px-4 ${className}`}>
      {children}
    </div>
  );
}
