import React from "react";
import Link from "next/link";
import { Heading } from "@/components/shared/Heading";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Home, ShieldAlert, Key, LineChart, ArrowRight } from "lucide-react";

interface CategoryItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badgeText: string;
  description: string;
  topicsCount: string;
  href: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "documents",
    icon: FileText,
    title: "Land Document Verification",
    badgeText: "Legal & Titles",
    description:
      "Understand Certificate of Occupancy (C of O), Governor's Consent, Excision, Gazette, Deed of Assignment, and Survey Plans.",
    topicsCount: "24 Decision Guides",
    href: "/learn#documents",
  },
  {
    id: "buying",
    icon: Home,
    title: "First-Time Buyer Framework",
    badgeText: "Acquisition",
    description:
      "Step-by-step guidance from initial search, property inspection checklists, title search procedures, to contract execution.",
    topicsCount: "18 Step Guides",
    href: "/learn#buying",
  },
  {
    id: "scams",
    icon: ShieldAlert,
    title: "Scam & Fraud Prevention",
    badgeText: "Risk Protection",
    description:
      "Identify red flags, fake agents, illegal land encumbrances, government acquisition zones, and double-sale traps.",
    topicsCount: "15 Red Flag Checks",
    href: "/learn#scams",
  },
  {
    id: "renting",
    icon: Key,
    title: "Renting & Tenancy Rights",
    badgeText: "Lease Guidance",
    description:
      "Know your tenant rights, lease agreement clauses, rent increment limits, caution fee disputes, and quit notice rules.",
    topicsCount: "12 Legal Summaries",
    href: "/learn#renting",
  },
  {
    id: "investing",
    icon: LineChart,
    title: "Property Investment Analysis",
    badgeText: "ROI & Valuation",
    description:
      "Evaluate gross vs net rental yield, capital appreciation potential, infrastructure growth corridors, and risk-adjusted return.",
    topicsCount: "16 Valuation Frameworks",
    href: "/learn#investing",
  },
];

export function Categories() {
  return (
    <div className="w-full">
      <Heading
        badge="Decision Categories"
        title="Structured Intelligence Across Every Decision"
        subtitle="Select a domain below to explore verified guides, document breakdowns, and decision frameworks."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.id} href={cat.href} className="group block">
              <Card className="h-full flex flex-col justify-between hover:border-[#0F766E]/50 hover:shadow-md transition-all bg-white">
                <div>
                  <CardHeader className="flex flex-row items-start justify-between gap-4 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-[#0F766E] ring-1 ring-teal-900/10 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="teal" className="text-[11px]">
                      {cat.badgeText}
                    </Badge>
                  </CardHeader>

                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-[#0F766E] transition-colors mb-2">
                    {cat.title}
                  </CardTitle>

                  <CardDescription className="text-sm text-slate-600 leading-relaxed">
                    {cat.description}
                  </CardDescription>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0F766E] transition-colors">
                  <span>{cat.topicsCount}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
