"use client";

import React from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Heading } from "@/components/shared/Heading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Eye,
  GraduationCap,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const PILLARS = [
    {
      icon: Lock,
      title: "Zero Sales Commission Policy",
      description:
        "We accept no real estate listing fees, developer commissions, or referral kickbacks. Our sole revenue model is built around unbiased decision intelligence.",
    },
    {
      icon: Eye,
      title: "Clarity Before Sales Pitch",
      description:
        "We prioritize legal truths, title encumbrance warnings, and survey risk maps over polished marketing renders or developer hype.",
    },
    {
      icon: ShieldCheck,
      title: "Structured Risk Analysis",
      description:
        "Every property query is evaluated through a structured framework breaking down title security, statutory consent rules, and due-diligence checklists.",
    },
    {
      icon: GraduationCap,
      title: "Empowering Diaspora & Local Buyers",
      description:
        "Whether buying from Lagos, London, Toronto, or Houston, Padi equips you with the exact verification steps required before wiring funds.",
    },
  ];

  const METHODOLOGY_STEPS = [
    {
      step: "Stage 01",
      title: "Scenario & Document Input",
      description:
        "Users input property questions, land title documents (e.g. C of O, Excision, Gazette), or transaction scenarios into Your Property Padi Platform.",
    },
    {
      step: "Stage 02",
      title: "Statutory & Legal Mapping",
      description:
        "The system cross-references land laws (such as the Land Use Act 1978 and State Tenancy Statutes) to determine legal rights, perfection steps, and mandatory approvals.",
    },
    {
      step: "Stage 03",
      title: "Risk Matrix & Red Flag Identification",
      description:
        "Identifies critical hazards including government acquisition zones, unverified power of attorney documents, double-sale traps, and invalid quit notice periods.",
    },
    {
      step: "Stage 04",
      title: "Actionable Due-Diligence Checklist",
      description:
        "Outputs a clear, 3-to-5 step verification checklist and connects users to verified, independent human professionals when physical search is required.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <SectionContainer variant="white" className="py-12 md:py-16">
        <Heading
          badge="Platform Mission"
          title="Democratizing Property Intelligence Across Africa"
          subtitle="Your Property Padi was built to eliminate fraud, legal confusion, and financial loss in real estate transactions through structured reasoning and independent guidance."
          align="left"
        />

        {/* Core Metric Banner */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/60">
            <span className="text-2xl font-black text-[#0F766E]">100%</span>
            <h4 className="text-xs font-bold text-slate-900 mt-1">Unbiased & Independent</h4>
            <p className="text-xs text-slate-500 mt-0.5">Zero agent commissions or listing bias.</p>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60">
            <span className="text-2xl font-black text-[#854D0E]">24+</span>
            <h4 className="text-xs font-bold text-slate-900 mt-1">Title Verification Guides</h4>
            <p className="text-xs text-slate-500 mt-0.5">Covering C of O, Consent, Excision & Gazette.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-100/80 border border-slate-200/70">
            <span className="text-2xl font-black text-slate-900">4-Stage</span>
            <h4 className="text-xs font-bold text-slate-900 mt-1">Intelligence Methodology</h4>
            <p className="text-xs text-slate-500 mt-0.5">From scenario input to verified action plan.</p>
          </div>
        </div>
      </SectionContainer>

      {/* Pillars Section */}
      <SectionContainer variant="default">
        <div className="space-y-12">
          <Heading
            badge="Product Principles"
            title="Why Trust Your Property Padi?"
            subtitle="Built on uncompromising objectivity and legal clarity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Card key={idx} className="bg-white border-slate-200/80 p-6 flex flex-col justify-between shadow-2xs">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#0F766E] shrink-0 ring-1 ring-teal-900/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-900 mb-1">
                        {p.title}
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-600 leading-relaxed">
                        {p.description}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Methodology Section */}
      <SectionContainer variant="white">
        <div id="methodology" className="space-y-10">
          <Heading
            badge="Intelligence Architecture"
            title="The Padi 4-Stage Intelligence Framework"
            subtitle="How we transform complex property questions into objective, actionable clarity."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((m, idx) => (
              <Card key={idx} className="bg-[#FFFFFF] border-slate-200/80 p-5 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-[#0F766E] uppercase tracking-wider block mb-2 font-mono">
                    {m.step}
                  </span>
                  <CardTitle className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {m.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-6 rounded-3xl bg-teal-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E] text-white shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-base font-bold">Ready to Evaluate Your Property Scenario?</h4>
                <p className="text-xs text-teal-200 mt-0.5">
                  Access Ask Padi Intelligence to test your query against our framework.
                </p>
              </div>
            </div>
            <Link href="/ask">
              <Button size="lg" variant="gold" className="shrink-0 gap-2 font-semibold">
                <span>Ask Property Padi</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
