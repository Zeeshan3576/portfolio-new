import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";

import { Header } from "@/components/layout/Header";
import { PROFILE } from "@/content/site";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} | ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
