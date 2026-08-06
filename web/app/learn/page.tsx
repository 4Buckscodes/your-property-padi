"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Heading } from "@/components/shared/Heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Home,
  ShieldAlert,
  Key,
  LineChart,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GuideTopic {
  id: string;
  category: "documents" | "buying" | "scams" | "renting" | "investing";
  title: string;
  subtitle: string;
  readTime: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  steps: string[];
  keyWarning: string;
  askPrompt: string;
}

const GUIDES: GuideTopic[] = [
  {
    id: "gov-consent-guide",
    category: "documents",
    title: "Understanding Governor's Consent in Nigeria",
    subtitle: "Section 22 Land Use Act Compliance & Application Steps",
    readTime: "6 min read",
    level: "Intermediate",
    summary:
      "Governor's Consent is legal authorization required under the Land Use Act of 1978 for any subsequent transaction transferring land rights after an initial Certificate of Occupancy is issued.",
    steps: [
      "Obtain an unencumbered root title (C of O or registered Deed of Assignment).",
      "Submit application at State Land Registry with Form 1C, Deed of Assignment copies, and Survey Plan.",
      "Undergo official chartable survey verification by the Surveyor-General.",
      "Pay mandatory perfection fees: Stamp Duty, Registration Fee, Capital Gains Tax, and Consent Fee.",
      "Receive endorsement stamp signed on behalf of the Executive Governor.",
    ],
    keyWarning:
      "Buying land without perfecting Governor's Consent leaves your legal interest inchoate. The seller retains legal title at the Land Registry until consent is registered.",
    askPrompt: "What is Governor's Consent, how long does it take to obtain in Lagos, and what happens if I buy land without it?",
  },
  {
    id: "c-of-o-vs-gazette",
    category: "documents",
    title: "Land Title Hierarchy: C of O vs Excision vs Gazette",
    subtitle: "Demystifying Root Titles and Government Acquisition Status",
    readTime: "8 min read",
    level: "Advanced",
    summary:
      "Not all land documents represent equal legal security. Understanding whether land is excised, gazetted, committed, or covered by a Certificate of Occupancy prevents total loss of property.",
    steps: [
      "Certificate of Occupancy (C of O): Primary 99-year state grant direct to individual/corporate entity.",
      "Gazette: Official government publication recording excised land released to indigenous communities.",
      "Excision: Administrative process excising land out of global government acquisition.",
      "Deed of Assignment: Transfer document between private buyer and seller (requires Governor's Consent).",
    ],
    keyWarning:
      "Never accept an 'Excision in Process' file as a perfected title. If the government denies the excision application, the land remains committed acquisition.",
    askPrompt: "Can you explain the exact hierarchy of land titles in Nigeria: C of O vs. Excision vs. Gazette vs. Deed of Assignment?",
  },
  {
    id: "buyer-due-diligence",
    category: "buying",
    title: "First-Time Home Buyer Due Diligence Checklist",
    subtitle: "A 7-Step Verification Workflow Before Paying Deposit",
    readTime: "7 min read",
    level: "Beginner",
    summary:
      "Buying property requires rigorous physical and legal verification. Following a systematic due diligence routine ensures money is paid only for verified, unencumbered titles.",
    steps: [
      "Physical Site Inspection: Verify boundaries, drainage, soil type, and existing occupancy.",
      "Survey Plan Coordinate Charting: Submit coordinates at the Surveyor General's Office.",
      "Land Registry Title Search: Confirm registered owner, mortgages, caveats, or pending litigation.",
      "Seller Identity Verification: Match NIN, International Passport, and registered company CAC records.",
      "Contract of Sale Drafting: Ensure payment milestones, default clauses, and vacant possession dates.",
      "Escrow / Bank Transfer: Pay strictly into verified seller bank accounts, never cash to agents.",
      "Immediate Physical Takeover: Erect boundary fencing or pegging immediately after payment.",
    ],
    keyWarning:
      "Do not pay any 'commitment fee' or 'inspection deposit' before seeing original property credentials and verifying agent registration.",
    askPrompt: "I am buying a 3-bedroom apartment for the first time. What step-by-step verification checklist should I follow?",
  },
  {
    id: "scam-red-flags",
    category: "scams",
    title: "Red Flags & Real Estate Fraud Tactics",
    subtitle: "Spotting Fake Developers, Double Sales, and Illegal Layouts",
    readTime: "5 min read",
    level: "Beginner",
    summary:
      "Real estate scams exploit urgency and high buyer demand. Recognizing common fraudulent patterns protects your hard-earned capital.",
    steps: [
      "High-pressure closing tactics: 'Pay today or price increases by 50% tomorrow'.",
      "Refusal to provide survey coordinates prior to deposit payment.",
      "Power of Attorney executed by non-family members without Court Letters of Administration.",
      "Selling land situated directly under high-voltage power lines, canal buffers, or coastal corridors.",
    ],
    keyWarning:
      "If a developer promises 'C of O in view', demand the file number and state land ministry application reference before parting with funds.",
    askPrompt: "What are the most critical red flags I should check for before transferring a commitment deposit for land in Lekki or Epe?",
  },
  {
    id: "tenancy-law-guide",
    category: "renting",
    title: "Tenant Rights & Quit Notice Enforcement Rules",
    subtitle: "Navigating Notice Periods, Caution Fees, and Service Charges",
    readTime: "5 min read",
    level: "Beginner",
    summary:
      "State tenancy statutes provide statutory protection against arbitrary eviction, illegal rent inflation, and unlawful property lockouts.",
    steps: [
      "Yearly Tenancy: Minimum 6-month statutory Notice to Quit required by law.",
      "Half-Yearly Tenancy: Minimum 3-month statutory Notice to Quit.",
      "Monthly Tenancy: Minimum 1-month statutory Notice to Quit.",
      "7-Day Owner's Intention to Apply to Recover Possession must follow expiration of Quit Notice.",
    ],
    keyWarning:
      "Landlords cannot physically lock out tenants or remove roofs without a valid Court Order issued by a Magistrate or High Court.",
    askPrompt: "My landlord gave me a 1-month quit notice on a yearly tenancy. Is this legal under Lagos Tenancy Law?",
  },
  {
    id: "rental-yield-valuation",
    category: "investing",
    title: "Evaluating Gross vs Net Rental Yield & Capital Appreciation",
    subtitle: "Quantitative Property Investment Evaluation Framework",
    readTime: "6 min read",
    level: "Intermediate",
    summary:
      "Accurate investment analysis requires subtracting service charges, management fees, taxes, and vacancy reserves from gross rental income.",
    steps: [
      "Gross Yield Formula = (Annual Gross Rent / Purchase Price) × 100",
      "Net Yield Formula = [(Annual Rent - Annual Expenses - Vacancy Reserve) / Total Investment] × 100",
      "Account for 10-15% annual maintenance and estate service levy.",
      "Factor infrastructure growth corridors (e.g. airport, seaport, rail lines) for capital growth.",
    ],
    keyWarning:
      "High gross rental yields often hide high tenant turnover, heavy maintenance costs, or steep service charge arrears.",
    askPrompt: "How do I evaluate whether a property in Victoria Island will yield higher net ROI as a shortlet vs a long-term rental?",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Intelligence Guides", icon: BookOpen },
  { id: "documents", label: "Land Titles & Documents", icon: FileText },
  { id: "buying", label: "First-Time Buyer", icon: Home },
  { id: "scams", label: "Scam Prevention", icon: ShieldAlert },
  { id: "renting", label: "Tenancy Rights", icon: Key },
  { id: "investing", label: "Investment & Yield", icon: LineChart },
];

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredGuides = GUIDES.filter((guide) => {
    const matchesCategory = activeCategory === "all" || guide.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Header Banner */}
      <SectionContainer variant="white" className="py-12 md:py-16">
        <Heading
          badge="Property Knowledge Centre"
          title="Structured Property Intelligence & Legal Verification Guides"
          subtitle="Empower your real estate decisions with verified frameworks, step-by-step legal processes, and scam prevention guides."
          align="left"
        />

        {/* Search & Filter Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, titles, legal terms..."
              className="w-full h-11 pl-10 pr-4 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border",
                    isActive
                      ? "bg-[#0F766E] text-white border-[#0F766E] shadow-2xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </SectionContainer>

      {/* Main Content Guides Grid */}
      <SectionContainer variant="default">
        <div className="space-y-8">
          {filteredGuides.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-800">No Guides Found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search filter or category selection.</p>
            </div>
          ) : (
            filteredGuides.map((guide) => (
              <Card key={guide.id} className="bg-white border-slate-200/80 shadow-2xs overflow-hidden">
                <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="teal" className="text-[11px]">
                        {guide.category.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-[10px]">
                        {guide.level}
                      </Badge>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{guide.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{guide.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-[#0F766E] mt-0.5">
                    {guide.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  <p className="text-sm text-slate-700 leading-relaxed">{guide.summary}</p>

                  {/* Procedure Steps */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                      <span>Key Verification Steps & Framework</span>
                    </h4>
                    <ul className="space-y-2">
                      {guide.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="flex h-5 w-5 rounded-full bg-teal-50 text-[#0F766E] font-bold text-xs items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning Callout Box */}
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-amber-900 uppercase">Critical Risk Notice</h5>
                      <p className="text-xs text-amber-800 mt-0.5 leading-relaxed">{guide.keyWarning}</p>
                    </div>
                  </div>

                  {/* Interactive Ask Padi Shortcut */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/70 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                      <span>Analyze your scenario with Ask Padi</span>
                    </div>
                    <Link href={`/ask?q=${encodeURIComponent(guide.askPrompt)}`}>
                      <Button size="xs" variant="default" className="gap-1 rounded-lg">
                        <span>Run Scenario Analysis</span>
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
