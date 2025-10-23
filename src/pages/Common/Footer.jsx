import React from "react";

/**
 * Footer.jsx
 * - "Same to same" visual as the reference: desert background, centered logo, dark gradient overlay
 * - Brand accent in orange theme
 * - Fully responsive (mobile first). Nav collapses into scrollable row on small screens
 * - Includes: Attractions, Tours, Visas, Hotels, Deals, Sign in, Find activities (CTA),
 *             Privacy Policy, Terms & Conditions
 *
 * Props:
 *  - bgSrc: string   -> background image URL (use the same image as your reference for a perfect match)
 *  - logoSrc: string -> brand logo URL (ensure a transparent PNG/SVG for best clarity)
 *
 * Usage:
 *  <Footer
 *    bgSrc="/images/footer-desert.jpg"
 *    logoSrc="/images/gettourguide-logo.png"
 *  />
 */
export default function Footer({
  bgSrc = "./footer-bg.webp",
  logoSrc = "./logo.png",
}) {
  const year = new Date().getFullYear();

  const mainLinks = [
    { label: "Attractions", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Visas", href: "#" },
    { label: "Hotels", href: "#" },
    { label: "Deals", href: "#" },
    { label: "Sign in", href: "#" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="relative w-full text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgSrc}
          alt="Desert background"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Top fade and bottom dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-transparent" />
      </div>

      {/* Soft orange glow behind logo to ensure visibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-40 hidden -translate-x-1/2 rounded-full blur-3xl md:block"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(closest-side, rgba(249,115,22,0.25), rgba(0,0,0,0))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center pt-14 sm:pt-24">
          <img
            src={logoSrc}
            alt="GetTourGuide logo"
            className="w-36 sm:w-44 md:w-52 drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            loading="eager"
            style={{ filter: "drop-shadow(0 12px 28px rgba(249,115,22,.3))" }}
          />
          {/* Optional brand tagline area (hidden; uncomment if needed) */}
          {/* <p className="mt-3 text-sm text-white/80">LIVE THE ADVENTURE</p> */}
        </div>

        {/* Primary Navigation */}
        <div className="mt-8 border-t border-white/15">
          <nav
            aria-label="Footer main navigation"
            className="mx-auto max-w-6xl"
          >
            <div className="flex flex-col items-center gap-6 py-6 md:py-7">
              {/* Scrollable row on mobile */}
              <ul className="flex w-full max-w-5xl items-center justify-center gap-x-6 gap-y-2 overflow-x-auto px-1 text-sm sm:text-[0.95rem] md:gap-x-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-wrap md:flex-nowrap">
                {mainLinks.map((link) => (
                  <li key={link.label} className="shrink-0">
                    <a
                      href={link.href}
                      className="inline-block py-1 text-white/90 transition hover:text-orange-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {/* CTA: Find activities */}
                <li className="shrink-0">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-400/20 ring-1 ring-white/10 transition hover:from-orange-600 hover:to-orange-700"
                  >
                    Find activities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Legal + Copyright */}
        <div className="border-t border-white/10 pb-10 pt-5 sm:pt-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4 text-sm text-white/80">
              {legalLinks.map((link, i) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                  {i < legalLinks.length - 1 && (
                    <span className="text-white/30">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-center text-sm text-white/70">
              Copyright {year}{" "}
              <span className="text-orange-400 font-medium">GetTourGuide</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
