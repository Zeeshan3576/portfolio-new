import { BrandIcon } from "@/components/icons/BrandIcons";
import { IconButton } from "@/components/ui/IconButton";
import { SOCIAL_LINKS } from "@/content/site";
import type { TSocialPlatform } from "@/types/content";

interface ISocialButtonsProps {
  /** Which networks to show; defaults to all configured links. */
  platforms?: TSocialPlatform[];
  variant?: "filled" | "plain";
}

export function SocialButtons({ platforms, variant = "filled" }: ISocialButtonsProps) {
  const links = platforms
    ? SOCIAL_LINKS.filter((link) => platforms.includes(link.platform))
    : SOCIAL_LINKS;

  return (
    <ul className={`flex items-center ${variant === "plain" ? "gap-6" : "gap-4"}`}>
      {links.map((link) => (
        <li key={link.platform}>
          <IconButton href={link.href} label={link.label} variant={variant}>
            <BrandIcon platform={link.platform} className="size-6" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
