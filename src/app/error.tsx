"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error boundary caught:", error);
  }, [error]);

  return (
    <main id="main-content" className="py-24 sm:py-32 bg-white">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto border border-red-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing or contact our support team if the issue persists.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <Button variant="primary" size="md" onClick={() => reset()}>
            <RotateCcw className="w-4 h-4 mr-1.5" />
            <span>Try Again</span>
          </Button>
          <Button variant="outline" size="md" href="/contact">
            <span>Contact Support</span>
          </Button>
        </div>
      </Container>
    </main>
  );
}
