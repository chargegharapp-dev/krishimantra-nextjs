"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Download, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: App Identity & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-1">
                <Logo size="sm" showText={false} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Krishi <span className="text-emerald-400">Mantra</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t(siteConfig.tagline, siteConfig.taglineNe)}
            </p>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg text-xs text-emerald-300 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t("Formerly Kheti Mantra", "पहिले 'खेती मन्त्र' भनिन्थ्यो")}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              {t("Quick Links", "द्रुत लिंकहरू")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {t("Home", "गृहपृष्ठ")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  {t("About Us", "हाम्रोबारे")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  {t("Terms & Conditions", "नियम तथा सर्तहरू")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  {t("Privacy Policy", "गोपनीयता नीति")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {t("Contact & Support", "सम्पर्क तथा सहयोग")}
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-emerald-400 transition-colors">
                  {t("Delete Account", "खाता मेटाउनुहोस्")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              {t("Support & Office", "सहयोग तथा कार्यालय")}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{t(siteConfig.supportHours, siteConfig.supportHoursNe)}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Play Compliance & Badge */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              {t("Get the App", "एप प्राप्त गर्नुहोस्")}
            </h4>
            <p className="text-xs text-slate-400">
              {t(
                "Available free on Google Play for all Android smartphones across Nepal.",
                "नेपालभरका सबै एन्ड्रोइड स्मार्टफोनका लागि गुगल प्लेमा निःशुल्क उपलब्ध।"
              )}
            </p>
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl border border-slate-700 transition-colors group"
            >
              <Download className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase leading-none">
                  {siteConfig.playStoreStatus === "coming_soon" ? "Coming Soon on" : "GET IT ON"}
                </p>
                <p className="text-sm font-bold leading-tight">Google Play</p>
              </div>
            </a>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t("Verified Play Store Safe", "गुगल प्ले नीति अनुसार सुरक्षित")}</span>
            </div>
          </div>
        </div>

        {/* Agricultural Advice Disclaimer Box */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed text-center sm:text-left">
          <p className="font-medium text-slate-300 mb-1">
            {t("Agricultural Advice Notice:", "कृषि सल्लाह सम्बन्धी जानकारी:")}
          </p>
          <p>{t(siteConfig.generalDisclaimer, siteConfig.generalDisclaimerNe)}</p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.name} ({siteConfig.developerName}). {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              {t("Terms", "सर्तहरू")}
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">
              {t("Privacy Policy", "गोपनीयता नीति")}
            </Link>
            <span>•</span>
            <Link href="/delete-account" className="hover:text-slate-400 transition-colors">
              {t("Delete Account", "खाता मेटाउने")}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              {t("Support", "सहयोग")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
