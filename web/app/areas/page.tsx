"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Heading } from "@/components/shared/Heading";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AreaGuide {
  id: string;
  name: string;
  region: "Lagos Island" | "Lagos Mainland" | "Lagos New Growth" | "Abuja FCT";
  titleSecurityScore: number; // Out of 100
  avgRentalYield: string;
  keyInfrastructure: string[];
  primaryTitleTypes: string[];
  riskRating: "Low Risk" | "Moderate Risk" | "High Due Diligence Needed";
  summary: string;
  askPrompt: string;
}

const AREAS: AreaGuide[] = [
  {
    id: "lekki-phase-1",
    name: "Lekki Phase 1, Lagos",
    region: "Lagos Island",
    titleSecurityScore: 92,
    avgRentalYield: "7.5% - 9.0%",
    keyInfrastructure: ["Lekki-Epe Expressway", "Regional Road Network", "Ikoyi Link Bridge"],
    primaryTitleTypes: ["State C of O", "Governor's Consent"],
    riskRating: "Low Risk",
    summary:
      "Mature commercial and residential hub with high tenant demand, structured drainage, and fully perfected state title records.",
    askPrompt: "What title documents and due diligence steps are required for buying an apartment in Lekki Phase 1?",
  },
  {
    id: "epe-corridor",
    name: "Epe New Growth Corridor, Lagos",
    region: "Lagos New Growth",
    titleSecurityScore: 78,
    avgRentalYield: "10.0% - 12.5% (Land Appreciation)",
    keyInfrastructure: ["Lekki Deep Sea Port", "Alaro City", "Lekki International Airport Buffer"],
    primaryTitleTypes: ["Government Gazette", "Excision", "Global C of O"],
    riskRating: "High Due Diligence Needed",
    summary:
      "Rapidly developing industrial and residential corridor driven by mega infrastructure project investments. Requires rigorous coordinate charting against agricultural and airport reserves.",
    askPrompt: "What red flags should I watch out for when buying land in Epe and Ibeju-Lekki?",
  },
  {
    id: "ikoyi",
    name: "Ikoyi, Lagos",
    region: "Lagos Island",
    titleSecurityScore: 96,
    avgRentalYield: "5.5% - 7.0%",
    keyInfrastructure: ["Bourdillon Corridor", "Ikoyi Club", "Marine Road Waterways"],
    primaryTitleTypes: ["Federal C of O", "State C of O"],
    riskRating: "Low Risk",
    summary:
      "Ultra-prime luxury real estate market with highest land security, corporate tenant leases, and strong USD rental resilience.",
    askPrompt: "How do Federal C of O and State C of O compare when purchasing property in Ikoyi?",
  },
  {
    id: "ikeja-gra",
    name: "Ikeja GRA, Lagos",
    region: "Lagos Mainland",
    titleSecurityScore: 94,
    avgRentalYield: "7.0% - 8.5%",
    keyInfrastructure: ["Murtala Muhammed Airport", "Mobolaji Johnson Rail Station"],
    primaryTitleTypes: ["State C of O", "Land Certificate"],
    riskRating: "Low Risk",
    summary:
      "Lagos Mainland's premier commercial and diplomatic hub. High occupancy rate, low title risk, and steady commercial lease growth.",
    askPrompt: "What due diligence is required for commercial redevelopment in Ikeja GRA?",
  },
  {
    id: "guzape-abuja",
    name: "Guzape Diplomatic Zone, Abuja",
    region: "Abuja FCT",
    titleSecurityScore: 90,
    avgRentalYield: "6.5% - 8.0%",
    keyInfrastructure: ["Asokoro Bypass", "Outer Southern Expressway"],
    primaryTitleTypes: ["FCDA Allocation C of O"],
    riskRating: "Low Risk",
    summary:
      "Elevated premium district in Abuja with panoramic capital views, diplomat tenant base, and strict FCDA building control regulation.",
    askPrompt: "How do I verify an FCDA Allocation Certificate of Occupancy at AGIS in Abuja?",
  },
  {
    id: "ibeju-lekki",
    name: "Ibeju-Lekki Coastal Corridor",
    region: "Lagos New Growth",
    titleSecurityScore: 74,
    avgRentalYield: "12% - 15% (Land Value Growth)",
    keyInfrastructure: ["Dangote Refinery Complex", "Lekki Free Trade Zone"],
    primaryTitleTypes: ["Excision", "Gazette", "Governor's Consent"],
    riskRating: "High Due Diligence Needed",
    summary:
      "Industrial heartbeat corridor. High potential capital growth offset by coastal highway acquisition zones and unapproved layout risks.",
    askPrompt: "How do I verify if land in Ibeju-Lekki falls under coastal highway acquisition?",
  },
];

const REGIONS = ["All Regions", "Lagos Island", "Lagos Mainland", "Lagos New Growth", "Abuja FCT"];

export default function AreasPage() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredAreas = AREAS.filter(
    (area) => selectedRegion === "All Regions" || area.region === selectedRegion
  );

  return (
    <div className="w-full">
      {/* Header */}
      <SectionContainer variant="white" className="py-12 md:py-16">
        <Heading
          badge="Location Intelligence"
          title="Area & Neighbourhood Risk Guides"
          subtitle="Explore neighbourhood insights, infrastructure developments, average rental yields, and area-specific title risk profiles."
          align="left"
        />

        {/* Region Selector Chips */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {REGIONS.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => setSelectedRegion(reg)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border",
                selectedRegion === reg
                  ? "bg-[#0F766E] text-white border-[#0F766E] shadow-2xs"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              )}
            >
              {reg}
            </button>
          ))}
        </div>
      </SectionContainer>

      {/* Area Cards Grid */}
      <SectionContainer variant="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <Card key={area.id} className="bg-white border-slate-200/80 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <CardHeader className="pb-3 border-b border-slate-100">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="teal" className="text-[10px]">
                      {area.region}
                    </Badge>
                    <Badge
                      variant={area.riskRating === "Low Risk" ? "teal" : "gold"}
                      className="text-[10px]"
                    >
                      {area.riskRating}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#0F766E] shrink-0" />
                    <span>{area.name}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-4 space-y-4 text-xs sm:text-sm text-slate-700">
                  <p className="text-xs text-slate-600 leading-relaxed">{area.summary}</p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Title Security</span>
                      <span className="font-extrabold text-[#0F766E] text-sm">{area.titleSecurityScore}/100</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Est. Rental Yield</span>
                      <span className="font-bold text-slate-800 text-xs">{area.avgRentalYield}</span>
                    </div>
                  </div>

                  {/* Infrastructure */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5">Key Infrastructure Drivers</span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.keyInfrastructure.map((inf, iIdx) => (
                        <span key={iIdx} className="px-2 py-1 rounded-md bg-teal-50 text-[#0F766E] text-[11px] font-medium border border-teal-200/50">
                          {inf}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Evaluate location risks</span>
                <Link href={`/ask?q=${encodeURIComponent(area.askPrompt)}`}>
                  <Button size="xs" variant="default" className="gap-1 rounded-lg">
                    <span>Ask Padi</span>
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
