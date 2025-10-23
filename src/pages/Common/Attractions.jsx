

import "./Style/activities.css";

const ACTIVITIES = [
  {
    title: "Green Planet Tour",
    price: 39,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1547721064-da6cfb341d50?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Al Ain City Tour",
    price: 171,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1563813495657-2ecfcb74356d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "East Coast Tour",
    price: 173,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1500534314209-a26db0f5b12b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Desert Safari Evening Dubai",
    price: 28,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Dhow Cruise Creek Tour",
    price: 18,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1534543210156-32046f9d0bbf?q=80&w=1600&auto=format&fit=crop",
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function Activities() {
  // Duplicate the list for seamless infinite scroll
  const LOOP = ACTIVITIES.concat(ACTIVITIES);

  return (
    <section className="relative overflow-x-clip bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Heading row */}
        <div className="mx-auto max-w-[1320px] flex items-center gap-3 pt-8 sm:pt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F37B2C]">
            Activities
          </h2>

          {/* Rotating dotted circle with arrow — fully responsive and always visible */}
          <div className="ml-2 ring-wrap text-[#F37B2C]">
            {/* Dotted ring (SVG) */}
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

            {/* Arrow button */}
            <button
              type="button"
              aria-label="See all"
              className="ring-btn bg-[#F37B2C] text-white focus:outline-none focus-visible:ring-4 ring-[#F37B2C]/40"
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
            </button>
          </div>
        </div>

        {/* Full-width marquee track (no white shadows) */}
        <div className="relative mt-6">
          <div className="activities-marquee-mask">
            <div className="activities-marquee-track gap-4 md:gap-5 lg:gap-6">
              {LOOP.map((a, idx) => (
                <ActivityCard
                  key={`${a.title}-${idx}`}
                  activity={a}
                  href={`/activities/${slugify(a.title)}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity, href = "#" }) {
  const { title, image } = activity;

  return (
    <a
      href={href}
      aria-label={title}
      className="
        group relative overflow-hidden rounded-[22px]
        shrink-0
        w-[260px] sm:w-[280px] md:w-[300px] lg:w-[300px] xl:w-[300px]
        h-[420px] md:h-[440px] lg:h-[460px]
        bg-black
        focus:outline-none focus-visible:ring-4 ring-[#F37B2C]/40
        transition-all
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        loading="lazy"
        decoding="async"
      />

      {/* Base gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Hover overlay to emphasize brand color */}
      <div className="absolute inset-0 bg-[#F37B2C]/0 group-hover:bg-[#F37B2C]/10 transition-colors duration-300 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-x-4 sm:inset-x-5 bottom-4 sm:bottom-5">
        <h3
          className="
            text-white text-[20px] sm:text-[22px] font-extrabold drop-shadow-md
            transition-colors duration-300 group-hover:text-[#F37B2C]
          "
        >
          {title}
        </h3>
      </div>

      {/* Subtle brand halo on hover (no shadow) */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-0 group-hover:ring-4 ring-[#F37B2C]/25 transition-all duration-300" />
    </a>
  );
}