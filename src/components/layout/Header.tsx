import Link from "next/link";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS, PROFILE } from "@/content/site";

export function Header() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 lg:h-24 lg:px-[60px]">
        <Link
          href="/"
          className="font-display text-[26px] leading-none uppercase text-muted lg:text-[32px]"
        >
          {PROFILE.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
