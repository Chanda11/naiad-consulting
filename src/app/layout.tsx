/**
 * Root layout: wraps every page.
 * - Sets global metadata (SEO).
 * - Loads global styles.
 * - Provides a consistent Header and Footer.
 */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Naiad Firm Dynamics Consulting",
  description:
    "Synchronizing people and organizations through organizational psychology, communications strategy, training & development, business development, and IT services.",
  keywords: [
    "Organizational Psychology",
    "Communications Strategy",
    "Training and Development",
    "Business Development",
    "IT Services",
    "Zambia",
    "Livingstone",
  ],
  openGraph: {
    title: "Naiad Firm Dynamics Consulting",
    description:
      "Synchronizing people and organizations through psychology, communication, and strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Global navigation bar */}
        <Header />
        {/* Main content area for each route */}
        <main className="min-h-[70vh]">{children}</main>
        {/* Global footer with contact details */}
        <Footer />
      </body>
    </html>
  );
}
