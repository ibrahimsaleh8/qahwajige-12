"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدمات القهوة" },
  { href: "#packages", label: "الباقات المتاحة" },
  { href: "#faq", label: "الأسئلة المتكررة" },
  { href: "#gallery", label: "أعمالنا" },
  { href: "#contact", label: "اتصل بنا" },
];

export function Header({
  brandName,
  telephone,
}: HeaderData & { telephone?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed xl:w-3/4 lg:w-[90%] bg-[#2d262299] backdrop-blur-2xl top-1 border border-[#ffffff14] left-0 rounded-full mx-auto right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
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
              className="bg-[#f2efe9] hover:opacity-80 text-black md:px-6 md:py-3 px-4 py-2 text-sm md:text-base rounded-full shadow-lg transition-all">
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
            className="lg:hidden bg-card-background mt-1 rounded-2xl fixed w-full">
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
