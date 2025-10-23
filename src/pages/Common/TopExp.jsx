import "./Style/top-exp.css";

const BRAND = "#F27131";

const ITEMS = [
  {
    slug: "al-ain-zoo",
    title: "Al Ain Zoo",
    image:
      "https://images.unsplash.com/photo-1552410260-59a8b2ad77ad?q=80&w=1600&auto=format&fit=crop",
    reviews: 12,
    price: 29.0,
    oldPrice: 31.5,
    tag: "zoo",
  },
  {
    slug: "desert-safari-abu-dhabi",
    title: "Desert Safari Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop",
    reviews: 531,
    price: 195.0,
    oldPrice: 300.0,
    tag: "safari",
  },
  {
    slug: "emirates-park-zoo",
    title: "Emirates Park Zoo",
    image:
      "https://images.unsplash.com/photo-1533488020175-2fd641b3ed2e?q=80&w=1600&auto=format&fit=crop",
    reviews: 68,
    price: 45.0,
    oldPrice: 52.38,
    tag: "zoo",
  },
  {
    slug: "ferrari-theme-park-abu-dhabi",
    title: "Ferrari Theme Park Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1512688432401-9c39cf10a3a7?q=80&w=1600&auto=format&fit=crop",
    reviews: 145,
    price: 345.0,
    tag: "theme-park",
  },
  {
    slug: "full-day-abu-dhabi-city-tour",
    title: "Full Day Abu Dhabi City Tour",
    image:
      "https://images.unsplash.com/photo-1526481280698-8fcc13fd2b66?q=80&w=1600&auto=format&fit=crop",
    reviews: 256,
    price: 353.5,
    badge: "Earn R Points",
    tag: "tour",
  },
  {
    slug: "louvre-abu-dhabi",
    title: "Louvre Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1543007586-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop",
    reviews: 97,
    price: 63.0,
  },
  {
    slug: "seaworld-abu-dhabi",
    title: "SeaWorld Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1544551763-7ef420be15a9?q=80&w=1600&auto=format&fit=crop",
    reviews: 22,
    price: 375.0,
    badge: "Earn R Points",
  },
  {
    slug: "teamlab-phenomena",
    title: "TeamLab Phenomena",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    reviews: 0,
    price: 125.0,
    oldPrice: 150.0,
  },
  {
    slug: "the-national-aquarium-abu-dhabi",
    title: "The National Aquarium Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1530797217487-92026bd82776?q=80&w=1600&auto=format&fit=crop",
    reviews: 38,
    price: 110.0,
    badge: "Earn R Points",
  },
  {
    slug: "warner-bros-world-abu-dhabi",
    title: "Warner Bros World Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1600&auto=format&fit=crop",
    reviews: 122,
    price: 345.0,
  },
  {
    slug: "yas-island-theme-park-tickets",
    title: "Yas Island Theme Park Tickets",
    image:
      "https://images.unsplash.com/photo-1558981852-426c6c22a061?q=80&w=1600&auto=format&fit=crop",
    reviews: 7,
    price: 225.0,
    oldPrice: 295.0,
  },
  {
    slug: "yas-waterworld",
    title: "Yas Waterworld",
    image:
      "https://images.unsplash.com/photo-1595278069441-2f8f3d0e2fcf?q=80&w=1600&auto=format&fit=crop",
    reviews: 86,
    price: 285.0,
    oldPrice: 295.0,
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function TopExp() {
  return (
    <section className="relative overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* Heading + paragraph */}
        <div className="pt-10 sm:pt-12">
          <h2
            className="text-3xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold tracking-tight"
            style={{ color: BRAND }}
          >
            Top Experiences in Abu Dhabi
          </h2>
          <p className="mt-2 text-slate-700 text-sm sm:text-base leading-7 max-w-[900px]">
            Discover the best attractions and activities that the UAE&apos;s
            capital city has to offer.
          </p>
        </div>

        {/* Cards grid: always 3 per row on large screens */}
        <div className="top-exp-grid mt-8 sm:mt-10">
          {ITEMS.map((it) => (
            <TopExpCard key={it.slug} item={it} brand={BRAND} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TopExpCard({ item, brand }) {
  const { slug, title, image, reviews = 0, price, oldPrice, badge, tag } = item;
  const href = `/experiences/${slug || slugify(title)}`;

  return (
    <a
      href={href}
      className="top-exp-card group relative block overflow-hidden rounded-[22px] bg-black focus:outline-none focus-visible:ring-4"
      style={{ boxShadow: "0 10px 30px rgba(16,24,40,0.14)" }}
      aria-label={title}
    >
      {/* Square media wrapper */}
      <div className="aspect-square relative">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/32 to-transparent pointer-events-none" />

        {/* Optional badge */}
        {badge ? (
          <div
            className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white"
            style={{ backgroundColor: brand }}
          >
            {badge}
          </div>
        ) : null}

        {/* Tag chip if no badge but tag exists */}
        {!badge && tag ? (
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-white/90 text-slate-800 text-[10px] sm:text-xs font-medium px-2.5 py-1">
            {tag}
          </div>
        ) : null}

        {/* Content (reserve space so stripe never overlaps the arrow) */}
        <div className="card-content absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-extrabold drop-shadow">
            {title}
          </h3>

          {/* Reviews row (small yellow star + count, below title) */}
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

          {/* Price stripe (never overlaps arrow, never overflows) */}
          <div className="price-stripe mt-2">
            <span className="price-label">Per Person from</span>
            <span
              className="price-current"
              aria-label={`Current price AED ${Number(price).toFixed(2)}`}
            >
              AED {Number(price).toFixed(2)}
            </span>
            {oldPrice ? (
              <span className="price-old">
                AED {Number(oldPrice).toFixed(2)}
              </span>
            ) : null}
          </div>
        </div>

        {/* Bottom-right rotating dotted arrow (larger size) */}
        <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
          <div className="ring-wrap" style={{ color: brand }}>
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
            <div
              className="ring-btn"
              style={{
                backgroundColor: "#ffffffE6",
                color: "#0f172a",
                transform: "none",
              }}
            >
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
            </div>
          </div>
        </div>
      </div>

      {/* Focus ring color */}
      <style>{`.group:focus-visible { box-shadow: 0 0 0 4px ${brand}40 }`}</style>
    </a>
  );
}
