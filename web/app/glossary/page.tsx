"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Heading } from "@/components/shared/Heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  BookOpen,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GlossaryTerm {
  term: string;
  category: "Titles & Ownership" | "Legal & Contracts" | "Survey & Zoning" | "Tenancy & Leases" | "Taxes & Levies";
  shortDefinition: string;
  fullDefinition: string;
  legalImportance: "Critical" | "High" | "Medium";
  commonPitfall: string;
  askPrompt: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Certificate of Occupancy (C of O)",
    category: "Titles & Ownership",
    shortDefinition: "Direct statutory lease grant issued by the State Government for 99 years.",
    fullDefinition:
      "A Certificate of Occupancy (C of O) is an official legal document issued by the State Governor under Section 9 of the Land Use Act 1978, conferring statutory right of occupancy over a specified parcel of land for a lease period of up to 99 years.",
    legalImportance: "Critical",
    commonPitfall:
      "Assuming a C of O lasts forever. It is a 99-year lease subject to annual ground rent payment to the State Government.",
    askPrompt: "What is a Certificate of Occupancy (C of O) and how do I verify its authenticity at the Land Registry?",
  },
  {
    term: "Governor's Consent",
    category: "Legal & Contracts",
    shortDefinition: "State Governor's mandatory legal approval for transferring or mortgaging land.",
    fullDefinition:
      "Required under Section 22 of the Land Use Act 1978, Governor's Consent is mandatory for any subsequent alienation, assignment, mortgage, or transfer of land ownership after the initial C of O has been issued.",
    legalImportance: "Critical",
    commonPitfall:
      "Failing to register Governor's Consent after paying for land. Without consent, the buyer holds only an equitable interest, not legal title.",
    askPrompt: "What is Governor's Consent, how long does it take to obtain, and why is it mandatory?",
  },
  {
    term: "Excision",
    category: "Titles & Ownership",
    shortDefinition: "Government release of acquired communal land back to indigenous family owners.",
    fullDefinition:
      "Excision is the administrative process whereby the State Government releases a portion of land out of global government acquisition back to the traditional indigenous community, making it eligible for private ownership.",
    legalImportance: "High",
    commonPitfall:
      "Buying land labeled 'Excision in Process'. Until excision is formally approved and published in the Official Gazette, the land remains government acquisition.",
    askPrompt: "What is the difference between Excision, Gazette, and Certificate of Occupancy?",
  },
  {
    term: "Gazette",
    category: "Titles & Ownership",
    shortDefinition: "Official government journal publication recording excised communal lands.",
    fullDefinition:
      "A Gazette is an official record publication by the State Government detailing excised lands, community boundaries, parcel details, and official government releases.",
    legalImportance: "High",
    commonPitfall:
      "Confusing a private surveyor's layout plan with an official Government Gazette publication.",
    askPrompt: "How do I check if land is listed in an official Government Gazette?",
  },
  {
    term: "Deed of Assignment",
    category: "Legal & Contracts",
    shortDefinition: "Legal contract transferring land ownership rights from assignor to assignee.",
    fullDefinition:
      "A Deed of Assignment is a formal legal agreement drafted by a property solicitor conveying all interest, title, and rights of the seller (assignor) to the buyer (assignee).",
    legalImportance: "Critical",
    commonPitfall:
      "Using standard boilerplate templates without custom covenants, indemnity clauses, or vacant possession warranties.",
    askPrompt: "What key clauses must be included in a Deed of Assignment for land purchase?",
  },
  {
    term: "Chartable Survey Plan",
    category: "Survey & Zoning",
    shortDefinition: "Survey submitted to the Surveyor-General to verify land status against acquisition maps.",
    fullDefinition:
      "A charting process performed at the State Surveyor-General's office using exact UTM coordinates to verify if a parcel of land falls under committed acquisition, free land, or agricultural reserves.",
    legalImportance: "Critical",
    commonPitfall:
      "Relying on a surveyor's plan without performing official coordinate charting at the Surveyor-General's registry.",
    askPrompt: "How do I conduct a chartable survey search at the Surveyor General's office?",
  },
  {
    term: "Tenancy Notice to Quit",
    category: "Tenancy & Leases",
    shortDefinition: "Statutory written notice issued by a landlord to terminate a tenancy.",
    fullDefinition:
      "A formal statutory notice served under state tenancy statutes specifying the required legal duration (e.g. 6 months for yearly tenancy) before possession can be lawfully sought.",
    legalImportance: "High",
    commonPitfall:
      "Believing a landlord can forcibly eject a tenant immediately upon expiration of the Notice to Quit without a 7-Day Notice of Intention to Recover Possession and a Court Order.",
    askPrompt: "What are my legal rights as a tenant regarding quit notices under Lagos Tenancy Law?",
  },
  {
    term: "Capital Gains Tax (CGT)",
    category: "Taxes & Levies",
    shortDefinition: "Tax levied on profits realized from the sale or disposal of real estate.",
    fullDefinition:
      "Under the Capital Gains Tax Act, CGT is chargeable at a rate of 10% on gains accruing from the disposal of assets, including land and property, required during perfection of title.",
    legalImportance: "Medium",
    commonPitfall:
      "Omitting CGT calculation when budgeting total land perfection expenses.",
    askPrompt: "What taxes and government levies are required to perfect a property title?",
  },
  {
    term: "Power of Attorney (POA)",
    category: "Legal & Contracts",
    shortDefinition: "Instrument appointing an agent to act on behalf of the property owner.",
    fullDefinition:
      "A legal document authorizing a designated person or entity to manage, sell, or execute legal instruments regarding property on behalf of the principal owner.",
    legalImportance: "High",
    commonPitfall:
      "Accepting a Power of Attorney as a document of title. A POA only confers agency authority, not legal ownership of land.",
    askPrompt: "Does a Power of Attorney count as a valid document of title when buying land?",
  },
];

