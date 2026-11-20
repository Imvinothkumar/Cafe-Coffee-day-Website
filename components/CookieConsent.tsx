/**
 * CookieConsent Component – Café Coffee Day
 *
 * Interactive cookie consent notice for GDPR / DPDP compliance.
 * Allows users to accept all, accept essential only, or view cookie policy.
 * Persists user consent in localStorage.
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCookieBite, FaTimes } from "react-icons/fa";

const COOKIE_STORAGE_KEY = "ccd_cookie_consent_choice";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!consent) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setHasInteracted(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, "all");
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(COOKIE_STORAGE_KEY, "essential");
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleReopen = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Floating Consent Banner */}
      {isVisible && (
        <div
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[440px] z-[999] bg-[#1a1210]/95 backdrop-blur-md border border-white/15 rounded-2xl shadow-2xl p-5 text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-accent/20 rounded-xl text-accent text-lg">
                <FaCookieBite />
              </span>
              <h3 className="font-primary font-bold text-lg text-white tracking-wide">
                We Value Your Privacy
              </h3>
            </div>
            <button
              onClick={handleEssentialOnly}
              className="text-white/40 hover:text-white transition-colors p-1"
              aria-label="Dismiss cookie notice"
            >
              <FaTimes className="text-sm" />
            </button>
          </div>

          <p className="text-secondary text-xs sm:text-[13px] leading-relaxed mb-4">
            Café Coffee Day uses cookies to personalize content, analyze site traffic,
            and provide a smooth experience. You can choose to accept all cookies or only essential ones.
            Read our{" "}
            <Link
              href="/cookies"
              className="text-accent underline hover:text-accent-hover transition-colors font-medium"
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-accent underline hover:text-accent-hover transition-colors font-medium"
            >
              Privacy Policy
            </Link>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1 border-t border-white/10">
            <button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto flex-1 bg-accent hover:bg-accent-hover text-primary font-semibold text-xs tracking-wider uppercase py-2.5 px-4 rounded-lg transition-colors shadow-md text-center"
            >
              Accept All
            </button>
            <button
              onClick={handleEssentialOnly}
              className="w-full sm:w-auto flex-1 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs tracking-wider uppercase py-2.5 px-3 rounded-lg transition-colors text-center"
            >
              Essential Only
            </button>
          </div>
        </div>
      )}

      {/* Subtle Bottom Trigger button to revisit Cookie preferences if previously dismissed */}
      {hasInteracted && !isVisible && (
        <button
          onClick={handleReopen}
          className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-[#1c120f]/80 hover:bg-[#1c120f] border border-white/10 text-accent hover:text-white shadow-lg backdrop-blur-sm transition-all duration-300 text-xs flex items-center gap-2 group"
          title="Cookie & Privacy Settings"
          aria-label="Manage cookie preferences"
        >
          <FaCookieBite className="text-sm" />
          <span className="hidden group-hover:inline text-[11px] font-medium pr-1 text-white/90">
            Cookie Settings
          </span>
        </button>
      )}
    </>
  );
}

