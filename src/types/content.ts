export interface INavLink {
  label: string;
  href: string;
}

export type TSocialPlatform = "linkedin" | "x" | "instagram";

export interface ISocialLink {
  platform: TSocialPlatform;
  label: string;
  href: string;
}

export interface IProjectInfoRow {
  label: string;
  value: string;
}

export interface IProjectLink {
  label: string;
  href: string;
}

export interface IProject {
  title: string;
  description: string;
  badge?: string;
  info: IProjectInfoRow[];
  links: IProjectLink[];
}

export interface IExperience {
  role: string;
  period: string;
  company?: string;
  description: string;
}

export interface IProfile {
  name: string;
  role: string;
  greeting: string;
  tagline: string;
  projectsIntro: string;
  email: string;
  resumeHref: string;
  portrait: string;
  aboutPhoto: string;
  aboutHeadline: string;
  aboutBody: string;
  capabilitiesIntro: string;
}
