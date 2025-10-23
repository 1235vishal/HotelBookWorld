import { useMemo } from "react";

/**
 * AllCruises
 * - Reuses the same marquee row + square card design as ToursAllComp
 * - Fully responsive: 1/2/3 cards on small/medium, exactly 4 on xl+
 * - Arrow ring stays decorative; the whole card is a link
 * - Price stripe only renders when a price is provided
 *
 * Props:
 * - sections?: Array<{
 *     id?: string;
 *     title: string;
 *     subtitle?: string;
 *     items: Array<{
 *       id?: string;
 *       title: string;
 *       price?: number | null;
 *       currency?: string;
 *       image: string;
 *       reviews?: number;
 *       badge?: string;
 *       href?: string;
 *     }>;
 *   }>
 * - themeColor?: string (default: "#F17232")
 * - speed?: number (seconds it takes to scroll half the track; default 40)
 */
export default function AllCruises({
  sections,
  themeColor = "#F17232",
  speed = 40,
}) {
  // Default content mirrors the rows and items shown in the provided screenshot
  const DEFAULT_SECTIONS = useMemo(
    () => [
      {
        id: "cruise-getaways",
        title: "Top Cruise Getaways",
        subtitle:
          "Indulge in the luxury of cruising while discovering hidden gems across the world's most stunning coastlines.",
        items: [
          {
            title: "Abu Dhabi",
            price: null,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1565071783280-719a1413d7d0?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/abu-dhabi-getaways",
          },
          {
            title: "Barcelona",
            price: null,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/barcelona-getaways",
          },
          {
            title: "Dubai",
            price: null,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1546412414-8035e1776c9b?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/dubai-getaways",
          },
          {
            title: "Jeddah",
            price: null,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1621981217802-9c992cf5d5df?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/jeddah-getaways",
          },
        ],
      },

      {
        id: "festive-from-uae",
        title: "Festive Sailing from UAE",
        subtitle:
          "Celebrate festive moments on luxury cruises from Dubai, Abu Dhabi, Singapore & Barcelona.",
        items: [
          {
            title: "3 Nights Singapore Diwali Escape",
            price: 2567.26,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1526662784301-42d0c50ae3be?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/singapore-diwali-escape-3n",
          },
          {
            title: "4N UAE National Day Cruise to Dubai",
            price: 4301.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/uae-national-day-cruise-4n",
          },
          {
            title: "MSC Euribia 3N Abu Dhabi - Sir Bani Yas",
            price: 1525.7,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/msc-euribia-abu-dhabi-3n",
          },
          {
            title: "4N UAE National Day Cruise to Dubai",
            price: 4301.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/uae-national-day-dubai-4n",
          },
        ],
      },

      {
        id: "top-cruise-from-uae",
        title: "Top Cruise From UAE",
        subtitle:
          "Sail from Dubai or Abu Dhabi with unbeatable prices and top itineraries.",
        items: [
          {
            title: "3 Nights Iconic Arabia with Celestyal",
            price: 2843.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1517343985841-f6b1e8b41a52?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/iconic-arabia-3n-celestyal",
          },
          {
            title: "3N MSC Euribia Abu Dhabi - Sir Bani Yas",
            price: 1729.2,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/msc-euribia-3n-abu-dhabi",
          },
          {
            title: "4 Nights Discover Arabia with Celestyal",
            price: 1799.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/discover-arabia-4n",
          },
          {
            title: "4N UAE National Day Cruise to Dubai",
            price: 4301.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/national-day-cruise-4n",
          },
        ],
      },

      {
        id: "top-departures-abu-dhabi",
        title: "Top Departures from Abu Dhabi",
        subtitle: "Cruise from Abu Dhabi with top deals and world-class ships.",
        items: [
          {
            title: "3N MSC Euribia Abu Dhabi - Sir Bani Yas",
            price: 1729.2,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/abu-dhabi-msc-euribia-3n",
          },
          {
            title: "Christmas at Sea — 3N UAE Cruise on MSC Euribia",
            price: 2400.2,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/abu-dhabi-christmas-3n",
          },
          {
            title: "New Year at Sea 3N Abu Dhabi - Sir Bani Yas",
            price: 2999.7,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/abu-dhabi-new-year-3n",
          },
          {
            title: "Weekend Escape 3N Gulf Cruise",
            price: 1899.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/abu-dhabi-weekend-3n",
          },
        ],
      },

      {
        id: "top-departures-europe",
        title: "Top Departures From Europe",
        subtitle:
          "Sail from Europe on amazing cruises with unbeatable deals and itineraries.",
        items: [
          {
            title: "7N Christmas Escape to Spain - Italy - France",
            price: 7161.98,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/europe-7n-christmas-escape",
          },
          {
            title: "7N Cruise to Spain - Italy - France with Celestyal",
            price: 1696.37,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/europe-7n-spain-italy-france",
          },
          {
            title: "7N Spain - France Cruise aboard Celebrity",
            price: 5782.66,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b89?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/europe-7n-spain-france-celebrity",
          },
        ],
      },

      {
        id: "top-departures-jeddah",
        title: "Top Departures From Jeddah",
        subtitle:
          "Discover top cruise departures from Jeddah at the best prices.",
        items: [
          {
            title: "3 Night Aroya Cruise Jeddah to Bahrain",
            price: 1613.69,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/jeddah-aroya-3n-bahrain",
          },
          {
            title: "4 nights Aroya Cruises Jeddah to Safaga",
            price: 1721.41,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/jeddah-aroya-4n-safaga",
          },
          {
            title: "Arabian Shores 4N Cruise Jeddah to Muscat",
            price: 1721.41,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f5?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/jeddah-arabian-shores-4n",
          },
          {
            title: "Christmas at Sea — 3N Aroya Cruise Jeddah",
            price: 1613.69,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/jeddah-christmas-3n",
          },
        ],
      },

      {
        id: "most-popular",
        title: "Most Popular Cruises This Season",
        subtitle: "Most Popular Cruises This Season",
        items: [
          {
            title: "3N MSC Euribia Abu Dhabi - Sir Bani Yas",
            price: 1729.2,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/popular-msc-euribia-3n",
          },
          {
            title: "4N UAE National Day Cruise to Dubai",
            price: 4301.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/popular-uae-national-day-4n",
          },
          {
            title: "7N MSC Euribia Dubai to Doha to Abu Dhabi",
            price: 4204.2,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/cruises/popular-euribia-dubai-doha-7n",
          },
        ],
      },
    ],
    []
  );

  const data = sections?.length ? sections : DEFAULT_SECTIONS;

  return (
    <section
      className="relative bg-[#F7F7F8] py-6 sm:py-8 lg:py-10"
      style={{ "--primary": themeColor }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {data.map((sec, sIdx) => (
          <SectionRow
            key={sec.id || sIdx}
            title={sec.title}
            subtitle={sec.subtitle}
            items={sec.items}
            speed={speed}
          />
        ))}
      </div>

      <style>{css}</style>
    </section>
  );
}

/* ---------------- Section with infinite row ---------------- */

function SectionRow({ title, subtitle, items, speed }) {
  const LOOP = useMemo(() => [...items, ...items], [items]);

  const durationSec = useMemo(() => {
    const base = Math.max(1, items.length);
    return Math.round(speed * (base / 6) * 10) / 10;
  }, [items.length, speed]);

  return (
    <div className="tours-section not-prose">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-neutral-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
          ) : null}
        </div>

        <div className="flex items-center gap-2">
          <CircleArrow dir="prev" />
          <CircleArrow dir="next" />
        </div>
      </div>

      <div className="mt-4 sm:mt-5 tours-marquee-mask group">
        <div
          className="tours-marquee-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {LOOP.map((t, idx) => (
            <CruiseCard key={`${t.title}-${idx}`} cruise={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Card ---------------- */

function CruiseCard({ cruise }) {
  const {
    title,
    image,
    price = null,
    currency = "AED",
    reviews = 0,
    badge,
    href,
  } = cruise;

  const link = href || `/cruises/${slugify(title)}`;
  const showPrice =
    typeof price === "number" && Number.isFinite(price) && price >= 0;

  return (
    <a
      href={link}
      aria-label={`View ${title}`}
      className="
        group/card relative shrink-0 block
        rounded-[22px] bg-black overflow-hidden
        ring-1 ring-black/5 shadow-[0_10px_30px_rgba(16,24,40,0.14)]
        transition-transform duration-300 hover:-translate-y-0.5
        tour-card top-card
      "
    >
      <div className="relative aspect-square">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/32 to-transparent pointer-events-none" />

        {badge ? (
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white badge">
            {badge}
          </div>
        ) : null}

        <div className="card-content absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-extrabold drop-shadow clamp-2">
            {title}
          </h3>

          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#FACC15]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[12px] w-[12px]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
            </svg>
            <span>{reviews} Reviews</span>
          </div>

          {showPrice ? (
            <div className="price-stripe mt-2">
              <div className="price-row">
                <span className="price-label">Per Person from</span>
                <span className="price-current">
                  {currency} {formatPrice(price)}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
          <div className="ring-wrap">
            <svg
              className="ring-svg animate-spin-slower"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="0.1 10.5"
              />
            </svg>
            <span className="ring-btn-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[55%] w-[55%]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17 17 7M9 7h8v8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ---------------- Small UI parts ---------------- */

function CircleArrow({ dir = "next" }) {
  const isNext = dir === "next";
  return (
    <button
      type="button"
      aria-label={isNext ? "Next" : "Previous"}
      className="
        inline-grid h-8 w-8 place-items-center rounded-full
        bg-white ring-1 ring-black/10 text-neutral-700
        hover:bg-[var(--primary)] hover:text-white hover:ring-[var(--primary)]/40
        transition
      "
      onClick={(e) => {
        const mask = e.currentTarget
          .closest(".tours-section")
          ?.querySelector(".tours-marquee-mask");
        if (!mask) return;
        mask.classList.add("tours-bump");
        setTimeout(() => mask.classList.remove("tours-bump"), 300);
      }}
    >
      {isNext ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M8 5l8 7-8 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path
            d="M16 5L8 12l8 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

/* ---------------- Utils ---------------- */

function formatPrice(n) {
  if (typeof n !== "number") return n;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/* ---------------- Local CSS (same layout & responsiveness) ---------------- */

const css = `
.tours-section + .tours-section { margin-top: 32px; }
@media (min-width: 640px) { .tours-section + .tours-section { margin-top: 42px; } }
@media (min-width: 1024px) { .tours-section + .tours-section { margin-top: 52px; } }

/* Marquee */
.tours-marquee-mask {
  overflow: hidden;
  --gap: 28px;
  --pad: 64px;
  --max: 1320px;
}
.tours-marquee-mask:hover .tours-marquee-track { animation-play-state: paused; }
.tours-marquee-track {
  display: flex;
  align-items: stretch;
  gap: var(--gap);
  width: max-content;
  will-change: transform;
  animation-name: tours-marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes tours-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Decorative bump on click */
.tours-bump .tours-marquee-track { animation-duration: 0.001s !important; }

/* Card sizing */
.tour-card { width: clamp(280px, 88vw, 420px); }
@media (min-width: 640px) { .tour-card { width: clamp(300px, 48vw, 440px); } }
@media (min-width: 768px) { .tour-card { width: clamp(300px, 32vw, 460px); } }
@media (min-width: 1280px) {
  .tour-card {
    width: calc((min(var(--max), 100vw - var(--pad)) - (3 * var(--gap))) / 4);
    max-width: 360px;
  }
}

/* Reserve space for arrow ring */
.top-card {
  --ring-size: clamp(3.5rem, 10vw, 4.25rem);
  color: var(--primary);
}
.card-content {
  padding-right: calc(var(--ring-size) + 0.75rem);
  min-width: 0;
}

/* Price stripe */
.price-stripe {
  width: 100%;
  min-height: 38px;
  display: grid;
  align-items: center;
  border-radius: 12px;
  padding: 6px 12px;
  background:
    linear-gradient(
      135deg,
      rgba(250, 204, 21, 0.85) 0%,
      rgba(253, 224, 71, 0.85) 100%
    );
  box-shadow: 0 6px 18px rgba(0,0,0,0.18);
  border: 1px solid rgba(202, 138, 4, 0.35);
  margin-right: calc(var(--ring-size) + 0.5rem);
}
.price-row {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
}
.price-label {
  font-size: 11px;
  color: #0f172ab3;
}
.price-current {
  font-weight: 800;
  color: #0f172a;
  font-size: clamp(1rem, 1.7vw, 1.125rem);
}

/* Arrow ring */
.ring-wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: var(--ring-size);
  height: var(--ring-size);
  color: currentColor;
  pointer-events: none;
}
.ring-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.ring-btn-link {
  z-index: 1;
  display: inline-grid;
  place-items: center;
  width: 68%;
  height: 68%;
  border-radius: 9999px;
  background: #ffffffE6;
  color: #0f172a;
  transition: transform 200ms ease;
  will-change: transform;
}
.group/card:hover .ring-btn-link { transform: translateZ(0) scale(1.08); }

/* Badge */
.badge { background-color: var(--primary); }

/* Spin */
@keyframes spin { to { transform: rotate(360deg); } }
.animate-spin-slower { animation: spin 7s linear infinite; }

/* Clamp */
.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smaller gap on very small screens */
@media (max-width: 480px) {
  .tours-marquee-mask { --gap: 18px; }
}
`;
