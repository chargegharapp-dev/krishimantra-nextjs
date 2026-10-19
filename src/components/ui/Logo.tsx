import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Krishi Mantra leaf sprout logo"
      role="img"
    >
      <circle cx="24" cy="24" r="22" fill="#F0FDF4" stroke="#DCFCE7" strokeWidth="2" />
      {/* Primary Leaf */}
      <path
        d="M24 38C24 38 24 24 36 16C36 28 28 36 24 38Z"
        fill="#16A34A"
      />
      {/* Secondary Sprout Leaf */}
      <path
        d="M24 38C24 38 23 28 14 22C14 31 20 37 24 38Z"
        fill="#84CC16"
      />
      {/* Central Stem Line */}
      <path
        d="M24 38V12"
        stroke="#14532D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Sun / Growth Accent Spark */}
      <circle cx="34" cy="14" r="3" fill="#EAB308" />
    </svg>
  );
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const pixelSizes = {
    sm: 28,
    md: 38,
    lg: 52,
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-slate-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md p-1 ${className}`}
      aria-label="Krishi Mantra Home"
    >
      <LogoMark size={pixelSizes[size]} className="transition-transform duration-200 group-hover:scale-105" />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${textSizes[size]} text-emerald-900 font-extrabold flex items-center gap-1`}>
            Krishi <span className="text-emerald-600">Mantra</span>
          </span>
          <span className="text-[10px] text-emerald-700 tracking-wider font-semibold uppercase mt-0.5">
            नेपाल • Agriculture
          </span>
        </div>
      )}
    </Link>
  );
}
