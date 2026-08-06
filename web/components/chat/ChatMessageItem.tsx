"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  UserCheck,
  Bot,
  User,
  Sparkles,
  RotateCcw
} from "lucide-react";
import { DecisionAnalysis } from "@/app/api/ask/route";

export interface MessageItem {
  id: string;
  role: "user" | "assistant";
  content?: string;
  analysis?: DecisionAnalysis;
  timestamp: string;
}

interface ChatMessageItemProps {
  message: MessageItem;
  onSelectSuggestedQuestion?: (question: string) => void;
}

export function ChatMessageItem({ message, onSelectSuggestedQuestion }: ChatMessageItemProps) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end my-4">
        <div className="flex items-start gap-2.5 max-w-2xl">
          <div className="bg-[#0F766E] text-white p-4 rounded-2xl rounded-tr-xs shadow-xs">
            <p className="text-sm font-medium leading-relaxed">{message.content}</p>
            <span className="text-[10px] text-teal-200 block mt-1 text-right">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-700 shrink-0">
            <User className="w-4 h-4" />
          </div>
        </div>
      </div>
    );
  }

  const analysis = message.analysis;

  if (!analysis) {
    return null;
  }

  return (
    <div className="flex items-start gap-3.5 my-6 max-w-4xl mx-auto">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-950 text-[#D4AF37] shrink-0 shadow-xs border border-teal-800">
        <Bot className="w-5 h-5" />
      </div>

      <div className="flex-1 space-y-5">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-teal-950 text-white shadow-sm">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
              Padi Property Intelligence Analysis
            </span>
          </div>
          <Badge variant="gold" className="text-[11px] px-2.5 py-0.5 shrink-0">
            Verified Decision Framework
          </Badge>
        </div>

        {/* 1. Executive Summary */}
        <Card className="bg-white border-slate-200/80 shadow-2xs">
          <CardHeader className="pb-2 pt-4 px-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              <FileCheck className="w-4 h-4 text-[#0F766E]" />
              <span>1. Executive Summary</span>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-slate-700 leading-relaxed px-5 pb-4">
            <p>{analysis.executiveSummary}</p>
          </CardContent>
        </Card>

        {/* 2. Key Risks & Hazards to Avoid */}
        {analysis.keyRisks && analysis.keyRisks.length > 0 && (
          <Card className="bg-amber-50/50 border-amber-200/80 shadow-2xs">
            <CardHeader className="pb-2 pt-4 px-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#854D0E]">
                <ShieldAlert className="w-4 h-4 text-[#854D0E]" />
                <span>2. Key Risks & Hazards to Avoid</span>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-slate-800 space-y-2.5 px-5 pb-4">
              {analysis.keyRisks.map((risk, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm leading-relaxed">{risk}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* 3. Required Verification Steps */}
        {analysis.verificationSteps && analysis.verificationSteps.length > 0 && (
          <Card className="bg-white border-slate-200/80 shadow-2xs">
            <CardHeader className="pb-2 pt-4 px-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                <span>3. Recommended Action Checklist</span>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-3 px-5 pb-4">
              {analysis.verificationSteps.map((step) => (
                <div key={step.stepNumber} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 rounded-full bg-teal-50 text-[#0F766E] font-bold text-xs items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">{step.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{step.detail}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Suggested Follow-up Questions */}
        {analysis.suggestedQuestions && analysis.suggestedQuestions.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#0F766E]" />
              <span>Suggested Follow-up Questions</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {analysis.suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectSuggestedQuestion?.(q)}
                  className="text-xs text-slate-700 bg-white hover:bg-teal-50 hover:text-[#0F766E] hover:border-teal-300 border border-slate-200 px-3 py-1.5 rounded-full transition-colors text-left font-medium"
                >
                  &quot;{q}&quot;
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 4. Expert Human Consultation Banner */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800 text-teal-200 shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Need a Verified Independent Professional?</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                Connect with vetted land lawyers and licensed surveyors for physical beacon charting and title registration.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F766E] hover:bg-[#0D6861] text-white text-xs font-semibold shrink-0 transition-colors"
          >
            <span>Consult Professional</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-[11px] text-slate-400 italic px-1">{analysis.disclaimer}</p>
      </div>
    </div>
  );
}
