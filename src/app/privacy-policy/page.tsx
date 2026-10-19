"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Trash2, CheckCircle2 } from "lucide-react";
import { privacyContent } from "@/content/privacy";
import { useLanguage } from "@/context/LanguageContext";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CopyAnchorButton } from "@/components/legal/CopyAnchorButton";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  const tocItems = privacyContent.sections.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
    titleNe: s.titleNe,
  }));

  return (
    <LegalLayout
      title={privacyContent.title}
      titleNe={privacyContent.titleNe}
      subtitle={privacyContent.subtitle}
      subtitleNe={privacyContent.subtitleNe}
      introBox="Krishi Mantra operates on strict privacy standards: we collect only minimal information (name, mobile number, password) required to operate the service. We never ask for bank or payment details, never sell data to advertisers, and provide complete account & data deletion within 72 hours."
      introBoxNe="कृषि मन्त्र कडा गोपनीयता मापदण्डमा सञ्चालित छ: हामी सेवा सञ्चालन गर्न आवश्यक न्यूनतम विवरण (नाम, मोबाइल नम्बर, पासवर्ड) मात्र संकलन गर्दछौं। हामी कहिल्यै बैंक वा भुक्तानी विवरण माग्दैनौं, विज्ञापनदाताहरूलाई डाटा बेच्दैनौं र ७२ घण्टाभित्र सम्पूर्ण डाटा मेटाउने सुविधा दिन्छौं।"
      tocItems={tocItems}
      summaryTable={privacyContent.summaryTable}
    >
      {/* Privacy At A Glance Top Card */}
      <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-lime-50/50 border border-emerald-200 shadow-xs">
        <div className="flex items-center gap-2 mb-4 text-emerald-900 font-bold text-lg">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>{t("Privacy at a Glance", "गोपनीयता सारांश (एक नजरमा)")}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {privacyContent.privacyAtAGlance.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-xs sm:text-sm text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Account Callout Box */}
      <div className="mb-12 p-5 rounded-2xl bg-red-50/70 border border-red-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Trash2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-red-950 text-sm">
              {t("Need to delete your account and data?", "आफ्नो खाता र डाटा मेटाउन चाहनुहुन्छ?")}
            </p>
            <p className="text-xs text-red-800/90 mt-0.5">
              {t(
                "You can delete your account inside the app or submit a web request. Personal data is permanently deleted within 72 hours.",
                "तपाईँले एपभित्रबाट वा हाम्रो वेबसाइटबाट अनुरोध पठाउन सक्नुहुन्छ। ७२ घण्टाभित्र व्यक्तिगत डाटा पूर्ण रूपमा मेटाइन्छ।"
              )}
            </p>
          </div>
        </div>
        <Link
          href="/delete-account"
          className="shrink-0 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
        >
          <span>{t("Delete Account Page", "खाता मेटाउने पृष्ठ")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Complete 20 Policy Sections */}
      <div className="space-y-12">
        {privacyContent.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 group">
            <div className="flex items-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-950 tracking-tight">
                {section.number ? `${section.number}. ` : ""}
                {t(section.title, section.titleNe)}
              </h2>
              <CopyAnchorButton anchorId={section.id} />
            </div>

            {/* Paragraphs */}
            {section.content && (
              <div className="space-y-3 mt-3">
                {section.content.map((p, idx) => (
                  <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {t(p, section.contentNe ? section.contentNe[idx] : p)}
                  </p>
                ))}
              </div>
            )}

            {/* Bullets */}
            {section.bullets && (
              <ul className="mt-4 space-y-2 list-disc list-outside pl-5 text-sm sm:text-base text-slate-700">
                {section.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {t(bullet, section.bulletsNe ? section.bulletsNe[idx] : bullet)}
                  </li>
                ))}
              </ul>
            )}

            {/* Tables if any */}
            {section.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="legal-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((h, idx) => (
                        <th key={idx}>
                          {t(h, section.table?.headersNe ? section.table.headersNe[idx] : h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>
                            {t(
                              cell,
                              section.table?.rowsNe
                                ? section.table.rowsNe[rIdx][cIdx]
                                : cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Subsections */}
            {section.subsections && (
              <div className="mt-6 space-y-6 pl-0 sm:pl-3 border-l-0 sm:border-l-2 sm:border-emerald-100">
                {section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="scroll-mt-24 group/sub">
                    <div className="flex items-center">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {t(sub.title, sub.titleNe)}
                      </h3>
                      <CopyAnchorButton anchorId={sub.id} />
                    </div>
                    <div className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                      {t(sub.content, sub.contentNe)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </LegalLayout>
  );
}
