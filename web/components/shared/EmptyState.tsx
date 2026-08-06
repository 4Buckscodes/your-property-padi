import React from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 border border-dashed border-slate-200/80 rounded-2xl bg-white/60 shadow-2xs backdrop-blur-2xs max-w-lg mx-auto",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0F766E] flex items-center justify-center mb-4 ring-1 ring-teal-900/10">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-sm">{description}</p>
      
      {actionLabel && (
        <div>
          {actionHref ? (
            <a href={actionHref} className={buttonVariants({ variant: "default", size: "sm" })}>
              {actionLabel}
            </a>
          ) : (
            <Button onClick={onAction} variant="default" size="sm">
              {actionLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
