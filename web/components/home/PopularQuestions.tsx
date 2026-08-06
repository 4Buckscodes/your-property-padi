import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/shared/Heading";
import { ArrowRight, Clock, ShieldAlert } from "lucide-react";

interface QuestionItem {
  id: string;
  category: string;
  badgeVariant: "teal" | "gold" | "secondary" | "outline";
  title: string;
  summary: string;
  readTime: string;
  href: string;
}

const POPULAR_QUESTIONS: QuestionItem[] = [
  {
    id: "gov-consent",
    category: "Land Title",
    badgeVariant: "teal",
    title: "What is Governor's Consent and why is it mandatory?",
    summary:
      "Governor's Consent is legal approval granted by the State Governor for any transfer of land ownership. Without it, your deed of assignment remains unperfected.",
    readTime: "3 min read",
    href: "/ask?q=What+is+Governors+Consent",
  },
  {
    id: "verify-title",
    category: "Verification",
    badgeVariant: "gold",
    title: "How do I conduct a land title search at the Land Registry?",
    summary:
      "A complete title search requires a survey plan, copy of title document, tax clearance, and official verification at the State Ministry of Lands.",
    readTime: "4 min read",
    href: "/ask?q=How+to+conduct+a+land+title+search",
  },
  {
    id: "scam-traps",
    category: "Scam Warning",
    badgeVariant: "gold",
    title: "Top 5 real estate scam traps in Nigeria and how to avoid them",
    summary:
      "Beware of multiple sales of single plots, fake layout plan approvals, unverified power of attorney, and pressure to pay before title inspection.",
    readTime: "5 min read",
    href: "/ask?q=Top+real+estate+scam+traps",
  },
  {
    id: "c-of-o-vs-gazette",
    category: "Legal Documents",
    badgeVariant: "teal",
    title: "What is the difference between a Certificate of Occupancy and a Gazette?",
    summary:
      "A Gazette is an official government publication confirming land excision, whereas a C of O is a direct 99-year lease document issued to an individual or corporate body.",
    readTime: "4 min read",
    href: "/ask?q=Difference+between+Certificate+of+Occupancy+and+Gazette",
  },
  {
    id: "tenants-rights",
    category: "Renting",
    badgeVariant: "secondary",
    title: "What are my legal rights as a tenant regarding quit notices?",
    summary:
      "Under tenancy laws, statutory quit notice length depends on rent frequency: 6 months for yearly tenancy, 1 month for monthly, unless agreed otherwise in writing.",
    readTime: "3 min read",
    href: "/ask?q=Tenants+legal+rights+regarding+quit+notices",
  },
  {
    id: "rental-yield",
    category: "Investment",
    badgeVariant: "secondary",
    title: "How do I calculate net rental yield on an investment property?",
    summary:
      "Gross yield measures annual rent against purchase price. Net yield accounts for service charges, agency fees, taxes, and annual vacancy rate reserves.",
    readTime: "4 min read",
    href: "/ask?q=Calculate+net+rental+yield",
  },
];

export function PopularQuestions() {
  return (
    <div className="w-full">
      <Heading
        badge="Popular Questions"
        title="Common Property Queries Answered"
        subtitle="Explore high-volume decision questions curated by legal experts and property intelligence analysts."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_QUESTIONS.map((q) => (
          <Link key={q.id} href={q.href} className="group block">
            <Card className="h-full flex flex-col justify-between hover:border-[#0F766E]/40 hover:shadow-sm transition-all bg-white">
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant={q.badgeVariant} className="text-[11px]">
                      {q.category === "Scam Warning" && (
                        <ShieldAlert className="w-3 h-3 text-[#854D0E] mr-1" />
                      )}
                      {q.category}
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-normal">
                      <Clock className="w-3 h-3" />
                      {q.readTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-[#0F766E] transition-colors text-base font-semibold leading-snug">
                    {q.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription className="text-xs text-slate-600 leading-relaxed px-6 pb-2">
                  {q.summary}
                </CardDescription>
              </div>

              <CardFooter className="text-xs font-semibold text-[#0F766E] group-hover:translate-x-0.5 transition-transform flex items-center justify-between">
                <span>View Full Decision Framework</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
