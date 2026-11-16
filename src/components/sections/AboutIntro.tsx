import { Download } from "lucide-react";

import { SocialButtons } from "@/components/sections/SocialButtons";
import { Container } from "@/components/ui/Container";
import { PillButton } from "@/components/ui/PillButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PROFILE } from "@/content/site";

export function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-4 border-t border-divider pt-16 lg:pt-20">
      <Container className="flex flex-col gap-12 lg:gap-20">
        <div className="grid gap-6 lg:grid-cols-[474fr_702fr] lg:gap-12">
          <SectionTitle>About me</SectionTitle>

          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-2xl leading-snug lg:text-[32px]">{PROFILE.aboutHeadline}</p>
              <p className="text-base leading-relaxed text-muted lg:text-lg">
                {PROFILE.aboutBody}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PillButton
                href={PROFILE.resumeHref}
                label="Download resume"
                icon={Download}
                download
              />
              <SocialButtons platforms={["linkedin"]} />
            </div>
          </div>
        </div>

        <PlaceholderImage
          src={PROFILE.aboutPhoto}
          alt={`Photo of ${PROFILE.name}`}
          width={1224}
          height={700}
          sizes="(min-width: 1256px) 1224px, 100vw"
          className="aspect-[343/310] lg:aspect-[1224/700]"
        />
      </Container>
    </section>
  );
}
