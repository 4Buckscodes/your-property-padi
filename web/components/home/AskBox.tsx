"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, ArrowRight, Lightbulb } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "What is Governor's Consent and why is it critical?",
  "How do I verify a land title in Lagos before paying?",
  "What red flags should I watch out for when renting?",
  "How do I calculate real rental yield for an investment property?",
];

export function AskBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/ask?q=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/ask");
    }
  };

  const handleChipClick = (promptText: string) => {
    router.push(`/ask?q=${encodeURIComponent(promptText)}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-md shadow-slate-200/50 relative overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-[#0F766E]">
            <ShieldCheck className="h-4 w-4 text-[#0F766E]" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Ask Padi Property Intelligence
          </span>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearch} className="relative flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask any property question (e.g., 'What is Governor's Consent?')..."
              className="w-full h-13 pl-12 pr-4 text-base font-normal text-slate-900 placeholder:text-slate-400 bg-slate-50/80 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="h-13 px-6 rounded-2xl bg-[#0F766E] hover:bg-[#0D6861] text-white font-medium shrink-0 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Ask Padi</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>

        {/* Suggested Prompts */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Lightbulb className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span>Popular decision queries:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleChipClick(prompt)}
                className="text-xs text-slate-700 bg-slate-100/80 hover:bg-teal-50 hover:text-[#0F766E] hover:border-teal-200/80 border border-slate-200/60 px-3 py-1.5 rounded-full transition-all text-left font-medium"
              >
                &quot;{prompt}&quot;
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
