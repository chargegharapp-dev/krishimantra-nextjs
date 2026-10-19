"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  CheckCircle2,
  Heart,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { aboutContent } from "@/content/about";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="bg-white">
      {/* Hero & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#F0FDF4] to-white pt-10 sm:pt-14 pb-12 border-b border-emerald-100">
        <Container size="xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-emerald-700">
              {t("Home", "गृहपृष्ठ")}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-800 font-semibold">{t("About Us", "हाम्रोबारे")}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <Badge variant="success">
              {t("Our Purpose & Values", "हाम्रो उद्देश्य र मूल्यहरू")}
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t("About Krishi Mantra", "कृषि मन्त्रको बारेमा")}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t(aboutContent.tagline, aboutContent.taglineNe)}
            </p>
            <div className="inline-block p-3 rounded-xl bg-emerald-100/60 border border-emerald-200 text-emerald-950 font-bold text-sm sm:text-base">
              🌾 {t(aboutContent.slogan, aboutContent.sloganNe)}
            </div>
          </div>

          {/* Quick Facts Card Table */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs max-w-3xl">
            <table className="w-full text-xs sm:text-sm text-left">
              <tbody className="divide-y divide-slate-100">
                {aboutContent.summaryTable.map((item, idx) => (
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
        </Container>
      </section>

      {/* Main Narrative Content */}
      <Container size="xl" className="py-12 sm:py-16">
        <div className="max-w-4xl space-y-16">
          {/* 1. Who We Are */}
          <section id="who-we-are" className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t(aboutContent.sections[0].title, aboutContent.sections[0].titleNe)}
              </h2>
            </div>
            <div className="pl-11 space-y-3 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                {t(
                  aboutContent.sections[0].content![0],
                  aboutContent.sections[0].contentNe![0]
                )}
              </p>
              <p>
                {t(
                  aboutContent.sections[0].content![1],
                  aboutContent.sections[0].contentNe![1]
                )}
              </p>
            </div>
          </section>

          {/* 2 & 3. Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="bg-emerald-50/50 border-emerald-200 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 block">
                  {t(aboutContent.sections[1].title, aboutContent.sections[1].titleNe)}
                </span>
                <p className="text-slate-700 text-sm sm:text-base mb-4 font-medium">
                  {t(
                    aboutContent.sections[1].content![0],
                    aboutContent.sections[1].contentNe![0]
                  )}
                </p>
                <ul className="space-y-2.5">
                  {aboutContent.sections[1].bullets!.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        {t(
                          bullet,
                          aboutContent.sections[1].bulletsNe
                            ? aboutContent.sections[1].bulletsNe[idx]
                            : bullet
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Vision */}
            <Card className="bg-lime-50/50 border-lime-200 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-lime-900 uppercase tracking-wider mb-2 block">
                  {t(aboutContent.sections[2].title, aboutContent.sections[2].titleNe)}
                </span>
                <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium italic">
                  “
                  {t(
                    aboutContent.sections[2].content![0],
                    aboutContent.sections[2].contentNe![0]
                  )}
                  ”
                </p>
              </div>
            </Card>
          </div>

          {/* 4. What You Can Do */}
          <section id="what-you-can-do" className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                4
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t(aboutContent.sections[3].title, aboutContent.sections[3].titleNe)}
              </h2>
            </div>

            <div className="pl-11 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutContent.sections[3].subsections!.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {t(sub.title, sub.titleNe)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(sub.content, sub.contentNe)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. What Makes Us Different Table */}
          <section id="what-makes-us-different" className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm">
                5
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t(aboutContent.sections[4].title, aboutContent.sections[4].titleNe)}
              </h2>
            </div>

            <div className="pl-11 overflow-x-auto">
              <table className="w-full text-sm rounded-xl border border-emerald-100 overflow-hidden shadow-2xs">
                <thead>
                  <tr className="bg-emerald-50 text-emerald-950 font-bold border-b border-emerald-200">
                    <th className="py-3 px-4 text-left">
                      {t("Our Commitment", "हाम्रो प्रतिबद्धता")}
                    </th>
                    <th className="py-3 px-4 text-left">
                      {t("What It Means for You", "तपाईँका लागि यसको अर्थ")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {aboutContent.sections[4].table!.rows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="py-3 px-4 font-bold text-slate-900 align-top w-1/3">
                        {t(row[0], aboutContent.sections[4].table!.rowsNe![idx][0])}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {t(row[1], aboutContent.sections[4].table!.rowsNe![idx][1])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Designed for Everyone & 7. Safety, Privacy & Trust */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Designed for Everyone */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                {t(aboutContent.sections[5].title, aboutContent.sections[5].titleNe)}
              </h3>
              <ul className="space-y-3">
                {aboutContent.sections[5].bullets!.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {t(
                        bullet,
                        aboutContent.sections[5].bulletsNe
                          ? aboutContent.sections[5].bulletsNe[idx]
                          : bullet
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safety, Privacy & Trust */}
            <div className="p-8 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-4">
              <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>{t(aboutContent.sections[6].title, aboutContent.sections[6].titleNe)}</span>
              </h3>
              <ul className="space-y-3">
                {aboutContent.sections[6].bullets!.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                    <span>
                      {t(
                        bullet,
                        aboutContent.sections[6].bulletsNe
                          ? aboutContent.sections[6].bulletsNe[idx]
                          : bullet
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 8. Note on Advice */}
          <section className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-base mb-1">
                {t(aboutContent.sections[7].title, aboutContent.sections[7].titleNe)}
              </h3>
              <p>
                {t(
                  aboutContent.sections[7].content![0],
                  aboutContent.sections[7].contentNe![0]
                )}
              </p>
            </div>
          </section>

          {/* 9. Message from Our Team */}
          <section className="p-8 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-900 text-white space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-lime-300 font-bold text-sm">
              <Heart className="w-4 h-4 fill-lime-300" />
              <span>{t(aboutContent.sections[8].title, aboutContent.sections[8].titleNe)}</span>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-emerald-50">
              {t(
                aboutContent.sections[8].content![0],
                aboutContent.sections[8].contentNe![0]
              )}
            </p>
            <p className="font-bold text-white text-base">
              — {t(aboutContent.sections[8].content![1], aboutContent.sections[8].contentNe![1])}
            </p>
          </section>

          {/* 10. Contact Us */}
          <section id="contact-us" className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              {t(aboutContent.sections[9].title, aboutContent.sections[9].titleNe)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold">Phone</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
