"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DesktopMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DesktopMockup = React.forwardRef<HTMLDivElement, DesktopMockupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-[800px]", className)} {...props}>
        {/* Monitor */}
        <div className="relative aspect-[16/9] rounded-lg border-[12px] border-muted bg-background shadow-2xl">
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            {children}
          </div>
          {/* Power LED */}
          <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-primary/50" />
        </div>
        {/* Stand */}
        <div className="relative mx-auto w-32">
          <div className="h-8 w-4 mx-auto bg-muted" />
          <div className="h-2 w-32 rounded-lg bg-muted" />
        </div>
      </div>
    );
  }
);

DesktopMockup.displayName = "DesktopMockup";

export { DesktopMockup };
