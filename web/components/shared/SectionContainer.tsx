import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "white" | "muted" | "tealTint";
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
  as?: React.ElementType;
}

export function SectionContainer({
  children,
  variant = "default",
  size = "default",
  className,
  as: Component = "section",
  ...props
}: SectionContainerProps) {
  const variantStyles = {
    default: "bg-[#FAFAFA]",
    white: "bg-white border-y border-slate-200/60 shadow-2xs",
    muted: "bg-slate-100/70 border-y border-slate-200/80",
    tealTint: "bg-teal-950/5 border-y border-teal-900/10 text-slate-900",
  };

  const sizeStyles = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[88rem]",
    full: "max-w-full px-0",
  };

  return (
    <Component
      className={cn("w-full py-12 md:py-20 lg:py-24", variantStyles[variant], className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          size !== "full" && sizeStyles[size]
        )}
      >
        {children}
      </div>
    </Component>
  );
}
