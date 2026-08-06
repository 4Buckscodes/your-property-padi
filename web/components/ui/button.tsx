import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#0F766E] text-white shadow-sm hover:bg-[#0D6861] active:bg-[#0A524C]",
        gold: "bg-[#D4AF37] text-slate-950 font-semibold shadow-sm hover:bg-[#C29F2F] active:bg-[#AF8F27]",
        outline:
          "border-slate-200 bg-white text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200/80 shadow-2xs",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        destructive:
          "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200",
        link: "text-[#0F766E] underline-offset-4 hover:underline font-normal p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2 gap-2 text-sm",
        xs: "h-7 px-2.5 text-xs gap-1.5 rounded-md",
        sm: "h-8 px-3 text-xs gap-1.5 rounded-md",
        lg: "h-12 px-6 text-base gap-2.5 rounded-xl font-medium",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
