// import { useMemo } from "react";

// /**
//  * ToursAllComp
//  * - Keeps containers and infinite scrolling rows
//  * - Card design/layout matches MostPop style (square, gradient, price stripe, rotating arrow)
//  * - Larger square cards; 4 visible on xl+ (no extra per row), responsive 1/2/3 on smaller screens
//  * - Arrow button is now a real link; zooms on hover
//  * - Price stripe: translucent yellow, same size on every card, never overlaps the arrow
//  *
//  * Props:
//  * - sections?: Array<{
//  *     id?: string;
//  *     title: string;
//  *     subtitle?: string;
//  *     items: Array<{
//  *       id?: string;
//  *       title: string;
//  *       price: number;
//  *       currency: string;
//  *       image: string;
//  *       reviews?: number;
//  *       badge?: string;
//  *       href?: string; // optional deep link for the arrow and card
//  *     }>;
//  *   }>
//  * - themeColor?: string (default: "#F17232")
//  * - speed?: number (seconds it takes to scroll half the track; default 40)
//  */
// export default function ToursAllComp({
//   sections,
//   themeColor = "#F17232",
//   speed = 40,
// }) {
//   const DEFAULT_SECTIONS = useMemo(
//     () => [
//       {
//         id: "dubai-winter",
//         title: "Dubai Winter package Deals",
//         subtitle:
//           "Treat yourself to a dazzling Dubai winter vacation filled with savings and style.",
//         items: [
//           {
//             title: "Dubai Winter Getaway",
//             price: 1930,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1498496294664-7b1411aa6e42?q=80&w=1600&auto=format&fit=crop",
//             reviews: 61,
//             href: "/tours/R1c1",
//           },
//           {
//             title: "Magical Dubai Winter Escape",
//             price: 2890,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
//             reviews: 24,
//             badge: "Earn R Points",
//             href: "/tours/magical-dubai-winter-escape",
//           },
//           {
//             title: "Winter Break in Dubai",
//             price: 1450,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1600&auto=format&fit=crop",
//             reviews: 13,
//             href: "/tours/winter-break-in-dubai",
//           },
//           {
//             title: "Winter Wonders of Dubai",
//             price: 2420,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b89?q=80&w=1600&auto=format&fit=crop",
//             reviews: 42,
//             href: "/tours/winter-wonders-of-dubai",
//           },
//         ],
//       },
//       {
//         id: "rak-staycations",
//         title: "Ras Al Khaimah Staycation Packages",
//         subtitle:
//           "Indulge in luxury staycations designed for your ultimate relaxation.",
//         items: [
//           {
//             title: "Central Stay with Desert Fun",
//             price: 1999.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop",
//             reviews: 58,
//             href: "/tours/central-stay-desert-fun",
//           },
//           {
//             title: "Heritage Escape",
//             price: 2799.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1534543210156-32046f9d0bbf?q=80&w=1600&auto=format&fit=crop",
//             reviews: 21,
//             href: "/tours/heritage-escape",
//           },
//           {
//             title: "Island Zipline Retreat",
//             price: 1290.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop",
//             reviews: 17,
//             href: "/tours/island-zipline-retreat",
//           },
//           {
//             title: "Beach & Dunes",
//             price: 2499.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
//             reviews: 11,
//             href: "/tours/beach-and-dunes",
//           },
//         ],
//       },
//       {
//         id: "summer-top-deals",
//         title: "Summer Top Deals You Can't Miss",
//         subtitle:
//           "Make this holiday unforgettable with amazing package deals! Limited availability — book your adventure now.",
//         items: [
//           {
//             title: "Best of Kenya",
//             price: 8999.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
//             reviews: 0,
//             href: "/tours/best-of-kenya",
//           },
//           {
//             title: "Discover Sri Lanka",
//             price: 3299.01,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1565008571023-4bfa2f182fcb?q=80&w=1600&auto=format&fit=crop",
//             reviews: 0,
//             href: "/tours/discover-sri-lanka",
//           },
//           {
//             title: "Pristine Bali",
//             price: 0.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
//             reviews: 0,
//             href: "/tours/pristine-bali",
//           },
//           {
//             title: "Sunny Maldives",
//             price: 6299.01,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop",
//             reviews: 0,
//             href: "/tours/sunny-maldives",
//           },
//         ],
//       },
//       {
//         id: "uae-national",
//         title: "National Day Holiday Packages from UAE",
//         items: [
//           {
//             title: "Awesome Kyrgyzstan National Day",
//             price: 3299.01,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1521292270410-a8c0a6cc7b1f?q=80&w=1600&auto=format&fit=crop",
//             reviews: 18,
//             href: "/tours/kyrgyzstan-national-day",
//           },
//           {
//             title: "Beautiful Armenia National Day Special",
//             price: 3499.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=1600&auto=format&fit=crop",
//             reviews: 33,
//             href: "/tours/armenia-national-day",
//           },
//           {
//             title: "Best of Jordan National Day Special",
//             price: 4599.0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop",
//             reviews: 27,
//             href: "/tours/jordan-national-day",
//           },
//           {
//             title: "Exciting Bali National Day Special",
//             price: 0,
//             currency: "AED",
//             image:
//               "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
//             reviews: 12,
//             href: "/tours/bali-national-day",
//           },
//         ],
//       },
//     ],
//     []
//   );

