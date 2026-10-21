"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// ── Complete 19 ImageKit Assets Data Source ───────────────────────────────────
export interface ShowcaseAsset {
  id: string;
  url: string;
  label: string;
  aspectClass: string;
  widthClass: string;
  staticRotDeg: number;
}

export const HERO_SHOWCASE_ASSETS: ShowcaseAsset[] = [
  // Group A (Upper-Left Strip: Images 01 to 09)
  {
    id: "img-01",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.08.05_PM_optimized_100.png",
    label: "Artisanal Bakery & Bakehouse",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[240px] sm:w-[280px] lg:w-[310px]",
    staticRotDeg: -1.2,
  },
  {
    id: "img-02",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.09.47_PM_optimized_100.png",
    label: "Minimalist Stationery & Goods",
    aspectClass: "aspect-[4/3]",
    widthClass: "w-[210px] sm:w-[240px] lg:w-[270px]",
    staticRotDeg: 0,
  },
  {
    id: "img-03",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.05.34_PM_optimized_100.png",
    label: "Strategic Advisory & Consulting",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[250px] sm:w-[290px] lg:w-[320px]",
    staticRotDeg: 1.0,
  },
  {
    id: "img-04",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.07.06_PM_optimized_100.png",
    label: "Sprout Botanical Boutique",
    aspectClass: "aspect-[16/11]",
    widthClass: "w-[220px] sm:w-[260px] lg:w-[280px]",
    staticRotDeg: -0.8,
  },
  {
    id: "img-05",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.09.14_PM_optimized_100.png",
    label: "Certified Auto Care & Service",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[260px] sm:w-[300px] lg:w-[330px]",
    staticRotDeg: 0.5,
  },
  {
    id: "img-06",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.10.45_PM_optimized_100.png",
    label: "Roy Pratt Fitness Studio",
    aspectClass: "aspect-[4/3]",
    widthClass: "w-[210px] sm:w-[250px] lg:w-[275px]",
    staticRotDeg: -1.0,
  },
  {
    id: "img-07",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.12.06_PM_optimized_100.png",
    label: "Autonomous Electric Mobility",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[250px] sm:w-[290px] lg:w-[320px]",
    staticRotDeg: 1.2,
  },
  {
    id: "img-08",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.06.29_PM_optimized_100.png",
    label: "La Perla Luxury Architecture",
    aspectClass: "aspect-[16/11]",
    widthClass: "w-[230px] sm:w-[270px] lg:w-[295px]",
    staticRotDeg: -0.5,
  },
  {
    id: "img-09",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.06.12_PM_optimized_100.png",
    label: "Nimbus Commute & Impact Transit",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[240px] sm:w-[280px] lg:w-[310px]",
    staticRotDeg: 0.4,
  },

  // Group B (Bottom-Right Strip: Images 10 to 19)
  {
    id: "img-10",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.10.04_PM_optimized_100.png",
    label: "Enterprise Tech Consulting",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[250px] sm:w-[290px] lg:w-[320px]",
    staticRotDeg: 0.8,
  },
  {
    id: "img-11",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.17.16_PM_optimized_100.png",
    label: "Next-Gen Fintech App",
    aspectClass: "aspect-[16/11]",
    widthClass: "w-[220px] sm:w-[260px] lg:w-[285px]",
    staticRotDeg: -1.2,
  },
  {
    id: "img-12",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.07.25_PM_optimized_100.png",
    label: "Creative Agency Case Studies",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[260px] sm:w-[300px] lg:w-[330px]",
    staticRotDeg: 0.5,
  },
  {
    id: "img-13",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.04.59_PM_optimized_100.png",
    label: "Serene Wellness & Spa Sanctuary",
    aspectClass: "aspect-[4/3]",
    widthClass: "w-[210px] sm:w-[245px] lg:w-[270px]",
    staticRotDeg: -0.7,
  },
  {
    id: "img-14",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.08.30_PM_optimized_100.png",
    label: "Independent Editorial Journal",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[240px] sm:w-[280px] lg:w-[310px]",
    staticRotDeg: 1.0,
  },
  {
    id: "img-15",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.17.00_PM_optimized_100.png",
    label: "Developer Cloud Tooling Platform",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[250px] sm:w-[290px] lg:w-[325px]",
    staticRotDeg: -0.6,
  },
  {
    id: "img-16",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.10.33_PM_optimized_100.png",
    label: "Gourmet Tasting Room & Cellar",
    aspectClass: "aspect-[16/11]",
    widthClass: "w-[220px] sm:w-[260px] lg:w-[285px]",
    staticRotDeg: 1.1,
  },
  {
    id: "img-17",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.09.29_PM_optimized_100.png",
    label: "Contemporary Fashion Lookbook",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[260px] sm:w-[305px] lg:w-[335px]",
    staticRotDeg: -0.8,
  },
  {
    id: "img-18",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.05.16_PM_optimized_100.png",
    label: "Sustainable Energy Dashboard",
    aspectClass: "aspect-[4/3]",
    widthClass: "w-[210px] sm:w-[245px] lg:w-[270px]",
    staticRotDeg: 0.6,
  },
  {
    id: "img-19",
    url: "https://ik.imagekit.io/2potcqor3/Screenshot_2026-10-21_at_5.05.53_PM_optimized_100.png",
    label: "Brand Design & System Lab",
    aspectClass: "aspect-[16/10]",
    widthClass: "w-[240px] sm:w-[280px] lg:w-[315px]",
    staticRotDeg: -0.9,
  },
];

