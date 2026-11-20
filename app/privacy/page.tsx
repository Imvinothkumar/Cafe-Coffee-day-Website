/**
 * Privacy Policy Page – Café Coffee Day
 * 
 * Official privacy policy outlining data collection, usage, protection,
 * and user rights in compliance with India's DPDP Act and global data standards.
 */

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Café Coffee Day",
  description:
    "Official Privacy Policy of Café Coffee Day (Coffee Day Global Limited). Learn how we collect, use, protect, and handle your personal data across our cafés, website, and mobile app.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 14, 2026";

  return (
    <main className="min-h-screen bg-[#100E0E] text-white/90 pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb & Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold tracking-wider uppercase mb-4 transition-colors"
          >
            &larr; Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-primary font-bold text-white tracking-wide">
                Privacy <span className="text-accent">Policy</span>
              </h1>
              <p className="text-secondary text-sm mt-2">
                Coffee Day Global Limited • Last Updated: {lastUpdated}
              </p>
            </div>

            <Link
              href="/"
              aria-label="Café Coffee Day Home"
              className="relative w-[48px] h-[64px] shrink-0 block hover:scale-105 transition-transform cursor-pointer"
            >
              <Image
                src="/assets/ccd-brand-logo.png"
                fill
                alt="Café Coffee Day"
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-10 text-sm leading-relaxed text-white/80">
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              1. Overview &amp; Commitment
            </h2>
            <p className="mb-3">
              At Café Coffee Day (&quot;CCD&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operated by <strong>Coffee Day Global Limited</strong>, we respect your privacy and are committed to safeguarding your personal data. This Privacy Policy details our practices concerning data collection, processing, storage, and transfer across our official website (<a href="https://www.cafecoffeeday.com" target="_blank" rel="noreferrer" className="text-accent underline">cafecoffeeday.com</a>), mobile applications, retail cafés, and customer service channels.
            </p>
            <p>
              By accessing our website, purchasing our beverages or merchandise, joining the CCD Rewards/Beans loyalty program, or using our in-store guest Wi-Fi, you acknowledge and agree to the practices outlined in this policy.
            </p>
          </section>

          {/* Data We Collect */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-4">
              2. Personal Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you directly provide to us, as well as data gathered automatically through your digital interactions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">Directly Provided Information</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-secondary">
                  <li>Full name, email address, phone number, and postal address.</li>
                  <li>Payment details (processed via PCI-DSS compliant secure gateways).</li>
                  <li>CCD Rewards account credentials and transaction history.</li>
                  <li>Feedback, surveys, contest entries, and customer support inquiries.</li>
                </ul>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 text-xs text-secondary">
                  <li>Device identifiers, operating system, and IP address.</li>
                  <li>Browser type, language preferences, and referral pages.</li>
                  <li>Interaction data (pages viewed, click patterns, time spent).</li>
                  <li>In-store guest Wi-Fi connection and session authentication logs.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              3. Purpose &amp; Legal Basis of Processing
            </h2>
            <p className="mb-3">
              We process personal information strictly for legitimate commercial and operational purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
              <li><strong>Order Fulfillment:</strong> Processing table orders, takeaways, delivery requests, and coffee merchandise purchases.</li>
              <li><strong>Loyalty &amp; Rewards:</strong> Managing your CCD Beans balance, coupon redemptions, and personalized discounts.</li>
              <li><strong>Customer Support:</strong> Responding to complaints, inquiries, feedback, and refunds.</li>
              <li><strong>Quality &amp; Analytics:</strong> Analyzing café footfalls, menu popularity, and website usability to enhance guest experiences.</li>
              <li><strong>Compliance &amp; Fraud Prevention:</strong> Meeting tax, legal, regulatory, and security obligations under Indian law.</li>
            </ul>
          </section>

          {/* Sharing & Disclosure */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              4. Data Sharing &amp; Third-Party Disclosure
            </h2>
            <p className="mb-3">
              <strong>We do not sell, rent, or trade your personal information.</strong> Information may only be disclosed under strict confidentiality agreements to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li><strong>Authorized Service Providers:</strong> Trusted payment processors, cloud hosting vendors, courier partners, and SMS/email gateway services.</li>
              <li><strong>Franchise &amp; Café Operators:</strong> Specific store staff and delivery personnel for fulfilling your immediate orders.</li>
              <li><strong>Legal Authorities:</strong> When required by court order, law enforcement subpoenas, or statutory mandates under Indian regulatory law.</li>
            </ul>
          </section>

          {/* Data Security & Retention */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              5. Data Security &amp; Retention
            </h2>
            <p className="mb-3">
              We implement industry-standard administrative, technical, and physical safeguards — including SSL/TLS encryption, secure database access tokens, and periodic vulnerability audits — to protect your data from unauthorized access or destruction.
            </p>
            <p>
              Your data is retained only for as long as necessary to fulfill the purposes for which it was gathered, or as mandated by applicable statutory and tax retention periods in India.
            </p>
          </section>

          {/* User Rights */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              6. Your Rights Under Data Protection Laws
            </h2>
            <p className="mb-3">
              In accordance with India&apos;s Digital Personal Data Protection Act (DPDP Act) and international data privacy benchmarks, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2">
              <li>Request confirmation and summary of personal data held about you.</li>
              <li>Request correction of inaccurate or incomplete personal records.</li>
              <li>Request erasure or deletion of personal data no longer necessary for service delivery.</li>
              <li>Withdraw consent for marketing communications or promotional SMS at any time.</li>
            </ul>
          </section>

          {/* Grievance Officer & Contact */}
          <section id="contact" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              7. Grievance Officer &amp; Contact Details
            </h2>
            <p className="mb-4">
              For any privacy inquiries, requests to exercise your data rights, or complaints, please reach out to our designated Grievance Redressal Officer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm bg-black/40 p-5 rounded-xl border border-white/10">
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-xs">Grievance Officer</p>
                <p className="text-white font-bold mt-1">Data Protection &amp; Grievance Cell</p>
                <p className="text-secondary mt-0.5">Coffee Day Global Limited</p>
                <p className="text-secondary">23/2, Coffee Day Square, Vittal Mallya Road</p>
                <p className="text-secondary">Bengaluru, Karnataka – 560001, India</p>
              </div>
              <div>
                <p className="text-accent font-semibold uppercase tracking-wider text-xs">Customer Support &amp; Care</p>
                <p className="text-white font-bold mt-1">
                  Toll-Free:{" "}
                  <a href="tel:18001025093" className="text-accent hover:underline">
                    1800 102 5093
                  </a>
                </p>
                <p className="text-secondary mt-0.5">Mon – Sun • 9:00 AM – 11:00 PM IST</p>
                <p className="text-secondary mt-1">Email: <a href="mailto:customercare@cafecoffeeday.com" className="text-accent hover:underline">customercare@cafecoffeeday.com</a></p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation Back Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between text-xs text-secondary">
          <Link href="/" className="hover:text-accent transition-colors">
            &larr; Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/cookies" className="hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Use &amp; Copyright
            </Link>
            <Link href="/research" className="hover:text-accent transition-colors">
              About CCD Heritage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

