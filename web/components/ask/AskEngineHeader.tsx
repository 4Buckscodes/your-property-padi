import React from "react";
import { Badge } from "@/components/ui/badge";

export function AskEngineHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
      <Badge variant="teal" className="mb-3 px-3 py-1 text-xs uppercase tracking-wider font-semibold">
        Property Intelligence v1.0
      </Badge>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        Ask Your Property Padi
      </h1>
      <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        Describe a scenario, paste a document title, or ask any property question to receive structured risk analysis, legal document breakdowns, and objective guidance.
      </p>
    </div>
  );
}
