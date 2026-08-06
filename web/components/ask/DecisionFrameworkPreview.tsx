import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/shared/EmptyState";
import {
  ShieldCheck,
  ShieldAlert,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  UserCheck,
} from "lucide-react";

interface DecisionFrameworkPreviewProps {
  query: string;
}

export function DecisionFrameworkPreview({ query }: DecisionFrameworkPreviewProps) {
  if (!query) {
    return (
      <EmptyState
        icon={ShieldCheck}
        title="Ready to Analyze Your Property Decision"
        description="Select any prompt above or type your question in the search input to receive a structured intelligence breakdown."
      />
    );
  }

  // Pre-configured decision frameworks for sample queries
  const isGovConsent = query.toLowerCase().includes("governor") || query.toLowerCase().includes("consent");
  const isScamQuery = query.toLowerCase().includes("scam") || query.toLowerCase().includes("red flag") || query.toLowerCase().includes("fake");
  const isRentingQuery = query.toLowerCase().includes("rent") || query.toLowerCase().includes("notice") || query.toLowerCase().includes("tenant");

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Framework Title Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-teal-950 text-white shadow-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
              Padi Decision Analysis
            </span>
            <h2 className="text-base sm:text-lg font-bold leading-tight">
              &quot;{query}&quot;
            </h2>
          </div>
        </div>
        <Badge variant="gold" className="text-xs px-3 py-1 shrink-0">
          Verified Framework v1.0
        </Badge>
      </div>

      {/* 1. Executive Summary */}
      <Card className="bg-white border-slate-200/80 shadow-2xs">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
            <FileCheck className="w-4 h-4 text-[#0F766E]" />
            <span>1. Executive Summary</span>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-slate-700 leading-relaxed space-y-2">
          {isGovConsent ? (
            <p>
              Governor&apos;s Consent is legal approval required under Section 22 of the Land Use Act of 1978 for any transfer of land ownership or mortgage perfection. Without Governor&apos;s Consent, the transaction is considered inchoate (incomplete under state law) and cannot be legally registered at the State Land Registry.
            </p>
          ) : isScamQuery ? (
            <p>
              Property transactions carry significant risk when dealing with unverified title documents, unregistered real estate agents, or land situated in government-reserved corridors. A structured due-diligence procedure is required before making any financial commitment.
            </p>
          ) : isRentingQuery ? (
            <p>
              Tenancy relationships in Nigeria are governed by state tenancy statutes (e.g., Lagos State Tenancy Law 2011). Statutory quit notice periods are strictly mandatory unless a written tenancy agreement specifies an alternative valid notice period signed by both parties.
            </p>
          ) : (
            <p>
              This query requires structured evaluation across legal title validity, physical site survey verification, risk assessment, and financial yield calculation.
            </p>
          )}
        </CardContent>
      </Card>

      {/* 2. Key Risks & Red Flags */}
      <Card className="bg-amber-50/40 border-amber-200/80 shadow-2xs">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#854D0E]">
            <ShieldAlert className="w-4 h-4 text-[#854D0E]" />
            <span>2. Key Risks & Hazards to Avoid</span>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-slate-800 space-y-3">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>Unregistered Transfers:</strong> Purchasing land without verifying if the seller holds a valid root of title or power of attorney.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>Government Acquisition Zones:</strong> Buying land in areas designated for future infrastructure (e.g., coastal highways or airport buffers) where titles cannot be perfected.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm leading-relaxed">
              <strong>Double-Sale Hazards:</strong> Paying money based solely on an unverified layout plan without conducting a physical chartable survey at the Surveyor-General&apos;s Office.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 3. Verification Checklist */}
      <Card className="bg-white border-slate-200/80 shadow-2xs">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
            <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
            <span>3. Required Verification Steps</span>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-slate-700 space-y-3">
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 rounded-full bg-teal-50 text-[#0F766E] font-bold text-xs items-center justify-center shrink-0">
              1
            </span>
            <p className="text-xs sm:text-sm">
              <strong>Official Land Registry Search:</strong> Apply for an official search report at the State Land Registry to confirm encumbrances or mortgages.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 rounded-full bg-teal-50 text-[#0F766E] font-bold text-xs items-center justify-center shrink-0">
              2
            </span>
            <p className="text-xs sm:text-sm">
              <strong>Chartable Surveying:</strong> Engage a registered surveyor to chart coordinates at the Surveyor General&apos;s office to confirm the land is free from government acquisition.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-5 w-5 rounded-full bg-teal-50 text-[#0F766E] font-bold text-xs items-center justify-center shrink-0">
              3
            </span>
            <p className="text-xs sm:text-sm">
              <strong>Deed Execution & Perfection:</strong> Draft a Deed of Assignment with a property lawyer and initiate Governor&apos;s Consent application upon payment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 4. Expert Human Consultation Banner */}
      <div className="p-6 rounded-2xl bg-white border border-teal-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E] shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Need a Verified Human Professional?</h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed max-w-lg">
              Connect with independent, vetted property lawyers and licensed surveyors for physical document verification and legal searches.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D6861] text-white text-xs font-semibold shrink-0 shadow-2xs transition-colors"
        >
          <span>Connect with Professional</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
