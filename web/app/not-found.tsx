import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";

export default function NotFound() {
  return (
    <SectionContainer className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
      <div className="max-w-md space-y-6">
        <div className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800 border border-emerald-200">
          404 Error
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="text-base text-slate-600">
          Sorry, we couldn&apos;t find the property guide or page you were looking for. It may have moved or doesn&apos;t exist.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/">
            <Button variant="default" className="bg-emerald-800 hover:bg-emerald-900 text-white">
              Back to Home
            </Button>
          </Link>
          <Link href="/ask">
            <Button variant="outline">
              Ask Padi
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
