"use client";

import React from "react";
import { Check, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#faf9f6] border-t border-black/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-3 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            Transparent pricing for every project.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Start building your website today with complimentary starter credits. Upgrade to dedicated resources as your traffic grows.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Starter / Free Tier */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-black shadow-lg flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Starter
                </span>
                <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold tracking-wide uppercase">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-2">
                Free Starter
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Full access to the Mavly AI website builder to design and preview your sites.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-950">$0</span>
                <span className="text-xs text-gray-500 font-medium ml-1">/ starter tier</span>
              </div>

              <div className="mt-6 space-y-3 pt-6 border-t border-black/[0.06]">
                {[
                  "Full AI website builder with instant layout generation",
                  "Live preview development server with instant updates",
                  "Free included starter credits",
                  "Interactive database explorer & table management",
                  "Visual component editing with direct click-to-edit",
                  "Instant export and preview URLs",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <Link
                href="/login"
                className="w-full py-3.5 rounded-full text-xs font-semibold bg-black hover:bg-neutral-800 text-white transition-all flex items-center justify-center gap-2 active:scale-98 shadow-sm"
              >
                <span>Start Building Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[11px] text-center text-gray-400 mt-2.5">
                No credit card required to get started
              </p>
            </div>
          </div>

          {/* Card 2: Pro & Teams */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Production Scale
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-2">
                Pro & Teams
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                For custom domains, high-traffic commercial sites, and collaborative teams.
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">Details TBA</span>
                <span className="text-xs text-gray-400 font-medium ml-1.5">closer to launch</span>
              </div>

              <div className="mt-6 space-y-3 pt-6 border-t border-black/[0.06]">
                {[
                  "Everything included in the Starter tier",
                  "Dedicated high-speed cloud compute sandboxes",
                  "Custom domain attachment with automated SSL certificates",
                  "Bidirectional GitHub repository sync with branch management",
                  "Scheduled background cron jobs and custom webhooks",
                  "Collaborative team workspaces and permissions",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <Link
                href="/login"
                className="w-full py-3.5 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 text-gray-900 border border-black/[0.12] transition-all flex items-center justify-center gap-2 active:scale-98 shadow-xs"
              >
                <span>Get Started with Pro</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[11px] text-center text-gray-400 mt-2.5">
                Priority access and launch pricing for early users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
