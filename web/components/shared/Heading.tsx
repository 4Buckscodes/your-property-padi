import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeVariant?: "teal" | "gold" | "secondary" | "outline";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Heading({
  badge,
  badgeVariant = "teal",
  title,
  subtitle,
  align = "left",
  size = "md",
  className,
  ...props
}: HeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const titleSizes = {
    sm: "text-xl sm:text-2xl font-bold tracking-tight text-slate-900",
    md: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900",
    lg: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900",
    xl: "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900",
  };

  const subtitleSizes = {
    sm: "text-sm text-slate-600 max-w-xl",
    md: "text-base sm:text-lg text-slate-600 max-w-2xl",
    lg: "text-lg sm:text-xl text-slate-600 max-w-3xl",
    xl: "text-xl sm:text-2xl text-slate-600 max-w-3xl",
  };

  return (
    <div
      className={cn("flex flex-col gap-3 max-w-3xl mb-8 md:mb-12", alignStyles[align], className)}
      {...props}
    >
      {badge && (
        <Badge variant={badgeVariant} className="uppercase tracking-wider font-semibold text-[11px] px-3 py-1">
          {badge}
        </Badge>
      )}
      <h2 className={cn(titleSizes[size])}>{title}</h2>
      {subtitle && <p className={cn("leading-relaxed font-normal", subtitleSizes[size])}>{subtitle}</p>}
    </div>
  );
}