//   const data = sections?.length ? sections : DEFAULT_SECTIONS;

//   return (
//     <section
//       className="relative bg-[#F7F7F8] py-6 sm:py-8 lg:py-10"
//       style={{ "--primary": themeColor }}
//     >
//       <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
//         {data.map((sec, sIdx) => (
//           <SectionRow
//             key={sec.id || sIdx}
//             title={sec.title}
//             subtitle={sec.subtitle}
//             items={sec.items}
//             speed={speed}
//           />
//         ))}
//       </div>

//       {/* Local styles for marquee + helpers */}
//       <style>{css}</style>
//     </section>
//   );
// }

// /* ---------------- Section with infinite row ---------------- */

// function SectionRow({ title, subtitle, items, speed }) {
//   // Duplicate for seamless loop
//   const LOOP = useMemo(() => [...items, ...items], [items]);

//   // Per-row duration (normalized to ~6 items)
//   const durationSec = useMemo(() => {
//     const base = Math.max(1, items.length);
//     return Math.round(speed * (base / 6) * 10) / 10;
//   }, [items.length, speed]);

//   return (
//     <div className="tours-section not-prose">
//       {/* Heading */}
//       <div className="flex items-start justify-between gap-3">
//         <div>
//           <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-neutral-900">
//             {title}
//           </h2>
//           {subtitle ? (
//             <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
//           ) : null}
//         </div>

//         {/* Decor arrow button group (optional) */}
//         <div className="flex items-center gap-2">
//           <CircleArrow dir="prev" />
//           <CircleArrow dir="next" />
//         </div>
//       </div>

//       {/* Row (marquee mask) */}
//       <div className="mt-4 sm:mt-5 tours-marquee-mask group">
//         <div
//           className="tours-marquee-track"
//           style={{ animationDuration: `${durationSec}s` }}
//         >
//           {LOOP.map((t, idx) => (
//             <TourCard key={`${t.title}-${idx}`} tour={t} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- Card (MostPop-like, bigger square) ---------------- */

// function TourCard({ tour }) {
//   const { title, image, price, currency, reviews = 0, badge, href } = tour;

//   // Use provided href or fallback to slugified title
//   const link = href || `/tours/${slugify(title)}`;

//   return (
//     <a
//       href={link}
//       aria-label={`View ${title}`}
//       className="
//         group/card relative shrink-0 block
//         rounded-[22px] bg-black overflow-hidden
//         ring-1 ring-black/5 shadow-[0_10px_30px_rgba(16,24,40,0.14)]
//         transition-transform duration-300 hover:-translate-y-0.5
//         tour-card top-card
//       "
//     >
//       {/* Square media wrapper */}
//       <div className="relative aspect-square">
//         {/* Image */}
//         <img
//           src={image}
//           alt={title}
//           className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.06]"
//           loading="lazy"
//           decoding="async"
//         />

//         {/* Gradient for legibility */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/32 to-transparent pointer-events-none" />

//         {/* Optional badge */}
//         {badge ? (
//           <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white badge">
//             {badge}
//           </div>
//         ) : null}

//         {/* Content with space for arrow circle so price stripe never overlaps */}
//         <div className="card-content absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
//           <h3 className="text-white text-base sm:text-lg md:text-xl font-extrabold drop-shadow clamp-2">
//             {title}
//           </h3>

