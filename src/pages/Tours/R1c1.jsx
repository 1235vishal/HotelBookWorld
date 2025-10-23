import { useEffect, useState } from "react";
import EnquiryNow from "./EnquiryNow";
import "./r1c1.css";

const BRAND = "#F17232";

// Reusable section shell
function SectionCard({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`section-card ${className}`}>
      <div className="section-card__head">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

const TOUR = {
  id: "dubai-winter-getaway",
  title: "Dubai Winter Getaway",
  nights: 4,
  days: 5,
  rating: 4.7,
  reviews: 0,
  currency: "AED",
  price: 1930.0,
  hero: "https://images.unsplash.com/photo-1526481280698-8fcc13fd2b66?q=80&w=1920&auto=format&fit=crop",
  gallery: [
    "https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534543210156-32046f9d0bbf?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543007619-084f0cb8e7d1?q=80&w=1600&auto=format&fit=crop",
  ],
  features: [
    { key: "hotel", label: "Hotels" },
    { key: "map", label: "Sightseeing" },
    { key: "ticket", label: "Entry Tickets" },
    { key: "meal", label: "Meals" },
    { key: "activity", label: "Activities" },
    { key: "bus", label: "Transfers" },
  ],
  overview:
    "Plan the trip of a lifetime like never before with this 4-night package. Every minute aspect of your holiday is carefully curated, including accommodation, airport transfers, inland transfers, and entry to the most popular Dubai attractions. Sit back and relax while we prepare the best plan for relaxation and adventure. With classic urban getaways, serene dhow cruise dinners in Dubai Marina, a desert safari experience, and visits to Burj Khalifa, Dubai Miracle Garden, and Global Village.",
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Dubai & Dhow Cruise Marina",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
      details:
        "Upon arrival in Dubai, check in to your hotel and take some time to relax. In the evening, embark on a Dhow Cruise Marina for a memorable start to your trip. Sail along the stunning Dubai Marina while enjoying breathtaking skyline views, a delicious buffet dinner, and live entertainment. After a relaxing evening on the water, return to your hotel for an overnight stay.",
    },
    {
      day: "Day 2",
      title:
        "Dubai City Tour, Burj Khalifa, Dubai Mall, Dubai Aquarium and Underwater Zoo",
      image:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop",
      details:
        "Start your day with a guided Dubai City Tour, covering iconic landmarks such as Burj Al Arab, The Palm Jumeirah, and Atlantis the Palm with scenic photo stops. Explore the Gold & Spice Souks and drive along the impressive Sheikh Zayed Road. In the afternoon, visit the Burj Khalifa, where you’ll ascend to the 124th & 125th floors for breathtaking panoramic views of Dubai. Afterward, explore Dubai Mall, home to world-class shopping, attractions, and dining options. Visit the Dubai Aquarium & Underwater Zoo,where you can witness diverse marine life in one of the world’s largest suspended aquariums. End your day by watching the Dubai Fountain Show before returning to your hotel.",
    },
    {
      day: "Day 3",
      title: "Evening Desert Safari",
      image:
        "https://images.unsplash.com/photo-1558980664-10d4a3f3f48b?q=80&w=1200&auto=format&fit=crop",
      details:
        "Spend the day at your leisure. But in the afternoon, join our team for a thrilling desert safari. This off-the-beaten-path tour allows you to absorb the beauty and serenity of the Arabian Desert in all its splendor. A 4x4 dune bashing session delights adventurers, while activities like shisha smoking, camel riding, and henna tattooing cater to culture enthusiasts. Amid all the action and amusement, refuel your energy with a BBQ dinner and recharge your spirit with belly dancing and a Tanura performance.",
    },
    {
      day: "Day 4",
      title: "Miracle Garden and Global Village",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
      details:
        "After breakfast, visit two of Dubai’s extraordinary winter attractions. Be ready to witness some of the most breathtaking plant varieties as you enter Dubai Miracle Garden, with over 150 million flowers. They are arranged in the most stunning ways and come in various colors, designs, and patterns. At Dubai Global Village, you’re in for a sensory overload, thanks to over 36 pavilions showcasing cultures, cuisine, and delights of over 90 countries across the world. Add to this endless live performances, events, and exhilarating rides, making it ideal for every interest and age group.",
    },
    {
      day: "Day 5",
      title: "Departure",
      image:
        "https://images.unsplash.com/photo-1484176828731-2f23974a824e?q=80&w=1200&auto=format&fit=crop",
      details:
        "Depending on your flight timing, indulge in last-minute shopping or visit your favorite attractions. When it’s time to check out, our representative will drop you off at the airport, guaranteeing a hassle-free end to your Dubai holiday.",
    },
  ],
  hotelOptions: [
    {
      name: "Citymax Bur Dubai (Standard–3★) or similar",
      image:
        "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Grand Excelsior (Standard Room–BB) – 4★ or similar",
      image:
        "https://images.unsplash.com/photo-1501117716987-c8e3f1314285?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  inclusions: [
    "4 nights accommodation in the selected hotel or similar",
    "Daily breakfast",
    "Dhow Cruise Marina with international buffet (shared transfers)",
    "Dubai city tour (shared)",
    "Standard Desert Safari with BBQ dinner & live shows (shared transfers)",
    "Burj Khalifa At the Top 124th + 125th floors (Non-prime hours)",
    "Dubai Aquarium & Global Village entry",
    "Return transfers on shared basis",
    "Airport transfers on private basis",
    "Dubai single-entry Visa (if selected)",
    "Travel insurance up to the value of 50,000",
  ],
  exclusions: [
    "Domestic/International flight tickets",
    "GST and TCS if applicable",
    "Personal expenses and tips",
    "Meals not mentioned in the itinerary",
    "Additional sightseeing/services not mentioned",
    "Tourism Dirham (payable at hotel, approx)",
  ],
  pricingTables: [
    {
      title: "Hotel: Citymax Bur Dubai (Standard–BB) – 3★",
      currency: "AED",
      columns: [
        "Single Per person",
        "Double Per person",
        "Triple Per person",
        "Child with bed (6–11 yrs)",
        "Child without bed (2–5.99 yrs)",
      ],
      rows: [["2710", "1930", "1865", "1780", "1585"]],
      altCurrency: {
        code: "INR",
        rows: [["48000", "43000", "42000", "40000", "31000"]],
      },
    },
    {
      title: "Hotel: Grand Excelsior (Standard–BB) – 4★",
      currency: "AED",
      columns: [
        "Single Per person",
        "Double Per person",
        "Triple Per person",
        "Child with bed (6–11 yrs)",
        "Child without bed (2–5.99 yrs)",
      ],
      rows: [["2900", "2050", "1950", "1830", "1635"]],
      altCurrency: {
        code: "INR",
        rows: [["68000", "46500", "45000", "43000", "32000"]],
      },
    },
  ],
  flights: "Flights are not included in this package.",
  visa: "This package includes a 30‑day Dubai tourist visa if selected. Our team will share the required documents list and assist with the visa process after booking.",
  info: [
    "Hotel check‑in is 3 PM and check‑out is 11 AM (subject to availability).",
    "Shared coach tours operate from hotels; pickup details will be shared.",
    "All inclusions are on a seat‑in‑coach basis unless noted.",
    "Room type will be standard or the best fit if selected room is unavailable.",
    "Blackout dates: 15 Dec to 5 Jan (surcharges may apply).",
  ],
  bookingPolicy: [
    "Post‑booking cancellation may incur up to 100% charges depending on supplier and notice period.",
    "No‑show is fully non‑refundable.",
  ],
  paymentTerms: [
    "Initial amount as per hotel policy is required at booking.",
    "Balance payment is due 10 days before departure.",
    "Confirmations/vouchers are sent within 24 hours of payment.",
    "If payment deadlines are missed, bookings may be released.",
  ],
};

