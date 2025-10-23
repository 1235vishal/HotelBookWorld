import { useMemo } from "react";

/**
 * AllRooms (Clean list + external filters slot)
 * - Responsive grid: 1 (xs), 2 (sm), 3 (lg+)
 * - Orange theme (default #F17232)
 * - Only "Details" button (no circular CTA, no "Book", no new filters)
 * - filtersSlot: render your existing filter UI above the cards (we don't create new filters)
 *
 * Props:
 * - rooms?: Room[]
 * - themeColor?: string (default: "#F17232")
 * - onDetails?: (room) => void
 * - filtersSlot?: React.ReactNode   // plug your existing filters UI here
 */
export default function AllRooms({
  rooms,
  themeColor = "#F17232",
  onDetails,
  filtersSlot, // external filters UI (existing component), rendered above the grid
}) {
  const DEFAULT_ROOMS = useMemo(
    () => [
      {
        title: "Skyline Deluxe Room",
        location: "Downtown Dubai",
        price: 599.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
        rating: 4.7,
        reviews: 128,
        amenities: ["Free Wi‑Fi", "Breakfast", "City View"],
        badge: "Top Pick",
        href: "/roomdetail",
      },
      {
        title: "Coastal Suite",
        location: "Jumeirah Beach",
        price: 899.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop",
        rating: 4.9,
        reviews: 203,
        amenities: ["Sea View", "Balcony", "Pool Access"],
        badge: "Sea View",
        href: "/rooms/coastal-suite",
      },
      {
        title: "Urban Chic Studio",
        location: "Business Bay",
        price: 429.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1600&auto=format&fit=crop",
        rating: 4.4,
        reviews: 76,
        amenities: ["Kitchenette", "Free Wi‑Fi", "Gym"],
        href: "/rooms/urban-chic-studio",
      },
      {
        title: "Palm View Executive",
        location: "Palm Jumeirah",
        price: 1049.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1600&auto=format&fit=crop",
        rating: 4.8,
        reviews: 164,
        amenities: ["Butler Service", "Lounge Access", "Sea View"],
        badge: "Executive",
        href: "/rooms/palm-view-executive",
      },
      {
        title: "Desert Retreat King",
        location: "Al Marmoom",
        price: 699.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
        rating: 4.6,
        reviews: 92,
        amenities: ["Private Patio", "Breakfast", "Spa"],
        href: "/rooms/desert-retreat-king",
      },
      {
        title: "Marina Breeze Room",
        location: "Dubai Marina",
        price: 545.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop",
        rating: 4.5,
        reviews: 110,
        amenities: ["Marina View", "Free Wi‑Fi", "Pool"],
        href: "/rooms/marina-breeze-room",
      },
      {
        title: "Heritage Suite",
        location: "Al Fahidi",
        price: 799.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
        rating: 4.7,
        reviews: 87,
        amenities: ["Breakfast", "Courtyard", "Cultural Walk"],
        badge: "Heritage",
        href: "/rooms/heritage-suite",
      },
      {
        title: "Garden Patio Room",
        location: "City Walk",
        price: 489.0,
        currency: "AED",
        image:
          "https://images.unsplash.com/photo-1582582621959-48d0b1a2e5b2?q=80&w=1600&auto=format&fit=crop",
        rating: 4.3,
        reviews: 64,
        amenities: ["Patio", "Free Wi‑Fi", "Gym"],
        href: "/rooms/garden-patio-room",
      },
    ],
    []
  );

  const list = rooms?.length ? rooms : DEFAULT_ROOMS;

  return (
    <section
      className="relative bg-[#F7F7F8] py-6 sm:py-8 lg:py-10"
      style={{ "--primary": themeColor }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Existing filters UI goes here (we don't create new filters) */}
        {filtersSlot ? (
          <div className="mb-4 sm:mb-5">
            <div className="rounded-xl border border-black/10 bg-white/90 px-3.5 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
              {filtersSlot}
            </div>
          </div>
        ) : null}

        <header className="flex flex-col gap-1">
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-neutral-900">
            Explore Rooms
          </h2>
          <p className="text-sm text-neutral-500">
            Short, clear info. Full details and booking on the next page.
          </p>
        </header>

        {/* Exactly 3 per row on desktop, responsive down to 1/2 */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {list.map((room, idx) => (
            <RoomCard
              key={room.id || `${room.title}-${idx}`}
              room={room}
              onDetails={(r) => onDetails?.(r)}
            />
          ))}
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

/* ---------------- Room Card ---------------- */

function RoomCard({ room, onDetails }) {
  const {
    title,
    location,
    image,
    price = null,
    currency = "AED",
    rating = 0,
    reviews = 0,
    amenities = [],
    badge,
    href,
  } = room;

  const detailsLink = href || `/rooms/${slugify(title)}`;
  const canPrice =
    typeof price === "number" && Number.isFinite(price) && price >= 0;

  return (
    <div
      className="
        group/card block rounded-2xl bg-white
        ring-1 ring-black/5 shadow-[0_10px_30px_rgba(16,24,40,0.12)]
        transition-transform duration-300 hover:-translate-y-0.5
      "
    >
      {/* Media header */}
      <div className="relative rounded-t-2xl overflow-hidden">
        <div className="relative aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.06]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

          {badge ? (
            <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white badge">
              {badge}
            </div>
          ) : null}

          <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-amber-300">
              <Stars rating={rating} />
              <span className="text-white/90">{rating.toFixed(1)}</span>
              <span className="text-white/70">({reviews} reviews)</span>
            </div>

            <h3 className="mt-1 text-white text-base sm:text-lg font-extrabold drop-shadow clamp-2">
              {title}
            </h3>
            {location ? (
              <p className="mt-0.5 text-xs sm:text-sm text-white/85">
                {location}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="rounded-b-2xl bg-white px-3.5 py-3 sm:px-4 sm:py-3.5">
        {/* Keep info short: show at most 2 amenities */}
        {amenities?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {amenities.slice(0, 2).map((a, i) => (
              <span
                key={`${a}-${i}`}
                className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] font-medium text-neutral-700"
              >
                {a}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-2.5 flex items-end justify-between gap-2">
          {canPrice ? (
            <div className="leading-tight">
              <div className="text-[11px] text-neutral-500">Per Night from</div>
              <div className="text-[17px] sm:text-[18px] font-extrabold text-neutral-900">
                {currency} {formatPrice(price)}
              </div>
            </div>
          ) : (
            <div className="text-[11px] text-neutral-500">
              Contact for pricing
            </div>
          )}

          {/* Details button is a real link with href; onDetails does NOT prevent navigation */}
          <a
            href={detailsLink}
            onClick={() => onDetails?.(room)}
            className="
              inline-flex items-center gap-1 rounded-lg border border-neutral-200
              bg-white px-3 py-2 text-xs font-semibold text-neutral-800
              hover:border-[var(--primary)]/30 hover:text-[var(--primary)]
              transition-colors
            "
            aria-label={`View details for ${title}`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 20c5 0 9-6 9-8s-4-8-9-8-9 6-9 8 4 8 9 8zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                strokeWidth="2"
              />
            </svg>
            Details
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI Bits ---------------- */

function Stars({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;
  return (
    <span className="inline-flex items-center text-amber-300">
      {Array.from({ length: total }).map((_, i) => {
        const state = i < full ? "full" : i === full && half ? "half" : "empty";
        return <StarIcon key={i} state={state} />;
      })}
    </span>
  );
}

function StarIcon({ state }) {
  if (state === "full") {
    return (
      <svg viewBox="0 0 20 20" className="h-[12px] w-[12px] fill-current">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 0 0 .95-.69l1.17-3.292z" />
      </svg>
    );
  }
  if (state === "half") {
    return (
      <svg viewBox="0 0 20 20" className="h-[12px] w-[12px]">
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 0 0 .95-.69l1.17-3.292z"
          fill="url(#halfGrad)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-[12px] w-[12px]"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M10 3l2.35 4.86 5.36.78-3.88 3.78.92 5.36L10 15.9l-4.75 2.48.92-5.36L2.3 8.64l5.36-.78L10 3z"
        strokeWidth="1.5"
      />
    </svg>
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

/* ---------------- Local CSS ---------------- */
const css = `
.badge { background-color: var(--primary); }

/* Clamp */
.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;
