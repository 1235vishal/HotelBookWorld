import { useEffect, useState } from "react";

export default function Hero() {
  // Smooth crossfade slideshow for the right side
  const slides = [
    "https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541667132-9d806b09a8fd?q=80&w=1600&auto=format&fit=crop",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  // Compact location search
  const [query, setQuery] = useState("");
  const onSearch = (e) => {
    e?.preventDefault?.();
    const q = query.trim() || "Anywhere";
    alert(`Searching: ${q}`);
  };

  return (
    <section className="relative overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />

      <div className="container mx-auto px-3 pt-1 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center pt-6 md:pt-10 lg:pt-14 pb-8 md:pb-14">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 ring-1 ring-slate-200 shadow-soft mb-4">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-700">
                Trusted by 500k+ travelers • 24x7 support
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Your partner for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FF5A5F] to-[#FF3D77]">
                tours, attraction tickets, visas &amp; hotels
              </span>
            </h1>

            {/* <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-xl">
              Book top-rated experiences across the UAE and worldwide. Instant
              confirmation, best price guarantee, and flexible cancellations.
            </p> */}
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-xl">
              Book top-rated experiences across the UAE and worldwide with{" "}
              <span className="font-bold text-[#FF8A00]">Get Tour Guide</span>.
              Instant confirmation, best price guarantee, and flexible
              cancellations.
            </p>
            {/* Compact location search (replaces CTAs) */}
            <form
              id="search"
              onSubmit={onSearch}
              className="mt-4 sm:mt-5 w-full max-w-xl"
            >
              <div className="flex items-center rounded-xl border border-slate-200 bg-white/95 backdrop-blur ring-1 ring-slate-100 shadow-soft px-3 py-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search location (e.g., Dubai, Abu Dhabi, Burj Khalifa)"
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400 text-[15px] sm:text-base font-medium"
                  aria-label="Search location"
                />
                <button
                  type="submit"
                  className="ml-2 inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-3.5 py-2 text-sm font-semibold"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Social proof: sharper avatars, solid ring and circle */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=90&w=160&auto=format&fit=crop"
                  alt="Traveler 1"
                  width={40}
                  height={40}
                  decoding="async"
                />
                <img
                  className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=90&w=160&auto=format&fit=crop"
                  alt="Traveler 2"
                  width={40}
                  height={40}
                  decoding="async"
                />
                <img
                  className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=90&w=160&auto=format&fit=crop"
                  alt="Traveler 3"
                  width={40}
                  height={40}
                  decoding="async"
                />
                <div className="h-10 w-10 rounded-full ring-2 ring-white bg-slate-50 text-slate-800 grid place-items-center text-xs font-extrabold select-none">
                  +10k
                </div>
              </div>
              <div className="text-sm text-slate-700 flex items-center gap-1.5">
                Rated 4.8/5 from 50k+ reviews
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Visual with crossfade slideshow */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-card h-[260px] sm:h-[320px] md:h-[440px] lg:h-[520px]">
              {slides.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt="Destination highlight"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === current ? "opacity-100" : "opacity-0"
                  }`}
                  decoding="async"
                />
              ))}
              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0" />
            </div>

            {/* Floating card: ensure image shows clearly */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-3 sm:left-6 md:left-10">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 sm:p-4 shadow-card ring-1 ring-slate-100 max-w-[90vw] sm:max-w-none">
                <img
                  className="h-12 w-12 rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=90&w=240&auto=format&fit=crop"
                  alt="Dubai Desert Safari"
                  width={48}
                  height={48}
                  decoding="async"
                />
                <div>
                  <div className="text-sm font-semibold">
                    Dubai Desert Safari
                  </div>
                  <div className="text-xs text-slate-500">
                    6–7 hrs • From $45
                  </div>
                </div>
                <div className="ml-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-emerald-700 text-xs font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="m9 16.17 8.59-8.58L19 8l-10 10-4-4 1.41-1.41L9 16.17z" />
                  </svg>
                  Hotel pickup
                </div>
              </div>
            </div>

            {/* Discount badge */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 md:right-8">
              <div className="rounded-full bg-white/90 backdrop-blur px-3.5 py-2 shadow-soft ring-1 ring-slate-200 text-sm font-semibold">
                Save up to 40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
