import { Hero } from "@/components/home/Hero";
import { AskBox } from "@/components/home/AskBox";
import { PopularQuestions } from "@/components/home/PopularQuestions";
import { Categories } from "@/components/home/Categories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustSection } from "@/components/home/TrustSection";
import { SectionContainer } from "@/components/shared/SectionContainer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Ask Padi Search Widget */}
      <SectionContainer variant="default" className="py-8 md:py-12 -mt-10 sm:-mt-14 z-20">
        <AskBox />
      </SectionContainer>

      {/* 3. Popular Decision Queries */}
      <SectionContainer variant="white">
        <PopularQuestions />
      </SectionContainer>

      {/* 4. Decision Categories */}
      <SectionContainer variant="default">
        <Categories />
      </SectionContainer>

      {/* 5. How It Works Framework */}
      <SectionContainer variant="white">
        <HowItWorks />
      </SectionContainer>

      {/* 6. Trust & Product Principles */}
      <SectionContainer variant="tealTint">
        <TrustSection />
      </SectionContainer>
    </div>
  );
}