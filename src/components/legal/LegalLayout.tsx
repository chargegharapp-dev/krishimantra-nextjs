"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, HelpCircle, Shield, Info } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/layout/Container";
import { TableOfContents, type TOCItem } from "@/components/legal/TableOfContents";
import { PrintButton } from "@/components/legal/PrintButton";

interface LegalLayoutProps {
  title: string;
  titleNe?: string;
  subtitle?: string;
  subtitleNe?: string;
  lastUpdated?: string;
  introBox?: string;
  introBoxNe?: string;
  tocItems: TOCItem[];
  children: React.ReactNode;
  summaryTable?: { label: string; value: string }[];
}

export function LegalLayout({
  title,
  titleNe,
  subtitle,
  subtitleNe,
  lastUpdated = siteConfig.lastUpdatedDate,
  introBox,
  introBoxNe,
  tocItems,
  children,
  summaryTable,
}: LegalLayoutProps) {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-10 sm:py-14 bg-white">
      <Container size="xl">
        {/* Header Hero Area */}
        <div className="max-w-3xl pb-8 border-b border-emerald-100">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t("Official Legal Document", "आधिकारिक कानूनी दस्तावेज")}</span>
            </div>
            <PrintButton />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(title, titleNe)}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base sm:text-lg text-slate-600">
              {t(subtitle, subtitleNe)}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500">
            <span>
              <strong>{t("Effective Date:", "लागू हुने मिति:")}</strong> {lastUpdated}
            </span>
            <span>•</span>
            <span>
              <strong>{t("Applies to:", "लागू हुने क्षेत्र:")}</strong>{" "}
              {siteConfig.name} ({siteConfig.packageName})
            </span>
          </div>

          {/* Plain Language Summary Callout */}
          {introBox && (
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 text-sm leading-relaxed flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">
                  {t("Plain-Language Summary", "सरल भाषामा सारांश")}
                </p>
                <p>{t(introBox, introBoxNe)}</p>
              </div>
            </div>
          )}

          {/* Summary Metadata Table */}
          {summaryTable && summaryTable.length > 0 && (
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
              <table className="w-full text-xs sm:text-sm text-left">
                <tbody className="divide-y divide-slate-100">
                  {summaryTable.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3">
                        {item.label}
                      </td>
                      <td className="py-2.5 px-4 text-slate-900">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Two-Column Body: TOC Sidebar + Document Content */}
        <div className="mt-10 flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Legal Document Content */}
          <main id="main-content" className="flex-1 min-w-0 legal-content">
            {children}

            {/* Questions Box */}
            <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">
                    {t("Questions about this document?", "यस दस्तावेज सम्बन्धी केही प्रश्न छन्?")}
                  </p>
                  <p className="text-slate-600 text-xs mt-0.5">
                    {t(
                      "Our support team in Chitwan, Nepal is available to help clarify any clause.",
                      "हाम्रो चितवन, नेपालस्थित सहयोग टिम जुनसुकै बुँदा स्पष्ट पार्न उपलब्ध छ।"
                    )}
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
              >
                {t("Contact Support", "सम्पर्क गर्नुहोस्")}
              </Link>
            </div>

            {/* Back to Top Floating / Inline Action */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end no-print">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors p-2 rounded"
              >
                <ArrowUp className="w-4 h-4" />
                <span>{t("Back to top", "शीर्षमा जानुहोस्")}</span>
              </button>
            </div>
          </main>

          {/* Sticky Table of Contents on Right */}
          <TableOfContents items={tocItems} />
        </div>
      </Container>
    </div>
  );
}
