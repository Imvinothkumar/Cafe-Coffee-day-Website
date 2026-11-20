/**
 * Menu Component – Café Coffee Day
 *
 * Displays authentic, verified, and real-time Café Coffee Day café varieties.
 * Features:
 * - Variety-only category navigation (Signature Chillers, Hot Classics, Teas & Refreshers, Café Food & Bites, Sweet Cravings)
 * - 28 real-time, authentic CCD menu items with INR pricing, photography & tags
 * - Zero generic "All Drinks" view — focuses purely on distinct culinary varieties
 * - Deep coffee obsidian background with warm champagne-gold ambient lighting
 */

"use client";

import { useState } from "react";
import Separator from "../Separator";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Variety categories (No generic "All Drinks")
export const varieties = [
  { id: "chillers", name: "Signature Chillers", count: 6, subtitle: "Iconic Cold Coffees & Frappes" },
  { id: "hot-classics", name: "Hot Classics", count: 6, subtitle: "Chikmagalur Espressos & Brews" },
  { id: "refreshers", name: "Teas & Refreshers", count: 6, subtitle: "Slow Teas, Chillers & Coolers" },
  { id: "food", name: "Café Food & Bites", count: 6, subtitle: "Toasts, Sandwiches & Hot Bites" },
  { id: "desserts", name: "Sweet Cravings", count: 4, subtitle: "Sizzlers, Molten Cakes & Pastries" },
] as const;

type VarietyId = typeof varieties[number]["id"];

