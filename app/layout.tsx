import type { Metadata } from "next";
import "./globals.css";
import "./projects.css";
import "./contact-form.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Your Name — Software Engineer",
  description: "A portfolio for Your Name, an independent software engineer and thoughtful digital partner.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — Software Engineer",
    description: "Independent software engineering and digital product work.",
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
