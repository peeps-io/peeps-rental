"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface LaptopMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const LaptopMockup = React.forwardRef<HTMLDivElement, LaptopMockupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-[640px]", className)} {...props}>
        {/* Screen */}
        <div className="relative aspect-[16/10] rounded-t-xl border-[8px] border-muted bg-background shadow-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {children}
          </div>
          {/* Camera */}
          <div className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-muted-foreground/20" />
        </div>
        {/* Base */}
        <div className="relative h-[20px] rounded-b-xl bg-muted">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-lg bg-background/80" />
        </div>
      </div>
    );
  }
);

LaptopMockup.displayName = "LaptopMockup";

export { LaptopMockup };