export default function R1c1() {
  const ratingStars = renderStars(TOUR.rating);

  // Modal state
  const [showEnquiry, setShowEnquiry] = useState(false);
  function openEnquiry(e) {
    e?.preventDefault?.();
    setShowEnquiry(true);
  }
  function closeEnquiry() {
    setShowEnquiry(false);
  }

  // ESC to close + body lock
  useEffect(() => {
    if (!showEnquiry) return;
    const onKey = (e) => e.key === "Escape" && closeEnquiry();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [showEnquiry]);

  return (
    <main className="r1c1-root" style={{ "--brand": BRAND }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/" className="crumb">
            Home
          </a>
          <span className="sep">/</span>
          <a href="/tours" className="crumb">
            Tours
          </a>
          <span className="sep">/</span>
          <span className="crumb current">{TOUR.title}</span>
        </nav>

        {/* Hero */}
        <section className="hero-wrap">
          <div className="hero">
            <img src={TOUR.hero} alt={TOUR.title} />
            <div className="hero-gradient" aria-hidden="true" />
            <div className="ribbon">
              <IcoCalendarRange />
              <span>
                {TOUR.nights}N / {TOUR.days}D
              </span>
            </div>

            {/* Floating price/CTA (desktop) */}
            <aside className="floating-panel">
              <div className="fp-head">
                <span className="fp-label">Starting from</span>
                <div className="fp-price">
                  {TOUR.currency} {TOUR.price.toFixed(2)}
                </div>
                <div className="fp-sub">Per Person</div>
              </div>
              <div className="fp-actions ">
                <button
                  onClick={openEnquiry}
                  className="btn primary"
                  type="button"
                  // Wider CTA button as requested
                  style={{
                    minWidth: 220,
                    paddingInline: 22,
                    fontWeight: 700,
                    borderRadius: 10,
                  }}
                >
                  <IcoChat /> Enquiry Now
                </button>
                {/* <a href={`/book/${TOUR.id}`} className="btn ghost">
                  <IcoTicket /> Book Now
                </a> */}
              </div>
              <ul className="fp-points">
                <li>
                  <IcoShield /> Secure checkout
                </li>
                <li>
                  <IcoClock /> Instant confirmation
                </li>
                <li>
                  <IcoCheck /> Trusted operator
                </li>
              </ul>
            </aside>

            {/* Mini gallery */}
            <div className="hero-gallery">
              {TOUR.gallery.map((g, i) => (
                <img key={i} src={g} alt={`Gallery image ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Mobile CTA under hero */}
          <div className="mobile-cta">
            <div className="mc-price">
              <span className="mc-label">From</span>
              <strong>
                {TOUR.currency} {TOUR.price.toFixed(2)}
              </strong>
              <span className="mc-sub">/ person</span>
            </div>
            <div className="mc-actions">
              <button
                onClick={openEnquiry}
                className="btn primary sm"
                type="button"
                // Wider mobile CTA too
                style={{
                  minWidth: 180,
                  paddingInline: 18,
                  fontWeight: 700,
                  borderRadius: 10,
                }}
              >
                Enquiry
              </button>
              <a href={`/book/${TOUR.id}`} className="btn ghost sm">
                Book
              </a>
            </div>
          </div>
        </section>

        {/* Title + meta */}
        <header className="title-meta">
          <h1 className="title">{TOUR.title}</h1>
          <div className="meta">
            <div className="stars" title={`${TOUR.rating} rating`}>
              {ratingStars}
            </div>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <span className="reviews">{TOUR.reviews} Reviews</span>
            <span className="dot" aria-hidden="true">
              •
            </span>
            <span className="duration">
              <IcoCalendar /> {TOUR.days} days
            </span>
          </div>
          <div className="quick-tags">
            <span className="qt">
              <IcoMap /> City & Culture
            </span>
            <span className="qt">
              <IcoActivity /> Adventure
            </span>
            <span className="qt">
              <IcoMeal /> Breakfast included
            </span>
          </div>
        </header>

        {/* Feature icons */}
        <div className="feature-row" role="list">
          {TOUR.features.map((f) => (
            <div key={f.label} className="feat" role="listitem">
              {iconFor(f.key)}
              <span className="lbl">{f.label}</span>
            </div>
          ))}
        </div>

        {/* Subnav */}
        <nav className="subnav" aria-label="On this page">
          <a href="#overview">
            <IcoInfo /> Overview
          </a>
          <a href="#itinerary">
            <IcoFlag /> Itinerary
          </a>
          <a href="#hotels">
            <IcoHotel /> Hotels
          </a>
          <a href="#inclusions">
            <IcoCheck /> Inclusions
          </a>
          <a href="#exclusions">
            <IcoX /> Exclusions
          </a>
          <a href="#pricing">
            <IcoTag /> Pricing
          </a>
          <a href="#flights">
            <IcoPlane /> Flights
          </a>
          <a href="#visa">
            <IcoPassport /> Visa
          </a>
          <a href="#info">
            <IcoLightbulb /> Info
          </a>
          <a href="#policy">
            <IcoShield /> Policy
          </a>
          <a href="#payment">
            <IcoCreditCard /> Payment
          </a>
        </nav>

        {/* Overview */}
        <SectionCard id="overview" title="Overview">
          <p className="lead">{TOUR.overview}</p>
          <ul className="highlights">
            <li>
              <IcoCheck /> Dhow cruise at Dubai Marina
            </li>
            <li>
              <IcoCheck /> Burj Khalifa At the Top (124th + 125th)
            </li>
            <li>
              <IcoCheck /> Dubai Aquarium & Global Village entry
            </li>
            <li>
              <IcoCheck /> Desert safari with BBQ dinner & shows
            </li>
          </ul>
        </SectionCard>

        {/* Itinerary */}
        <SectionCard id="itinerary" title="Itinerary">
          <div className="relative overflow-x-hidden max-w-full px-2 sm:px-4 py-6">
            <div className="absolute left-[70px] sm:left-[80px] top-0 bottom-0 w-[2.5px] bg-[#FDD7BD]"></div>
            <ol className="flex flex-col gap-10 relative">
              {TOUR.itinerary.map((d, idx) => (
                <li
                  key={idx}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pl-[100px] sm:pl-[130px]"
                >
                  <div className="absolute left-[38px] sm:left-[50px] -translate-x-1/2 bg-[#FDD7BD] text-[#F17232] font-semibold text-xs sm:text-sm rounded-md px-3 py-1 shadow-sm">
                    {d.day}
                  </div>
                  <article className="bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row gap-4 w-full overflow-hidden border border-[#FBE9E1]">
                    <div className="flex-shrink-0 w-full sm:w-48">
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        className="rounded-xl w-full h-40 sm:h-32 object-cover object-center"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                        {d.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {d.details}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </SectionCard>

        {/* Hotels */}
        <SectionCard id="hotels" title="Hotel Options">
          <div className="hotel-grid">
            {TOUR.hotelOptions.map((h) => (
              <article key={h.name} className="hotel-card">
                <img src={h.image} alt={h.name} />
                <div className="hotel-body">
                  <h4>{h.name}</h4>
                  <div className="hotel-meta">
                    <span>
                      <IcoMapPin /> Central locations
                    </span>
                    <span>
                      <IcoWifi /> Free Wi‑Fi
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionCard>

        {/* Inclusions & Exclusions */}
        <div className="grid-2">
          <SectionCard id="inclusions" title="Inclusions">
            <ul className="icon-list ok">
              {TOUR.inclusions.map((i, idx) => (
                <li key={idx}>
                  <IcoCheck /> {i}
                </li>
              ))}
            </ul>
          </SectionCard>
          <SectionCard id="exclusions" title="Exclusions">
            <ul className="icon-list no">
              {TOUR.exclusions.map((e, idx) => (
                <li key={idx}>
                  <IcoX /> {e}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Pricing */}
        <SectionCard id="pricing" title="Departure & Pricing">
          {TOUR.pricingTables.map((t, idx) => (
            <div key={idx} className="table-wrap">
              <h4 className="table-title">
                <IcoTag /> {t.title}
              </h4>
              <div className="table-scroller">
                <table className="price-table">
                  <thead>
                    <tr>
                      {t.columns.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => (
                          <td key={j}>
                            {t.currency}{" "}
                            {Number(cell).toLocaleString(undefined, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {t.altCurrency && (
                <>
                  <div className="alt-note">{t.altCurrency.code} values</div>
                  <div className="table-scroller">
                    <table className="price-table alt">
                      <thead>
                        <tr>
                          {t.columns.map((c) => (
                            <th key={c}>{c}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.altCurrency.rows.map((r, i) => (
                          <tr key={i}>
                            {r.map((cell, j) => (
                              <td key={j}>
                                {t.altCurrency.code}{" "}
                                {Number(cell).toLocaleString()}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          ))}
        </SectionCard>

        {/* Flights & Visa */}
        <div className="grid-2">
          <SectionCard id="flights" title="Flights Details">
            <p>{TOUR.flights}</p>
          </SectionCard>
          <SectionCard id="visa" title="Visa Details">
            <p>{TOUR.visa}</p>
          </SectionCard>
        </div>

        {/* Info, Policy, Payment */}
        <SectionCard id="info" title="Important Information">
          <ul className="dot-list">
            {TOUR.info.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard id="policy" title="Booking Policy">
          <ul className="dot-list">
            {TOUR.bookingPolicy.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard id="payment" title="Payment Terms">
          <ul className="dot-list">
            {TOUR.paymentTerms.map((t, idx) => (
              <li key={idx}>{t}</li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* Inline modal with smaller, modern-sized form */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-5">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeEnquiry}
            aria-hidden="true"
          />
          <div className="relative z-[1001] max-h-[90vh] w-full max-w-3xl overflow-y-auto">
            <EnquiryNow
              title={TOUR.title}
              nights={TOUR.nights}
              days={TOUR.days}
              brandColor={BRAND}
              onClose={closeEnquiry}
              onSubmit={() => {
                // TODO: send to API
                closeEnquiry();
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}

/* ===== helpers ===== */
function iconFor(key) {
  switch (key) {
    case "hotel":
      return <IcoHotel />;
    case "map":
      return <IcoMap />;
    case "ticket":
      return <IcoTicket />;
    case "meal":
      return <IcoMeal />;
    case "activity":
      return <IcoActivity />;
    case "bus":
      return <IcoBus />;
    default:
      return <IcoInfo />;
  }
}
function renderStars(value = 0) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const arr = [];
  for (let i = 0; i < full; i++) arr.push(<IcoStarSolid key={`s${i}`} />);
  if (half) arr.push(<IcoStarHalf key="half" />);
  for (let i = 0; i < empty; i++) arr.push(<IcoStar key={`o${i}`} />);
  return arr;
}

/* ===== Icons (all used icons defined below) ===== */
function IcoHotel(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 21V7a2 2 0 0 1 2-2h3v16M8 11h8a5 5 0 0 1 5 5v5M14 21V5h3a2 2 0 0 1 2 2v14M3 21h18"
        strokeLinecap="round"
      />
      <path d="M6.5 9h.01M6.5 13h.01M16 9h2M16 13h2" strokeLinecap="round" />
    </svg>
  );
}
function IcoMap(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 3 3 6v15l6-3 6 3 6-3V3l-6 3-6-3z" strokeLinejoin="round" />
      <path d="M9 3v15m6-12v15" />
    </svg>
  );
}
function IcoTicket(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 9a3 3 0 0 0 0 6v3a2 2 0 0 0 2 2h14l2-2V6l-2-2H5a2 2 0 0 0-2 2v3z"
        strokeLinejoin="round"
      />
      <path d="M14 7v10" />
    </svg>
  );
}
function IcoMeal(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 3v9M9 3v9M6 8h3M18 3v9m0-9c0 4-3 4-3 9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IcoActivity(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2v4m6.36-2.36-2.83 2.83M22 12h-4M4 12H2m16.36 6.36-2.83-2.83M12 22v-4M6.34 17.66l2.83-2.83M6.34 6.34l2.83 2.83"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IcoBus(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="M4 10h16M7 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-9-4h8" />
    </svg>
  );
}
function IcoInfo(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01M11 12h2v5h-2z" strokeLinecap="round" />
    </svg>
  );
}
function IcoFlag(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 4v16M4 5h10l-1.5 3H20l-1.5 3H8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IcoTag(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M20 10l-8 8-8-8 6-6h4l6 6z" strokeLinejoin="round" />
      <circle cx="14" cy="10" r="1" />
    </svg>
  );
}
function IcoPlane(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M10 21l-1-4-3-3-4-1 20-8-8 20-1-4-3-3z" strokeLinejoin="round" />
    </svg>
  );
}
function IcoPassport(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M8 16h8" />
    </svg>
  );
}
function IcoLightbulb(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 13c.66.39 1 1.07 1 1.8V18h6v-1.2c0-.73.34-1.41 1-1.8A7 7 0 0 0 12 2Z" />
    </svg>
  );
}
function IcoCreditCard(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
function IcoMapPin(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 0 0-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}
function IcoWifi(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M2 8a16 16 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}
function IcoStarSolid(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="#F59E0B"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.04a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.75 1.69-1.54 1.12l-2.8-2.04a1 1 0 0 0-1.18 0l-2.8 2.04c-.78.57-1.84-.2-1.54-1.12l1.07-3.3a1 1 0 0 0-.36-1.12L2.88 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.17-3.29Z" />
    </svg>
  );
}
function IcoStar(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      fill="#E5E7EB"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.04a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.75 1.69-1.54 1.12l-2.8-2.04a1 1 0 0 0-1.18 0l-2.8 2.04c-.78.57-1.84-.2-1.54-1.12l1.07-3.3a1 1 0 0 0-.36-1.12L2.88 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.17-3.29Z" />
    </svg>
  );
}
function IcoStarHalf(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="half" x1="0" x2="1">
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path
        fill="url(#half)"
        d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 0 0 .95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.04a1 1 0 0 0-.36 1.12l1.07 3.29c.3.92-.75 1.69-1.54 1.12l-2.8-2.04a1 1 0 0 0-1.18 0l-2.8 2.04c-.78.57-1.84-.2-1.54-1.12l1.07-3.3a1 1 0 0 0-.36-1.12L2.88 8.72c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 0 0 .95-.69l1.17-3.29Z"
      />
    </svg>
  );
}
function IcoChat(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17l-4 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7z" />
      <path d="M7 8h10M7 12h7" strokeLinecap="round" />
    </svg>
  );
}
function IcoCalendar(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" strokeLinecap="round" />
    </svg>
  );
}
function IcoCalendarRange(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18M7 13h4M13 13h4" strokeLinecap="round" />
    </svg>
  );
}
function IcoShield(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l2 2 3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
function IcoClock(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoCheck(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IcoX(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}
