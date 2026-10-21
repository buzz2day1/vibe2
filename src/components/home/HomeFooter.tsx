"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowRight } from "lucide-react";

export function HomeFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-black/[0.08] bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 max-w-sm">
            <Link href="/home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-white shadow-xs p-0.5 border border-black/[0.08] flex items-center justify-center">
                <Image
                  src="/logo/Mavly.png"
                  alt="Mavly Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold tracking-tight text-gray-950 text-lg">
                Mavly
              </span>
            </Link>
            <p className="mt-4 text-xs text-gray-600 leading-relaxed font-normal">
              Mavly is an AI website builder that turns your ideas into beautiful, functional websites. We don&apos;t make websites. We make memories.
            </p>
            <div className="mt-6">
              <Link
                href="/login"
                className="mavly-btn-primary px-4 py-2 text-xs font-semibold"
              >
                <span>Launch Builder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            {/* Product */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-950 tracking-wider uppercase text-[10px]">
                Product
              </span>
              <a href="#features" className="text-gray-600 hover:text-black transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-black transition-colors">
                Pricing
              </a>
              <a href="#faqs" className="text-gray-600 hover:text-black transition-colors">
                FAQs
              </a>
              <Link href="/login" className="text-gray-600 hover:text-black transition-colors">
                Sign In
              </Link>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-950 tracking-wider uppercase text-[10px]">
                Legal
              </span>
              <Link href="/terms" className="text-gray-600 hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400 text-[11px]">
                Global Compliance
              </span>
            </div>

            {/* Community & App */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-950 tracking-wider uppercase text-[10px]">
                Get Started
              </span>
              <Link href="/login" className="text-black font-semibold hover:underline">
                Start Building Free →
              </Link>
              <span className="text-gray-400 text-[11px]">
                No credit card required
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Mavly. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="mavly-btn-secondary px-3.5 py-2 text-xs font-medium"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
