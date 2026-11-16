// All site copy lives here. Pages and sections read their text from this file.
import type {
  IExperience,
  INavLink,
  IProfile,
  IProject,
  ISocialLink,
} from "@/types/content";

export const PROFILE: IProfile = {
  name: "Muhammad Zeeshan",
  role: "Full Stack Developer",
  greeting: "Hi, I am",
  tagline:
    "A Lahore based full stack developer building multi-tenant SaaS platforms with React, Next.js, NestJS and PostgreSQL.",
  projectsIntro:
    "Here are some of the selected projects that showcase my passion for building reliable, full-stack SaaS products.",
  email: "m.zeeshan3576@gmail.com",
  resumeHref: "/resume.pdf",
  portrait: "/placeholders/portrait.svg",
  aboutPhoto: "/placeholders/photo-wide.svg",
  aboutHeadline:
    "I am a full stack developer based in Lahore. Building multi-tenant SaaS and AI features.",
  aboutBody:
    "I build multi-tenant SaaS platforms with React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL. I have shipped production features across three SaaS products, including analytics dashboards, performance evaluations, real-time notifications, RBAC and REST APIs. I also build AI features that turn project documents into complete projects, plus MCP integrations with an OAuth 2.1 authorization server so users can manage their work from Claude, ChatGPT, Cursor and Codex. I write clean, maintainable, tested code and work well in collaborative agile teams.",
  capabilitiesIntro:
    "I work across the whole stack, from React and Next.js frontends to NestJS and FastAPI backends, PostgreSQL and MongoDB databases, and LLM-powered features. I am always looking to add more skills.",
};

export const NAV_LINKS: INavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zeeshan-mughal-005aba2ab",
  },
];

export const PROJECTS: IProject[] = [
  {
    title: "Ontezo — AI-powered project management SaaS",
    description:
      "Delivered 320+ commits on a multi-tenant project management platform: Gantt and calendar views, task dependencies, timesheets, dashboards, performance evaluations with auto-calculated KPIs and real-time notifications. Built an AI pipeline that turns DOCX/PDF specs into complete projects, and an MCP server with OAuth 2.1 used from Claude, ChatGPT and Cursor.",
    badge: "Professional Work",
    info: [
      { label: "Company", value: "AB Ark" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Software Developer" },
      { label: "Stack", value: "Next.js, NestJS, PostgreSQL, FastAPI" },
    ],
    links: [],
  },
  {
    title: "VEIT — Vendor evaluation & procurement platform",
    description:
      "Built a real-time notification system with Socket.IO push, per-user email and in-app preferences, quiet hours and scheduled deadline reminders, raising event coverage from 12 to 45 of 67 events. Developed SAM.gov vendor lookup, bulk offeror onboarding, review workflows and buyer dashboards.",
    badge: "Professional Work",
    info: [
      { label: "Company", value: "AB Ark" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Software Developer" },
      { label: "Stack", value: "React, NestJS, PostgreSQL" },
    ],
    links: [],
  },
  {
    title: "Vowi AI — AI phone agent SaaS platform",
    description:
      "Built tenant onboarding, booking and complaint workflows, analytics dashboards and super-admin features for businesses managing AI phone agents across multiple branches. Integrated Stripe subscription billing, Google OAuth, Google Maps API and AWS S3, and supported API testing and reliability fixes.",
    badge: "Professional Work",
    info: [
      { label: "Company", value: "AB Ark" },
      { label: "Year", value: "2025" },
      { label: "Role", value: "Software Developer" },
      { label: "Stack", value: "React, NestJS, PostgreSQL" },
    ],
    links: [],
  },
];

export const SKILLS: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "NestJS",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Socket.IO",
  "MCP",
  "LLM Pipelines",
  "AWS",
  "Docker",
  "Jest",
];

export const EXPERIENCE: IExperience[] = [
  {
    role: "Software Developer",
    period: "Apr 2026 — Dec 2026",
    company: "AB Ark, Lahore",
    description:
      "Building Ontezo, VEIT and Vowi AI: multi-tenant SaaS products with dashboards, real-time notifications, RBAC, Stripe billing and AI features, including a document-to-project LLM pipeline, a local-first LLM gateway and an MCP server with 100+ tools.",
  },
  {
    role: "MERN Developer Intern",
    period: "Jan 2026 — Mar 2026",
    company: "AB Ark, Lahore",
    description:
      "Built the Ontezo resource management module with role-based access and a capacity-aware Gantt chart, the admin dashboard and its NestJS API, WBS import from Excel, and improved project tables with sorting, filters, pagination and skeleton loading.",
  },
];

export const COPYRIGHT_YEAR = 2026;
