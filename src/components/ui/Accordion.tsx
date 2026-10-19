"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-emerald-100 last:border-b-0 py-4">
      <button
        type="button"
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left font-semibold text-slate-900 hover:text-emerald-700 transition-colors py-2 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-emerald-600 transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        id={`faq-content-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pt-2 pb-3" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-emerald-100 bg-white rounded-2xl border border-emerald-100 p-6 sm:p-8 shadow-sm", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={idx.toString()}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