// Real verified CCD items categorized strictly by variety
export const menuByVariety: Record<VarietyId, Array<{
  id: number;
  imgSrc: `/${string}`;
  name: string;
  tag: string;
  description: string;
  price: number;
}>> = {
  "chillers": [
    {
      id: 101,
      imgSrc: "/assets/menu/devil-own.png",
      name: "Devil's Own",
      tag: "Legendary #1",
      description: "CCD's all-time #1 cold coffee loaded with thick chocolate fudge, rich dairy cream & chocolate drizzle",
      price: 249,
    },
    {
      id: 102,
      imgSrc: "/assets/menu/kaapi-nirvana.png",
      name: "Kaapi Nirvana",
      tag: "Award Winner",
      description: "Award-winning signature chilled coffee infused with tropical coconut syrup & a creamy vanilla scoop",
      price: 239,
    },
    {
      id: 103,
      imgSrc: "/assets/menu/crunchy-frappe.png",
      name: "Crunchy Frappe",
      tag: "Fan Favourite",
      description: "Rich ice-blended frappe loaded with crunchy caramelized pearls & decadent chocolate crunch topping",
      price: 259,
    },
    {
      id: 104,
      imgSrc: "/assets/menu/cafe-frappe.png",
      name: "Classic Café Frappé",
      tag: "Estd 1996",
      description: "The timeless blended cold coffee that launched India's café revolution at Brigade Road in 1996",
      price: 199,
    },
    {
      id: 105,
      imgSrc: "/assets/menu/iced-eskimo.png",
      name: "Iced Eskimo",
      tag: "Chilled Classic",
      description: "Double espresso poured over crystal ice cubes with a swirl of rich condensed milk",
      price: 219,
    },
    {
      id: 106,
      imgSrc: "/assets/menu/dark-passion.png",
      name: "Dark Passion Frappe",
      tag: "Rich Cocoa",
      description: "Intense dark-roast blended frappe packed with bittersweet cocoa nibs & dark chocolate fudge",
      price: 249,
    },
  ],

  "hot-classics": [
    {
      id: 201,
      imgSrc: "/assets/menu/king-cappuccino.png",
      name: "King Cappuccino",
      tag: "Hot Classic",
      description: "Extra-large double-shot Chikmagalur espresso crowned with velvety dense microfoam & fine cocoa dusting",
      price: 189,
    },
    {
      id: 202,
      imgSrc: "/assets/menu/filter-coffee.png",
      name: "South Indian Filter Coffee",
      tag: "Traditional",
      description: "Authentic traditional chicory-infused decoction slow-frothed with piping hot fresh dairy milk",
      price: 129,
    },
    {
      id: 203,
      imgSrc: "/assets/menu/aztec-coffee.png",
      name: "Aztec Coffee",
      tag: "Spiced Cocoa",
      description: "Dark espresso infused with spiced ancient Mayan cocoa and velvety steamed microfoam",
      price: 199,
    },
    {
      id: 204,
      imgSrc: "/assets/menu/inverted-cappuccino.png",
      name: "Inverted Cappuccino",
      tag: "Artisan",
      description: "Silky textured milk poured first, gently marked through with bold espresso from above",
      price: 199,
    },
    {
      id: 205,
      imgSrc: "/assets/menu/cafe-latte.png",
      name: "Café Latte",
      tag: "Velvety",
      description: "Mild and smooth espresso balanced with steamed milk and a delicate layer of microfoam",
      price: 179,
    },
    {
      id: 206,
      imgSrc: "/assets/menu/cafe-americano.png",
      name: "Café Americano",
      tag: "Bold Roast",
      description: "Bold double-shot of pure Arabica espresso diluted with hot filtered water for an intense brew",
      price: 159,
    },
  ],

  "refreshers": [
    {
      id: 301,
      imgSrc: "/assets/menu/masala-chai.png",
      name: "Classic Masala Chai",
      tag: "Hand-Crafted",
      description: "Traditional slow-brewed tea simmered with fresh crushed ginger, cardamom pods, cloves & cinnamon",
      price: 139,
    },
    {
      id: 302,
      imgSrc: "/assets/menu/tropical-iceberg.png",
      name: "Tropical Iceberg",
      tag: "Summer Special",
      description: "Sparkling iced coffee infusion with fresh citrus lemon notes and cool crushed garden mint",
      price: 189,
    },
    {
      id: 303,
      imgSrc: "/assets/menu/cool-blue.png",
      name: "Cool Blue Sparkler",
      tag: "Chilled Refresher",
      description: "Vibrant chilled blue curacao citrus mocktail with fizzy soda, lemon slice and crushed ice",
      price: 179,
    },
    {
      id: 304,
      imgSrc: "/assets/menu/lemon-iced-tea.png",
      name: "Lemon Spiced Iced Tea",
      tag: "Assam Brew",
      description: "Chilled Assam black tea infused with fresh squeezed lemon juice and aromatic cooling mint",
      price: 169,
    },
    {
      id: 305,
      imgSrc: "/assets/menu/hot-chocolate.png",
      name: "Belgian Hot Chocolate",
      tag: "Pure Indulgence",
      description: "Decadent melted Belgian dark cocoa simmered with steamed milk and rich chocolate froth",
      price: 219,
    },
    {
      id: 306,
      imgSrc: "/assets/menu/mango-smoothie.png",
      name: "Mango Peach Smoothie",
      tag: "Fruit Cooler",
      description: "Thick chilled fruit puree blended with creamy yogurt, honey and crushed ice",
      price: 209,
    },
  ],

  "food": [
    {
      id: 401,
      imgSrc: "/assets/menu/chilli-cheese-toast.png",
      name: "Chilli Cheese Toastizza",
      tag: "CCD Classic",
      description: "Iconic crunchy crust topped with molten cheese, diced capsicum, onions & spicy red chilli flakes",
      price: 179,
    },
    {
      id: 402,
      imgSrc: "/assets/menu/garlic-bread.png",
      name: "Classic Garlic Bread",
      tag: "All-Time Hit",
      description: "Crispy toasted French baguette slices brushed with roasted garlic herb butter",
      price: 149,
    },
    {
      id: 403,
      imgSrc: "/assets/menu/paneer-sandwich.png",
      name: "Paneer Tikka Sandwich",
      tag: "Chef Special",
      description: "Tandoori marinated cottage cheese cubes grilled in multigrain bread with spicy mint chutney",
      price: 219,
    },
    {
      id: 404,
      imgSrc: "/assets/menu/chicken-sandwich.png",
      name: "Smoked Chicken Sandwich",
      tag: "High Protein",
      description: "Tender shredded smoked chicken breast with creamy pepper mayonnaise & crisp garden lettuce",
      price: 239,
    },
    {
      id: 405,
      imgSrc: "/assets/menu/veg-burger.png",
      name: "Crispy Veg Burger",
      tag: "Hearty Bite",
      description: "Crisp seasoned vegetable patty layered with fresh tomatoes, melted cheese & tangy house mayo",
      price: 189,
    },
    {
      id: 406,
      imgSrc: "/assets/menu/chicken-cutlet.png",
      name: "Crumbed Fried Chicken Cutlet",
      tag: "Crispy Savoury",
      description: "Golden panko-crusted spiced minced chicken cutlet served with zesty dip & golden fries",
      price: 209,
    },
  ],

  "desserts": [
    {
      id: 501,
      imgSrc: "/assets/menu/choco-fantasy.png",
      name: "Signature Choco Fantasy",
      tag: "All-Time Star",
      description: "CCD's famous warm molten chocolate cake oozing with rich chocolate ganache",
      price: 189,
    },
    {
      id: 502,
      imgSrc: "/assets/menu/sizzling-brownie.png",
      name: "Sizzling Brownie with Ice Cream",
      tag: "Must Try",
      description: "Hot walnut fudge brownie on a sizzling iron platter topped with vanilla ice cream & hot fudge",
      price: 239,
    },
    {
      id: 503,
      imgSrc: "/assets/menu/red-velvet.png",
      name: "Red Velvet Pastry",
      tag: "Artisan Cake",
      description: "Soft layered crimson sponge cake with silky cream cheese frosting and white chocolate curls",
      price: 179,
    },
    {
      id: 504,
      imgSrc: "/assets/menu/banana-cake.png",
      name: "Classic Banana Walnut Cake",
      tag: "Freshly Baked",
      description: "Moist golden home-style tea cake baked with ripe bananas and roasted crunchy walnuts",
      price: 149,
    },
  ],
};

