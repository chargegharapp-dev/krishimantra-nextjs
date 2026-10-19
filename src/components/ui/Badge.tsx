import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "outline" | "lime" | "neutral";
}

export function Badge({ children, variant = "success", className, ...props }: BadgeProps) {
  const variantStyles = {
    success: "bg-emerald-100 text-emerald-800 border-emerald-200",
    lime: "bg-lime-100 text-lime-900 border-lime-200",
    outline: "bg-white text-emerald-800 border-emerald-300",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
