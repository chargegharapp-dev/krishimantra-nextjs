"use client";

import React, { useState } from "react";
import { Trash2, CheckCircle2, AlertTriangle, Loader2, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

export function DeleteAccountForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    registeredIdentifier: "",
    reason: "",
    permanentConsent: false,
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{
    referenceId: string;
    timeline: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  const reasons = [
    { value: "not_needed", label: "I no longer need the app", labelNe: "मलाई अब यो एप चाहिँदैन" },
    { value: "switching_phone", label: "Switching to a new phone / number", labelNe: "नयाँ फोन वा सिम नम्बर फेर्दैछु" },
    { value: "privacy", label: "Privacy / Data preference", labelNe: "गोपनीयता वा डाटाको कारण" },
    { value: "closed_farm", label: "No longer farming or selling produce", labelNe: "खेतीपाती वा उत्पादन बिक्री बन्द गरेकोले" },
    { value: "other", label: "Other reason", labelNe: "अन्य कारण" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.errors) {
          setFieldErrors(data.errors);
        } else {
          setErrorMessage(data.message || "Failed to submit deletion request.");
        }
      } else {
        setSuccessInfo({
          referenceId: data.referenceId,
          timeline: data.expectedTimeline,
        });
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
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-emerald-950">
          {t("Deletion Request Registered", "खाता मेटाउने अनुरोध दर्ता भयो")}
        </h3>
        <p className="text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
          {t(
            "Your account deletion request has been recorded. Our team will verify account ownership by contacting your registered mobile number and erase all personal data within 72 hours.",
            "तपाईँको खाता मेटाउने अनुरोध दर्ता गरिएको छ। हाम्रो टिमले दर्ता भएको मोबाइल नम्बरमा सम्पर्क गरी स्वामित्व पुष्टि गरेर ७२ घण्टाभित्र सबै व्यक्तिगत डाटा स्थायी रूपमा मेटाउनेछ।"
          )}
        </p>
        <div className="p-4 bg-white rounded-xl border border-emerald-200 max-w-sm mx-auto text-left space-y-1.5">
          <div className="text-xs text-slate-500 uppercase font-semibold">
            {t("Tracking Reference:", "ट्र्याकिङ सन्दर्भ नम्बर:")}
          </div>
          <div className="text-base font-mono font-bold text-emerald-900">
            {successInfo.referenceId}
          </div>
          <div className="text-xs text-slate-600 pt-1">
            <strong>{t("Timeline:", "समय सीमा:")}</strong> {successInfo.timeline}
          </div>
        </div>
        <div className="pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSuccessInfo(null);
              setFormData({
                fullName: "",
                registeredIdentifier: "",
                reason: "",
                permanentConsent: false,
                honeypot: "",
              });
            }}
          >
            {t("Submit Another Request", "अर्को अनुरोध पठाउनुहोस्")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-red-100 shadow-sm"
    >
      <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-red-700 font-bold text-base">
        <Trash2 className="w-5 h-5 text-red-600" />
        <span>{t("Option B: Web Account Deletion Request", "विकल्प ख: अनलाइन खाता मेटाउने अनुरोध")}</span>
      </div>

      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold">
            {t("Security Notice – Never Share Passwords", "सुरक्षा सूचना – पासवर्ड कहिल्यै नदिनुहोस्")}
          </p>
          <p className="mt-0.5">
            {t(
              "Krishi Mantra will never ask for your account password or payment information. We verify deletion requests solely by contacting your registered mobile number.",
              "कृषि मन्त्रले कहिल्यै तपाईँको पासवर्ड वा भुक्तानी विवरण माग्ने छैन। हामी दर्ता भएको मोबाइल नम्बरमा सम्पर्क गरेर मात्र अनुरोध पुष्टि गर्दछौं।"
            )}
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_del">Leave empty</label>
        <input
          id="hp_del"
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
          <label
            htmlFor="del_name"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            {t("Full Name on Account *", "खातामा भएको पूरा नाम *")}
          </label>
          <input
            id="del_name"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder={t("e.g. Hari Prasad Sharma", "उदा. हरि प्रसाद शर्मा")}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          {fieldErrors.fullName && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.fullName[0]}</p>
          )}
        </div>

        {/* Registered Mobile Number or Email */}
        <div>
          <label
            htmlFor="del_id"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            {t("Registered Mobile Number or Email *", "दर्ता गरिएको मोबाइल नम्बर वा इमेल *")}
          </label>
          <input
            id="del_id"
            type="text"
            required
            value={formData.registeredIdentifier}
            onChange={(e) => setFormData({ ...formData, registeredIdentifier: e.target.value })}
            placeholder="+977-98XXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
          />
          {fieldErrors.registeredIdentifier && (
            <p className="text-red-600 text-xs mt-1">
              {fieldErrors.registeredIdentifier[0]}
            </p>
          )}
        </div>
      </div>

      {/* Reason for Deletion (Optional) */}
      <div>
        <label
          htmlFor="del_reason"
          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
        >
          {t("Reason for Deletion (Optional)", "खाता मेटाउनुको कारण (ऐच्छिक)")}
        </label>
        <select
          id="del_reason"
          value={formData.reason}
          onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600 bg-white"
        >
          <option value="">{t("Select an optional reason...", "ऐच्छिक कारण छान्नुहोस्...")}</option>
          {reasons.map((r) => (
            <option key={r.value} value={r.value}>
              {t(r.label, r.labelNe)}
            </option>
          ))}
        </select>
      </div>

      {/* Confirmation Checkbox */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        <div className="flex items-start gap-3">
          <input
            id="del_consent"
            type="checkbox"
            required
            checked={formData.permanentConsent}
            onChange={(e) => setFormData({ ...formData, permanentConsent: e.target.checked })}
            className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-500 mt-0.5"
          />
          <label htmlFor="del_consent" className="text-xs text-slate-800 font-semibold leading-snug">
            {t(
              "I understand that deleting my account is permanent and cannot be undone. All my profile data, problem submissions, listings, and messages will be permanently wiped.",
              "म बुझ्दछु कि मेरो खाता मेटाउने कार्य स्थायी हो र यसलाई पुनः प्राप्त गर्न सकिँदैन। मेरो प्रोफाइल, सोधिएका समस्याहरू, उत्पादन सूची र सन्देशहरू स्थायी रूपमा मेटिनेछन्।"
            )}
          </label>
        </div>
        {fieldErrors.permanentConsent && (
          <p className="text-red-600 text-xs pl-7">
            {fieldErrors.permanentConsent[0]}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white focus-visible:ring-red-600"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-1.5" />
            <span>{t("Submitting Request...", "अनुरोध पठाउँदै...")}</span>
          </>
        ) : (
          <>
            <Trash2 className="w-4 h-4 mr-1.5" />
            <span>{t("Submit Deletion Request", "खाता मेटाउने अनुरोध पठाउनुहोस्")}</span>
          </>
        )}
      </Button>
    </form>
  );
}
