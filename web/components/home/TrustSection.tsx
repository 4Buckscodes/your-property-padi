import React from "react";
import { Heading } from "@/components/shared/Heading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Eye, GraduationCap, Lock } from "lucide-react";

export function TrustSection() {
  const PRINCIPLES = [
    {
      icon: Eye,
      title: "Clarity Before Beauty",
      description:
        "We prioritize precise explanations, risk identification, and document legal truths over superficial portal graphics or fancy sales pitches.",
    },
    {
      icon: ShieldCheck,
      title: "Trust Before Conversion",
      description:
        "We never push users toward property deals, developer packages, or hasty deposits. Your decision safety is our sole objective.",
    },
    {
      icon: GraduationCap,
      title: "Education Before Recommendation",
      description:
        "We empower you with land law knowledge, document checklists, and scam warning signs so you stay in full control of your investment.",
    },
    {
      icon: Lock,
      title: "Zero Sales Commission",
      description:
        "We are an independent property intelligence engine. We accept zero developer commissions, ensuring complete objectivity.",
    },
  ];

  return (
    <div className="w-full">
      <Heading
        badge="Product Principles"
        title="Built for Uncompromising Trust"
        subtitle="Why thousands of buyers, diaspora investors, and tenants rely on Your Property Padi."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRINCIPLES.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Card
              key={idx}
              className="bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E] mb-4">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <CardTitle className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  {p.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </CardDescription>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
