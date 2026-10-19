"use client";

import React, { useState, useEffect } from "react";
import { ListFilter, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface TOCItem {
  id: string;
  number?: string;
  title: string;
  titleNe?: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8 no-print">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full flex items-center justify-between p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl text-emerald-950 font-semibold text-sm"
          aria-expanded={isMobileOpen}
        >
          <div className="flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-emerald-700" />
            <span>{t("Table of Contents", "यस पृष्ठका खण्डहरू")}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 text-emerald-700 ${
              isMobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isMobileOpen && (
          <nav className="mt-2 p-4 bg-white border border-emerald-100 rounded-xl shadow-sm max-h-80 overflow-y-auto">
            <ul className="space-y-2 text-xs">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMobileOpen(false)}
                    className="block py-1 text-slate-600 hover:text-emerald-700 font-medium"
                  >
                    {item.number ? `${item.number}. ` : ""}
                    {t(item.title, item.titleNe)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sticky TOC Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 no-print">
        <div className="sticky top-24 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
            <ListFilter className="w-4 h-4 text-emerald-600" />
            <span>{t("On this page", "यस पृष्ठमा")}</span>
          </div>
          <nav>
            <ul className="space-y-1 text-xs">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block py-1.5 px-2.5 rounded-md transition-colors leading-snug ${
                        isActive
                          ? "bg-emerald-100/80 text-emerald-900 font-bold border-l-2 border-emerald-600 pl-2"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {item.number ? `${item.number}. ` : ""}
                      {t(item.title, item.titleNe)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
