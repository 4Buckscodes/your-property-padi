import React from "react";
import { Heading } from "@/components/shared/Heading";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { MessageSquare, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const STEPS = [
    {
      step: "01",
      icon: MessageSquare,
      title: "State Your Scenario or Question",
      description:
        "Ask a specific property question, describe a document you were handed, or outline an investment opportunity you are evaluating.",
    },
    {
      step: "02",
      icon: ShieldCheck,
      title: "Receive Structured Intelligence & Risk Analysis",
      description:
        "Padi evaluates title requirements, flags red hazards, lists required legal documents, and breaks down complex jargon into plain English.",
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Act with Confidence or Consult Experts",
      description:
        "Proceed with structured clarity. When necessary, seamlessly escalate to verified property lawyers, surveyors, or independent advisors.",
    },
  ];

  return (
    <div className="w-full">
      <Heading
        badge="Intelligence Methodology"
        title="How Your Property Padi Works"
        subtitle="Designed to guide you systematically from initial uncertainty to objective, verified clarity."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.step}
              className="relative bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-teal-900/20 font-mono">
                    {s.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <CardTitle className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {s.title}
                </CardTitle>

                <CardDescription className="text-sm text-slate-600 leading-relaxed">
                  {s.description}
                </CardDescription>
              </div>

              {idx < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
