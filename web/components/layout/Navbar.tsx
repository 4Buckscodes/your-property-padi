"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Ask Padi", href: "/ask", isCore: true },
  { name: "Learn", href: "/learn" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-xs transition-transform group-hover:scale-105">
            <ShieldCheck className="h-5 w-5" />
            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#D4AF37] ring-2 ring-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 leading-tight group-hover:text-[#0F766E] transition-colors">
              Your Property Padi
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
              Trusted Property Intelligence
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-lg",
                  isActive
                    ? "text-[#0F766E] bg-teal-50/70 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {item.name}
                {item.isCore && (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-[#854D0E]">
                    Intelligence
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/ask"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-white/90" />
            <span>Ask Padi</span>
            <ArrowRight className="h-3.5 w-3.5 ml-0.5" />
          </Link>

          {/* Mobile Sheet Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <button
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon-sm" }),
                    "md:hidden"
                  )}
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="h-4 w-4 text-slate-700" />
                </button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-white">
              <SheetHeader className="p-0 pb-6 text-left border-b border-slate-100">
                <SheetTitle className="flex items-center gap-2.5 text-base font-bold text-slate-900">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F766E] text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  Your Property Padi
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 py-6">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SheetClose
                      key={item.href}
                      render={
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors",
                            isActive
                              ? "bg-teal-50 text-[#0F766E] font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                          )}
                        />
                      }
                    >
                      <span>{item.name}</span>
                      {item.isCore && (
                        <Badge variant="gold" className="text-[10px]">
                          Core Intelligence
                        </Badge>
                      )}
                    </SheetClose>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <SheetClose
                  render={
                    <Link
                      href="/ask"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full justify-center"
                      )}
                    />
                  }
                >
                  <ShieldCheck className="h-4 w-4 text-white mr-1.5" />
                  Ask Property Padi
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}