import "./Style/top-exp.css";

const BRAND = "#F27131";

const ITEMS = [
  {
    slug: "atlantis-aquaventure-waterpark",
    title: "Atlantis Aquaventure Waterpark",
    image:
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop",
    reviews: 277,
    price: 360.0,
  },
  {
    slug: "aya-universe-dubai",
    title: "AYA Universe Dubai",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    reviews: 110,
    price: 110.0,
    oldPrice: 135.0,
  },
  {
    slug: "burj-khalifa-at-the-top",
    title: "Burj Khalifa At The Top Tickets",
    image:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop",
    reviews: 373,
    price: 179.0,
  },
  {
    slug: "burj-khalifa-sky-tickets",
    title: "Burj Khalifa Sky Tickets",
    image:
      "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1600&auto=format&fit=crop",
    reviews: 97,
    price: 399.0,
  },
  {
    slug: "dhow-cruise-dinner-marina",
    title: "Dhow Cruise Dinner - Marina",
    image:
      "https://images.unsplash.com/photo-1534543210156-32046f9d0bbf?q=80&w=1600&auto=format&fit=crop",
    reviews: 287,
    price: 155.0,
    badge: "Earn R Points",
  },
  {
    slug: "dubai-aquarium-underwater-zoo",
    title: "Dubai Aquarium and Underwater Zoo",
    image:
      "https://images.unsplash.com/photo-1530797217487-92026bd82776?q=80&w=1600&auto=format&fit=crop",
    reviews: 105,
    price: 199.0,
  },
  {
    slug: "dubai-dolphinarium",
    title: "Dubai Dolphinarium",
    image:
      "https://images.unsplash.com/photo-1506917728037-b513f8b41f06?q=80&w=1600&auto=format&fit=crop",
    reviews: 89,
    price: 50.0,
  },
  {
    slug: "dubai-frame",
    title: "Dubai Frame",
    image:
      "https://images.unsplash.com/photo-1543007619-084f0cb8e7d1?q=80&w=1600&auto=format&fit=crop",
    reviews: 271,
    price: 52.0,
    oldPrice: 52.5,
  },
  {
    slug: "dubai-mall-kidzania",
    title: "Dubai Mall Kidzania",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
    reviews: 88,
    price: 69.0,
    oldPrice: 90.0,
  },
  {
    slug: "dubai-parks-and-resorts",
    title: "Dubai Parks and Resorts",
    image:
      "https://images.unsplash.com/photo-1558981852-426c6c22a061?q=80&w=1600&auto=format&fit=crop",
    reviews: 112,
    price: 295.0,
    oldPrice: 330.0,
  },
  {
    slug: "dubai-safari-park",
    title: "Dubai Safari Park",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1600&auto=format&fit=crop",
    reviews: 45,
    price: 50.0,
    badge: "Earn R Points",
  },
  {
    slug: "evening-desert-safari",
    title: "Evening Desert Safari",
    image:
      "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop",
    reviews: 57,
    price: 160.0,
    oldPrice: 270.0,
  },
  {
    slug: "full-day-explore-dubai-city-tour",
    title: "Full Day Explore Dubai City Tour",
    image:
      "https://images.unsplash.com/photo-1526481280698-8fcc13fd2b66?q=80&w=1600&auto=format&fit=crop",
    reviews: 177,
    price: 175.0,
    oldPrice: 225.0,
    badge: "Earn R Points",
  },
  {
    slug: "house-of-hype",
    title: "House of Hype",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    reviews: 0,
    price: 149.0,
  },
  {
    slug: "img-worlds-of-adventure",
    title: "IMG Worlds of Adventure",
    image:
      "https://images.unsplash.com/photo-1512688432401-9c39cf10a3a7?q=80&w=1600&auto=format&fit=crop",
    reviews: 226,
    price: 255.0,
    oldPrice: 365.0,
  },
  {
    slug: "legoland-dubai",
    title: "Legoland Dubai",
    image:
      "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?q=80&w=1600&auto=format&fit=crop",
    reviews: 93,
    price: 295.0,
    oldPrice: 330.0,
  },
  {
    slug: "motiongate-dubai",
    title: "Motiongate Dubai",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1600&auto=format&fit=crop",
    reviews: 136,
    price: 295.0,
    oldPrice: 330.0,
  },
  {
    slug: "museum-of-the-future",
    title: "Museum of the Future",
    image:
      "https://images.unsplash.com/photo-1596547602069-ff6816a8a908?q=80&w=1600&auto=format&fit=crop",
    reviews: 86,
    price: 151.25,
    oldPrice: 169.0,
  },
  {
    slug: "ski-dubai-tickets",
    title: "Ski Dubai Tickets",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
    reviews: 114,
    price: 250.0,
  },
  {
    slug: "sky-views-dubai",
    title: "Sky Views Dubai",
    image:
      "https://images.unsplash.com/photo-1543007586-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop",
    reviews: 93,
    price: 85.0,
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function MostPop() {
  return (
    <section className="relative overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* Heading + paragraph */}
        <div className="pt-10 sm:pt-12">
          <h2
            className="text-3xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold tracking-tight"
            style={{ color: BRAND }}
          >
            Most Popular Experiences in Dubai
          </h2>
          <p className="mt-2 text-slate-700 text-sm sm:text-base leading-7 max-w-[980px]">
            Culture, nature, thrills, and record-breaking experiences—Dubai is
            the place to seek out everything you imagine and beyond. Find it all
            here!
          </p>
        </div>

        {/* Cards grid (same style as TopExp: square, 1/2/3 columns) */}
        <div className="top-exp-grid mt-8 sm:mt-10">
          {ITEMS.map((it) => (
            <MostPopCard key={it.slug} item={it} brand={BRAND} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MostPopCard({ item, brand }) {
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

        {/* Content with padding-right so stripe never hits the arrow */}
        <div className="card-content absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-extrabold drop-shadow">
            {title}
          </h3>

          {/* Reviews row */}
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

          {/* Price stripe */}
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

        {/* Bottom-right rotating dotted arrow */}
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
