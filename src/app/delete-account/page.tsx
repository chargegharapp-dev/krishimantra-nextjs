"use client";

import React from "react";
import Link from "next/link";
import {
  Trash2,
  Shield,
  Smartphone,
  Globe,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import { deleteAccountContent } from "@/content/delete-account";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { DeleteAccountForm } from "@/components/forms/DeleteAccountForm";
import { Accordion } from "@/components/ui/Accordion";

export default function DeleteAccountPage() {
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
          <span className="text-slate-900 font-semibold">{t("Delete Account", "खाता मेटाउने नीति")}</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-8 border-b border-slate-200">
          <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">
            <Trash2 className="w-3.5 h-3.5" />
            {t("Account & Data Deletion Portal", "खाता तथा डाटा मेटाउने पोर्टल")}
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t("Delete Your Krishi Mantra Account", "आफ्नो कृषि मन्त्र खाता मेटाउनुहोस्")}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              "In compliance with Google Play Developer Policy and user privacy rights, Krishi Mantra provides permanent, hassle-free account and personal data deletion.",
              "गुगल प्ले विकासकर्ता नीति र प्रयोगकर्ताको गोपनीयता अधिकारको पालना गर्दै, कृषि मन्त्रले स्थायी र सहज खाता तथा व्यक्तिगत डाटा मेटाउने सुविधा प्रदान गर्दछ।"
            )}
          </p>

          {/* Facts Box */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
            <p>
              <strong>{t("Application:", "अनुप्रयोग:")}</strong> {siteConfig.name}
            </p>
            <p>
              <strong>{t("Package Name:", "प्याकेज नाम:")}</strong> {siteConfig.packageName}
            </p>
            <p>
              <strong>{t("Developer / Operator:", "विकासकर्ता / सञ्चालक:")}</strong>{" "}
              {siteConfig.developerName}, {siteConfig.location}
            </p>
            <p>
              <strong>{t("Deletion Timeline:", "मेटाउने समय सीमा:")}</strong>{" "}
              {t("Within 72 hours from confirmation (backup purge within 30 days)", "पुष्टि भएको ७२ घण्टाभित्र (३० दिनभित्र ब्याकअपबाट समेत)")}
            </p>
          </div>
        </div>

        {/* Two Options Section */}
        <div className="mt-12 space-y-12 max-w-4xl">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("Two Ways to Delete Your Account", "खाता मेटाउने दुई तरिकाहरू")}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                "You can delete your account immediately inside the Android application, or submit a request directly from this public web portal if you have uninstalled the app.",
                "तपाईँले एन्ड्रोइड एप भित्रबाटै तुरुन्त खाता मेटाउन सक्नुहुन्छ वा यदि एप छैन भने यहीँ तलको फारमबाट अनुरोध पठाउन सक्नुहुन्छ।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option A: Inside App */}
            <Card className="p-8 bg-emerald-50/50 border-emerald-200 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-2">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                  <span>{t("Option A: Inside the App (Fastest)", "विकल्प क: एप भित्रबाट (सबैभन्दा छिटो)")}</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  {t(
                    "Takes less than 30 seconds. Works directly from your logged-in device.",
                    "३० सेकेन्ड भन्दा कम समय लाग्छ। लगइन भएको मोबाइलबाट सिधै हुन्छ।"
                  )}
                </p>
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700 list-decimal list-inside font-medium">
                  <li>{t("Open the Krishi Mantra app on your phone", "आफ्नो फोनमा कृषि मन्त्र एप खोल्नुहोस्")}</li>
                  <li>{t("Log in with your mobile number and password", "आफ्नो मोबाइल नम्बर र पासवर्डबाट लगइन गर्नुहोस्")}</li>
                  <li>{t("Go to Settings from the profile tab", "प्रोफाइल ट्याबबाट Settings मा जानुहोस्")}</li>
                  <li>{t("Tap 'Delete Account'", "'Delete Account' विकल्प थिच्नुहोस्")}</li>
                  <li>{t("Confirm deletion on the confirmation screen", "पुष्टि स्क्रिनमा 'Confirm' गर्नुहोस्")}</li>
                </ol>
              </div>

              <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                ✅ {t("Your session ends instantly and deletion starts immediately.", "लगआउट तुरुन्त हुन्छ र डाटा मेटाउने प्रक्रिया सुरु हुन्छ।")}
              </div>
            </Card>

            {/* Option B: Contact Support / Call */}
            <Card className="p-8 bg-slate-50 border-slate-200 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base mb-2">
                  <Globe className="w-5 h-5 text-slate-700" />
                  <span>{t("Option B: Via Email or Phone", "विकल्प ख: इमेल वा फोनमार्फत")}</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  {t(
                    "If you uninstalled the app or lost access to your device, contact our team directly:",
                    "यदि एप हटाइसक्नुभएको छ वा फोन हराएको छ भने सिधै हाम्रो टिमलाई खबर गर्नुहोस्:"
                  )}
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <p>
                    <strong>{t("Email:", "इमेल:")}</strong>{" "}
                    <a href={`mailto:${siteConfig.email}?subject=Delete%20my%20account`} className="text-emerald-700 font-semibold underline">
                      {siteConfig.email}
                    </a>{" "}
                    (Subject: “Delete my account”)
                  </p>
                  <p>
                    <strong>{t("Phone:", "फोन:")}</strong>{" "}
                    <a href={`tel:${siteConfig.phone}`} className="text-emerald-700 font-semibold underline">
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p>
                    <strong>{t("Required Info:", "आवश्यक विवरण:")}</strong>{" "}
                    {t("Your full name and registered mobile number", "तपाईँको पूरा नाम र दर्ता भएको मोबाइल नम्बर")}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                🔒 {t("We will never ask for your password or payment info.", "हामी कहिल्यै पासवर्ड वा बैंक विवरण माग्ने छैनौं।")}
              </div>
            </Card>
          </div>

          {/* Interactive Web Form */}
          <div className="pt-4">
            <DeleteAccountForm />
          </div>

          {/* 3. What We Delete Table */}
          <section className="space-y-4 pt-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("3. What We Delete and Retention Schedule", "३. हामी कुन डाटा मेटाउँछौं र समय तालिका")}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                "When your account is deleted, we permanently erase the following from our live production databases within 72 hours:",
                "तपाईँको खाता मेटाइँदा, हामी ७२ घण्टाभित्र हाम्रा प्रत्यक्ष प्रणालीहरूबाट निम्न विवरण स्थायी रूपमा मेटाउँछौं:"
              )}
            </p>

            <div className="overflow-x-auto">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>{t("Data Category", "डाटाको वर्ग")}</th>
                    <th>{t("Permanently Deleted?", "स्थायी रूपमा मेटाइन्छ?")}</th>
                  </tr>
                </thead>
                <tbody>
                  {deleteAccountContent.sections[2].table!.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold text-slate-800">
                        {t(row[0], deleteAccountContent.sections[2].table?.rowsNe![idx][0])}
                      </td>
                      <td className="text-emerald-800 font-medium">
                        {t(row[1], deleteAccountContent.sections[2].table?.rowsNe![idx][1])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-500 italic">
              {t(
                "Deleted data is also removed from routine disaster-recovery backups within 30 days.",
                "नियमित ब्याकअप चक्र अनुसार ३० दिनभित्र ब्याकअपहरूबाट समेत डाटा पूर्ण रूपमा हटाइन्छ।"
              )}
            </p>
          </section>

          {/* 4. Before You Delete & 5. What We May Keep */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <h3 className="font-bold text-base text-amber-950 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <span>{t("Before You Delete", "खाता मेटाउनु अघि")}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                {deleteAccountContent.sections[3].bullets!.map((b, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {t(b, deleteAccountContent.sections[3].bulletsNe ? deleteAccountContent.sections[3].bulletsNe[idx] : b)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-700" />
                <span>{t("What We May Keep (Limited Cases)", "हामी के राख्न सक्छौं (सीमित अपवाद)")}</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                {deleteAccountContent.sections[4].bullets!.map((b, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {t(b, deleteAccountContent.sections[4].bulletsNe ? deleteAccountContent.sections[4].bulletsNe[idx] : b)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Partial Deletion & 7. After Deletion */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <h3 className="font-bold text-base text-slate-900">
              {t("Delete Only Some of Your Data", "केही डाटा मात्र मेटाउने विकल्प")}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t(
                "If you want specific records removed (such as uploaded photos, voice recordings, or past problem inquiries) without closing your account, simply email support@krishimantra.app specifying what you want deleted. Our team will verify and remove the requested items.",
                "यदि तपाईँ आफ्नो खाता बन्द नगरी केही विशेष विवरण मात्र हटाउन चाहनुहुन्छ भने (जस्तै पठाइएका पुराना फोटो, आवाज सन्देश वा स्थान विवरण), support@krishimantra.app मा इमेल गर्नुहोस्। हामी ती विवरणहरू हटाएर पुष्टि गर्नेछौं।"
              )}
            </p>
          </div>

          {/* 8. FAQ Accordion */}
          <section className="space-y-4 pt-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t("Frequently Asked Questions About Deletion", "खाता मेटाउने सम्बन्धमा बारम्बार सोधिने प्रश्नहरू")}
            </h2>
            <Accordion
              items={deleteAccountContent.sections[7].subsections!.map((sub) => ({
                q: t(sub.title, sub.titleNe),
                a: t(sub.content, sub.contentNe),
              }))}
            />
          </section>

          {/* Quick Links Footer */}
          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-6 text-sm font-semibold">
            <Link href="/privacy-policy" className="text-emerald-700 hover:text-emerald-800">
              ← {t("Read Full Privacy Policy", "पूर्ण गोपनीयता नीति पढ्नुहोस्")}
            </Link>
            <Link href="/contact" className="text-emerald-700 hover:text-emerald-800">
              {t("Contact Support Team", "सहयोग टिमसँग सम्पर्क गर्नुहोस्")} →
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
