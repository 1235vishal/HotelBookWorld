import { useEffect, useMemo, useState } from "react";

/**
 * VisasHero
 * A modern, responsive hero section for Visa assistance with WhatsApp CTA.
 *
 * Features:
 * - Theme color: #F17232 (configurable via themeColor prop)
 * - Rotating background images with smooth cross-fade
 * - Right-side card with a single primary CTA: "Apply Visa on WhatsApp"
 * - Optional dropdowns (Nationality, Destination) to prefill WhatsApp message
 * - Fully responsive; does not affect your existing navbar
 *
 * Props:
 * - whatsappNumber?: string                    // E.g., "+971501234567". Default: "+971521234567"
 * - themeColor?: string                        // Default: "#F17232"
 * - showTopBar?: boolean                       // Default: false (keeps your navbar separate)
 * - topOffset?: string | number                // Default: 0 (e.g., "80px" if navbar is fixed)
 * - backgroundUrl?: string                     // Optional single image
 * - backgroundUrls?: string[]                  // Optional rotation list
 * - rotateIntervalMs?: number                  // Default: 8000
 * - defaultNationality?: string
 * - defaultDestination?: string
 *
 * TailwindCSS required.
 */
export default function VisasHero({
  whatsappNumber = "+971521234567",
  themeColor = "#F17232",
  showTopBar = false,
  topOffset = 0,
  backgroundUrl,
  backgroundUrls,
  rotateIntervalMs = 8000,
  defaultNationality = "",
  defaultDestination = "",
}) {
  // Inputs (optional; only used to enrich the WhatsApp message)
  const [nationality, setNationality] = useState(defaultNationality);
  const [destination, setDestination] = useState(defaultDestination);

  // Backgrounds tailored to visas/travel
  const defaultBackgrounds = useMemo(
    () => [
      // Passport & boarding pass
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2000&auto=format&fit=crop",
      // Airport terminal
      "https://images.unsplash.com/photo-1518306727298-4c57ef9d2c01?q=80&w=2000&auto=format&fit=crop",
      // Embassy/consulate-like building
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2000&auto=format&fit=crop",
      // World map travel planning
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000&auto=format&fit=crop",
      // Stamps and documents
      "https://images.unsplash.com/photo-1463680942456-e4230dbeaec7?q=80&w=2000&auto=format&fit=crop",
    ],
    []
  );

  const rotationList = useMemo(() => {
    if (backgroundUrls?.length) return backgroundUrls;
    if (backgroundUrl) return [backgroundUrl, ...defaultBackgrounds.slice(1)];
    return defaultBackgrounds;
  }, [backgroundUrl, backgroundUrls, defaultBackgrounds]);

  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    if (!rotationList?.length) return;
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % rotationList.length);
    }, rotateIntervalMs);
    return () => clearInterval(id);
  }, [rotationList, rotateIntervalMs]);

  // Brand color CSS variables
  const colorVars = {
    "--primary": themeColor,
    "--primary-600": shade(themeColor, -8),
    "--primary-700": shade(themeColor, -14),
    "--primary-800": shade(themeColor, -20),
    "--hero-top-offset":
      typeof topOffset === "number" ? `${topOffset}px` : topOffset || "0px",
  };

  // Sample options (extend/replace as needed)
  const nationalities = [
    "United Arab Emirates",
    "India",
    "Pakistan",
    "Philippines",
    "Egypt",
    "Saudi Arabia",
    "United Kingdom",
    "United States",
    "Russia",
    "China",
  ];
  const destinations = [
    "United Arab Emirates",
    "Saudi Arabia",
    "Turkey",
    "Azerbaijan",
    "Georgia",
    "Armenia",
    "Schengen (Europe)",
    "United Kingdom",
    "United States",
    "Singapore",
    "Malaysia",
    "Thailand",
  ];

  const handleWhatsAppClick = () => {
    // Sanitize number: keep digits only for wa.me format
    const number = (whatsappNumber || "").replace(/\D/g, "");
    const parts = [];
    parts.push("Hello! I'd like assistance with a visa.");
    if (nationality) parts.push(`• Nationality: ${nationality}`);
    if (destination) parts.push(`• Destination: ${destination}`);
    parts.push(
      "Please share the requirements, fees, and processing time. Thank you."
    );
    const text = encodeURIComponent(parts.join("\n"));
    const url = number
      ? `https://wa.me/${number}?text=${text}`
      : `https://wa.me/?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="relative isolate pt-[var(--hero-top-offset)]"
      style={colorVars}
    >
      {/* Rotating Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0">
          {rotationList.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Visa services background"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                idx === bgIndex ? "opacity-100" : "opacity-0"
              }`}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : undefined}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.22),transparent_60%)]" />
      </div>

      {/* Optional internal top bar (hidden by default to avoid clashing with your navbar) */}
      {showTopBar && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between gap-4 text-white">
            <a
              href="#"
              aria-label="Visas Home"
              className="inline-flex items-center gap-2"
            >
              <span className="inline-grid place-items-center h-9 w-9 rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <PassportIcon className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-wide">
                VisaAssist
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="h-4 w-4" />
                Secure process
              </span>
              <span className="inline-flex items-center gap-2">
                <HeadsetIcon className="h-4 w-4" />
                24/7 support
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Copy */}
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs sm:text-sm mb-5 backdrop-blur">
              <SparkleIcon className="h-4 w-4" />
              Quick, reliable visa assistance
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Simplify your visa process with expert guidance
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl">
              From document checks to application submission, our team helps you
              secure visas smoothly and on time. Transparent pricing, real-time
              updates, and dedicated support.
            </p>

            {/* Popular quick-picks (fill inputs) */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { n: "India", d: "United Arab Emirates" },
                { n: "United Arab Emirates", d: "Saudi Arabia" },
                { n: "Philippines", d: "Schengen (Europe)" },
                { n: "Egypt", d: "Turkey" },
                { n: "Pakistan", d: "Azerbaijan" },
              ].map((opt) => (
                <button
                  key={`${opt.n}-${opt.d}`}
                  onClick={() => {
                    setNationality(opt.n);
                    setDestination(opt.d);
                  }}
                  className="rounded-full bg-white/12 hover:bg-white/20 px-3 py-1 text-sm ring-1 ring-white/20 transition"
                >
                  {opt.n} → {opt.d}
                </button>
              ))}
            </div>

            {/* Trust stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Approved visas" value="500k+" />
              <Stat label="Countries covered" value="100+" />
              <Stat label="Avg. approval time" value="3–7d" />
            </div>
          </div>

          {/* Right: Card with WhatsApp CTA */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur-md p-4 sm:p-5">
              <div className="space-y-4">
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    Start your visa application
                  </div>
                  <p className="text-sm text-gray-600">
                    Select details (optional) and tap Apply to chat with our
                    visa expert on WhatsApp.
                  </p>
                </div>

                {/* Nationality */}
                <LabeledField label="Your Nationality" htmlFor="nationality">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <GlobeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                    >
                      <option value="">Select nationality (optional)</option>
                      {nationalities.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </LabeledField>

                {/* Destination */}
                <LabeledField label="Destination Country" htmlFor="destination">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <PinIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                    >
                      <option value="">Select destination (optional)</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </LabeledField>

                {/* Benefits */}
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-[var(--primary)]" />
                    End-to-end documentation support
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-[var(--primary)]" />
                    Transparent fees & quick processing
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-[var(--primary)]" />
                    Real-time updates on WhatsApp
                  </li>
                </ul>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] text-white font-medium px-4 py-3.5 shadow-lg shadow-[var(--primary)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] transition"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Apply Visa on WhatsApp
                  </button>
                  <p className="mt-2 text-xs text-gray-500">
                    By continuing, you’ll open WhatsApp to chat with our visa
                    expert.
                  </p>
                </div>
              </div>
            </div>

            {/* Badge strip */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-white/90 text-sm">
              <Badge
                icon={<ShieldIcon className="h-4 w-4" />}
                text="Secure process"
              />
              <Badge
                icon={<SparkleIcon className="h-4 w-4" />}
                text="Expert guidance"
              />
              <Badge
                icon={<StarIcon className="h-4 w-4" />}
                text="Trusted by travelers"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI helpers ---------- */
function LabeledField({ label, htmlFor, children }) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>
      {children}
    </label>
  );
}
function Stat({ value, label }) {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-3 backdrop-blur">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-white/85">{label}</div>
    </div>
  );
}
function Badge({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

/* ---------- Icons (inline SVG, no deps) ---------- */
function PassportIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="3"
        width="16"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 16h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function HeadsetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="2"
        y="11"
        width="4"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="11"
        width="4"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z" fill="currentColor" />
      <path d="M18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" fill="currentColor" />
    </svg>
  );
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22s7-6.25 7-12a7 7 0 1 0-14 0c0 5.75 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function GlobeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M27 5a13 13 0 0 0-20 15.4L6 29l8.8-1.9A13 13 0 0 0 27 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11.5 12.5c.3-1 .8-1 1.2-.8.4.2 1.1 1.8 1.5 2 .4.2.8.1 1.2-.2.4-.3 1.1-1.2 1.4-1 .3.1 1.5.7 1.6 1 .1.3-.3 1.3-1 2.1-.8 1-1.8 1.6-2.4 1.7-.7.1-2.5-.3-3.8-1.8-1.3-1.6-1.5-3.1-1.4-3.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 17.7l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3.5Z" />
    </svg>
  );
}

/* ---------- Utils ---------- */
function shade(hex, percent = -10) {
  const col = hex.replace("#", "");
  const r = parseInt(col.substring(0, 2), 16);
  const g = parseInt(col.substring(2, 4), 16);
  const b = parseInt(col.substring(4, 6), 16);
  const amt = Math.round(2.55 * percent);
  const R = clamp(r + amt, 0, 255);
  const G = clamp(g + amt, 0, 255);
  const B = clamp(b + amt, 0, 255);
  return "#" + [R, G, B].map((v) => v.toString(16).padStart(2, "0")).join("");
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
