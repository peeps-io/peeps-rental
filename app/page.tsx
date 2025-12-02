import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import Faq from "@/sections/Faq";
import Navbar from "../components/pages/navbar";
import CTA from "@/sections/Cta";
import Footer from "@/components/pages/footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Analytics />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
