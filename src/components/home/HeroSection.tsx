"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ── Complete 19 ImageKit Assets Data Source ───────────────────────────────────
export const HERO_SHOWCASE_ASSETS = [
  { id: "img-01", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.08.05%E2%80%AFPM.png", label: "Artisanal Bakery & Bakehouse" },
  { id: "img-02", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.09.47%E2%80%AFPM.png", label: "Minimalist Stationery & Goods" },
  { id: "img-03", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.05.34%E2%80%AFPM.png", label: "Strategic Advisory & Consulting" },
  { id: "img-04", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.07.06%E2%80%AFPM.png", label: "Sprout Botanical Boutique" },
  { id: "img-05", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.09.14%E2%80%AFPM.png", label: "Certified Auto Care & Service" },
  { id: "img-06", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.10.45%E2%80%AFPM.png", label: "Roy Pratt Fitness Studio" },
  { id: "img-07", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.12.06%E2%80%AFPM.png", label: "Autonomous Electric Mobility" },
  { id: "img-08", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.06.29%E2%80%AFPM.png", label: "La Perla Luxury Architecture" },
  { id: "img-09", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.06.12%E2%80%AFPM.png", label: "Nimbus Commute & Impact Transit" },
  { id: "img-10", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.10.04%E2%80%AFPM.png", label: "Enterprise Tech Consulting" },
  { id: "img-11", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.17.16%E2%80%AFPM.png", label: "Next-Gen Fintech App" },
  { id: "img-12", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.07.25%E2%80%AFPM.png", label: "Creative Agency Case Studies" },
  { id: "img-13", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.04.59%E2%80%AFPM.png", label: "Serene Wellness & Spa Sanctuary" },
  { id: "img-14", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.08.30%E2%80%AFPM.png", label: "Independent Editorial Journal" },
  { id: "img-15", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.17.00%E2%80%AFPM.png", label: "Developer Cloud Tooling Platform" },
  { id: "img-16", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.10.33%E2%80%AFPM.png", label: "Gourmet Tasting Room & Cellar" },
  { id: "img-17", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.09.29%E2%80%AFPM.png", label: "Contemporary Fashion Lookbook" },
  { id: "img-18", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.05.16%E2%80%AFPM.png", label: "Sustainable Energy Dashboard" },
  { id: "img-19", url: "https://ik.imagekit.io/2potcqor3/Screenshot%202026-10-21%20at%205.05.53%E2%80%AFPM.png", label: "Brand Design & System Lab" },
];

interface SlotConfig {
  id: string;
  primaryIndex: number;
  secondaryIndex: number;
  desktopStyle: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    width: string;
    zIndex: number;
  };
  baseRot: number; // in degrees
  floatClass: string;
  parallaxFactor: number;
}

// 10 spatially distributed slots that seamlessly incorporate all 19 images
const DESKTOP_SLOTS: SlotConfig[] = [
  // 1. Top-Left (Bakery / Fintech)
  {
    id: "slot-tl",
    primaryIndex: 0, // Image 01
    secondaryIndex: 10, // Image 11
    desktopStyle: { top: "-10px", left: "-20px", width: "360px", zIndex: 12 },
    baseRot: -7,
    floatClass: "mavly-float-1",
    parallaxFactor: 14,
  },
  // 2. Top Center-Left (Stationery / Creative Agency)
  {
    id: "slot-tcl",
    primaryIndex: 1, // Image 02
    secondaryIndex: 11, // Image 12
    desktopStyle: { top: "-25px", left: "22%", width: "310px", zIndex: 10 },
    baseRot: -3,
    floatClass: "mavly-float-2",
    parallaxFactor: 9,
  },
  // 3. Top Center-Right (Advisory / Wellness)
  {
    id: "slot-tcr",
    primaryIndex: 2, // Image 03
    secondaryIndex: 12, // Image 13
    desktopStyle: { top: "-20px", right: "22%", width: "310px", zIndex: 10 },
    baseRot: 3,
    floatClass: "mavly-float-3",
    parallaxFactor: 9,
  },
  // 4. Top-Right (Sprout Plant / Editorial Journal)
  {
    id: "slot-tr",
    primaryIndex: 3, // Image 04
    secondaryIndex: 13, // Image 14
    desktopStyle: { top: "-10px", right: "-20px", width: "370px", zIndex: 12 },
    baseRot: 6,
    floatClass: "mavly-float-4",
    parallaxFactor: 15,
  },
  // 5. Middle-Left (Auto Repair / Dev Cloud Tooling)
  {
    id: "slot-ml",
    primaryIndex: 4, // Image 05
    secondaryIndex: 14, // Image 15
    desktopStyle: { top: "35%", left: "-40px", width: "370px", zIndex: 14 },
    baseRot: -4,
    floatClass: "mavly-float-2",
    parallaxFactor: 18,
  },
  // 6. Middle-Right (Roy Pratt Fitness / Gourmet Dining)
  {
    id: "slot-mr",
    primaryIndex: 5, // Image 06
    secondaryIndex: 15, // Image 16
    desktopStyle: { top: "33%", right: "-40px", width: "370px", zIndex: 14 },
    baseRot: 4,
    floatClass: "mavly-float-1",
    parallaxFactor: 18,
  },
  // 7. Bottom-Left (Mobility / Fashion Lookbook)
  {
    id: "slot-bl",
    primaryIndex: 6, // Image 07
    secondaryIndex: 16, // Image 17
    desktopStyle: { bottom: "-10px", left: "-30px", width: "340px", zIndex: 13 },
    baseRot: -5,
    floatClass: "mavly-float-3",
    parallaxFactor: 16,
  },
  // 8. Bottom Center-Left (La Perla Architecture / Sustainable Energy)
  {
    id: "slot-bcl",
    primaryIndex: 7, // Image 08
    secondaryIndex: 17, // Image 18
    desktopStyle: { bottom: "-30px", left: "20%", width: "290px", zIndex: 11 },
    baseRot: -2,
    floatClass: "mavly-float-4",
    parallaxFactor: 10,
  },
  // 9. Bottom Center-Right (Nimbus Commute / Digital Studio Lab)
  {
    id: "slot-bcr",
    primaryIndex: 8, // Image 09
    secondaryIndex: 18, // Image 19
    desktopStyle: { bottom: "-30px", right: "20%", width: "290px", zIndex: 11 },
    baseRot: 2,
    floatClass: "mavly-float-1",
    parallaxFactor: 10,
  },
  // 10. Bottom-Right (Tech Consulting)
  {
    id: "slot-br",
    primaryIndex: 9, // Image 10
    secondaryIndex: 9, // Image 10 (stable anchor)
    desktopStyle: { bottom: "-10px", right: "-30px", width: "340px", zIndex: 13 },
    baseRot: 5,
    floatClass: "mavly-float-2",
    parallaxFactor: 16,
  },
];

export function HeroSection() {
  // Staggered crossfade cycling states for slots with secondary images
  // Map of slot ID -> true if secondary image is currently active
  const [slotToggles, setSlotToggles] = useState<Record<string, boolean>>({});
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Parallax tracking on desktop
  useEffect(() => {
    if (isReducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReducedMotion]);

  // Gentle, staggered slot transitions so that all 19 images are showcased over time
  useEffect(() => {
    if (isReducedMotion) return;

    // Transition slots with alternate images on staggered 5-8 second timers
    const slotsToCycle = DESKTOP_SLOTS.filter(
      (slot) => slot.primaryIndex !== slot.secondaryIndex
    );

    let activeCycleIndex = 0;
    const interval = setInterval(() => {
      const slot = slotsToCycle[activeCycleIndex % slotsToCycle.length];
      if (slot) {
        setSlotToggles((prev) => ({
          ...prev,
          [slot.id]: !prev[slot.id],
        }));
      }
      activeCycleIndex++;
    }, 4500);

    return () => clearInterval(interval);
  }, [isReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-36 overflow-hidden bg-[#faf9f6]/80 selection:bg-neutral-900 selection:text-white"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-black/[0.02] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── DESKTOP & TABLET: Floating Website Showcase Canvas ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden max-w-[1720px] mx-auto select-none hidden lg:block"
        aria-hidden="true"
      >
        {DESKTOP_SLOTS.map((slot) => {
          const isFlipped = !!slotToggles[slot.id];
          const primaryAsset = HERO_SHOWCASE_ASSETS[slot.primaryIndex];
          const secondaryAsset = HERO_SHOWCASE_ASSETS[slot.secondaryIndex];
          const activeAsset = isFlipped ? secondaryAsset : primaryAsset;

          // Parallax transform calculation
          const offsetX = parallax.x * slot.parallaxFactor;
          const offsetY = parallax.y * slot.parallaxFactor;

          return (
            <div
              key={slot.id}
              className="absolute pointer-events-auto transition-transform duration-300 ease-out group"
              style={{
                ...slot.desktopStyle,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
              }}
            >
              {/* Inner card with float animation and resting rotation */}
              <div
                className={`mavly-floating-card rounded-2xl sm:rounded-3xl bg-white p-2.5 sm:p-3 border border-black/[0.08] shadow-[0_18px_40px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.15),0_6px_16px_rgba(0,0,0,0.08)] hover:border-black/[0.16] hover:scale-[1.03] transition-all duration-300 ease-out relative overflow-hidden ${
                  !isReducedMotion ? slot.floatClass : ""
                }`}
                style={
                  {
                    "--rot": `${slot.baseRot}deg`,
                    transform: `rotate(${slot.baseRot}deg)`,
                    animationDuration: `${7 + (slot.primaryIndex % 5)}s`,
                  } as React.CSSProperties
                }
              >
                {/* Minimalist Browser Frame Bar */}
                <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-black/[0.05]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-rose-400 transition-colors" />
                    <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-amber-400 transition-colors" />
                    <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-emerald-400 transition-colors" />
                  </div>
                  <span className="text-[10px] font-medium text-stone-400 truncate max-w-[170px]">
                    {activeAsset?.label}
                  </span>
                </div>

                {/* Website Preview Image Container */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-100">
                  {/* Primary Image */}
                  <Image
                    src={primaryAsset.url}
                    alt={primaryAsset.label}
                    fill
                    sizes="(max-width: 1400px) 380px, 440px"
                    priority={slot.primaryIndex < 4}
                    className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
                      isFlipped ? "opacity-0" : "opacity-100"
                    }`}
                    referrerPolicy="no-referrer"
                  />

                  {/* Secondary Image for smooth crossfade cycling */}
                  {slot.primaryIndex !== slot.secondaryIndex && (
                    <Image
                      src={secondaryAsset.url}
                      alt={secondaryAsset.label}
                      fill
                      sizes="(max-width: 1400px) 380px, 440px"
                      className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
                        isFlipped ? "opacity-100" : "opacity-0"
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Main Center Content ── */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-20 pointer-events-auto">
        {/* Brand Logo */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-md p-1.5 border border-black/[0.08] flex items-center justify-center transition-transform hover:scale-105 duration-200 shrink-0">
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

        {/* Authentication Buttons directly below the supporting description */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
          {/* Button 1: Continue with Google */}
          <Link
            href="/login?provider=google"
            className="w-full h-12 rounded-full bg-black hover:bg-neutral-800 text-white font-medium text-sm flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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

          {/* Button 2: Continue with GitHub */}
          <Link
            href="/login?provider=github"
            className="w-full h-12 rounded-full bg-white hover:bg-neutral-50 text-gray-900 border border-gray-200 font-medium text-sm flex items-center justify-center gap-3 shadow-xs hover:shadow-sm transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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

      {/* ── MOBILE & TABLET: Curated Floating Showcase Strip ── */}
      <div className="mt-14 px-4 lg:hidden relative z-10">
        <div className="text-center mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
            Created with Mavly AI
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none snap-x snap-mandatory">
          {HERO_SHOWCASE_ASSETS.map((asset, idx) => (
            <div
              key={asset.id}
              className="shrink-0 w-[260px] sm:w-[300px] snap-center rounded-2xl bg-white p-2.5 border border-black/[0.08] shadow-md"
            >
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-black/[0.05]">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                </div>
                <span className="text-[9px] font-medium text-stone-400 truncate max-w-[160px]">
                  {asset.label}
                </span>
              </div>
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-stone-100">
                <Image
                  src={asset.url}
                  alt={asset.label}
                  fill
                  sizes="300px"
                  priority={idx < 2}
                  className="object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
