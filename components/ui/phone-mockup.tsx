"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  showNotch?: boolean;
  showButtons?: boolean;
  isAnimated?: boolean;
}

const PhoneMockup = React.forwardRef<HTMLDivElement, PhoneMockupProps>(
  (
    {
      children,
      className,
      showNotch = true,
      showButtons = true,
      isAnimated = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-[280px] h-[580px] bg-background rounded-[3rem] border-[14px] border-muted shadow-2xl",
          className
        )}
        {...props}
      >
        {/* Phone notch */}
        {showNotch && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-muted rounded-b-3xl" />
        )}

        {/* Side buttons */}
        {showButtons && (
          <>
            {/* Volume buttons */}
            <div className="absolute -left-[17px] top-20 w-[3px] h-16 bg-muted rounded-l-lg" />
            <div className="absolute -left-[17px] top-40 w-[3px] h-16 bg-muted rounded-l-lg" />

            {/* Power button */}
            <div className="absolute -right-[17px] top-32 w-[3px] h-16 bg-muted rounded-r-lg" />
          </>
        )}

        {/* Screen content */}
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
          {isAnimated ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              {children}
            </motion.div>
          ) : (
            <div className="w-full h-full">{children}</div>
          )}
        </div>
      </div>
    );
  }
);

PhoneMockup.displayName = "PhoneMockup";

export { PhoneMockup };
