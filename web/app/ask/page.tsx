"use client";

import React, { Suspense } from "react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { AskEngineHeader } from "@/components/ask/AskEngineHeader";
import { ChatContainer } from "@/components/chat/ChatContainer";

function AskPageContent() {
  return (
    <SectionContainer variant="default" className="py-8 sm:py-12">
      {/* Page Header */}
      <AskEngineHeader />

      {/* Interactive AI Advisor Chat Engine */}
      <ChatContainer />
    </SectionContainer>
  );
}

export default function AskPage() {
  return (
    <Suspense
      fallback={
        <SectionContainer variant="default" className="py-16 text-center">
          <div className="animate-pulse text-sm text-slate-500 font-medium">
            Initializing Property Intelligence Advisor...
          </div>
        </SectionContainer>
      }
    >
      <AskPageContent />
    </Suspense>
  );
}
