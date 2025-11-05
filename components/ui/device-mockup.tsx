"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { LaptopMockup } from "@/components/ui/laptop-mockup";
import { DesktopMockup } from "@/components/ui/desktop-mockup";

type DeviceType = "phone" | "laptop" | "desktop";

interface DeviceMockupProps {
  currentDevice: DeviceType;
  onMouseMove?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const deviceVariants = {
  phone: {
    scale: 1,
    y: 0,
    zIndex: 1,
  },
  laptop: {
    scale: 1.2,
    y: -20,
    zIndex: 2,
  },
  desktop: {
    scale: 1.4,
    y: -40,
    zIndex: 3,
  },
};

export function DeviceMockup({
  currentDevice,
  onMouseMove,
  onMouseLeave,
  style,
  className,
}: DeviceMockupProps) {
  return (
    <motion.div
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <AnimatePresence mode="sync">
        {currentDevice === "phone" && (
          <motion.div
            key="phone"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <PhoneMockup className="transform-3d shadow-2xl">
              <div className="relative h-full w-full bg-linear-to-br from-background via-background to-muted/50 p-4">
                {/* Phone content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-xl bg-primary/10" />
                    <div className="flex space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10" />
                      <div className="h-8 w-8 rounded-full bg-primary/10" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 rounded-xl bg-primary/5" />
                    <div className="flex space-x-2">
                      <div className="h-12 w-1/3 rounded-lg bg-primary/10" />
                      <div className="h-12 w-2/3 rounded-lg bg-primary/5" />
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        )}

        {currentDevice === "laptop" && (
          <motion.div
            key="laptop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <LaptopMockup className="transform-3d shadow-2xl">
              {/* Laptop content */}
              <div className="relative h-full w-full bg-linear-to-br from-background via-background to-muted/50 p-6">
                <div className="flex h-full flex-col space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10" />
                      <div className="h-10 w-32 rounded-lg bg-primary/5" />
                    </div>
                    <div className="flex space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10" />
                      <div className="h-10 w-10 rounded-lg bg-primary/10" />
                    </div>
                  </div>
                  <div className="grid flex-1 grid-cols-2 gap-6">
                    <div className="space-y-4 rounded-xl bg-primary/5 p-4">
                      <div className="h-32 rounded-lg bg-primary/10" />
                      <div className="space-y-2">
                        <div className="h-4 w-2/3 rounded bg-primary/10" />
                        <div className="h-4 w-1/2 rounded bg-primary/10" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="rounded-lg bg-primary/5 p-4">
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded-lg bg-primary/10" />
                            <div className="space-y-2">
                              <div className="h-4 w-24 rounded bg-primary/10" />
                              <div className="h-4 w-16 rounded bg-primary/10" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </LaptopMockup>
          </motion.div>
        )}

        {currentDevice === "desktop" && (
          <motion.div
            key="desktop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <DesktopMockup className="transform-3d shadow-2xl">
              {/* Desktop content */}
              <div className="relative h-full w-full bg-linear-to-br from-background via-background to-muted/50 p-8">
                <div className="flex h-full flex-col space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10" />
                      <div className="h-12 w-40 rounded-lg bg-primary/5" />
                    </div>
                    <div className="flex space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10" />
                      <div className="h-12 w-12 rounded-lg bg-primary/10" />
                      <div className="h-12 w-12 rounded-lg bg-primary/10" />
                    </div>
                  </div>
                  <div className="grid flex-1 grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="space-y-4 rounded-xl bg-primary/5 p-6"
                      >
                        <div className="h-40 rounded-lg bg-primary/10" />
                        <div className="space-y-3">
                          <div className="h-5 w-3/4 rounded bg-primary/10" />
                          <div className="h-5 w-1/2 rounded bg-primary/10" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DesktopMockup>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
