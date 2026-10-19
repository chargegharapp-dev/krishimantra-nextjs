"use client";

import React, { useState } from "react";
import { Link2, Check } from "lucide-react";

export function CopyAnchorButton({ anchorId }: { anchorId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center text-slate-400 hover:text-emerald-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600 ml-2"
      aria-label="Copy section anchor link"
      title="Copy link to section"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-600" />
      ) : (
        <Link2 className="w-4 h-4" />
      )}
    </button>
  );
}