//           {/* Reviews row */}
//           <div className="mt-0.5 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-[#FACC15]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-[12px] w-[12px]"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               aria-hidden="true"
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81H6.93a1 1 0 00.95-.69l1.17-3.292z" />
//             </svg>
//             <span>{reviews} Reviews</span>
//           </div>

//           {/* Price stripe (translucent yellow, same size on all cards) */}
//           <div className="price-stripe mt-2">
//             <div className="price-row">
//               <span className="price-label">Per Person from</span>
//               <span className="price-current">
//                 {currency} {formatPrice(price)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom-right rotating dotted arrow (now decorative, not a separate link) */}
//         <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
//           <div className="ring-wrap">
//             <svg
//               className="ring-svg animate-spin-slower"
//               viewBox="0 0 100 100"
//               aria-hidden="true"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="47"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 strokeDasharray="0.1 10.5"
//               />
//             </svg>
//             <span className="ring-btn-link">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-[55%] w-[55%]"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <path
//                   d="M7 17 17 7M9 7h8v8"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

// /* ---------------- Small UI parts ---------------- */

// function CircleArrow({ dir = "next" }) {
//   const isNext = dir === "next";
//   return (
//     <button
//       type="button"
//       aria-label={isNext ? "Next" : "Previous"}
//       className="
//         inline-grid h-8 w-8 place-items-center rounded-full
//         bg-white ring-1 ring-black/10 text-neutral-700
//         hover:bg-[var(--primary)] hover:text-white hover:ring-[var(--primary)]/40
//         transition
//       "
//       onClick={(e) => {
//         // Decorative bump; rows auto-scroll
//         const mask = e.currentTarget
//           .closest(".tours-section")
//           ?.querySelector(".tours-marquee-mask");
//         if (!mask) return;
//         mask.classList.add("tours-bump");
//         setTimeout(() => mask.classList.remove("tours-bump"), 300);
//       }}
//     >
//       {isNext ? (
//         <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
//           <path
//             d="M8 5l8 7-8 7"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ) : (
//         <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
//           <path
//             d="M16 5L8 12l8 7"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       )}
//     </button>
//   );
// }

// /* ---------------- Utils ---------------- */

// function formatPrice(n) {
//   if (typeof n !== "number") return n;
//   return n.toLocaleString(undefined, {
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });
// }

// function slugify(text) {
//   return String(text)
//     .toLowerCase()
//     .trim()
//     .replace(/[^\w\s-]/g, "")
//     .replace(/\s+/g, "-");
// }

// /* ---------------- Local CSS (scoped by class names) ---------------- */

// const css = `
// .tours-section + .tours-section { margin-top: 32px; }
// @media (min-width: 640px) { .tours-section + .tours-section { margin-top: 42px; } }
// @media (min-width: 1024px) { .tours-section + .tours-section { margin-top: 52px; } }

// /* Marquee (kept) */
// .tours-marquee-mask {
//   overflow: hidden;
//   --gap: 28px;   /* space between cards on lg/xl */
//   --pad: 64px;   /* total page horizontal padding at lg/xl (px-8 => 32px each side) */
//   --max: 1320px; /* container max width */
// }
// .tours-marquee-mask:hover .tours-marquee-track { animation-play-state: paused; }
// .tours-marquee-track {
//   display: flex;
//   align-items: stretch;
//   gap: var(--gap);
//   width: max-content;
//   will-change: transform;
//   animation-name: tours-marquee;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
// }
// @keyframes tours-marquee {
//   from { transform: translateX(0); }
//   to   { transform: translateX(-50%); } /* half because list is duplicated */
// }

// /* Decorative bump on click */
// .tours-bump .tours-marquee-track { animation-duration: 0.001s !important; }

// /* Card sizing:
//    - Mobile: large single cards
//    - Tablet: 2 visible
//    - MD: ~3 visible
//    - XL: exactly 4 visible (computed from container width and gaps)
// */
// .tour-card { width: clamp(280px, 88vw, 420px); }
// @media (min-width: 640px) { .tour-card { width: clamp(300px, 48vw, 440px); } }
// @media (min-width: 768px) { .tour-card { width: clamp(300px, 32vw, 460px); } }
// /* On XL screens, compute card width so exactly 4 are visible in the container:
//    width = (min(1320px, 100vw - pad) - 3*gap) / 4
// */
// @media (min-width: 1280px) {
//   .tour-card {
//     width: calc((min(var(--max), 100vw - var(--pad)) - (3 * var(--gap))) / 4);
//     max-width: 360px; /* pleasant max so cards don't get too wide */
//   }
// }

