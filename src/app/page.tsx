"use client";

import React from "react";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Sparkles,
  CloudSun,
  ShoppingBag,
  Mic,
  ShieldCheck,
  Languages,
  CheckCircle,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/content/home";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  HelpCircle,
  Sparkles,
  CloudSun,
  ShoppingBag,
  Mic,
  ShieldCheck,
  Languages,
};

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main id="main-content">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDF4] via-emerald-50/40 to-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-emerald-100">
        {/* Subtle Decorative Leaf SVGs */}
        <div className="absolute top-10 left-[-40px] w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[-40px] w-80 h-80 bg-lime-200/25 rounded-full blur-3xl pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Badge variant="success" className="mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                {t(homeContent.hero.badge, homeContent.hero.badgeNe)}
              </Badge>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                {t(homeContent.hero.headline, homeContent.hero.headlineNe)}
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t(homeContent.hero.subhead, homeContent.hero.subheadNe)}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={siteConfig.playStoreUrl}
                  isExternal
                  className="w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>{t(homeContent.hero.primaryCta, homeContent.hero.primaryCtaNe)}</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="/about"
                  className="w-full sm:w-auto"
                >
                  <span>{t(homeContent.hero.secondaryCta, homeContent.hero.secondaryCtaNe)}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {t(homeContent.hero.note, homeContent.hero.noteNe)}
              </p>
            </div>

            {/* Right Column: Phone Mockup Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-white py-8 border-b border-slate-100">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {homeContent.trustStrip.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {t(item.label, item.labelNe)}
                  </span>
                </div>
                <p className="text-xs text-slate-500 pl-6 sm:pl-0">
                  {t(item.desc, item.descNe)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. WHAT IS KRISHI MANTRA */}
      <Section bg="white" className="border-b border-slate-100">
        <Container size="lg" className="text-center max-w-3xl">
          <Badge variant="outline" className="mb-4">
            {t("About the Platform", "प्लेटफर्मको बारेमा")}
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
            {t(homeContent.whatIs.title, homeContent.whatIs.titleNe)}
          </h2>
          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed text-left sm:text-center">
            <p>{t(homeContent.whatIs.p1, homeContent.whatIs.p1Ne)}</p>
            <p>{t(homeContent.whatIs.p2, homeContent.whatIs.p2Ne)}</p>
          </div>
        </Container>
      </Section>

      {/* 4. TWO FEATURE PILLARS */}
      <Section bg="soft" className="border-b border-emerald-100">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Badge variant="success" className="mb-3">
              {t("Core Capabilities", "मुख्य सुविधाहरू")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("Two Pillars of Krishi Mantra", "कृषि मन्त्रका दुई मुख्य खम्बा")}
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              {t(
                "Designed to solve the real everyday hurdles faced by farmers across Nepal.",
                "नेपालभरका किसानहरूले भोग्ने वास्तविक समस्या समाधान गर्न तयार गरिएको।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {homeContent.pillars.map((pillar) => (
              <Card key={pillar.id} className="flex flex-col justify-between bg-white border-emerald-200/70 p-8 sm:p-10 shadow-sm hover:shadow-lg">
                <div>
                  <Badge variant="lime" className="mb-4">
                    {t(pillar.badge, pillar.badgeNe)}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                    {t(pillar.title, pillar.titleNe)}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {t(pillar.description, pillar.descriptionNe)}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>
                          {t(pt, pillar.pointsNe ? pillar.pointsNe[pIdx] : pt)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={pillar.href}
                  className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 gap-1.5 group"
                >
                  <span>{t(pillar.ctaText, pillar.ctaTextNe)}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. FEATURE GRID */}
      <Section bg="white" className="border-b border-slate-100">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-3">
              {t("Built for Farmers", "किसानका लागि निर्मित")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("Everything You Need in One Free App", "एउटै निःशुल्क एपमा तपाईँलाई चाहिने सबै थोक")}
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              {t(
                "Lightweight on budget phones, responsive on slow connections, and strictly truthful.",
                "बजेट फोनमा पनि हल्का, सुस्त इन्टरनेटमा चल्ने, र पूर्णतया सत्य तथ्यमा आधारित।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.features.map((feat, idx) => {
              const IconComponent = iconMap[feat.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-emerald-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {t(feat.title, feat.titleNe)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {t(feat.desc, feat.descNe)}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. HOW IT WORKS */}
      <Section bg="soft" className="border-b border-emerald-100">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Badge variant="success" className="mb-3">
              {t("Simple & Honest Flow", "सरल र सहज प्रक्रिया")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("How Krishi Mantra Works", "कृषि मन्त्र कसरी प्रयोग गर्ने")}
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              {t("Get started in 3 simple steps without credit cards or complex registrations.", "कुनै कार्ड वा झन्झटिलो फारमबिना ३ सरल चरणमा सुरु गर्नुहोस्।")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-emerald-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-emerald-200 block mb-4">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {t(step.title, step.titleNe)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(step.desc, step.descNe)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. WHO IT IS FOR */}
      <Section bg="white" className="border-b border-slate-100">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3">
              {t("Community", "समुदाय")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t("Who is Krishi Mantra For?", "कृषि मन्त्र कसका लागि हो?")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {homeContent.whoItIsFor.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-emerald-50/50 border border-emerald-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {t(item.title, item.titleNe)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(item.desc, item.descNe)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 8. OUR COMMITMENT & TRANSPARENCY */}
      <Section bg="muted" className="border-b border-slate-200/80">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="success" className="mb-3">
              {t("Trust & Safety", "विश्वास र पारदर्शिता")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("Our Commitment to Transparency", "पारदर्शिताप्रतिको हाम्रो प्रतिबद्धता")}
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              {t(
                "We believe in honest technology. Review our legal policies and practices anytime.",
                "हामी इमानदार प्रविधिमा विश्वास गर्दछौं। हाम्रा नीतिहरू जुनसुकै बेला पढ्न सक्नुहुन्छ।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeContent.commitments.map((comm, idx) => (
              <Link
                key={idx}
                href={comm.href}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {t(comm.title, comm.titleNe)}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {comm.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span>{t("Read Policy", "नीति हेर्नुहोस्")}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. FAQ ACCORDION */}
      <Section bg="white" className="border-b border-slate-100">
        <Container size="md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="outline" className="mb-3">
              {t("Got Questions?", "केही सोध्न बाँकी छ?")}
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {t("Frequently Asked Questions", "बारम्बार सोधिने प्रश्नहरू")}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t(
                "Clear answers about our free app, data practices, and marketplace.",
                "हाम्रो निःशुल्क एप, डाटा सुरक्षा र बजार सम्बन्धी स्पष्ट उत्तरहरू।"
              )}
            </p>
          </div>

          <Accordion
            items={homeContent.faqs.map((f) => ({
              q: t(f.q, f.qNe),
              a: t(f.a, f.aNe),
            }))}
          />
        </Container>
      </Section>

      {/* 10. FINAL CALL TO ACTION (Deep Green Band) */}
      <section className="bg-emerald-950 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Soft Background Accent Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl pointer-events-none" />

        <Container size="lg" className="relative z-10 text-center space-y-6">
          <Badge variant="lime" className="mx-auto">
            {t("Join Nepal's Farming Community", "नेपालको किसान समुदायसँग जोडिनुहोस्")}
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            {t(
              "Start learning, asking questions, and trading farm produce today.",
              "आजैबाट कृषि सिक्न, सल्लाह लिन र आफ्ना उत्पादन बिक्री गर्न सुरु गर्नुहोस्।"
            )}
          </h2>

          <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {t(
              "Krishi Mantra is 100% free for life. Available in Nepali and English for all Android phones.",
              "कृषि मन्त्र जीवनभर १००% निःशुल्क छ। सबै एन्ड्रोइड फोनका लागि नेपाली र अंग्रेजीमा उपलब्ध छ।"
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              href={siteConfig.playStoreUrl}
              isExternal
              className="w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              <span>{t("Download on Google Play", "गुगल प्लेबाट डाउनलोड गर्नुहोस्")}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:text-white"
            >
              <span>{t("Contact Support Team", "सहयोग टिमसँग सम्पर्क गर्नुहोस्")}</span>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
