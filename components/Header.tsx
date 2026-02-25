"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";

const navLinks = [
  { href: "/#about-us", label: "من نحن" },
  { href: "/#our-services", label: "خدماتنا" },
  { href: "/#packages", label: "الباقات" },
  { href: "/articles", label: "المقالات" },
  { href: "/#contact-information", label: "اتصل بنا" },
];

export function Header({
  brandName,
  telephone,
}: HeaderData & { telephone?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed container bg-[#2d262299] backdrop-blur-2xl md:top-1 top-0 border border-[#ffffff14] left-0 md:rounded-full mx-auto right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto md:px-4 px-1">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 font-bold text-main-color md:text-base text-sm">
            <span className="w-8 h-8 rounded-full bg-main-color flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </span>
            <span className="text-white">{brandName}</span>
          </Link>

          {/* Desktop Navigation - Right */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-white/70 transition-colors font-bold text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="toggle mobile menu"
              className="lg:hidden text-white cursor-pointer p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <a
              target="_blank"
              href={`tel:${telephone}`}
              rel="noopener noreferrer"
              className="
            relative inline-flex items-center gap-3
            rounded-full px-6 py-2.5 text-sm font-bold
            text-cyan-400
            border border-cyan-400/30
            bg-cyan-400/10
            backdrop-blur
            overflow-hidden
            transition-all duration-300
            hover:bg-cyan-400
            hover:text-midnight
            hover:border-cyan-400
            hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
            hover:text-black
          ">
              {/* top highlight */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-full" />
              احجز الآن
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-main-background border border-white/40 mt-1 rounded-2xl fixed w-full">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setTimeout(() => setIsMobileMenuOpen(false), 300)
                  }
                  className="text-white hover:text-white/70 transition-colors font-medium py-2">
                  {link.label}
                </Link>
              ))}
              <a
                target="_blank"
                href={`tel:${telephone}`}
                className="bg-white hover:bg-white/90 text-black md:px-6 md:py-3 px-4 py-2 text-sm md:text-base rounded-lg shadow-lg transition-all">
                احجز الآن
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
