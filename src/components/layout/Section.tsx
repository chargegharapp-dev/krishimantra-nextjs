import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "soft" | "deep" | "muted";
}

export function Section({ children, className, id, bg = "white", ...props }: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    soft: "bg-[#F0FDF4]",
    deep: "bg-[#14532D] text-white",
    muted: "bg-slate-50",
  };

  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20", bgClasses[bg], className)} {...props}>
      {children}
    </section>
  );
}
