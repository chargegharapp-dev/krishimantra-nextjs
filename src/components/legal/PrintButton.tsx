"use client";

import React from "react";
import { Printer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PrintButton() {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs no-print focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
      aria-label="Print this legal policy document"
    >
      <Printer className="w-3.5 h-3.5 text-slate-500" />
      <span>{t("Print Document", "प्रिन्ट गर्नुहोस्")}</span>
    </button>
  );
}
