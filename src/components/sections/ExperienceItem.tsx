import type { IExperience } from "@/types/content";

interface IExperienceItemProps {
  item: IExperience;
}

/** One stop on the experience timeline; the line itself is drawn by the parent list. */
export function ExperienceItem({ item }: IExperienceItemProps) {
  return (
    <li className="relative flex flex-col gap-4 pl-8 lg:pl-10">
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 size-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background"
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">{item.period}</p>
        <h3 className="text-lg lg:text-xl">{item.role}</h3>
        {item.company && <p className="text-base text-muted">{item.company}</p>}
      </div>
      <p className="text-base leading-relaxed text-muted lg:text-lg">{item.description}</p>
    </li>
  );
}
