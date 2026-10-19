"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/layout/Container";

export function Header() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-emerald-100/80 py-2.5"
            : "bg-white border-b border-emerald-50 py-3.5"
        }`}
      >
        <Container size="xl" className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-emerald-700 bg-emerald-50/80 font-bold"
                      : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50"
                  }`}
                >
                  {t(link.label, link.labelNe)}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Bilingual Toggle & Google Play Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle EN | ने */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label="Switch Language / भाषा परिवर्तन गर्नुहोस्"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === "en" ? "नेपाली (ने)" : "English (EN)"}</span>
            </button>

            {/* Google Play CTA Button */}
            <Button
              variant="primary"
              size="sm"
              href={siteConfig.playStoreUrl}
              isExternal
              className="gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{t("Get it on Google Play", "गुगल प्लेमा पाउनुहोस्")}</span>
            </Button>
          </div>

          {/* Mobile Navigation Drawer Trigger */}
          <MobileNav />
        </Container>
      </header>
    </>
  );
}