// Distribution: Group A has 9 unique assets (0..9); Group B has 10 unique assets (9..19)
const GROUP_A_ASSETS = HERO_SHOWCASE_ASSETS.slice(0, 9);
const GROUP_B_ASSETS = HERO_SHOWCASE_ASSETS.slice(9, 19);

/**
 * Clean Soft UI Website Preview Card for the sliding tracks
 */
function HeroCard({
  card,
  isClone = false,
  priority = false,
}: {
  card: ShowcaseAsset;
  isClone?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`shrink-0 ${card.widthClass}`}
      style={{
        transform: `rotate(${card.staticRotDeg}deg)`,
      }}
      aria-hidden={isClone}
    >
      <div className="rounded-2xl bg-white p-2 sm:p-2.5 border border-black/[0.08] shadow-[0_12px_28px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.02)] transition-shadow duration-300">
        {/* Subtle Browser Chrome */}
        <div className="flex items-center justify-between px-1.5 pb-2 mb-1.5 border-b border-black/[0.05]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-stone-300" />
            <span className="w-2 h-2 rounded-full bg-stone-300" />
            <span className="w-2 h-2 rounded-full bg-stone-300" />
          </div>
          <span className="text-[10px] font-medium text-stone-400 truncate max-w-[150px]">
            {card.label}
          </span>
        </div>

        {/* Website Image Container */}
        <div className={`relative w-full ${card.aspectClass} rounded-xl overflow-hidden bg-stone-100`}>
          <Image
            src={card.url}
            alt={isClone ? "" : card.label}
            fill
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 290px, 335px"
            priority={priority}
            className="object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 md:pt-36 md:pb-36 overflow-hidden bg-[#faf9f6]/90">
      {/* Ambient Radial Depth Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-b from-black/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── GROUP A: Upper-Left Sliding Strip (Slides Smoothly Right-to-Left) ── */}
      <div
        className="absolute top-2 sm:top-5 md:top-8 left-0 w-full sm:w-[50vw] lg:w-[44vw] xl:w-[41vw] max-w-[660px] overflow-hidden pointer-events-none z-10 opacity-75 sm:opacity-90 lg:opacity-100 [mask-image:linear-gradient(to_right,black_75%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max mavly-track-left">
          {/* Track 1: Unique Items */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0 items-center">
            {GROUP_A_ASSETS.map((card, idx) => (
              <HeroCard
                key={card.id}
                card={card}
                priority={idx < 2}
              />
            ))}
          </div>

          {/* Track 2: Seamless Clone for Continuous Infinite Loop */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0 items-center" aria-hidden="true">
            {GROUP_A_ASSETS.map((card) => (
              <HeroCard
                key={`clone-a-${card.id}`}
                card={card}
                isClone
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── GROUP B: Bottom-Right Sliding Strip (Slides Smoothly Left-to-Right) ── */}
      <div
        className="absolute bottom-2 sm:bottom-5 md:bottom-8 right-0 w-full sm:w-[50vw] lg:w-[44vw] xl:w-[41vw] max-w-[660px] overflow-hidden pointer-events-none z-10 opacity-75 sm:opacity-90 lg:opacity-100 [mask-image:linear-gradient(to_left,black_75%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max mavly-track-right">
          {/* Track 1: Unique Items */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0 items-center">
            {GROUP_B_ASSETS.map((card, idx) => (
              <HeroCard
                key={card.id}
                card={card}
                priority={idx < 2}
              />
            ))}
          </div>

          {/* Track 2: Seamless Clone for Continuous Infinite Loop */}
          <div className="flex gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0 items-center" aria-hidden="true">
            {GROUP_B_ASSETS.map((card) => (
              <HeroCard
                key={`clone-b-${card.id}`}
                card={card}
                isClone
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── STABLE CENTRAL HERO CONTENT (Primary Focal Point, Unobstructed & Static) ── */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center z-20 pointer-events-auto">
        {/* Official Mavly Logo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.02)] p-1.5 border border-black/[0.08] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 select-none">
            <Image
              src="/logo/Mavly.png"
              alt="Mavly Logo"
              width={72}
              height={72}
              className="w-full h-full object-contain rounded-xl sm:rounded-2xl"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-950 leading-[1.12] max-w-2xl mx-auto">
          Build Websites with AI. <br className="hidden sm:inline" />
          No Coding Required.
        </h1>

        {/* Supporting Description */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-700 font-normal leading-relaxed max-w-xl mx-auto">
          Mavly is an AI website builder that turns your ideas into beautiful, functional websites. We don&apos;t make websites. We make memories.
        </p>

        {/* Authentication Buttons directly beneath the supporting description */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
          {/* Button 1: Continue with Google (Primary dark appearance) */}
          <Link
            href="/login?provider=google"
            className="w-full h-12 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm flex items-center justify-center gap-3 shadow-[0_4px_14px_rgba(0,0,0,0.14),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.25)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 select-none"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Continue with Google</span>
          </Link>

          {/* Button 2: Continue with GitHub (White/neutral appearance) */}
          <Link
            href="/login?provider=github"
            className="w-full h-12 rounded-full bg-white hover:bg-neutral-50 text-gray-900 border border-black/[0.1] font-medium text-sm flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 select-none"
          >
            <svg className="w-4 h-4 shrink-0 fill-current text-gray-900" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>Continue with GitHub</span>
          </Link>

          {/* Legal Notice */}
          <p className="text-xs text-gray-500 text-center mt-3">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
