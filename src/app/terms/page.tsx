import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-xs text-gray-400 mb-10">
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using Mavly, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">2. Use of Services</h2>
            <p>
              Mavly provides an AI-powered website builder and publishing platform. You retain ownership of all original websites, assets, and content you generate and publish through Mavly. You are responsible for ensuring that your use of the service complies with all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">3. Account & Access</h2>
            <p>
              When creating an account with Google, GitHub, or email authentication, you agree to maintain the security of your credentials and notify us immediately of any unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-950 mb-2">4. Acceptable Use</h2>
            <p>
              You agree not to use Mavly to build websites or services that violate any intellectual property rights, promote illegal activities, disseminate malicious software, or harass others.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
