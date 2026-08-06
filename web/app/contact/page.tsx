"use client";

import React, { useState } from "react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Heading } from "@/components/shared/Heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  UserCheck,
  ShieldCheck,
  Scale,
  Compass,
  FileCheck,
  CheckCircle2,
  Send,
} from "lucide-react";

interface ExpertCategory {
  title: string;
  role: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  services: string[];
}

const EXPERTS: ExpertCategory[] = [
  {
    title: "Property & Conveyancing Lawyers",
    role: "Legal Due Diligence",
    badge: "NBA Accredited",
    icon: Scale,
    description:
      "Licensed legal practitioners specializing in Land Registry searches, Contract of Sale drafting, Title Perfection, and Governor's Consent representation.",
    services: [
      "Official State Land Registry Title Search",
      "Deed of Assignment Drafting & Execution",
      "Governor's Consent Application Filing",
      "Tenancy Agreement Legal Audit",
    ],
  },
  {
    title: "Registered Cadastral Surveyors",
    role: "Boundary & Zoning Charting",
    badge: "SURCON Registered",
    icon: Compass,
    description:
      "Certified surveyors carrying out physical beacon layout charting, GPS coordinate verification at the Surveyor-General's Office, and perimeter survey plan drafting.",
    services: [
      "Survey Coordinate Charting Search Report",
      "Physical Site Boundary & Beacon Inspection",
      "As-Built Survey & Topographical Mapping",
      "Dispute & Encroachment Verification",
    ],
  },
  {
    title: "Independent Valuers & Estate Surveyors",
    role: "Valuation & Financial Yield",
    badge: "NIESV Certified",
    icon: FileCheck,
    description:
      "Independent real estate valuation experts conducting unbiased capital appreciation audits, open market rental yield valuations, and structural integrity assessments.",
    services: [
      "Open Market Property Valuation",
      "Gross & Net Rental Yield Calculation",
      "Capital Appreciation Forecast Audit",
      "Estate Service Charge Review",
    ],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Legal Search & Title Verification",
    location: "Lagos State",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <SectionContainer variant="white" className="py-12 md:py-16">
        <Heading
          badge="Human Expert Network"
          title="Connect with Verified Property Professionals"
          subtitle="When software intelligence identifies a need for physical verification, connect directly with independent, vetted property lawyers, cadastral surveyors, and valuation experts."
          align="left"
        />

        {/* Independence Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-teal-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-sm font-bold">100% Independent & Conflict-Free Guarantee</h4>
              <p className="text-xs text-teal-200 mt-0.5">
                Our network professionals do not sell real estate or receive developer kickbacks.
              </p>
            </div>
          </div>
          <Badge variant="gold" className="text-xs px-3 py-1 shrink-0">
            Zero Broker Commission
          </Badge>
        </div>
      </SectionContainer>

      {/* Main Grid: Directory + Form */}
      <SectionContainer variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Expert Directory Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#0F766E]" />
              <span>Vetted Professional Categories</span>
            </h3>

            {EXPERTS.map((expert, idx) => {
              const Icon = expert.icon;
              return (
                <Card key={idx} className="bg-white border-slate-200/80 shadow-2xs">
                  <CardHeader className="pb-3 border-b border-slate-100">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="teal" className="text-[10px]">
                        {expert.role}
                      </Badge>
                      <Badge variant="gold" className="text-[10px]">
                        {expert.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#0F766E]" />
                      <span>{expert.title}</span>
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-600 leading-relaxed mt-1">
                      {expert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Scope of Professional Services
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {expert.services.map((srv, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-md sticky top-24">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#0F766E]">
                  <UserCheck className="w-5 h-5 text-[#0F766E]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Request Expert Consultation</h3>
                  <p className="text-xs text-slate-500">Get connected within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#0F766E] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#0F766E]" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Consultation Request Received!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. A verified property specialist will review your request for <strong>{formData.location}</strong> and contact you via email ({formData.email}) within 24 business hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-2 text-xs"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Dr. Babatunde Lawal"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 800 000 0000"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Required Expert Service
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50"
                    >
                      <option>Legal Search & Title Verification</option>
                      <option>Survey Coordinate Charting</option>
                      <option>Deed Drafting & Governor&apos;s Consent</option>
                      <option>Independent Valuation Audit</option>
                      <option>Tenancy Dispute Advice</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Location State
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Lagos State, Abuja FCT, Ogun"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Scenario Notes or Document Reference
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Briefly describe the property, document title held, or question..."
                      className="w-full p-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F766E] text-xs bg-slate-50/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-[#0F766E] hover:bg-[#0D6861] text-white font-medium flex items-center justify-center gap-2 shadow-sm text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Consultation Request</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