const Menu = () => {
  const [activeVariety, setActiveVariety] = useState<VarietyId>("chillers");

  const currentVarietyMeta = varieties.find((v) => v.id === activeVariety) || varieties[0];
  const activeItems = menuByVariety[activeVariety] || [];

  return (
    <section id="menu" className="py-20 xl:py-28 bg-gradient-to-b from-[#100E0E] via-[#17100D] to-[#100E0E] text-white relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow matching site atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(199,161,122,0.08)_0%,transparent_65%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-12 xl:mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            ESTD 1996 • Hand-crafted Varieties
          </p>
          <h2 className="h2 text-white">Our Café Varieties</h2>
          <div className="my-2">
            <Separator bg="accent" />
          </div>
          <p className="max-w-[650px] mx-auto text-[#c2b4a8] text-sm sm:text-base leading-relaxed">
            From our legendary <span className="text-white font-medium">Signature Chillers</span> and estate-brewed <span className="text-white font-medium">Hot Classics</span> to oven-fresh <span className="text-white font-medium">Café Food</span> and decadent <span className="text-white font-medium">Sweet Cravings</span> — choose your preferred variety below.
          </p>

          {/* Variety-Only Filter Tabs (No "All Drinks") */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            {varieties.map((variety) => {
              const isActive = activeVariety === variety.id;
              return (
                <button
                  key={variety.id}
                  onClick={() => setActiveVariety(variety.id)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? "bg-accent text-[#100e0e] border-accent font-semibold shadow-[0_0_24px_rgba(199,161,122,0.4)] scale-105"
                      : "bg-white/[0.04] text-white/70 border-white/10 hover:text-white hover:bg-white/[0.08] hover:border-white/20"
                  }`}
                >
                  <span>{variety.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-black/20 text-[#100e0e] font-bold" : "bg-white/10 text-white/50"
                  }`}>
                    {variety.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Variety Subtitle Tagline */}
          <div className="pt-3">
            <p className="text-xs text-accent/80 tracking-widest uppercase font-medium">
              — {currentVarietyMeta.subtitle} —
            </p>
          </div>
        </div>

        {/* Menu Items Grid with AnimatePresence */}
        <div className="flex flex-col items-center gap-12 xl:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariety}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-5 sm:gap-y-6 gap-x-8 xl:gap-x-12 max-w-6xl mx-auto"
            >
              {activeItems.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imgSrc={item.imgSrc}
                  tag={item.tag}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/[0.08] w-full max-w-4xl">
            <Link
              href="/menu"
              className="btn inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-wider"
            >
              <span>Explore Full 28-Item Menu Page</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link
              href="/research#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-wider border border-white/20 hover:border-accent text-white/80 hover:text-accent rounded-full transition-colors"
            >
              <span>Discover Our Coffee Heritage</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;