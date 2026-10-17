import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/content";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Navirah Innovations | Practical Technology & Engineering", template: "%s | Navirah Innovations" },
  description: "Software development, product design and applied technology services shaped around real-world requirements.",
  openGraph: { title: "Navirah Innovations", description: "Building technology. Empowering innovation.", type: "website" },
  robots: { index: true, follow: true }
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
