"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/destinations", label: "Destinations" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-navy text-gold text-center py-2.5 px-4 text-sm font-sans">
        <span className="label-caps tracking-widest text-xs">
          🎓 Admissions season is open —{" "}
          <Link href="/contact" className="underline underline-offset-2 hover:text-ivory transition-colors">
            Book your free strategy session today
          </Link>
        </span>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-ivory/95 backdrop-blur-sm" : "bg-ivory"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="heading-section text-navy text-xl lg:text-2xl tracking-wide">
              Elite Ivy
            </span>
            <span className="label-caps text-gold text-[0.6rem]">
              Counseling
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-sans transition-colors duration-200 ${
                  pathname === href
                    ? "text-gold font-semibold"
                    : "text-graphite hover:text-navy"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold/90 transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden text-navy p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ivory border-t border-cream overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-base font-sans py-1 border-b border-cream/60 ${
                      pathname === href ? "text-gold font-semibold" : "text-graphite"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-2 text-center bg-gold text-navy font-semibold py-3 rounded-full"
                >
                  Book Free Consultation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
