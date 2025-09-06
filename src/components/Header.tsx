/**
 * Site header with logo/title and navigation links.
 * Tailwind is used for quick responsive styling.
 */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/executive-summary", label: "Executive Summary" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
<header className="sticky top-0 z-50 bg-green-700 text-white shadow">
      <div className="container-px flex items-center justify-between py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand-green" />
          <span className="font-bold text-lg">
            Naiad Firm Dynamics Consulting
          </span>
        </Link>

        {/* Simple nav */}
        <nav className="flex items-center gap-4 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "px-3 py-2 rounded-2xl hover:bg-brand-light " +
                  (active ? "bg-brand-light text-brand-green font-semibold" : "")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
