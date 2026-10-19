"use client";

import React from "react";
import { termsContent } from "@/content/terms";
import { useLanguage } from "@/context/LanguageContext";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CopyAnchorButton } from "@/components/legal/CopyAnchorButton";

export default function TermsPage() {
  const { t } = useLanguage();

  const tocItems = termsContent.sections.map((s) => ({
    id: s.id,
    number: s.number,
    title: s.title,
    titleNe: s.titleNe,
  }));

  return (
    <LegalLayout
      title={termsContent.title}
      titleNe={termsContent.titleNe}
      subtitle={termsContent.subtitle}
      subtitleNe={termsContent.subtitleNe}
      introBox="Please read these terms carefully before using the Krishi Mantra app or produce marketplace. By creating an account or browsing produce, you agree to these clear rules designed to ensure a safe, fair, and free platform for Nepal's agricultural community."
      introBoxNe="कृषि मन्त्र एप वा उत्पादन बजार प्रयोग गर्नुअघि कृपया यी सर्तहरू ध्यानपूर्वक पढ्नुहोस्। खाता सिर्जना गरेर वा उत्पादनहरू हेरेर, तपाईँ नेपालको किसान समुदायका लागि सुरक्षित, निष्पक्ष र निःशुल्क प्लेटफर्म सुनिश्चित गर्न तयार गरिएका यी स्पष्ट नियमहरूमा सहमत हुनुहुन्छ।"
      tocItems={tocItems}
      summaryTable={termsContent.summaryTable}
    >
      <div className="space-y-12">
        {termsContent.sections.map((section) => (
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
          </section>
        ))}
      </div>
    </LegalLayout>
  );
}
