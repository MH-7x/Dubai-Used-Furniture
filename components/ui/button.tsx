"use client";

// Extend the Window interface to include the dataLayer property
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: { push: (event: Record<string, any>) => void };
  }
}
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center rounded-md justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-primary hover:bg-accent/90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8  rounded-md px-3 text-xs",
        lg: "h-11  rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  whatsappBtn?: boolean;
  callBtn?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      whatsappBtn,
      callBtn,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Custom GTM event function
    const handleClick = (eventType: string) => {
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: eventType,
          buttonType: eventType, // You can track different button types
          timestamp: new Date().toISOString(),
        });
      }
    };

    if (whatsappBtn) {
      return (
        <Link
          href="https://wa.me/+971545019655?text=I%20contact%20you%20for%20used%20furniture!"
          rel="noopener nofollow"
          target="_blank"
          title="Send Us Message to our WhatsApp number"
          onClick={() => handleClick("whatsapp_click")}
        >
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </Link>
      );
    }

    if (callBtn) {
      return (
        <Link
          href="tel:+971545019655"
          title="Call Us"
          onClick={() => handleClick("call_click")}
        >
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </Link>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
