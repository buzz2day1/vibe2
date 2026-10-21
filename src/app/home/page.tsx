import React from "react";
import type { Metadata } from "next";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HomeFooter } from "@/components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Mavly — Build Websites with AI. No Coding Required.",
  description:
    "Mavly is an AI website builder that turns your ideas into beautiful, functional websites. We don't make websites. We make memories.",
  icons: {
    icon: "/logo/Mavly.ico",
    shortcut: "/logo/Mavly.ico",
  },
  openGraph: {
    title: "Mavly — Build Websites with AI. No Coding Required.",
    description:
      "Mavly is an AI website builder that turns your ideas into beautiful, functional websites. We don't make websites. We make memories.",
    images: ["/logo/Mavly.png"],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-950 mavly-page-enter">
      {/* Navigation */}
      <HomeNavigation />

      <main>
        {/* Hero Section with Headline, Subheading, Google/GitHub Auth, and Showcase Cards */}
        <HeroSection />

        {/* Features / Capabilities */}
        <FeaturesSection />

        {/* Pricing */}
        <PricingSection />

        {/* FAQs */}
        <FAQSection />
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
