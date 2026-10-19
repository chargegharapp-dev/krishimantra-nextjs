"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  AlertTriangle,
  ShieldAlert,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { contactContent } from "@/content/contact";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="bg-white py-10 sm:py-14">
      <Container size="xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-emerald-700">
            {t("Home", "गृहपृष्ठ")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold">{t("Contact & Support", "सम्पर्क तथा सहयोग")}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-slate-200">
          <Badge variant="success">
            <MessageSquare className="w-3.5 h-3.5" />
            {t("Dedicated Farmer Support", "समर्पित किसान सेवा")}
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t("We Are Here to Help", "हामी सहयोगका लागि तयार छौं")}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              "Whether you are a farmer with a crop question, a buyer with an order inquiry, or need account assistance, the Krishi Mantra support team is ready to help in Nepali and English.",
              "तपाईँ कृषि सम्बन्धी सल्लाह लिन चाहने किसान हुनुहोस्, अर्डर समस्या भएको खरिदकर्ता हुनुहोस् वा खाता सहायता चाहिने प्रयोगकर्ता, कृषि मन्त्र टिम नेपाली र अंग्रेजीमा निःशुल्क सहयोग गर्न तयार छ।"
            )}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500 pt-2">
            <span>
              <strong>{t("Support is 100% Free", "सहयोग १००% निःशुल्क छ")}</strong>
            </span>
            <span>•</span>
            <span>
              <strong>{t("Average Response:", "औसत प्रतिक्रिया समय:")}</strong>{" "}
              {t("1–2 working days", "१–२ कार्यदिन")}
            </span>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Email */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{t("Support Email", "सहयोग इमेल")}</h3>
            <p className="text-xs text-slate-500 mb-2">{t("Available 24/7 for messages", "सन्देशका लागि २४/७ उपलब्ध")}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-bold text-emerald-700 hover:text-emerald-800 underline break-all"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{t("Phone / WhatsApp", "फोन / ह्वाट्सएप")}</h3>
            <p className="text-xs text-slate-500 mb-2">{t("Call or chat directly", "सिधै कल वा च्याट गर्नुहोस्")}</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              {siteConfig.phone}
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{t("Office Location", "कार्यालयको ठेगाना")}</h3>
            <p className="text-xs text-slate-500 mb-2">{t("Operating base", "मुख्य कार्यालय")}</p>
            <p className="text-sm font-bold text-slate-800">{siteConfig.address}</p>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">{t("Support Hours", "कार्यालय समय")}</h3>
            <p className="text-xs text-slate-500 mb-2">{t("Nepal Time (NPT)", "नेपाल समय")}</p>
            <p className="text-xs font-semibold text-slate-800 leading-snug">
              {t(siteConfig.supportHours, siteConfig.supportHoursNe)}
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {t("Send Us a Message", "हामीलाई सन्देश पठाउनुहोस्")}
              </h2>
              <p className="text-sm text-slate-600">
                {t(
                  "Fill in the form below and our team will get back to you during working hours.",
                  "तलको फारम भर्नुहोस् र हाम्रो टिमले कार्यालय समयभित्र तपाईँलाई सम्पर्क गर्नेछ।"
                )}
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: What We Help With & Fast Support Tips */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <h3 className="font-bold text-base text-emerald-950">
                {t(contactContent.sections[2].title, contactContent.sections[2].titleNe)}
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {contactContent.sections[2].bullets!.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {t(b, contactContent.sections[2].bulletsNe ? contactContent.sections[2].bulletsNe[idx] : b)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
              <h3 className="font-bold text-sm text-slate-900">
                {t("How to Get Faster Resolution", "छिटो समाधान पाउनका लागि")}
              </h3>
              <ul className="space-y-1.5 list-disc list-inside">
                {contactContent.sections[3].bullets!.map((b, idx) => (
                  <li key={idx}>
                    {t(b, contactContent.sections[3].bulletsNe ? contactContent.sections[3].bulletsNe[idx] : b)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Response Times Table */}
        <section className="mt-16 space-y-4 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {t(contactContent.sections[4].title, contactContent.sections[4].titleNe)}
          </h2>
          <p className="text-sm text-slate-600">
            {t(
              contactContent.sections[4].content![0],
              contactContent.sections[4].contentNe![0]
            )}
          </p>

          <div className="overflow-x-auto">
            <table className="legal-table">
              <thead>
                <tr>
                  <th>{t("Type of Request", "अनुरोधको प्रकार")}</th>
                  <th>{t("Target Response Time", "लक्षित समय सीमा")}</th>
                </tr>
              </thead>
              <tbody>
                {contactContent.sections[4].table!.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-semibold text-slate-800">
                      {t(row[0], contactContent.sections[4].table?.rowsNe![idx][0])}
                    </td>
                    <td className="text-slate-600">
                      {t(row[1], contactContent.sections[4].table?.rowsNe![idx][1])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Marketplace Help Subsections */}
        <section className="mt-16 space-y-6 max-w-4xl">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {t(contactContent.sections[5].title, contactContent.sections[5].titleNe)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactContent.sections[5].subsections!.map((sub, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {t(sub.title, sub.titleNe)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(sub.content, sub.contentNe)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency & Account Safety Callouts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Emergency Notice */}
          <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <span>{t("Farming Emergencies Notice", "कृषि तथा पशु आपतकाल सूचना")}</span>
            </div>
            <p className="leading-relaxed">
              {t(
                contactContent.sections[6].content![0],
                contactContent.sections[6].contentNe![0]
              )}
            </p>
          </div>

          {/* Account Security Notice */}
          <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-base">
              <ShieldAlert className="w-5 h-5 text-emerald-700" />
              <span>{t("Stay Safe: Protect Your Account", "सुरक्षित रहनुहोस्: पासवर्ड कहिल्यै नदिनुहोस्")}</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-700">
              {contactContent.sections[7].bullets!.map((b, idx) => (
                <li key={idx}>
                  {t(b, contactContent.sections[7].bulletsNe ? contactContent.sections[7].bulletsNe[idx] : b)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}
