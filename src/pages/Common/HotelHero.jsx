import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * HotelHero
 * Modern, responsive hero section with a themed date-range calendar and rotating backgrounds.
 *
 * Opening the calendar no longer changes page height (uses a fixed-position portal).
 *
 * Props:
 * - onSearch?: (params: { destination: string; checkIn: string; checkOut: string; guests: number }) => void
 * - defaultDestination?: string
 * - defaultGuests?: number
 * - backgroundUrl?: string
 * - backgroundUrls?: string[]
 * - rotateIntervalMs?: number
 * - themeColor?: string
 * - showTopBar?: boolean
 * - topOffset?: string | number
 */
export default function HotelHero({
  onSearch,
  defaultDestination = "",
  defaultGuests = 2,
  backgroundUrl,
  backgroundUrls,
  rotateIntervalMs = 8000,
  themeColor = "#F17232",
  showTopBar = false,
  topOffset = 0,
}) {
  const [destination, setDestination] = useState(defaultDestination);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(defaultGuests);
  const [bgIndex, setBgIndex] = useState(0);

  // Today in yyyy-mm-dd (UTC)
  const today = useMemo(() => formatDateUTC(new Date()), []);

  // Background images (fallback set)
  const defaultBackgrounds = useMemo(
    () => [
      "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501117716987-c8e2a3f7f02d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558770423-409a3cf4d29b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?q=80&w=2000&auto=format&fit=crop",
    ],
    []
  );

  // Build rotation list
  const rotationList = useMemo(() => {
    if (backgroundUrls?.length) return backgroundUrls;
    if (backgroundUrl) return [backgroundUrl, ...defaultBackgrounds.slice(1)];
    return defaultBackgrounds;
  }, [backgroundUrl, backgroundUrls, defaultBackgrounds]);

  // Auto-rotate background
  useEffect(() => {
    if (!rotationList?.length) return;
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % rotationList.length);
    }, rotateIntervalMs);
    return () => clearInterval(id);
  }, [rotationList, rotateIntervalMs]);

  // Date-range picker visibility + anchor element for portal positioning
  const [rangeOpen, setRangeOpen] = useState(false);
  const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);
  const anchorRect = useAnchorRect(calendarAnchorEl, rangeOpen);

  const minCheckout = useMemo(() => {
    if (!checkIn) return today;
    const d = addDays(parseDateUTC(checkIn), 1);
    return formatDateUTC(d);
  }, [checkIn, today]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !checkIn || !checkOut || !guests) return;
    const payload = {
      destination,
      checkIn,
      checkOut,
      guests: Number(guests) || 1,
    };
    if (onSearch) onSearch(payload);
    else {
      console.log("Hotel search:", payload);
      alert(
        `Searching hotels in ${destination} from ${checkIn} to ${checkOut} for ${guests} guest(s)...`
      );
    }
  };

  // Theme variables
  const colorVars = {
    "--primary": themeColor,
    "--primary-600": shade(themeColor, -8),
    "--primary-700": shade(themeColor, -14),
    "--primary-800": shade(themeColor, -20),
    "--hero-top-offset":
      typeof topOffset === "number" ? `${topOffset}px` : topOffset || "0px",
  };

  const openCalendar = (e) => {
    setCalendarAnchorEl(e.currentTarget);
    setRangeOpen(true);
  };

  return (
    <section
      className="relative isolate pt-[var(--hero-top-offset)]"
      style={colorVars}
    >
      {/* Rotating Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0">
          {rotationList.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Hotel ambience"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                idx === bgIndex ? "opacity-100" : "opacity-0"
              }`}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : undefined}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.22),transparent_60%)]" />
      </div>

      {/* Optional hero top bar (disabled by default so it won't conflict with your white navbar) */}
      {showTopBar && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              aria-label="Hotel Home"
              className="inline-flex items-center gap-2 text-white"
            >
              <span className="inline-grid place-items-center h-9 w-9 rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <BedIcon className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-wide">
                StayFinder
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6 text-white/90 text-sm">
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="h-4 w-4" />
                Best price guarantee
              </span>
              <span className="inline-flex items-center gap-2">
                <HeadsetIcon className="h-4 w-4" />
                24/7 support
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-10 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs sm:text-sm mb-5 backdrop-blur">
              <SparkleIcon className="h-4 w-4" />
              Handpicked stays for every mood
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Find your perfect stay, from cozy to grand
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg max-w-2xl">
              Compare top deals across thousands of hotels and resorts. Feel
              good about every booking with flexible options and trusted
              reviews.
            </p>

            {/* Popular tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Dubai",
                "Abu Dhabi",
                "Ras Al Khaimah",
                "Sharjah",
                "Fujairah",
              ].map((city) => (
                <button
                  key={city}
                  onClick={() => setDestination(city)}
                  className="rounded-full bg-white/12 hover:bg-white/20 px-3 py-1 text-sm ring-1 ring-white/20 transition"
                >
                  {city}
                </button>
              ))}
            </div>

            {/* Trust stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Happy travelers" value="2M+" />
              <Stat label="Properties" value="300k+" />
              <Stat label="Cities" value="1200+" />
            </div>
          </div>

          {/* Search card column */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/95 shadow-2xl ring-1 ring-black/5 backdrop-blur-md p-4 sm:p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row 1: Destination */}
                <div className="grid grid-cols-1 gap-3">
                  <LabeledField label="Destination" htmlFor="destination">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <PinIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="destination"
                        name="destination"
                        type="text"
                        placeholder="Where to?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition placeholder:text-gray-400"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </LabeledField>
                </div>

                {/* Row 2: Date range (popover via portal; does not change layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <LabeledField label="Check-in" htmlFor="checkin">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <button
                        type="button"
                        id="checkin"
                        onClick={openCalendar}
                        className="w-full text-left pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                      >
                        {checkIn || "Select date"}
                      </button>
                      <input
                        type="hidden"
                        name="checkin"
                        value={checkIn}
                        required
                      />
                    </div>
                  </LabeledField>

                  <LabeledField label="Check-out" htmlFor="checkout">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <CalendarIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <button
                        type="button"
                        id="checkout"
                        onClick={openCalendar}
                        className="w-full text-left pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                      >
                        {checkOut || "Select date"}
                      </button>
                      <input
                        type="hidden"
                        name="checkout"
                        value={checkOut}
                        required
                      />
                    </div>
                  </LabeledField>
                </div>

                {/* Date range popover (portal + fixed position) */}
                <DateRangePopover
                  open={rangeOpen}
                  onClose={() => setRangeOpen(false)}
                  startDate={checkIn}
                  endDate={checkOut}
                  minDate={today}
                  onChange={({ start, end }) => {
                    setCheckIn(start || "");
                    setCheckOut(end || "");
                  }}
                  themeColorVar="var(--primary)"
                  anchorRect={anchorRect}
                />

                {/* Row 3: Guests + CTA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <LabeledField label="Guests" htmlFor="guests">
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <UsersIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/60 focus:border-[var(--primary)]/60 transition"
                        required
                      />
                    </div>
                  </LabeledField>

                  {/* CTA */}
                  <div className="flex sm:items-end">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] text-white font-medium px-4 py-3.5 shadow-lg shadow-[var(--primary)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] transition"
                    >
                      <SearchIcon className="h-5 w-5" />
                      Search Hotels
                    </button>
                  </div>
                </div>

                {/* Helper row */}
                <div className="flex items-center justify-between pt-2 text-sm text-gray-600">
                  <div className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-[var(--primary)]" />
                    Free cancellation on most stays
                  </div>
                  <button
                    type="button"
                    onClick={() => setDestination("Near me")}
                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-800)]"
                  >
                    <TargetIcon className="h-4 w-4" />
                    Use my location
                  </button>
                </div>
              </form>
            </div>

            {/* Badge strip */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-white/90 text-sm">
              <Badge
                icon={<StarIcon className="h-4 w-4" />}
                text="Trusted reviews"
              />
              <Badge
                icon={<SparkleIcon className="h-4 w-4" />}
                text="Exclusive deals"
              />
              <Badge
                icon={<ShieldIcon className="h-4 w-4" />}
                text="Secure booking"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI helpers ---------- */

function LabeledField({ label, htmlFor, children }) {
  return (
    <label className="block" htmlFor={htmlFor}>
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>
      {children}
    </label>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-3 py-3 backdrop-blur">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-white/85">{label}</div>
    </div>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-white/15 ring-1 ring-white/20">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  );
}

/* ---------- Date Range Popover (portal + fixed) ---------- */

function DateRangePopover({
  open,
  onClose,
  startDate,
  endDate,
  minDate,
  onChange,
  themeColorVar = "var(--primary)",
  anchorRect,
}) {
  const popoverRef = useRef(null);

  // Close on outside click / ESC
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose?.();
      }
    };
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  // Calendar view month
  const [viewMonth, setViewMonth] = useState(() => {
    const base = startDate ? parseDateUTC(startDate) : parseDateUTC(minDate);
    return new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), 1));
  });

  // Work state for selection before apply
  const [draftStart, setDraftStart] = useState(startDate || "");
  const [draftEnd, setDraftEnd] = useState(endDate || "");

  useEffect(() => {
    if (open) {
      setDraftStart(startDate || "");
      setDraftEnd(endDate || "");
      const base = startDate ? parseDateUTC(startDate) : parseDateUTC(minDate);
      setViewMonth(
        new Date(Date.UTC(base.getUTCFullYear(), base.getUTCMonth(), 1))
      );
    }
  }, [open, startDate, endDate, minDate]);

  if (!open || !anchorRect) return null;

  // Preferred popover size
  const PADDING = 12;
  const preferredWidth = 560;
  const maxWidth = Math.min(window.innerWidth - PADDING * 2, preferredWidth);
  // Position below the anchor; clamp horizontally into viewport
  const top = Math.min(window.innerHeight - PADDING, anchorRect.bottom + 8);
  const left = Math.min(
    Math.max(PADDING, anchorRect.left),
    Math.max(PADDING, window.innerWidth - maxWidth - PADDING)
  );

  const thisMonth = viewMonth;
  const nextMonth = new Date(
    Date.UTC(thisMonth.getUTCFullYear(), thisMonth.getUTCMonth() + 1, 1)
  );
  const minD = parseDateUTC(minDate);

  const canGoPrev =
    monthFirstDay(addMonths(thisMonth, -1)) >= monthFirstDay(minD);

  const handleDayClick = (date) => {
    const iso = formatDateUTC(date);
    if (!draftStart || (draftStart && draftEnd)) {
      setDraftStart(iso);
      setDraftEnd("");
    } else if (draftStart && !draftEnd) {
      if (parseDateUTC(iso) < parseDateUTC(draftStart)) {
        setDraftStart(iso);
        setDraftEnd("");
      } else {
        setDraftEnd(iso);
      }
    }
  };

  const apply = () => {
    onChange?.({ start: draftStart || "", end: draftEnd || "" });
    onClose?.();
  };

  const clear = () => {
    setDraftStart("");
    setDraftEnd("");
  };

  return createPortal(
    <div
      ref={popoverRef}
      className="fixed z-[60]"
      style={{ top, left, width: maxWidth }}
    >
      <div className="rounded-2xl border border-gray-200 bg-white shadow-xl p-3 sm:p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-800">
            Select your dates
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                canGoPrev && setViewMonth(addMonths(thisMonth, -1))
              }
              className={`h-8 w-8 inline-grid place-items-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 ${
                !canGoPrev ? "opacity-40 cursor-not-allowed" : ""
              }`}
              aria-label="Previous month"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setViewMonth(addMonths(thisMonth, +1))}
              className="h-8 w-8 inline-grid place-items-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              aria-label="Next month"
            >
              ›
            </button>
          </div>
        </div>

        {/* Two-month view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <CalendarMonth
            monthDate={thisMonth}
            minDate={minD}
            start={draftStart}
            end={draftEnd}
            onDayClick={handleDayClick}
            themeColorVar={themeColorVar}
          />
          <CalendarMonth
            monthDate={nextMonth}
            minDate={minD}
            start={draftStart}
            end={draftEnd}
            onDayClick={handleDayClick}
            themeColorVar={themeColorVar}
          />
        </div>

        {/* Footer actions */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {draftStart && draftEnd
              ? `Selected: ${draftStart} → ${draftEnd}`
              : draftStart
              ? `Check-in: ${draftStart}`
              : "Pick a start date"}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clear}
              className="px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={apply}
              disabled={!draftStart || !draftEnd}
              className="px-3 py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function CalendarMonth({
  monthDate,
  minDate,
  start,
  end,
  onDayClick,
  themeColorVar,
}) {
  const year = monthDate.getUTCFullYear();
  const month = monthDate.getUTCMonth();

  const monthStart = new Date(Date.UTC(year, month, 1));
  const monthEnd = new Date(Date.UTC(year, month + 1, 0));
  const startWeekday = monthStart.getUTCDay(); // 0 Sun - 6 Sat

  const days = [];
  for (let i = 0; i < startWeekday; i++) days.push(null);
  for (let d = 1; d <= monthEnd.getUTCDate(); d++) {
    days.push(new Date(Date.UTC(year, month, d)));
  }

  const startD = start ? parseDateUTC(start) : null;
  const endD = end ? parseDateUTC(end) : null;

  const isBeforeMinDay = (d) => d < minDate;

  const header = monthDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="rounded-xl border border-gray-200 p-3">
      <div className="text-sm font-semibold text-gray-800 mb-2">{header}</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="h-7 inline-grid place-items-center">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, idx) => {
          if (!d) return <div key={idx} className="h-9" />;

          const iso = formatDateUTC(d);
          const selectedStart = startD && isSameDay(d, startD);
          const selectedEnd = endD && isSameDay(d, endD);
          const inRange = startD && endD && d > startD && d < endD;

          const disabled = isBeforeMinDay(d);

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onDayClick(d)}
              className={[
                "h-9 relative rounded-md text-sm transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                disabled
                  ? "text-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100",
                selectedStart || selectedEnd
                  ? "text-white"
                  : inRange
                  ? "bg-[color:var(--range-bg,rgba(241,114,50,0.12))] text-gray-800"
                  : "text-gray-800",
              ].join(" ")}
              style={
                selectedStart || selectedEnd
                  ? { background: `var(--primary)` }
                  : {}
              }
            >
              <span className="relative z-10 inline-block leading-9">
                {d.getUTCDate()}
              </span>
              {inRange && (
                <span
                  className="absolute inset-0 rounded-md"
                  style={{ background: "rgba(241,114,50,0.12)" }}
                />
              )}
              {(selectedStart || selectedEnd) && (
                <span className="absolute inset-0 rounded-md ring-1 ring-white/30" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Anchoring helper ---------- */
function useAnchorRect(el, active) {
  const [rect, setRect] = useState(null);
  useLayoutEffect(() => {
    if (!active || !el) return;
    const update = () => setRect(el.getBoundingClientRect());
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [el, active]);
  return rect;
}

/* ---------- Icons (inline SVG, no deps) ---------- */
function BedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 10V6a1 1 0 0 1 1-1h7a4 4 0 0 1 4 4v1h3a3 3 0 0 1 3 3v5h-2v-3H5v3H3v-12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function HeadsetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12a8 8 0 1 1 16 0v6a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="2"
        y="11"
        width="4"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="18"
        y="11"
        width="4"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4Z" fill="currentColor" />
      <path d="M18 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" fill="currentColor" />
    </svg>
  );
}
function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 22s7-6.25 7-12a7 7 0 1 0-14 0c0 5.75 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 19a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 19a5 5 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2M12 20v2M2 12h2M20 12h2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 17.7l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3.5Z" />
    </svg>
  );
}

/* ---------- Date helpers ---------- */
function parseDateUTC(yyyy_mm_dd) {
  const [y, m, d] = yyyy_mm_dd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}
function formatDateUTC(date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
function addMonths(date, count) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + count, 1)
  );
}
function addDays(date, days) {
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate() + days
    )
  );
}
function isSameDay(a, b) {
  return (
    a.getUTCFullYear() === b.getUTCFullYear() &&
    a.getUTCMonth() === b.getUTCMonth() &&
    a.getUTCDate() === b.getUTCDate()
  );
}
function monthFirstDay(d) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1));
}
// Simple shade/darken function for hex colors
function shade(hex, percent = -10) {
  const col = hex.replace("#", "");
  const r = parseInt(col.substring(0, 2), 16);
  const g = parseInt(col.substring(2, 4), 16);
  const b = parseInt(col.substring(4, 6), 16);
  const amt = Math.round(2.55 * percent);
  const R = clamp(r + amt, 0, 255);
  const G = clamp(g + amt, 0, 255);
  const B = clamp(b + amt, 0, 255);
  return "#" + [R, G, B].map((v) => v.toString(16).padStart(2, "0")).join("");
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
