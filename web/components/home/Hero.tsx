import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative w-full pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-[#FAFAFA] border-b border-slate-200/60">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F766E_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Trust Pill */}
        <Badge
          variant="teal"
          className="mb-6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-2xs"
        >
          <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#0F766E]" />
          Independent & Objective Property Intelligence
        </Badge>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl">
          Make Property Decisions with{" "}
          <span className="text-[#0F766E]">
            Absolute Confidence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Your digital property advisor for Africa. Eliminate uncertainty in buying, selling, renting, or investing through trusted intelligence and structured risk analysis.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/ask"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full sm:w-auto shadow-md shadow-teal-900/10"
            )}
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] mr-1.5" />
            <span>Ask Property Padi</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <Link
            href="/learn"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto text-slate-700 hover:text-slate-900"
            )}
          >
            <FileCheck className="w-4 h-4 text-[#0F766E] mr-1.5" />
            <span>Explore Knowledge Centre</span>
          </Link>
        </div>

        {/* Key Trust Signals Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full pt-8 border-t border-slate-200/80 text-left">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Zero Sales Commission</h4>
              <p className="text-xs text-slate-500 mt-0.5">We don&apos;t sell houses. Our intelligence is 100% unbiased.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Document Clarity</h4>
              <p className="text-xs text-slate-500 mt-0.5">Understand C of O, Gazette, and Excision before signing.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Scam Prevention</h4>
              <p className="text-xs text-slate-500 mt-0.5">Identify fraud red flags before paying any commitment fee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}