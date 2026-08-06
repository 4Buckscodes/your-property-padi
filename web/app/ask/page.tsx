"use client";

import React, { useState, Suspense } from "react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AskEngineHeader } from "@/components/ask/AskEngineHeader";
import { SearchInterface } from "@/components/ask/SearchInterface";
import { DecisionFrameworkPreview } from "@/components/ask/DecisionFrameworkPreview";

function AskPageContent() {
  const [selectedPrompt, setSelectedPrompt] = useState("");

  return (
    <SectionContainer variant="default" className="py-8 sm:py-12">
      {/* Page Header */}
      <AskEngineHeader />

      {/* Interactive Search & Prompt Selector */}
      <SearchInterface
        onSelectPrompt={setSelectedPrompt}
        activePrompt={selectedPrompt}
      />

      {/* Decision Framework Output Preview */}
      <DecisionFrameworkPreview query={selectedPrompt} />
    </SectionContainer>
  );
}

export default function AskPage() {
  return (
    <Suspense
      fallback={
        <SectionContainer variant="default" className="py-16 text-center">
          <div className="animate-pulse text-sm text-slate-500 font-medium">
            Loading Property Intelligence...
          </div>
        </SectionContainer>
      }
    >
      <AskPageContent />
    </Suspense>
  );
}