const CATEGORIES = [
  "All",
  "Titles & Ownership",
  "Legal & Contracts",
  "Survey & Zoning",
  "Tenancy & Leases",
  "Taxes & Levies",
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullDefinition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Page Header */}
      <SectionContainer variant="white" className="py-12 md:py-16">
        <Heading
          badge="Real Estate Terminology"
          title="Interactive Property Glossary"
          subtitle="Demystify legal jargon, title acronyms (C of O, Excision, Gazette, Governor's Consent), and tenancy law terms."
          align="left"
        />

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal terms (e.g. C of O, Consent)..."
              className="w-full h-11 pl-10 pr-4 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border",
                  selectedCategory === cat
                    ? "bg-[#0F766E] text-white border-[#0F766E] shadow-2xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Glossary Terms List */}
      <SectionContainer variant="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.length === 0 ? (
            <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-semibold text-slate-800">No Terminology Found</h3>
              <p className="text-xs text-slate-500 mt-1">Try typing a different keyword or selecting &apos;All&apos;.</p>
            </div>
          ) : (
            filteredTerms.map((item, idx) => (
              <Card key={idx} className="bg-white border-slate-200/80 shadow-2xs flex flex-col justify-between">
                <div>
                  <CardHeader className="pb-3 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="teal" className="text-[10px]">
                        {item.category}
                      </Badge>
                      <Badge
                        variant={item.legalImportance === "Critical" ? "gold" : "secondary"}
                        className="text-[10px]"
                      >
                        {item.legalImportance} Impact
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">{item.term}</CardTitle>
                    <p className="text-xs text-slate-500 font-medium">{item.shortDefinition}</p>
                  </CardHeader>

                  <CardContent className="pt-4 space-y-4 text-xs sm:text-sm text-slate-700">
                    <p className="leading-relaxed">{item.fullDefinition}</p>

                    <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900 uppercase text-[11px] block">Common Trap to Avoid</span>
                        <p className="text-amber-800 leading-normal text-xs">{item.commonPitfall}</p>
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Analyze term with Ask Padi</span>
                  <Link href={`/ask?q=${encodeURIComponent(item.askPrompt)}`}>
                    <Button size="xs" variant="default" className="gap-1 rounded-lg">
                      <span>Analyze</span>
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
