import { useMemo, useState } from "react";

/**
 * RoomDetail (single selected room, no image in Available Room row)
 * - Shows only the current room in the "Available Room" section.
 * - Removed the image thumbnail inside the room row.
 * - Sticky hero-side "Book Now" button uses the current room's price.
 * - Clean, responsive layout. Orange theme (#F17232).
 */
export default function RoomDetail({
  themeColor = "#F17232",
  hotel,
  currentRoom,
  rooms,
  currentRoomId,
  content,
  bookingCtaText = "Book Now",
  onBook,
}) {
  const DEFAULT = useMemo(
    () => ({
      hotel: {
        name: "Estay Inn Hotel",
        address: "23rd Street, Al Satwa, Dubai",
        city: "Dubai",
        country: "UAE",
        rating: 4.5,
        reviews: 312,
        images: [
          "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
        ],
        mapUrl: "https://maps.google.com",
      },
      rooms: [
        {
          id: "standard-room-x1",
          title: "Standard Room X1",
          boardType: "Room Only",
          maxAdults: 2,
          maxChildren: 1,
          price: 316.6,
          total: 316.6,
          currency: "AED",
          policies: [
            "Essential Information",
            "Non-Refundable",
            "No-Show: Chargeable",
          ],
        },
      ],
      content: {
        overview:
          "Located in Dubai, Estay Inn Hotel offers an outdoor pool, private parking, a fitness center, and a garden. Rooms include a private bathroom, air conditioning, and a safety deposit box.",
        snippet:
          "Guests can enjoy on-site services with multilingual 24-hour front desk support.",
        whatsNearby: ["Mushrif Park — 3 km", "Dubai Frame — 6 km"],
        topAttractions: ["Dubai Aquarium — 10 km", "Burj Khalifa — 15 km"],
        restaurantsCafes: [
          "Food City Restaurant — 0.6 km",
          "Falafel Point — 0.6 km",
        ],
        beaches: ["Al Mamzar Open Beach — 7 km", "Kite Beach — 10 km"],
        publicTransit: ["Metro Station — 1.2 km", "Bus Stop — 0.4 km"],
        closestAirports: ["DXB — 22 km", "SHJ — 32 km"],
        policies: [
          "Check-in after 2:00 PM",
          "Check-out before 12:00 PM",
          "ID/Passport required at check-in",
        ],
        facilities: [
          "Free Wi‑Fi",
          "Breakfast",
          "Air conditioning",
          "Pool",
          "Gym",
          "24/7 Front desk",
          "Lift",
          "Housekeeping",
          "Room service",
        ],
      },
    }),
    []
  );

  const H = hotel || DEFAULT.hotel;
  const heroImages = H.images?.length ? H.images : [placeholderImage()];
  const [heroIdx, setHeroIdx] = useState(0);

  const resolvedCurrentRoom = useMemo(() => {
    if (currentRoom) return currentRoom;
    if (rooms?.length) {
      if (currentRoomId) {
        const match = rooms.find(
          (r) => r.id === currentRoomId || slugify(r.title) === currentRoomId
        );
        if (match) return match;
      }
      return rooms[0];
    }
    return DEFAULT.rooms[0];
  }, [currentRoom, rooms, currentRoomId, DEFAULT.rooms]);

  const C = content || DEFAULT.content;
  const perNightPrice = isFiniteNumber(resolvedCurrentRoom?.price)
    ? resolvedCurrentRoom.price
    : null;
  const currency =
    resolvedCurrentRoom?.currency || (rooms && currencyOfRooms(rooms)) || "AED";

  const handlePrev = () =>
    setHeroIdx((i) => (i - 1 + heroImages.length) % heroImages.length);
  const handleNext = () => setHeroIdx((i) => (i + 1) % heroImages.length);

  return (
    <main className="bg-[#F7F7F8]" style={{ "--primary": themeColor }}>
      {/* HERO */}
      <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 pt-5">
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Gallery + Title */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-black">
              <div className="relative aspect-[16/7] sm:aspect-[16/6]">
                <img
                  src={heroImages[heroIdx]}
                  alt={`${H.name} image ${heroIdx + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {heroImages.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 ring-1 ring-black/10 hover:bg-white transition"
                      onClick={handlePrev}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M15 19l-7-7 7-7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 ring-1 ring-black/10 hover:bg-white transition"
                      onClick={handleNext}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </>
                ) : null}
              </div>

              {/* Title overlay */}
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold drop-shadow">
                  {H.name}
                </h1>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/90 text-xs sm:text-sm">
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon />
                    <span className="truncate">{H.address}</span>
                  </span>
                  {H.city || H.country ? (
                    <span className="hidden sm:inline">•</span>
                  ) : null}
                  {H.city || H.country ? (
                    <span>
                      {[H.city, H.country].filter(Boolean).join(", ")}
                    </span>
                  ) : null}
                  {H.rating || H.reviews ? (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1">
                        <StarIconFull />
                        <strong className="font-semibold">
                          {(H.rating ?? 0).toFixed(1)}
                        </strong>
                        <span className="opacity-90">
                          ({H.reviews ?? 0} reviews)
                        </span>
                      </span>
                    </>
                  ) : null}
                  {H.mapUrl ? (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <a
                        href={H.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-white/50 underline-offset-4 hover:decoration-white"
                      >
                        View on map
                      </a>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky booking card (only book button on this page) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-neutral-500">
                      Starting from
                    </div>
                    <div className="text-2xl font-extrabold text-neutral-900">
                      {perNightPrice != null ? (
                        <>
                          {currency} {formatPrice(perNightPrice)}
                          <span className="ml-1 text-xs font-semibold text-neutral-500">
                            /night
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-neutral-600">
                          Contact for pricing
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-2 py-1 text-[10px] font-semibold text-[var(--primary)]">
                    Best Rate
                  </span>
                </div>

                <div className="mt-3 grid gap-2 text-[13px] text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <span>Flexible dates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldIcon />
                    <span>Secure booking</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onBook}
                  className="mt-4 w-full rounded-xl bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(241,114,50,0.35)] hover:brightness-95 transition"
                >
                  {bookingCtaText}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 mt-6 pb-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Room ONLY (no image in row) */}
            <div className="rounded-2xl bg-white ring-1 ring-black/10">
              <HeaderBar title="Available Room" />
              <div className="divide-y divide-neutral-100">
                <RoomRow room={resolvedCurrentRoom} />
              </div>
            </div>

            {/* Descriptions */}
            <div className="rounded-2xl bg-white ring-1 ring-black/10">
              <HeaderBar title="Descriptions" />
              <div className="p-4 sm:p-5">
                {C.overview ? (
                  <Block title="Overview" body={C.overview} />
                ) : null}
                {C.snippet ? <Block title="Snippet" body={C.snippet} /> : null}
                {C.whatsNearby?.length ? (
                  <ListBlock title="What's Nearby" items={C.whatsNearby} />
                ) : null}
                {C.topAttractions?.length ? (
                  <ListBlock title="Top Attractions" items={C.topAttractions} />
                ) : null}
                {C.restaurantsCafes?.length ? (
                  <ListBlock
                    title="Restaurants & Cafes"
                    items={C.restaurantsCafes}
                  />
                ) : null}
                {C.beaches?.length ? (
                  <ListBlock
                    title="Beaches In The Neighborhood"
                    items={C.beaches}
                  />
                ) : null}
                {C.publicTransit?.length ? (
                  <ListBlock title="Public Transit" items={C.publicTransit} />
                ) : null}
                {C.closestAirports?.length ? (
                  <ListBlock
                    title="Closest Airports"
                    items={C.closestAirports}
                  />
                ) : null}
              </div>
            </div>

            {/* Policies */}
            {C.policies?.length ? (
              <div className="rounded-2xl bg-white ring-1 ring-black/10">
                <HeaderBar title="Policies & Others" />
                <div className="p-4 sm:p-5">
                  <ul className="grid gap-2 text-[13px] text-neutral-700 list-disc pl-5">
                    {C.policies.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right sidebar: Facilities */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-white ring-1 ring-black/10">
              <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3 sm:px-5">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                <h3 className="text-sm font-extrabold text-neutral-900">
                  Facilities
                </h3>
              </div>
              <div className="max-h-[70vh] overflow-auto px-4 py-4 sm:px-5 sm:py-5">
                {C.facilities?.length ? (
                  <ul className="grid grid-cols-1 gap-2 text-[13px] text-neutral-800">
                    {C.facilities.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[13px] text-neutral-600">
                    No facilities listed.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{css}</style>
    </main>
  );
}

/* ---------------- Components ---------------- */

function HeaderBar({ title }) {
  return (
    <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3 sm:px-5">
      <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
      <h3 className="text-sm font-extrabold text-neutral-900">{title}</h3>
    </div>
  );
}

function RoomRow({ room }) {
  const {
    title,
    boardType,
    maxAdults = 2,
    maxChildren = 0,
    price = null,
    total = null,
    currency = "AED",
    policies = [],
    highlights = [],
  } = room || {};

  const perNight = isFiniteNumber(price)
    ? `${currency} ${formatPrice(price)}`
    : "—";
  const totalText = isFiniteNumber(total)
    ? `${currency} ${formatPrice(total)}`
    : "—";

  return (
    <div className="grid gap-3 p-4 sm:p-5 md:grid-cols-[1fr_auto] md:items-start">
      {/* Info (no image) */}
      <div className="min-w-0">
        <h4 className="text-sm sm:text-base font-extrabold text-neutral-900">
          {title}
        </h4>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-[12px] text-neutral-600">
          {boardType ? (
            <span className="inline-flex items-center rounded-full bg-neutral-50 px-2 py-1 ring-1 ring-neutral-200">
              {boardType}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1">
            <UsersIcon />
            <span>
              {maxAdults} adult{maxAdults === 1 ? "" : "s"}
              {maxChildren
                ? ` + ${maxChildren} child${maxChildren === 1 ? "" : "ren"}`
                : ""}
            </span>
          </span>
        </div>

        {highlights?.length ? (
          <ul className="mt-2 flex flex-wrap gap-1">
            {highlights.slice(0, 4).map((h, i) => (
              <li
                key={i}
                className="text-[11px] text-neutral-700 rounded-full bg-neutral-50 px-2 py-1 ring-1 ring-neutral-200"
              >
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {policies?.length ? (
          <ul className="mt-2 grid gap-1 text-[12px] text-neutral-600">
            {policies.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <InfoIcon />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* Pricing (no buttons here) */}
      <div className="md:text-right">
        <div className="text-[11px] text-neutral-500">Per Night</div>
        <div className="text-lg font-extrabold text-neutral-900">
          {perNight}
        </div>
        <div className="mt-2 text-[11px] text-neutral-500">Total for stay</div>
        <div className="text-[15px] font-bold text-neutral-900">
          {totalText}
        </div>
      </div>
    </div>
  );
}

function Block({ title, body }) {
  return (
    <section className="not-prose">
      <h4 className="mb-2 rounded-md bg-neutral-50 px-3 py-2 text-[13px] font-bold text-neutral-900 ring-1 ring-neutral-200">
        {title}
      </h4>
      <p className="text-[13px] leading-6 text-neutral-700">{body}</p>
    </section>
  );
}

function ListBlock({ title, items }) {
  return (
    <section className="not-prose mt-4 first:mt-0">
      <h4 className="mb-2 rounded-md bg-neutral-50 px-3 py-2 text-[13px] font-bold text-neutral-900 ring-1 ring-neutral-200">
        {title}
      </h4>
      <ul className="grid gap-2 text-[13px] text-neutral-700">
        {items.map((x, i) => (
          <li key={i} className="flex items-start gap-2">
            <DotIcon />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------- Icons ---------------- */

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C8.7 2 6 4.7 6 8c0 4.2 4.8 9.7 5.7 10.7.2.2.5.3.8.3s.6-.1.8-.3C13.2 17.7 18 12.2 18 8c0-3.3-2.7-6-6-6Zm0 8.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 5.5 12 5.5 14.5 6.6 14.5 8 13.4 10.5 12 10.5Z" />
    </svg>
  );
}
function StarIconFull() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#FACC15] fill-current">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 0 0-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 0 0 .95-.69l1.17-3.292z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm1 13v-2a4 4 0 0 0-3-3.87"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path
        d="M12 8h.01M11 12h2v6h-2z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[var(--primary)]"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M20 6 9 17l-5-5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function DotIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-neutral-400"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
      <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Utils ---------------- */

function isFiniteNumber(n) {
  return typeof n === "number" && Number.isFinite(n);
}
function formatPrice(n) {
  if (!isFiniteNumber(n)) return n;
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function currencyOfRooms(rooms) {
  const found = rooms?.find(
    (r) => typeof r?.currency === "string" && r.currency.length
  );
  return found?.currency || null;
}
function placeholderImage() {
  return "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1600&auto=format&fit=crop";
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
/* Soft scrollbar for facilities */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.18); border-radius: 9999px; }
::-webkit-scrollbar-track { background-color: transparent; }
`;