// /* Reserve space on the right so stripe/text never go under the arrow circle */
// .top-card {
//   --ring-size: clamp(3.5rem, 10vw, 4.25rem); /* bigger arrow */
//   color: var(--primary); /* used by ring via currentColor */
// }
// .card-content {
//   padding-right: calc(var(--ring-size) + 0.75rem);
//   min-width: 0;
// }

// /* Price stripe: translucent yellow, same size on all cards */
// .price-stripe {
//   width: 100%;
//   min-height: 38px;
//   display: grid;
//   align-items: center;
//   border-radius: 12px;
//   padding: 6px 12px;
//   background:
//     linear-gradient(
//       135deg,
//       rgba(250, 204, 21, 0.85) 0%,
//       rgba(253, 224, 71, 0.85) 100%
//     );
//   box-shadow: 0 6px 18px rgba(0,0,0,0.18);
//   border: 1px solid rgba(202, 138, 4, 0.35);
//   /* keep clear of the arrow circle on very narrow cards */
//   margin-right: calc(var(--ring-size) + 0.5rem);
// }
// .price-row {
//   display: flex;
//   align-items: baseline;
//   justify-content: flex-start;
//   gap: 10px;
//   flex-wrap: wrap;
// }
// .price-label {
//   font-size: 11px;
//   color: #0f172ab3; /* slate-900/70 */
// }
// .price-current {
//   font-weight: 800;
//   color: #0f172a;
//   font-size: clamp(1rem, 1.7vw, 1.125rem);
// }

// /* Rotating dotted ring (SVG) - now decorative only */
// .ring-wrap {
//   position: relative;
//   display: grid;
//   place-items: center;
//   width: var(--ring-size);
//   height: var(--ring-size);
//   color: currentColor; /* inherits --primary via .top-card color */
//   pointer-events: none; /* Prevent interaction since entire card is clickable */
// }
// .ring-svg {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
// }
// .ring-btn-link {
//   z-index: 1;
//   display: inline-grid;
//   place-items: center;
//   width: 68%;
//   height: 68%;
//   border-radius: 9999px;
//   background: #ffffffE6;
//   color: #0f172a;
//   transition: transform 200ms ease;
//   will-change: transform;
// }
// .group/card:hover .ring-btn-link { transform: translateZ(0) scale(1.08); }

// /* Badge color uses theme */
// .badge { background-color: var(--primary); }

// /* Spin utility */
// @keyframes spin { to { transform: rotate(360deg); } }
// .animate-spin-slower { animation: spin 7s linear infinite; }

// /* Text clamp (for long titles) */
// .clamp-2 {
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }

// /* Smaller gap on very small screens */
// @media (max-width: 480px) {
//   .tours-marquee-mask { --gap: 18px; }
// }
// `;



import { useMemo } from "react";

/**
 * ToursAllComp
 * - Keeps containers and infinite scrolling rows
 * - Card design/layout matches MostPop style (square, gradient, price stripe, rotating arrow)
 * - Larger square cards; 4 visible on xl+ (no extra per row), responsive 1/2/3 on smaller screens
 * - Arrow button is now a real link; zooms on hover
 * - Price stripe: translucent yellow, same size on every card, never overlaps the arrow
 *
 * Props:
 * - sections?: Array<{
 *     id?: string;
 *     title: string;
 *     subtitle?: string;
 *     items: Array<{
 *       id?: string;
 *       title: string;
 *       price: number;
 *       currency: string;
 *       image: string;
 *       reviews?: number;
 *       badge?: string;
 *       href?: string; // optional deep link for the arrow and card
 *     }>;
 *   }>
 * - themeColor?: string (default: "#F17232")
 * - speed?: number (seconds it takes to scroll half the track; default 40)
 */
