"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "technical" | "support";
}

const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "What is Peeps Rental Manager?",
    answer:
      "The Peeps Rental Manager Client is a Property Management Software (PMS) designed to help users efficiently manage residential property portfolios.",
    category: "pricing",
  },
  {
    id: "2",
    question:
      "What financial reports are available for property owners and tax purposes?",
    answer:
      "The software includes built-in financial data tracking and customized reports essential for oversight. You can generate detailed reports such as the Rent Roll, Vacancy/Occupancy reports, and categorized Income/Expense statements.[1, 2]",
    category: "general",
  },
  {
    id: "3",
    question: "How are maintenance requests and work orders managed?",
    answer:
      "The system features a centralized portal where tenants can submit maintenance requests. Managers can efficiently assign work orders to internal staff or external vendors, track associated costs, and monitor the repair history of the property.[3, 4, 5]",
    category: "support",
  },
  {
    id: "4",
    question:
      "Is the platform mobile-friendly for property managers working remotely?",
    answer:
      "Yes, the property management system features mobile accessibility and a responsive design. This provides easy access from anywhere, empowering teams to monitor multiple properties, manage maintenance, and stay connected while in the field.[4, 5]",
    category: "technical",
  },
  {
    id: "5",
    question:
      "Does the software support required accounting compliance features like Trust Accounting?",
    answer:
      "For professional use, the software includes critical compliance features such as Trust Accounting support, a robust transaction audit history, and integrated document management to ensure proper handling of fiduciary funds and legal adherence.[1, 2]",
    category: "general",
  },
  {
    id: "6",
    question:
      "Can I integrate my financial data with external accounting software?",
    answer:
      "To simplify comprehensive financial reporting and tax preparation, the platform offers strong integration capabilities. This typically includes features to easily export data or directly synchronize operations with popular accounting software outlets like QuickBooks.",
    category: "technical",
  },
  {
    id: "7",
    question: "Does the system help with tenant screening and lease tracking?",
    answer:
      "Yes, the system is designed to manage the tenant lifecycle, which includes tracking complex lease agreements, monitoring lease expiration dates, and supporting integrations with service providers for essential functions like tenant screening and insurance verification.[3, 1, 2]",
    category: "general",
  },
  {
    id: "8",
    question:
      "How does the platform help improve tenant retention and satisfaction?",
    answer:
      "The software improves tenant satisfaction through centralized communication tools, timely notification systems, and speeding up response times for maintenance requests, which strengthens the tenant-manager relationship and retention rates.[3, 4, 5, 2]",
    category: "support",
  },
  {
    id: "9",
    question: "What security measures protect sensitive tenant and owner data?",
    answer:
      "The system is built on strong security foundations, which include features like two-factor authentication (2FA) and comprehensive, time-stamped audit trails to protect sensitive tenant and owner records, ensuring compliance and building trust.[4, 5, 2]",
    category: "technical",
  },
  {
    id: "10",
    question:
      "What level of automation is provided for daily repetitive tasks?",
    answer:
      "Automation is key to scaling, and the system automates repetitive tasks such as invoicing, late fee calculations, payment reminders, and follow-ups. This significantly reduces the administrative burden and labor costs associated with managing a large portfolio.[5]",
    category: "general",
  },
  {
    id: "11",
    question:
      "Can I generate customized statements and ROI reports for property owners?",
    answer:
      "Yes, the platform allows you to generate detailed and customized financial summaries for property owners. These reports include key performance indicators (KPIs) such as occupancy rates, detailed expenses, and Return on Investment (ROI) to improve investor confidence and transparency.[5, 2]",
    category: "general",
  },
  {
    id: "12",
    question:
      "Is the software easy to learn, and what kind of support is offered?",
    answer:
      "The software features an intuitive and easy-to-learn user interface designed for quick adoption. Furthermore, strong customer service, often including live chat support, is essential for rapid issue resolution and overall customer satisfaction.",
    category: "support",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "technical", label: "Technical" },
  { id: "pricing", label: "Pricing" },
  { id: "support", label: "Support" },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id={"faq"} className="bg-background py-16">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center">
          <Badge
            variant="outline"
            className="border-primary mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
          >
            FAQs
          </Badge>

          <h2 className="text-foreground mb-6 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-2xl text-center">
            Find answers to common questions about Peeps Rental and how to use
            our Services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn(
                  "border-border h-fit overflow-hidden rounded-xl border",
                  expandedId === faq.id ? "shadow-3xl bg-card/50" : "bg-card/50"
                )}
                style={{ minHeight: "88px" }}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="text-foreground text-lg font-medium">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <MinusIcon className="text-primary h-5 w-5" />
                    ) : (
                      <PlusIcon className="text-primary h-5 w-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-border border-t px-6 pt-2 pb-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href="/support"
            className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
