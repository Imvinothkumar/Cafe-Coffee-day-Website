import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CcdResearch: React.FC = () => (
  <main className="min-h-screen bg-[#100E0E] text-white/90 pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-secondary">
    <div className="max-w-5xl mx-auto">
      {/* Back button & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-8 mb-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold tracking-wider uppercase mb-3 transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-primary font-bold text-white tracking-wide">
            Café Coffee Day <span className="text-accent">— Brand &amp; Heritage</span>
          </h1>
          <p className="text-secondary text-sm sm:text-base mt-2">
            Pioneers of Indian Coffee Culture • Estd 1996 • Brigade Road, Bengaluru
          </p>
        </div>
        {/* Authentic CCD Brand Emblem (Clickable) */}
        <Link
          href="/"
          aria-label="Café Coffee Day Home"
          className="flex items-center gap-3 shrink-0 bg-white/[0.04] hover:bg-white/[0.08] p-3 rounded-xl border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
        >
          <div className="relative w-[48px] h-[64px]">
            <Image 
              src="/assets/ccd-brand-logo.png" 
              fill 
              alt="Café Coffee Day Brand Emblem" 
              className="object-contain" 
              priority 
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-primary text-base font-bold text-white leading-none">Café Coffee Day</span>
            <span className="text-[9px] text-accent font-semibold tracking-wider uppercase mt-1">ESTD 1996 • Bengaluru</span>
          </div>
        </Link>
      </div>

      {/* Key Highlights Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
          <p className="text-accent text-3xl font-bold font-primary">1996</p>
          <p className="text-white/70 text-xs uppercase tracking-wider mt-1">First Café (Bengaluru)</p>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
          <p className="text-accent text-3xl font-bold font-primary">1,000+</p>
          <p className="text-white/70 text-xs uppercase tracking-wider mt-1">Outlets Milestone</p>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
          <p className="text-accent text-3xl font-bold font-primary">4 Formats</p>
          <p className="text-white/70 text-xs uppercase tracking-wider mt-1">CCD, Lounge, Square, Express</p>
        </div>
        <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 text-center">
          <p className="text-accent text-3xl font-bold font-primary">Thousands</p>
          <p className="text-white/70 text-xs uppercase tracking-wider mt-1">Small Planters Sourced</p>
        </div>
      </div>

      <div className="space-y-10">
        {/* Section 1 - With Cup Image Showcase */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
                1. Company Overview &amp; Brand Heritage
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <p><strong className="text-white">Brand Name:</strong> Café Coffee Day</p>
                <p><strong className="text-white">Common Name:</strong> CCD</p>
                <p><strong className="text-white">Parent Company:</strong> Coffee Day Global Limited</p>
                <p><strong className="text-white">Industry:</strong> Coffee Retail / F&amp;B</p>
                <p><strong className="text-white">Business Type:</strong> Café Chain</p>
                <p><strong className="text-white">Country of Origin:</strong> India</p>
                <p><strong className="text-white">First Café:</strong> Brigade Road, Bengaluru (Opened 1996)</p>
                <p><strong className="text-white">Brand Tagline:</strong> “A Lot Can Happen Over Coffee”</p>
                <p><strong className="text-white">Primary Offering:</strong> Coffee, chillers, savory delights &amp; café experience</p>
                <p><strong className="text-white">Target Customers:</strong> Youth, professionals, families &amp; coffee lovers</p>
              </div>
              <p className="text-secondary text-sm mt-4 leading-relaxed">
                CCD describes itself as a place for coffee, conversations, meetings and social experiences. Coffee is sourced directly from thousands of small coffee planters across Chikmagalur and the Western Ghats.
              </p>
            </div>
            
            {/* Authentic CCD Cup Feature Card */}
            <div className="flex flex-col items-center bg-black/40 border border-white/10 rounded-xl p-5 shrink-0 text-center">
              <div className="relative w-[180px] h-[280px] drop-shadow-2xl">
                <Image
                  src="/assets/explore/cup.png"
                  fill
                  alt="Café Coffee Day Signature Takeaway Cup"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-3">
                Official Takeaway Cup
              </p>
              <p className="text-white/60 text-[11px] mt-0.5">
                Signature Chikmagalur Roast Blend
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            2. Brand History &amp; Milestones
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p><strong className="text-white">1996 — Inception:</strong> First outlet established on Brigade Road, Bengaluru, functioning as an innovative cyber café where people could surf the internet while enjoying authentic coffee.</p>
            <p><strong className="text-white">Late 1990s - 2000s — Rapid Expansion:</strong> CCD quickly captured the youth demographic across India&apos;s metros (Mumbai, Delhi, Chennai, Hyderabad, Kolkata) and tier-2 cities, becoming the quintessential hangout for college students and professionals.</p>
            <p><strong className="text-white">2000s - 2010s — Scale &amp; Diversification:</strong> Crossed hundreds of outlets, expanded to highway lounges, corporate business hubs, airport kiosks, and launched Coffee Day Beverages vending machine division.</p>
            <p><strong className="text-white">Modern Era:</strong> Strong nationwide presence with multiple café tiers, online ordering, mobile app loyalty rewards, and specialized gourmet single-origin offerings.</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            3. Business Models &amp; Café Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-1">Café Coffee Day (Regular CCD)</h3>
              <p className="text-secondary text-xs mb-2">Mass-market, neighborhood, high-street &amp; college hangouts</p>
              <p className="text-white/80 text-xs">Standard café menu featuring classics, Chillers, light sandwiches, and comfortable seating for conversations.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-1">Coffee Day Lounge</h3>
              <p className="text-secondary text-xs mb-2">Premium casual dining experience</p>
              <p className="text-white/80 text-xs">Upscale interior aesthetics, extended hot kitchen food menu, artisanal brewing methods, and specialized teas.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-1">Coffee Day Square</h3>
              <p className="text-secondary text-xs mb-2">Single-origin gourmet coffee connoisseur outlets</p>
              <p className="text-white/80 text-xs">Curated single-origin brews from international coffee regions, French press, pour-over, and gourmet dining pairings.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="text-lg font-bold text-white mb-1">Coffee Day Express &amp; Highway Lounges</h3>
              <p className="text-secondary text-xs mb-2">Fast grab-and-go kiosks &amp; long-drive oasis</p>
              <p className="text-white/80 text-xs">Quick takeaway service at fuel stations, transit hubs, and large format highway rest stops for road-trippers across India.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="products" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 scroll-mt-28">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            4. Signature Menu &amp; Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-base font-bold text-white mb-3">Hot Coffees &amp; Classics</h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary text-xs">
                <li><strong className="text-white">Cappuccino:</strong> Rich espresso froth with velvety steamed milk.</li>
                <li><strong className="text-white">Café Latte:</strong> Silky microfoam with gentle espresso roast.</li>
                <li><strong className="text-white">Espresso:</strong> Intense dark roast single or double shot.</li>
                <li><strong className="text-white">South Indian Filter Coffee:</strong> Traditional chicory blend brew in davara tumbler.</li>
                <li><strong className="text-white">Café Americano:</strong> Bold espresso poured over steaming filtered water.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-3">All-Time Chillers &amp; Frappes</h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary text-xs">
                <li><strong className="text-white">Devil&apos;s Own:</strong> Legendary decadent cold coffee with chocolate sauce &amp; whipped cream.</li>
                <li><strong className="text-white">Crunchy Frappe:</strong> Blended iced coffee with caramel crunch pearls.</li>
                <li><strong className="text-white">Iced Eskimo:</strong> Chilled creamy coffee over ice.</li>
                <li><strong className="text-white">Kaapi Nirvana:</strong> Caribbean-style iced coffee with coconut undertones.</li>
                <li><strong className="text-white">Fruit Chillers &amp; Slushes:</strong> Tropical berry, mango, and citrus refreshers.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-3">Food &amp; Savory Delights</h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary text-xs">
                <li>Paneer Tikka Sandwich &amp; Smoked Chicken Sandwich</li>
                <li>Crispy Veg &amp; Chicken Burgers</li>
                <li>Classic Samosas, Garlic Bread &amp; Croissants</li>
                <li>Chicken &amp; Veg Puff Pastries</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-3">Sweet Tooth &amp; Desserts</h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary text-xs">
                <li>Sizzling Brownie with Vanilla Ice Cream</li>
                <li>Chocolate Fantasy Cake</li>
                <li>Warm Choco Chip Muffins &amp; Cookies</li>
                <li>Berry Cheesecakes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            5. Sourcing, Roasting &amp; Coffee Heritage
          </h2>
          <div className="space-y-3 text-sm leading-relaxed">
            <p><strong className="text-white">Bean Origins:</strong> Sourced directly from plantations in Chikmagalur, Hassan, and Coorg (Karnataka) — the birthplace of coffee cultivation in India where Baba Budan first planted seven seeds in the 1600s.</p>
            <p><strong className="text-white">Planter Network:</strong> Works directly with thousands of small-scale planters, fostering sustainable agriculture, soil conservation, and ethical fair prices.</p>
            <p><strong className="text-white">Roasting &amp; Quality:</strong> Centrally roasted in state-of-the-art roasting facilities to maintain consistent aroma and extraction standards across all stores nationally.</p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            6. Digital Ecosystem &amp; Enterprise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-white text-base mb-1">CCD Mobile App</h3>
              <p className="text-xs text-secondary mb-2">iOS &amp; Android</p>
              <p className="text-xs text-white/80">Order ahead, contactless table ordering, Beans loyalty cashbacks, store locator, and personalized offers.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-white text-base mb-1">Enterprise Vending</h3>
              <p className="text-xs text-secondary mb-2">Coffee Day Beverages</p>
              <p className="text-xs text-white/80">60,000+ vending machines installed across corporate offices, IT parks, hospitals, hotels, and airports.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-white text-base mb-1">E-Shop &amp; Merchandise</h3>
              <p className="text-xs text-secondary mb-2">Direct-to-Consumer</p>
              <p className="text-xs text-white/80">Packaged roasted coffee grounds, French presses, ceramic mugs, capsule coffee makers, and gift hampers.</p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-primary font-bold text-accent mb-4 border-b border-white/10 pb-2">
            7. Official Contact &amp; Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider">Toll-Free Customer Care</p>
              <p className="text-white font-bold text-base mt-1">
                <a href="tel:18001025093" className="hover:text-accent underline transition-colors">
                  1800 102 5093
                </a>
              </p>
              <p className="text-secondary text-xs mt-0.5">Mon – Sun • 9:00 AM – 11:00 PM</p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider">Official Website</p>
              <a href="https://www.cafecoffeeday.com" target="_blank" rel="noreferrer" className="text-accent hover:underline font-bold text-base mt-1 block">
                cafecoffeeday.com
              </a>
              <p className="text-secondary text-xs mt-0.5">Online ordering &amp; store locator</p>
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider">Corporate Headquarters</p>
              <p className="text-white font-bold text-base mt-1">Coffee Day Global Ltd.</p>
              <p className="text-secondary text-xs mt-0.5">Vittal Mallya Road, Bengaluru 560001</p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center border-t border-white/10 pt-8">
        <Link
          href="/"
          className="btn inline-flex items-center justify-center"
        >
          Explore Café Coffee Day Website
        </Link>
      </div>
    </div>
  </main>
);

export default CcdResearch;
