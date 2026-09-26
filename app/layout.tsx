import type { Metadata } from "next";
import "./globals.css";
import "./projects.css";
import "./contact-form.css";
import { Toaster } from "sonner";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} — Software Engineer`,
  description: site.intro,
  // metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${site.name} — Software Engineer`,
    description: site.intro,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<Toaster position="bottom-right" richColors closeButton /></body>
    </html>
  );
}
