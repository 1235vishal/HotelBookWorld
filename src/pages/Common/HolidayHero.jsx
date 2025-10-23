import { useEffect, useMemo, useState } from "react";

/**
 * HolidayHero
 * A modern, responsive hero section for holiday package search with only two inputs:
 * - Country (select first)
 * - City (dependent on Country)
 *
 * Props:
 * - onSearch?: (params: { country: string; city: string }) => void
 * - locations?: Array<{ country: string; cities: string[] }>
 * - defaultCountry?: string
 * - defaultCity?: string
 * - backgroundUrl?: string
 * - backgroundUrls?: string[]
 * - rotateIntervalMs?: number (default: 8000)
 * - themeColor?: string (default: "#F17232")
 * - showTopBar?: boolean (default: false)
 * - topOffset?: string | number (default: 0)
 *
 * TailwindCSS required.
 */
export default function HolidayHero({
  onSearch,
  locations,
  defaultCountry = "",
  defaultCity = "",
  backgroundUrl,
  backgroundUrls,
  rotateIntervalMs = 8000,
  themeColor = "#F17232",
  showTopBar = false,
  topOffset = 0,
}) {
  // Fallback sample data if no locations prop is provided
  const sampleLocations = useMemo(
    () => [
      {
        country: "United Arab Emirates",
        cities: [
          "Dubai",
          "Abu Dhabi",
          "Sharjah",
          "Ras Al Khaimah",
          "Fujairah",
          "Ajman",
        ],
      },
      {
        country: "Turkey",
        cities: ["Istanbul", "Antalya", "Cappadocia", "Izmir"],
      },
      { country: "Georgia", cities: ["Tbilisi", "Batumi", "Kutaisi"] },
      { country: "Azerbaijan", cities: ["Baku", "Gabala", "Sheki"] },
      { country: "Maldives", cities: ["Malé", "Maafushi"] },
      { country: "Indonesia", cities: ["Bali (Denpasar)", "Ubud", "Jakarta"] },
      { country: "France", cities: ["Paris", "Nice", "Lyon"] },
      { country: "Italy", cities: ["Rome", "Venice", "Milan", "Florence"] },
      {
        country: "United Kingdom",
        cities: ["London", "Edinburgh", "Manchester"],
      },
      {
        country: "Thailand",
        cities: ["Bangkok", "Phuket", "Chiang Mai", "Krabi"],
      },
      { country: "Egypt", cities: ["Cairo", "Sharm El Sheikh", "Hurghada"] },
      { country: "India", cities: ["Goa", "New Delhi", "Jaipur", "Mumbai"] },
      { country: "Saudi Arabia", cities: ["Riyadh", "Jeddah", "AlUla"] },
      { country: "Singapore", cities: ["Singapore"] },
      { country: "Malaysia", cities: ["Kuala Lumpur", "Langkawi", "Penang"] },
      { country: "Armenia", cities: ["Yerevan", "Tsaghkadzor"] },
      { country: "Switzerland", cities: ["Zurich", "Interlaken", "Lucerne"] },
      { country: "Spain", cities: ["Barcelona", "Madrid", "Seville"] },
      { country: "Greece", cities: ["Athens", "Santorini", "Mykonos"] },
      {
        country: "United States",
        cities: ["New York", "Los Angeles", "Miami"],
      },
    ],
    []
  );

  const data = locations?.length ? locations : sampleLocations;

  const [country, setCountry] = useState(defaultCountry);
  const [city, setCity] = useState(defaultCity);

  // Backgrounds
  const defaultBackgrounds = useMemo(
    () => [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop", // Tropical beach
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2000&auto=format&fit=crop", // City getaway
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop", // Mountains
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2000&auto=format&fit=crop", // Desert
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop", // Island
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2000&auto=format&fit=crop", // European streets
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

  // Theme vars
  const colorVars = {
    "--primary": themeColor,
    "--primary-600": shade(themeColor, -8),
    "--primary-700": shade(themeColor, -14),
    "--primary-800": shade(themeColor, -20),
    "--hero-top-offset":
      typeof topOffset === "number" ? `${topOffset}px` : topOffset || "0px",
  };

  const countries = data.map((d) => d.country);
  const cities = country
    ? data.find((d) => d.country === country)?.cities || []
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country || !city) return;
    const payload = { country, city };
    if (onSearch) onSearch(payload);
    else {
      console.log("Holiday search:", payload);
      alert(`Searching holidays in ${city}, ${country}...`);
    }
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
              alt="Holiday destination background"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                idx === bgIndex ? "opacity-100" : "opacity-0"
              }`}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : undefined}
            />
          ))}
        </div>
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.22),transparent_60%)]" />
      </div>

      {/* Optional internal top bar (hidden by default to avoid navbar conflicts) */}
      {showTopBar && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between gap-4 text-white">
            <a
              href="#"
              aria-label="Holiday Home"
              className="inline-flex items-center gap-2"
            >
              <span className="inline-grid place-items-center h-9 w-9 rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <PlaneIcon className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-wide">
                TripFinder
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="h-4 w-4" />
                Secure payments
              </span>
              <span className="inline-flex items-center gap-2">
                <HeadsetIcon className="h-4 w-4" />
                24/7 expert support
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs sm:text-sm mb-5 backdrop-blur">
              <SparkleIcon className="h-4 w-4" />
              Tailor-made holiday packages
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Discover your perfect holiday, crafted around you
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl">
              From beach getaways to city escapes, compare top deals and book
              with confidence. Flexible options, trusted reviews, and expert
              guidance.
            </p>

            {/* Popular tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Maldives",
                "Bali",
                "Istanbul",
                "Paris",
                "Georgia",
                "Azerbaijan",
              ].map((place) => (
                <button
                  key={place}
                  onClick={() => {
                    // If the tag includes a country-like name, try to set country/city smartly
                    // Otherwise, just set city and clear country
                    const found = data.find((d) =>
                      d.cities.some((c) =>
                        c.toLowerCase().includes(place.toLowerCase())
                      )
                    );
                    if (found) {
                      setCountry(found.country);
                      const matchCity =
                        found.cities.find((c) =>
                          c.toLowerCase().includes(place.toLowerCase())
                        ) || "";
                      setCity(matchCity);
                    }
                  }}
                  className="rounded-full bg-white/12 hover:bg-white/20 px-3 py-1 text-sm ring-1 ring-white/20 transition"
                >
                  {place}
                </button>
              ))}
            </div>

            {/* Trust stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Happy travelers" value="2M+" />
              <Stat label="Destinations" value="500+" />
              <Stat label="Curated packages" value="10k+" />
            </div>
          </div>

          {/* Search card column (only Country and City) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur-md p-4 sm:p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Country */}
                <div className="grid grid-cols-1 gap-3">
                  <LabeledField label="Select Country" htmlFor="country">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <GlobeIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => {
                          setCountry(e.target.value);
                          setCity(""); // reset city when country changes
                        }}
                        className="w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                        required
                      >
                        <option value="" disabled>
                          Choose a country
                        </option>
                        {countries.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </LabeledField>
                </div>

                {/* City (dependent) */}
                <div className="grid grid-cols-1 gap-3">
                  <LabeledField label="Select City" htmlFor="city">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <PinIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        disabled={!country}
                        className={`w-full appearance-none pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition ${
                          !country
                            ? "bg-gray-50 text-gray-400 cursor-not-allowed"
                            : ""
                        }`}
                        required
                      >
                        {!country ? (
                          <option value="">Select a country first</option>
                        ) : (
                          <>
                            <option value="" disabled>
                              Choose a city
                            </option>
                            {cities.map((ct) => (
                              <option key={ct} value={ct}>
                                {ct}
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                      <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </LabeledField>
                </div>

                {/* CTA */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={!country || !city}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-4 py-3.5 shadow-lg shadow-[var(--primary)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] transition"
                  >
                    <SearchIcon className="h-5 w-5" />
                    Search Holidays
                  </button>
                </div>
              </form>
            </div>

            {/* Badge strip */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-white/90 text-sm">
              <Badge
                icon={<StarIcon className="h-4 w-4" />}
                text="Trusted reviews"
              />
              <Badge
                icon={<SparkleIcon className="h-4 w-4" />}
                text="Exclusive deals"
              />
              <Badge
                icon={<ShieldIcon className="h-4 w-4" />}
                text="Secure payments"
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
function PlaneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12l20-8-6 9 6 9-20-8v-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
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
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" />
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
// Simple shade/darken function for hex colors
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