export default function ToursAllComp({
  sections,
  themeColor = "#F17232",
  speed = 40,
}) {
  const DEFAULT_SECTIONS = useMemo(
    () => [
      {
        id: "dubai-winter",
        title: "Dubai Winter package Deals",
        subtitle:
          "Treat yourself to a dazzling Dubai winter vacation filled with savings and style.",
        items: [
          {
            title: "Dubai Winter Getaway",
            price: 1930,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1498496294664-7b1411aa6e42?q=80&w=1600&auto=format&fit=crop",
            reviews: 61,
            href: "/tours/R1c1",
          },
          {
            title: "Magical Dubai Winter Escape",
            price: 2890,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
            reviews: 24,
            badge: "Earn R Points",
            href: "/tours/magical-dubai-winter-escape",
          },
          {
            title: "Winter Break in Dubai",
            price: 1450,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1600&auto=format&fit=crop",
            reviews: 13,
            href: "/tours/winter-break-in-dubai",
          },
          {
            title: "Winter Wonders of Dubai",
            price: 2420,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b89?q=80&w=1600&auto=format&fit=crop",
            reviews: 42,
            href: "/tours/winter-wonders-of-dubai",
          },
        ],
      },
      {
        id: "rak-staycations",
        title: "Ras Al Khaimah Staycation Packages",
        subtitle:
          "Indulge in luxury staycations designed for your ultimate relaxation.",
        items: [
          {
            title: "Central Stay with Desert Fun",
            price: 1999.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=1600&auto=format&fit=crop",
            reviews: 58,
            href: "/tours/central-stay-desert-fun",
          },
          {
            title: "Heritage Escape",
            price: 2799.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1534543210156-32046f9d0bbf?q=80&w=1600&auto=format&fit=crop",
            reviews: 21,
            href: "/tours/heritage-escape",
          },
          {
            title: "Island Zipline Retreat",
            price: 1290.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop",
            reviews: 17,
            href: "/tours/island-zipline-retreat",
          },
          {
            title: "Beach & Dunes",
            price: 2499.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
            reviews: 11,
            href: "/tours/beach-and-dunes",
          },
        ],
      },
      {
        id: "summer-top-deals",
        title: "Summer Top Deals You Can't Miss",
        subtitle:
          "Make this holiday unforgettable with amazing package deals! Limited availability — book your adventure now.",
        items: [
          {
            title: "Best of Kenya",
            price: 8999.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/best-of-kenya",
          },
          {
            title: "Discover Sri Lanka",
            price: 3299.01,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1565008571023-4bfa2f182fcb?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/discover-sri-lanka",
          },
          {
            title: "Pristine Bali",
            price: 0.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/pristine-bali",
          },
          {
            title: "Sunny Maldives",
            price: 6299.01,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/sunny-maldives",
          },
        ],
      },
      {
        id: "uae-national",
        title: "National Day Holiday Packages from UAE",
        items: [
          {
            title: "Awesome Kyrgyzstan National Day",
            price: 3299.01,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1521292270410-a8c0a6cc7b1f?q=80&w=1600&auto=format&fit=crop",
            reviews: 18,
            href: "/tours/kyrgyzstan-national-day",
          },
          {
            title: "Beautiful Armenia National Day Special",
            price: 3499.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=1600&auto=format&fit=crop",
            reviews: 33,
            href: "/tours/armenia-national-day",
          },
          {
            title: "Best of Jordan National Day Special",
            price: 4599.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop",
            reviews: 27,
            href: "/tours/jordan-national-day",
          },
          {
            title: "Exciting Bali National Day Special",
            price: 0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
            reviews: 12,
            href: "/tours/bali-national-day",
          },
        ],
      },

      // NEW: Fifth row to match the screenshot
      {
        id: "india-top-holiday",
        title: "Top Holiday Packages From India",
        items: [
          {
            title: "Krabi & Phuket Delight",
            price: 0.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/krabi-phuket-delight",
          },
          {
            title: "Magical Mauritius",
            price: 2735.89,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/magical-mauritius",
          },
          {
            title: "Sparkling Maldives",
            price: 1999.05,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/sparkling-maldives",
          },
          {
            title: "Wonderful Bali",
            price: 0.0,
            currency: "AED",
            image:
              "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
            reviews: 0,
            href: "/tours/wonderful-bali",
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

      {/* Local styles for marquee + helpers */}
      <style>{css}</style>
    </section>
  );
}

/* ---------------- Section with infinite row ---------------- */

function SectionRow({ title, subtitle, items, speed }) {
  // Duplicate for seamless loop
  const LOOP = useMemo(() => [...items, ...items], [items]);

  // Per-row duration (normalized to ~6 items)
  const durationSec = useMemo(() => {
    const base = Math.max(1, items.length);
    return Math.round(speed * (base / 6) * 10) / 10;
  }, [items.length, speed]);

  return (
    <div className="tours-section not-prose">
      {/* Heading */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-neutral-900">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
          ) : null}
        </div>

        {/* Decor arrow button group (optional) */}
        <div className="flex items-center gap-2">
          <CircleArrow dir="prev" />
          <CircleArrow dir="next" />
        </div>
      </div>

      {/* Row (marquee mask) */}
      <div className="mt-4 sm:mt-5 tours-marquee-mask group">
        <div
          className="tours-marquee-track"
          style={{ animationDuration: `${durationSec}s` }}
        >
          {LOOP.map((t, idx) => (
            <TourCard key={`${t.title}-${idx}`} tour={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Card (MostPop-like, bigger square) ---------------- */

function TourCard({ tour }) {
  const { title, image, price, currency, reviews = 0, badge, href } = tour;

  // Use provided href or fallback to slugified title
  const link = href || `/tours/${slugify(title)}`;

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
      {/* Square media wrapper */}
      <div className="relative aspect-square">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/32 to-transparent pointer-events-none" />

        {/* Optional badge */}
        {badge ? (
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white badge">
            {badge}
          </div>
        ) : null}

        {/* Content with space for arrow circle so price stripe never overlaps */}
        <div className="card-content absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-[1]">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-extrabold drop-shadow clamp-2">
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

          {/* Price stripe (translucent yellow, same size on all cards) */}
          <div className="price-stripe mt-2">
            <div className="price-row">
              <span className="price-label">Per Person from</span>
              <span className="price-current">
                {currency} {formatPrice(price)}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom-right rotating dotted arrow (now decorative, not a separate link) */}
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
        // Decorative bump; rows auto-scroll
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

/* ---------------- Local CSS (scoped by class names) ---------------- */

const css = `
.tours-section + .tours-section { margin-top: 32px; }
@media (min-width: 640px) { .tours-section + .tours-section { margin-top: 42px; } }
@media (min-width: 1024px) { .tours-section + .tours-section { margin-top: 52px; } }

/* Marquee (kept) */
.tours-marquee-mask {
  overflow: hidden;
  --gap: 28px;   /* space between cards on lg/xl */
  --pad: 64px;   /* total page horizontal padding at lg/xl (px-8 => 32px each side) */
  --max: 1320px; /* container max width */
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
  to   { transform: translateX(-50%); } /* half because list is duplicated */
}

/* Decorative bump on click */
.tours-bump .tours-marquee-track { animation-duration: 0.001s !important; }

/* Card sizing:
   - Mobile: large single cards
   - Tablet: 2 visible
   - MD: ~3 visible
   - XL: exactly 4 visible (computed from container width and gaps)
*/
.tour-card { width: clamp(280px, 88vw, 420px); }
@media (min-width: 640px) { .tour-card { width: clamp(300px, 48vw, 440px); } }
@media (min-width: 768px) { .tour-card { width: clamp(300px, 32vw, 460px); } }
/* On XL screens, compute card width so exactly 4 are visible in the container:
   width = (min(1320px, 100vw - pad) - 3*gap) / 4
*/
@media (min-width: 1280px) {
  .tour-card {
    width: calc((min(var(--max), 100vw - var(--pad)) - (3 * var(--gap))) / 4);
    max-width: 360px; /* pleasant max so cards don't get too wide */
  }
}

/* Reserve space on the right so stripe/text never go under the arrow circle */
.top-card {
  --ring-size: clamp(3.5rem, 10vw, 4.25rem); /* bigger arrow */
  color: var(--primary); /* used by ring via currentColor */
}
.card-content {
  padding-right: calc(var(--ring-size) + 0.75rem);
  min-width: 0;
}

/* Price stripe: translucent yellow, same size on all cards */
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
  /* keep clear of the arrow circle on very narrow cards */
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
  color: #0f172ab3; /* slate-900/70 */
}
.price-current {
  font-weight: 800;
  color: #0f172a;
  font-size: clamp(1rem, 1.7vw, 1.125rem);
}

/* Rotating dotted ring (SVG) - now decorative only */
.ring-wrap {
  position: relative;
  display: grid;
  place-items: center;
  width: var(--ring-size);
  height: var(--ring-size);
  color: currentColor; /* inherits --primary via .top-card color */
  pointer-events: none; /* Prevent interaction since entire card is clickable */
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

/* Badge color uses theme */
.badge { background-color: var(--primary); }

/* Spin utility */
@keyframes spin { to { transform: rotate(360deg); } }
.animate-spin-slower { animation: spin 7s linear infinite; }

/* Text clamp (for long titles) */
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