import { ArrowUpRight } from "lucide-react";

import { SocialButtons } from "@/components/sections/SocialButtons";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROFILE } from "@/content/site";

export function Hero() {
  return (
    <section className="pt-6 pb-16 lg:pt-8 lg:pb-20">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <SectionTitle as="h1" size="hero">
              {PROFILE.greeting}
              <br />
              {PROFILE.name}.
            </SectionTitle>
            <p className="max-w-[520px] text-base leading-relaxed text-muted lg:text-lg">
              {PROFILE.tagline}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <PillButton href="#contact" label="Contact me" icon={ArrowUpRight} />
            <SocialButtons platforms={["linkedin"]} />
          </div>
        </div>

        <PlaceholderImage
          src={PROFILE.portrait}
          alt={`Portrait of ${PROFILE.name}`}
          width={600}
          height={700}
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="aspect-[343/400] lg:aspect-[600/700]"
        />
      </Container>
    </section>
  );
}
