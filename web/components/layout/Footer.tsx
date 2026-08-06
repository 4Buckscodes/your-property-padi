import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-xs">
                <ShieldCheck className="h-5 w-5" />
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#D4AF37] ring-2 ring-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 leading-tight">
                  Your Property Padi
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                  Trusted Property Intelligence
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Helping people make confident property decisions through trusted intelligence, structured reasoning, and expert guidance.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-teal-800 border border-teal-200/60 font-semibold">
                <Lock className="h-3 w-3 text-[#0F766E]" />
                Independent & Objective
              </span>
            </div>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/ask"
                  className="hover:text-[#0F766E] transition-colors font-medium text-slate-800 inline-flex items-center gap-1"
                >
                  Ask Padi Intelligence
                  <span className="rounded bg-amber-100 px-1 py-0.2 text-[10px] text-[#854D0E] font-semibold">
                    Core
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/learn"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Knowledge Centre
                </Link>
              </li>
              <li>
                <Link
                  href="/learn#documents"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Document Verification Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Area Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/glossary"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Property Glossary
                </Link>
              </li>
            </ul>
          </div>

          {/* Decision Topics Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Decision Topics
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/learn#scams"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Property Scam Prevention
                </Link>
              </li>
              <li>
                <Link
                  href="/learn#buying"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  First-Time Buyer Framework
                </Link>
              </li>
              <li>
                <Link
                  href="/learn#renting"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Renting & Lease Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/learn#investing"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Investment Evaluation
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0F766E] transition-colors inline-flex items-center gap-1"
                >
                  Human Consultation
                  <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Methodology Column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#methodology"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link
                  href="/about#trust"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Trust & Objectivity
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0F766E] transition-colors"
                >
                  Contact & Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Intelligence Disclaimer & Legal Bar */}
        <div className="pt-8 flex flex-col gap-6">
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            <strong>Disclaimer:</strong> Your Property Padi provides property intelligence, decision frameworks, and educational knowledge. We are an independent educational and analytical property intelligence platform. We do not act as real estate agents, legal advisers, or financial brokers. All property transactions should be verified with licensed professionals.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-100 pt-6">
            <p>© {new Date().getFullYear()} Your Property Padi. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                Terms of Guidance
              </Link>
              <Link href="/about" className="hover:text-slate-900 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
