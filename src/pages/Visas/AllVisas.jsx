import { useMemo } from "react";

/**
 * AllVisas (static grid)
 * - Same design as before, no scrolling
 * - 1/2/3/4 columns responsive
 */
export default function AllVisas({ themeColor = "#F17232" }) {
  const DEFAULT_SECTIONS = useMemo(
    () => [
      {
        id: "apply-hassle-free-evisas",
        title: "Apply Hassle Free E-visas",
        subtitle:
          "Hassle-Free travel with E-Visas: Your international gateway awaits!",
        items: [
          {
            title: "Dubai Visa",
            image:
              "https://images.unsplash.com/photo-1546412414-8035e1776c9b?q=80&w=1600&auto=format&fit=crop",
            reviews: 56,
            rating: 5,
            href: "/visas/dubai-visa",
          },
          {
            title: "Egypt Visa",
            image:
              "https://images.unsplash.com/photo-1580841503521-712096c91ee9?q=80&w=1600&auto=format&fit=crop",
            reviews: 72,
            rating: 5,
            href: "/visas/egypt-visa",
          },
          {
            title: "India Visa",
            image:
              "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
            reviews: 60,
            rating: 5,
            href: "/visas/india-visa",
          },
          {
            title: "Malaysia Visa",
            image:
              "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop",
            reviews: 32,
            rating: 5,
            href: "/visas/malaysia-visa",
          },
          {
            title: "Oman Visa",
            image:
              "https://images.unsplash.com/photo-1562840689-84b0d6085209?q=80&w=1600&auto=format&fit=crop",
            reviews: 56,
            rating: 5,
            href: "/visas/oman-visa",
          },
          {
            title: "Saudi Arabia Visa",
            image:
              "https://images.unsplash.com/photo-1547127796-06bb04e4b315?q=80&w=1600&auto=format&fit=crop",
            reviews: 45,
            rating: 5,
            href: "/visas/saudi-arabia-visa",
          },
          {
            title: "Thailand Visa",
            image:
              "https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1600&auto=format&fit=crop",
            reviews: 66,
            rating: 5,
            href: "/visas/thailand-visa",
          },
          {
            title: "Turkey Visa",
            image:
              "https://images.unsplash.com/photo-1507666664345-c49223375a52?q=80&w=1600&auto=format&fit=crop",
            reviews: 102,
            rating: 5,
            href: "/visas/turkey-visa",
          },
        ],
      },
      {
        id: "international-tourist-visas",
        title: "International Tourist Visas",
        subtitle:
          "Don't let visa worries hold you back from traveling — Get International Tourist Visa now",
        items: [
          {
            title: "Australia Visa",
            image:
              "https://images.unsplash.com/photo-1510749684087-6b3ad285a9e1?q=80&w=1600&auto=format&fit=crop",
            reviews: 87,
            rating: 5,
            href: "/visas/australia-visa",
          },
          {
            title: "Canada Visa",
            image:
              "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600&auto=format&fit=crop",
            reviews: 78,
            rating: 5,
            href: "/visas/canada-visa",
          },
          {
            title: "China Visa",
            image:
              "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
            reviews: 65,
            rating: 5,
            href: "/visas/china-visa",
          },
          {
            title: "Egypt Visa",
            image:
              "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1600&auto=format&fit=crop",
            reviews: 72,
            rating: 5,
            href: "/visas/egypt-visa",
          },
          {
            title: "Ghana Visa",
            image:
              "https://images.unsplash.com/photo-1553773071-1d4a2d2c1797?q=80&w=1600&auto=format&fit=crop",
            reviews: 57,
            rating: 5,
            href: "/visas/ghana-visa",
          },
          {
            title: "Hong Kong Visa",
            image:
              "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1600&auto=format&fit=crop",
            reviews: 54,
            rating: 5,
            href: "/visas/hong-kong-visa",
          },
          {
            title: "Ireland Visa",
            image:
              "https://images.unsplash.com/photo-1464061882197-04290c3d2c10?q=80&w=1600&auto=format&fit=crop",
            reviews: 29,
            rating: 5,
            href: "/visas/ireland-visa",
          },
          {
            title: "Lebanon Visa",
            image:
              "https://images.unsplash.com/photo-1545063396-7f0b1f9480a7?q=80&w=1600&auto=format&fit=crop",
            reviews: 50,
            rating: 5,
            href: "/visas/lebanon-visa",
          },
          {
            title: "Malaysia Visa",
            image:
              "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",
            reviews: 32,
            rating: 5,
            href: "/visas/malaysia-visa",
          },
          {
            title: "Philippines Visa",
            image:
              "https://images.unsplash.com/photo-1509817775895-96293be0b14a?q=80&w=1600&auto=format&fit=crop",
            reviews: 66,
            rating: 5,
            href: "/visas/philippines-visa",
          },
          {
            title: "Russia Visa",
            image:
              "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop",
            reviews: 45,
            rating: 5,
            href: "/visas/russia-visa",
          },
          {
            title: "Singapore Visa",
            image:
              "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1600&auto=format&fit=crop",
            reviews: 102,
            rating: 5,
            href: "/visas/singapore-visa",
          },
          {
            title: "South Africa Visa",
            image:
              "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1600&auto=format&fit=crop",
            reviews: 63,
            rating: 5,
            href: "/visas/south-africa-visa",
          },
          {
            title: "Sri Lanka Visa",
            image:
              "https://images.unsplash.com/photo-1548182215-07a8ee6c22d4?q=80&w=1600&auto=format&fit=crop",
            reviews: 58,
            rating: 5,
            href: "/visas/sri-lanka-visa",
          },
          {
            title: "Thailand Visa",
            image:
              "https://images.unsplash.com/photo-1509087852112-c9e378018654?q=80&w=1600&auto=format&fit=crop",
            reviews: 81,
            rating: 5,
            href: "/visas/thailand-visa",
          },
          {
            title: "Turkey Visa",
            image:
              "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b89?q=80&w=1600&auto=format&fit=crop",
            reviews: 102,
            rating: 5,
            href: "/visas/turkey-visa",
          },
          {
            title: "Uganda Visa",
            image:
              "https://images.unsplash.com/photo-1590907040925-058d7019cf36?q=80&w=1600&auto=format&fit=crop",
            reviews: 33,
            rating: 5,
            href: "/visas/uganda-visa",
          },
          {
            title: "UK Visa",
            image:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop",
            reviews: 99,
            rating: 5,
            href: "/visas/uk-visa",
          },
          {
            title: "USA Visa",
            image:
              "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop",
            reviews: 77,
            rating: 5,
            href: "/visas/usa-visa",
          },
        ],
      },
    ],
    []
  );

  return (
    <section
      className="relative bg-[#F7F7F8] py-6 sm:py-8 lg:py-10"
      style={{ "--primary": themeColor }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {DEFAULT_SECTIONS.map((sec) => (
          <SectionRow
            key={sec.id}
            title={sec.title}
            subtitle={sec.subtitle}
            items={sec.items}
          />
        ))}
      </div>
      <style>{css}</style>
    </section>
  );
}

function SectionRow({ title, subtitle, items }) {
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
      </div>

      <div className="mt-4 sm:mt-5">
        <div className="tours-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-7">
          {items.map((t, idx) => (
            <VisaCard key={`${t.title}-${idx}`} visa={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VisaCard({ visa }) {
  const { title, image, reviews = 0, rating = 5, badge, href } = visa;
  const link = href || `/visas/${slugify(title)}`;

  return (
    <a
      href={link}
      aria-label={`View ${title}`}
      className="
        group/card relative block w-full
        rounded-[22px] bg-black overflow-hidden
        ring-1 ring-black/5 shadow-[0_10px_30px_rgba(16,24,40,0.14)]
        transition-transform duration-300 hover:-translate-y-0.5
        top-card
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
          <div className="mt-1 flex items-center gap-2">
            <Stars value={rating} />
            <span className="text-[11px] sm:text-xs font-medium text-white/90 drop-shadow">
              {reviews} Reviews
            </span>
          </div>
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

function Stars({ value = 5, outOf = 5 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = Math.max(0, outOf - full - half);
  const Star = ({ filled }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`h-[12px] w-[12px] ${
        filled ? "text-amber-400" : "text-white/40"
      }`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
    </svg>
  );
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} filled />
      ))}
      {half ? <Star key="h" filled /> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e-${i}`} filled />
      ))}
    </span>
  );
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

const css = `
.tours-section + .tours-section { margin-top: 32px; }
@media (min-width: 640px) { .tours-section + .tours-section { margin-top: 42px; } }
@media (min-width: 1024px) { .tours-section + .tours-section { margin-top: 52px; } }

.tours-grid .top-card { width: 100%; }

/* Ring + styles same as Cruises/Tours */
.top-card { --ring-size: clamp(3.5rem, 10vw, 4.25rem); color: var(--primary); }
.card-content { padding-right: calc(var(--ring-size) + 0.75rem); min-width: 0; }

.ring-wrap { position: relative; display: grid; place-items: center; width: var(--ring-size); height: var(--ring-size); color: currentColor; pointer-events: none; }
.ring-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.ring-btn-link { z-index: 1; display: inline-grid; place-items: center; width: 68%; height: 68%; border-radius: 9999px; background: #ffffffE6; color: #0f172a; transition: transform 200ms ease; }
.group/card:hover .ring-btn-link { transform: translateZ(0) scale(1.08); }

.badge { background-color: var(--primary); }
@keyframes spin { to { transform: rotate(360deg); } }
.animate-spin-slower { animation: spin 7s linear infinite; }
.clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
`;
