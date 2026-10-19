"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ referenceId: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const topics = [
    { value: "general", label: "General Question", labelNe: "सामान्य सोधपुछ" },
    { value: "account", label: "Account or Login Help", labelNe: "खाता वा लगइन सहायता" },
    { value: "farming", label: "Farming Problem or Consultation", labelNe: "कृषि समस्या वा परामर्श" },
    { value: "order", label: "Marketplace Order / Payment Issue", labelNe: "बजार अर्डर वा भुक्तानी समस्या" },
    { value: "seller", label: "Seller Support & Produce Listings", labelNe: "बिक्रेता सहायता तथा उत्पादन सूची" },
    { value: "privacy", label: "Privacy Request or Data Access", labelNe: "गोपनीयता वा डाटा सम्बन्धी अनुरोध" },
    { value: "delete", label: "Account Deletion Request", labelNe: "खाता मेटाउने अनुरोध" },
    { value: "feedback", label: "Feedback & Suggestions", labelNe: "प्रतिक्रिया तथा सुझाव" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        } else {
          setErrorMessage(data.message || "Failed to submit form.");
        }
      } else {
        setSuccessInfo({ referenceId: data.referenceId });
      }
    } catch {
      setErrorMessage("Network error. Please try again or email support@krishimantra.app directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successInfo) {
    return (
      <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-emerald-950">
          {t("Message Received Successfully!", "सन्देश सफलतापूर्वक प्राप्त भयो!")}
        </h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto">
          {t(
            "Thank you for contacting Krishi Mantra. Our support team in Chitwan will respond within 2 working days.",
            "कृषि मन्त्रमा सम्पर्क गर्नुभएकोमा धन्यवाद। हाम्रो सहयोग टिमले २ कार्यदिनभित्र जवाफ दिनेछ।"
          )}
        </p>
        <div className="inline-block px-4 py-2 bg-white rounded-lg border border-emerald-200 text-xs font-mono text-emerald-900 font-bold">
          {t("Reference ID:", "सन्दर्भ नम्बर:")} {successInfo.referenceId}
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSuccessInfo(null);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                topic: "",
                message: "",
                consent: false,
                honeypot: "",
              });
            }}
          >
            {t("Send Another Message", "अर्को सन्देश पठाउनुहोस्")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot anti-spam field (hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_contact">Leave empty</label>
        <input
          id="hp_contact"
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="contact_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {t("Full Name *", "पूरा नाम *")}
          </label>
          <input
            id="contact_name"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder={t("e.g. Ram Bahadur Thapa", "उदा. राम बहादुर थापा")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
          {fieldErrors.fullName && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="contact_email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {t("Email Address *", "इमेल ठेगाना *")}
          </label>
          <input
            id="contact_email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ram@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
          {fieldErrors.email && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone Number (Optional) */}
        <div>
          <label htmlFor="contact_phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {t("Phone Number (Optional)", "फोन नम्बर (ऐच्छिक)")}
          </label>
          <input
            id="contact_phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+977-98XXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
          />
        </div>

        {/* Inquiry Topic Dropdown */}
        <div>
          <label htmlFor="contact_topic" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            {t("Topic / Category *", "सोधपुछको विषय *")}
          </label>
          <select
            id="contact_topic"
            required
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 bg-white"
          >
            <option value="">{t("Select a topic...", "विषय छान्नुहोस्...")}</option>
            {topics.map((tItem) => (
              <option key={tItem.value} value={tItem.value}>
                {t(tItem.label, tItem.labelNe)}
              </option>
            ))}
          </select>
          {fieldErrors.topic && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.topic[0]}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact_message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          {t("Your Message *", "तपाईँको सन्देश *")}
        </label>
        <textarea
          id="contact_message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={t("Please describe your question or issue in detail...", "कृपया आफ्नो प्रश्न वा समस्या विस्तृत रूपमा लेख्नुहोस्...")}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
        {fieldErrors.message && (
          <p className="text-red-600 text-xs mt-1">{fieldErrors.message[0]}</p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="contact_consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 mt-0.5"
        />
        <label htmlFor="contact_consent" className="text-xs text-slate-600 leading-snug">
          {t(
            "I agree to allow Krishi Mantra to use this information solely to respond to my inquiry in accordance with the Privacy Policy.",
            "म सहमत छु कि कृषि मन्त्रले यो जानकारी केवल मेरो सोधपुछको जवाफ दिन हाम्रो गोपनीयता नीति अनुसार प्रयोग गर्न सक्नेछ।"
          )}
        </label>
      </div>
      {fieldErrors.consent && (
        <p className="text-red-600 text-xs">{fieldErrors.consent[0]}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
            <span>{t("Sending...", "पठाउँदै...")}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-1.5" />
            <span>{t("Send Message", "सन्देश पठाउनुहोस्")}</span>
          </>
        )}
      </Button>
    </form>
  );
}
