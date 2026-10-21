import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-gray-900 font-sans mavly-page-enter">
      <header className="border-b border-black/[0.05] bg-white/70 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2.5 group select-none">
            <div className="w-8 h-8 rounded-xl overflow-hidden bg-white shadow-xs p-0.5 border border-black/[0.08] flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95">
              <Image
                src="/logo/Mavly.png"
                alt="Mavly Logo"
                width={28}
                height={28}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="font-extrabold tracking-tight text-gray-950 text-base">
              Mavly
            </span>
          </Link>

          <Link
            href="/home"
            className="mavly-btn-secondary px-3.5 py-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-400 mb-10">
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">1. Information We Collect</h2>
            <p>
              When you sign up or log in to Mavly, we collect basic account information (such as your name and email address provided by your authentication provider) and the prompts and project configurations you create.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">2. How We Use Information</h2>
            <p>
              We use the collected information solely to provide, maintain, and improve the Mavly website building service, manage your projects, authenticate your access, and communicate essential service updates.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard administrative, physical, and technical security measures to protect your personal information and project data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">4. Your Rights</h2>
            <p>
              You have the right to access, export, or delete your personal data and projects at any time through your account settings or by contacting our team.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
