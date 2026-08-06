"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, X, ShieldAlert, FileText, Home, Key, LineChart, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInterfaceProps {
  onSelectPrompt: (promptText: string) => void;
  activePrompt: string;
}

const CATEGORY_FILTERS = [
  { id: "all", label: "All Topics", icon: Search },
  { id: "documents", label: "Land Titles & Documents", icon: FileText },
  { id: "scams", label: "Scam & Fraud Checks", icon: ShieldAlert },
  { id: "buying", label: "Buying Framework", icon: Home },
  { id: "renting", label: "Renting & Leases", icon: Key },
  { id: "investing", label: "Investment & Yield", icon: LineChart },
];

const PRESET_PROMPTS = [
  {
    category: "documents",
    title: "Governor's Consent Verification",
    prompt: "What is Governor's Consent, how long does it take to obtain in Lagos, and what happens if I buy land without it?",
  },
  {
    category: "documents",
    title: "C of O vs. Excision vs. Gazette",
    prompt: "Can you explain the exact hierarchy of land titles in Nigeria: C of O vs. Excision vs. Gazette vs. Deed of Assignment?",
  },
  {
    category: "scams",
    title: "Red Flags for Land Purchase",
    prompt: "What are the most critical red flags I should check for before transferring a commitment deposit for land in Lekki or Epe?",
  },
  {
    category: "scams",
    title: "Fake Agent Detection",
    prompt: "How can I verify if a real estate developer or property agent is legitimate before making payments?",
  },
  {
    category: "buying",
    title: "First-Time Buyer Checklist",
    prompt: "I am buying a 3-bedroom apartment for the first time. What step-by-step verification checklist should I follow?",
  },
  {
    category: "renting",
    title: "Tenants' Quit Notice Rules",
    prompt: "My landlord gave me a 1-month quit notice on a yearly tenancy. Is this legal under Lagos Tenancy Law?",
  },
  {
    category: "investing",
    title: "Shortlet vs Long-Term Renting",
    prompt: "How do I evaluate whether a property in Victoria Island will yield higher net ROI as a shortlet vs a long-term rental?",
  },
];

export function SearchInterface({ onSelectPrompt, activePrompt }: SearchInterfaceProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [inputValue, setInputValue] = useState(initialQuery);
  const [prevQuery, setPrevQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("all");

  if (initialQuery !== prevQuery) {
    setPrevQuery(initialQuery);
    setInputValue(initialQuery);
  }

  useEffect(() => {
    if (initialQuery) {
      onSelectPrompt(initialQuery);
    }
  }, [initialQuery, onSelectPrompt]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSelectPrompt(inputValue.trim());
    }
  };

  const handleClear = () => {
    setInputValue("");
    onSelectPrompt("");
  };

  const filteredPrompts = PRESET_PROMPTS.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      {/* Search Bar Input */}
      <form onSubmit={handleSubmit} className="relative mb-6">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your property question, document title, or legal concern..."
            className="w-full h-14 pl-12 pr-28 text-base text-slate-900 placeholder:text-slate-400 bg-white rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F766E] shadow-sm transition-all"
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-24 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <Button
            type="submit"
            size="sm"
            className="absolute right-2.5 h-9 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D6861] text-white font-medium flex items-center gap-1.5"
          >
            <span>Analyze</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </form>

      {/* Category Intent Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {CATEGORY_FILTERS.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border",
                isActive
                  ? "bg-[#0F766E] text-white border-[#0F766E] shadow-2xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Suggested Prompt Recommendations */}
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Suggested Decision Prompts
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filteredPrompts.map((item, idx) => {
            const isSelected = activePrompt === item.prompt;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setInputValue(item.prompt);
                  onSelectPrompt(item.prompt);
                }}
                className={cn(
                  "p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 bg-white",
                  isSelected
                    ? "border-[#0F766E] ring-2 ring-[#0F766E]/20 bg-teal-50/40"
                    : "border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/60 shadow-2xs"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E]">
                    {item.title}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  &quot;{item.prompt}&quot;
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
