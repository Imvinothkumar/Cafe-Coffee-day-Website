/**
 * Menu Page – Café Coffee Day
 *
 * Dedicated full-page in-store menu experience for Café Coffee Day.
 * Features:
 * - Live real-time search across all 28 authentic products
 * - Category variety filters (All, Signature Chillers, Hot Classics, Refreshers, Food, Desserts)
 * - Detailed culinary cards with appetizing photography, tags, and verified INR pricing
 * - Dietary badges and customer care ordering hotline
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Separator from "@/components/Separator";
import { FaSearch, FaPhoneAlt, FaLeaf, FaSnowflake, FaFireAlt, FaArrowLeft } from "react-icons/fa";
import { varieties, menuByVariety } from "@/components/Menu/Menu";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Flatten all items across varieties
  const allItems = useMemo(() => {
    return Object.entries(menuByVariety).flatMap(([varietyKey, items]) => {
      const varietyMeta = varieties.find(v => v.id === varietyKey);
      return items.map(item => ({
        ...item,
        varietyId: varietyKey,
        varietyName: varietyMeta?.name || varietyKey,
      }));
    });
  }, []);

  // Filter items based on active tab and search query
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesCategory = activeCategory === "all" || item.varietyId === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allItems, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#100E0E] text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(199,161,122,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-accent/80 hover:text-accent transition-colors group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            <span className="text-white/40 text-xs tracking-widest uppercase">
              Chikmagalur Estates • Estd 1996
            </span>
          </div>

          {/* Page Title & Intro */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-2">
              Authentic In-Store Offerings
            </span>
            <h1 className="h1 text-white mb-3">Our Café Menu</h1>
            <div className="my-2">
              <Separator bg="accent" />
            </div>
            <p className="text-[#c2b4a8] text-sm sm:text-base leading-relaxed mt-2">
              Hand-crafted beverages and oven-fresh café food made with shade-grown single-origin Arabica &amp; Robusta from Chikmagalur estates. Explore our 28 verified offerings with live INR pricing.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-4 text-accent/60 text-sm pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Devil's Own, Cappuccino, Frappe, Sandwiches..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/[0.04] border border-white/10 focus:border-accent text-white placeholder-white/40 text-sm outline-none transition-all focus:bg-white/[0.07] focus:shadow-[0_0_24px_rgba(199,161,122,0.2)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs text-white/50 hover:text-white uppercase tracking-wider"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                activeCategory === "all"
                  ? "bg-accent text-[#100e0e] border-accent font-semibold shadow-[0_0_24px_rgba(199,161,122,0.4)] scale-105"
                  : "bg-white/[0.04] text-white/70 border-white/10 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span>All Offerings</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeCategory === "all" ? "bg-black/20 text-[#100e0e] font-bold" : "bg-white/10 text-white/50"
              }`}>
                {allItems.length}
              </span>
            </button>

            {varieties.map((v) => {
              const isActive = activeCategory === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveCategory(v.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? "bg-accent text-[#100e0e] border-accent font-semibold shadow-[0_0_24px_rgba(199,161,122,0.4)] scale-105"
                      : "bg-white/[0.04] text-white/70 border-white/10 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{v.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-black/20 text-[#100e0e] font-bold" : "bg-white/10 text-white/50"
                  }`}>
                    {v.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          {searchQuery && (
            <p className="text-center text-xs text-white/60 mb-8">
              Showing {filteredItems.length} {filteredItems.length === 1 ? "result" : "results"} for &ldquo;<span className="text-accent">{searchQuery}</span>&rdquo;
            </p>
          )}

          {/* Menu Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-white/[0.07] hover:to-white/[0.03] border border-white/[0.08] hover:border-accent/40 rounded-3xl p-5 sm:p-6 transition-all duration-500 shadow-xl hover:shadow-[0_12px_36px_rgba(0,0,0,0.7)] flex flex-col justify-between"
                >
                  <div>
                    {/* Item Image with Food Presentation Frame */}
                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-5 bg-[#181210] border border-white/10 group-hover:border-accent/30 transition-colors">
                      <Image
                        src={item.imgSrc}
                        fill
                        alt={item.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Badges Row */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/80 border border-accent/40 text-[10px] uppercase tracking-wider font-semibold text-accent backdrop-blur-md shrink-0">
                          {item.tag}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] uppercase tracking-wider font-medium text-white/80 backdrop-blur-md shrink-0">
                          {item.varietyName}
                        </span>
                      </div>

                      {/* Price Badge Bottom Right */}
                      <div className="absolute bottom-3 right-3 z-10 bg-accent text-[#100e0e] px-3 py-1 rounded-xl font-primary font-bold text-xl shadow-lg">
                        &#8377;{item.price}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-primary font-bold text-2xl text-white group-hover:text-accent transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[#bbaea4] text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Row of Card */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-white/50">
                    <span className="flex items-center gap-1.5 text-accent/80">
                      {item.varietyId === "chillers" && <FaSnowflake className="text-[11px]" />}
                      {item.varietyId === "hot-classics" && <FaFireAlt className="text-[11px]" />}
                      {(item.varietyId === "food" || item.varietyId === "desserts") && <FaLeaf className="text-[11px]" />}
                      <span className="capitalize">{item.varietyId.replace("-", " ")}</span>
                    </span>
                    <span className="text-[11px] text-white/40">In-Store &amp; Takeaway</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/[0.02] border border-white/05 rounded-3xl p-8 max-w-lg mx-auto">
              <p className="text-accent text-3xl mb-3">☕</p>
              <h3 className="text-xl font-bold font-primary mb-2">No matching items found</h3>
              <p className="text-white/60 text-sm mb-6">
                We couldn&apos;t find any item matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;frappe&rdquo;, &ldquo;cappuccino&rdquo;, or &ldquo;cake&rdquo;.
              </p>
              <button
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="btn text-xs px-6 py-2.5"
              >
                Reset Menu Filters
              </button>
            </div>
          )}

          {/* Quick Order Hotline & Highway Lounge Bar */}
          <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#1c120e] via-[#241712] to-[#1c120e] border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-1">
                Café Customer Care &amp; Takeaway
              </p>
              <h4 className="font-primary font-bold text-2xl text-white">
                Craving Your Favorite CCD Brew?
              </h4>
              <p className="text-white/60 text-xs sm:text-sm mt-1 max-w-xl">
                Visit your nearest Café Coffee Day outlet or dial our national toll-free helpline for store queries, event bookings, and highway lounge stops.
              </p>
            </div>
            <a
              href="tel:18001025093"
              className="btn shrink-0 inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-wider"
            >
              <FaPhoneAlt className="text-xs" />
              <span>Call 1800 102 5093</span>
            </a>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
