/**
 * Cookie Policy Page – Café Coffee Day
 * 
 * Explains how Café Coffee Day uses cookies, pixels, and tracking technologies,
 * the types of cookies deployed, and how users can manage preferences.
 */

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cookie Policy | Café Coffee Day",
  description:
    "Learn about how Café Coffee Day uses cookies and local storage to enhance user experience, remember coffee preferences, and analyze website performance.",
};

export default function CookiePolicyPage() {
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
                Cookie <span className="text-accent">Policy</span>
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

        {/* Content */}
        <div className="space-y-10 text-sm leading-relaxed text-white/80">
          {/* Section 1 */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              1. What Are Cookies?
            </h2>
            <p className="mb-3">
              Cookies are small text files placed on your computer, tablet, or smartphone when you visit a website. They are widely used to make websites function efficiently, retain your user session, remember beverage customizations or table locations, and furnish reporting data to site operators.
            </p>
            <p>
              In this policy, &quot;cookies&quot; also refers to similar browser technologies such as local storage, session storage, web beacons, and pixels.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-4">
              2. Categories of Cookies We Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                  Strictly Necessary Cookies
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Essential for the website to function. They enable core features such as secure checkout, shopping bag persistence, and privacy choice retention. You cannot opt out of these cookies.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                  Performance &amp; Analytics Cookies
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Help us understand how guests navigate between pages (e.g., Explore section, Menu items, Store timings) so we can optimize load times and improve user experience.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                  Functionality &amp; Preferences
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Remember your selected café outlet, dietary preferences (vegetarian / non-vegetarian), localized menu currency (₹ INR), and previous orders.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                  Marketing &amp; Targeting Cookies
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Used to present relevant promotions, seasonal beverage launches (e.g., Summer Chillers, Winter Specials), and personalized vouchers based on your interests.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Inventory Table */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-4">
              3. Key Cookies Deployed on cafecoffeeday.com
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white/70">
                    <th className="py-2.5 pr-4 font-semibold">Cookie Identifier</th>
                    <th className="py-2.5 pr-4 font-semibold">Classification</th>
                    <th className="py-2.5 pr-4 font-semibold">Purpose</th>
                    <th className="py-2.5 font-semibold">Lifespan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-secondary">
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-accent">ccd_cookie_consent_choice</td>
                    <td className="py-2.5 pr-4">Strictly Necessary</td>
                    <td className="py-2.5 pr-4">Remembers user cookie consent selection (All / Essential).</td>
                    <td className="py-2.5">12 Months</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-accent">ccd_session_token</td>
                    <td className="py-2.5 pr-4">Strictly Necessary</td>
                    <td className="py-2.5 pr-4">Maintains authenticated user session &amp; active order state.</td>
                    <td className="py-2.5">Session</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-accent">ccd_preferred_store</td>
                    <td className="py-2.5 pr-4">Functionality</td>
                    <td className="py-2.5 pr-4">Stores your nearest Café Coffee Day location for quick pickup.</td>
                    <td className="py-2.5">6 Months</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 font-mono text-accent">_ga / _gid</td>
                    <td className="py-2.5 pr-4">Analytics</td>
                    <td className="py-2.5 pr-4">Aggregated anonymous visitor traffic and bounce metrics.</td>
                    <td className="py-2.5">2 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: Managing Cookies */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              4. Managing &amp; Disabling Cookies
            </h2>
            <p className="mb-3">
              Most web browsers automatically accept cookies, but you can alter your browser settings to reject cookies or prompt you prior to accepting one:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-secondary pl-2 mb-4">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data.</li>
              <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies.</li>
            </ul>
            <p className="text-xs text-white/60">
              *Note: Disabling strictly necessary cookies may impede checkout, shopping cart persistence, and member reward point redemption.
            </p>
          </section>

          {/* Section 5: Updates & Queries */}
          <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-primary font-bold text-accent mb-3">
              5. Questions Regarding Cookies
            </h2>
            <p className="mb-2">
              If you have any questions regarding our use of cookies or tracking technologies, please contact our webmaster team at:
            </p>
            <p className="text-white font-medium">
              Email: <a href="mailto:customercare@cafecoffeeday.com" className="text-accent hover:underline">customercare@cafecoffeeday.com</a> • Toll-Free: <a href="tel:18001025093" className="text-accent hover:underline">1800 102 5093</a>
            </p>
          </section>
        </div>

        {/* Footer Navigation Back Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center justify-between text-xs text-secondary">
          <Link href="/" className="hover:text-accent transition-colors">
            &larr; Back to Home
          </Link>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
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

