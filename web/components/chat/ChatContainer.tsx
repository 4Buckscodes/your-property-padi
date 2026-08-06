"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Search,
  ArrowRight,
  X,
  ShieldAlert,
  FileText,
  Home,
  Key,
  LineChart,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Bot,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatMessageItem, MessageItem } from "./ChatMessageItem";

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

export function ChatContainer() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [analysisProgressStep, setAnalysisProgressStep] = useState<string>("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle URL search query trigger on initial load
  useEffect(() => {
    if (initialQuery && messages.length === 0) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const handleSendMessage = async (promptText: string) => {
    const queryToSubmit = promptText.trim();
    if (!queryToSubmit || isLoading) return;

    const userMessage: MessageItem = {
      id: `user-${Date.now()}`,
      role: "user",
      content: queryToSubmit,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setAnalysisProgressStep("Analyzing goal & retrieving trusted knowledge base...");

    try {
      setTimeout(() => setAnalysisProgressStep("Evaluating key risks & statutory laws..."), 600);
      setTimeout(() => setAnalysisProgressStep("Synthesizing step-by-step verification checklist..."), 1200);

      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: queryToSubmit }),
      });

      if (!res.ok) {
        throw new Error("Failed to retrieve intelligence analysis.");
      }

      const data = await res.json();

      const assistantMessage: MessageItem = {
        id: data.id || `assistant-${Date.now()}`,
        role: "assistant",
        analysis: data,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat analysis error:", err);
      // Fallback error message
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          analysis: {
            id: `err-${Date.now()}`,
            query: queryToSubmit,
            category: "general",
            executiveSummary: "Unable to process analysis query right now. Please try again or rephrase your question.",
            keyRisks: ["Connection timeout or network failure."],
            verificationSteps: [],
            suggestedQuestions: ["What documents are required for land purchase?"],
            disclaimer: "System guidance alert.",
            timestamp: new Date().toISOString(),
          },
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
      setAnalysisProgressStep("");
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
    setInputValue("");
  };

  const filteredPrompts = PRESET_PROMPTS.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col space-y-6">
      {/* Header bar actions when active conversation exists */}
      {messages.length > 0 && (
        <div className="flex items-center justify-between p-3.5 px-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Active Property Intelligence Session ({messages.filter((m) => m.role === "assistant").length} Analyses)
            </span>
          </div>
          <button
            type="button"
            onClick={handleClearHistory}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Analysis Session</span>
          </button>
        </div>
      )}

      {/* Preset Prompts Selector (visible when session is fresh) */}
      {messages.length === 0 && (
        <div className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-2xs">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0F766E]" />
              <span>Select a Decision Prompt or Ask Your Question</span>
            </h3>
            <p className="text-xs text-slate-600">
              Pick from curated property decision scenarios or type any custom query below.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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
                      ? "bg-[#0F766E] text-white border-[#0F766E]"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Preset Prompts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredPrompts.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(item.prompt)}
                className="p-4 rounded-2xl border border-slate-200/80 hover:border-[#0F766E] hover:bg-teal-50/40 text-left transition-all flex flex-col justify-between gap-2 bg-white shadow-2xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E]">
                    {item.title}
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E] opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  &quot;{item.prompt}&quot;
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Render Conversation Messages */}
      <div className="space-y-4">
        {messages.map((msg) => (
          <ChatMessageItem
            key={msg.id}
            message={msg}
            onSelectSuggestedQuestion={(q) => handleSendMessage(q)}
          />
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-3.5 my-6 max-w-4xl mx-auto">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-950 text-[#D4AF37] shrink-0 animate-pulse">
              <Bot className="w-5 h-5" />
            </div>
            <div className="flex-1 p-5 rounded-2xl bg-white border border-teal-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Padi Decision Framework Analyzing...</span>
              </div>
              <p className="text-xs text-slate-600 font-medium italic">
                {analysisProgressStep}
              </p>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0F766E] h-full w-2/3 animate-pulse rounded-full" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Floating Input Form */}
      <div className="sticky bottom-4 z-20 pt-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className="relative flex items-center bg-white rounded-2xl border border-slate-300 shadow-lg focus-within:ring-2 focus-within:ring-[#0F766E] focus-within:border-[#0F766E] transition-all p-1.5"
        >
          <Search className="absolute left-4 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask any property question (e.g. 'How to check if land in Lekki has Gazette?')..."
            className="w-full h-12 pl-11 pr-24 text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
            disabled={isLoading}
          />
          {inputValue && (
            <button
              type="button"
              onClick={() => setInputValue("")}
              className="absolute right-24 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <Button
            type="submit"
            size="sm"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 h-9 px-4 rounded-xl bg-[#0F766E] hover:bg-[#0D6861] text-white font-medium flex items-center gap-1.5 disabled:opacity-50"
          >
            <span>Analyze</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
