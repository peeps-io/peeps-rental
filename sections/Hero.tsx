"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { LaptopMockup } from "@/components/ui/laptop-mockup";
import { DesktopMockup } from "@/components/ui/desktop-mockup";
import { useTheme } from "next-themes";
import { ArrowRight, Sparkles } from "lucide-react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = React.memo(
  ({ children, className }: GradientTextProps) => (
    <span
      className={cn(
        "from-primary dark:from-primary bg-linear-to-r via-rose-400 to-rose-300 bg-clip-text text-transparent dark:via-rose-300 dark:to-red-400",
        className
      )}
    >
      {children}
    </span>
  )
);

GradientText.displayName = "GradientText";

export default function Hero() {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  type DeviceType = "phone" | "laptop" | "desktop";
  const [currentDevice, setCurrentDevice] = useState<DeviceType>("phone");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isInView) {
      // Initial delay before starting transitions
      const startDelay = setTimeout(() => {
        intervalId = setInterval(() => {
          setCurrentDevice((prev) => {
            switch (prev) {
              case "phone":
                return "laptop";
              case "laptop":
                return "desktop";
              case "desktop":
                return "phone";
              default:
                return "phone";
            }
          });
        }, 3000); // Total time for each device (2.4s display + 0.6s transition)
      }, 1000); // Wait 1 second before starting the transitions

      return () => {
        clearTimeout(startDelay);
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, [isInView]);

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0, 0.5], [20, 0, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0, 0.5], [-20, 0, 20]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
    
      ref={heroRef}
      className="bg-background relative min-h-screen w-full overflow-hidden py-16 mx-auto"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(229,62,62,0.15),rgba(30,30,40,0))]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(229,62,62,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_10%_90%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(255,100,150,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_90%_20%,rgba(100,150,255,0.05),transparent_50%)]"></div>

        <div className="bg-noise absolute inset-0 opacity-[0.02]"></div>
        <div className="absolute inset-0 opacity-5 backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,62,62,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(229,62,62,0.05)_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.03] dark:bg-[linear-gradient(rgba(200,200,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(200,200,255,0.05)_1px,transparent_1px)] dark:opacity-[0.02]"></div>
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col text-center md:text-left"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-foreground mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
                Stress-Free Property Management Starts <GradientText>Here.</GradientText>
              </h2>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-muted-foreground mb-8 text-lg leading-relaxed"
            >Simplify your entire rental business with the <span className="text-foreground font-semibold">all-in-one platform</span> built for modern landlords. Automate rent collection, manage maintenance, and keep your finances crystal clear—all from a single, intuitive dashboard.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap justify-center gap-4 md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button className="relative rounded-full cursor-pointer">
                  Start for Free
                  <Sparkles className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="bg-background/50 absolute inset-0 -z-10 rounded-full backdrop-blur-sm"></div>
                <Button
                  variant="outline"
                  className="border-primary/20 hover:border-primary/30 hover:bg-primary/5 rounded-full backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start"
            >
              {["Property Management", "Tenant Management", "Finance tracking"].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-foreground relative rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
                  >
                    <div className="border-primary/10 bg-background/80 dark:bg-background/30 absolute inset-0 rounded-full border backdrop-blur-md dark:border-white/5"></div>
                    <div className="via-primary/20 dark:via-primary/30 absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-rose-500/0 to-rose-500/0 dark:from-blue-500/0 dark:to-indigo-500/0"></div>

                    <span className="relative z-10">{feature}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            ref={mockupRef}
            className="relative flex justify-center items-center w-full h-[500px] md:h-[600px] perspective-distant transform-3d will-change-transform"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              const mx = (e.clientX - centerX) / (rect.width / 2);
              const my = (e.clientY - centerY) / (rect.height / 2);
              setIsHovered(true);
              mouseX.set(mx);
              mouseY.set(my);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transition: isHovered ? "none" : "transform 0.5s ease-out",
            }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={false}
              animate={{
                scale:
                  currentDevice === "phone"
                    ? 1
                    : currentDevice === "laptop"
                    ? 1.15
                    : 1.25,
                transformOrigin: "center center",
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Phone Mockup */}
              <AnimatePresence mode="sync">
                {currentDevice === "phone" && (
                  <motion.div
                    key="phone"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <PhoneMockup className="transform-3d shadow-2xl w-[280px]">
                      <div className="relative h-full w-full bg-linear-to-br from-background via-background to-muted/50 p-4">
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
              </AnimatePresence>

              {/* Laptop Mockup */}
              <AnimatePresence mode="sync">
                {currentDevice === "laptop" && (
                  <motion.div
                    key="laptop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <LaptopMockup className="transform-3d shadow-2xl w-[400px]">
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
                                <div
                                  key={i}
                                  className="rounded-lg bg-primary/5 p-4"
                                >
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
              </AnimatePresence>

              {/* Desktop Mockup */}
              <AnimatePresence mode="sync">
                {currentDevice === "desktop" && (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <DesktopMockup className="transform-3d shadow-2xl w-[450px]">
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}