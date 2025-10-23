import { useMemo, useState } from "react";

export default function EnquiryNow({
  title = "Magical Dubai Winter Escape",
  nights = 6,
  days = 7,
  brandColor = "#F17232",
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    date: "",
    adults: 1,
    children: 0,
    flightBooked: "no",
    remarks: "",
  });

  const numberOptions = useMemo(
    () =>
      Array.from({ length: 51 }, (_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      )),
    []
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(form);
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 sm:p-6 md:p-7 shadow-2xl ring-1 ring-black/5">
      {/* Close (moved inside, clearly visible) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full text-white shadow-md"
        style={{
          backgroundColor: brandColor,
          border: "2px solid rgba(255,255,255,0.9)",
        }}
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Ribbon (shifted left so it doesn't clash with close) */}
      <div className="absolute right-16 top-0 -translate-y-1/2">
        <div
          className="relative rounded-bl-md rounded-tr-md px-3 py-1.5 text-xs font-semibold text-white shadow"
          style={{ backgroundColor: brandColor }}
        >
          {nights}N / {days}D
          <span
            className="absolute -right-2 top-0 h-0 w-0 border-b-[12px] border-l-[12px] border-b-transparent"
            style={{ borderLeftColor: brandColor }}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-[28px]">
        {title}
      </h2>

      {/* Top feature row */}
      <div className="mb-5 flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700">
        <TopPill icon={BedIcon} label="Hotels" />
        <TopPill icon={EyeIcon} label="Sightseeing" />
        <TopPill icon={TicketIcon} label="Entry Tickets" />
        <TopPill icon={MealIcon} label="Meals" />
        <TopPill icon={ActivityIcon} label="Activities" />
        <TopPill icon={TransferIcon} label="Transfers" />
      </div>

      <div className="h-px w-full bg-gray-200" />

      {/* Tour/Hotel chips */}
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-base font-semibold text-gray-900">Tour</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Arrival in Dubai & Dhow Cruise Marina",
              "Dubai City Tour & Evening Desert Safari",
              "Burj Khalifa & Fountain Show",
              "Abu Dhabi City Tour",
              "Miracle Garden and Global Village",
              "Day at Leisure or Optional Tours",
              "Departure from Dubai",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-base font-semibold text-gray-900">Hotel</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Citymax Bur Dubai/Admiral Plaza or similar",
              "Citymax Bur Dubai/Admiral Plaza or similar",
              "Grand Excelsior Hotel Bur Dubai or similar",
            ].map((h) => (
              <span
                key={h}
                className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 h-px w-full bg-gray-200" />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-3 sm:gap-4"
      >
        {/* Name */}
        <div className="col-span-12 md:col-span-6">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Email */}
        <div className="col-span-12 md:col-span-6">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Phone with country code */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex gap-2">
            <input
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-24 rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
            />
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number*"
              className="flex-1 rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>

        {/* Date */}
        <div className="col-span-12 md:col-span-6">
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Adults */}
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label className="mb-1 block text-sm text-gray-700">Adult</label>
          <select
            name="adults"
            value={form.adults}
            onChange={handleChange}
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          >
            {numberOptions}
          </select>
        </div>

        {/* Children */}
        <div className="col-span-6 sm:col-span-3 md:col-span-2">
          <label className="mb-1 block text-sm text-gray-700">Child</label>
          <select
            name="children"
            value={form.children}
            onChange={handleChange}
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          >
            {numberOptions}
          </select>
        </div>

        {/* Flight booked */}
        <div className="col-span-12 md:col-span-4">
          <label className="mb-1 block text-sm text-gray-700">
            Flight Booked
          </label>
          <div className="flex items-center gap-6 rounded-xl bg-gray-50 px-4 py-3">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="flightBooked"
                value="yes"
                checked={form.flightBooked === "yes"}
                onChange={handleChange}
                style={{ accentColor: brandColor }}
              />
              <span>Yes</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="flightBooked"
                value="no"
                checked={form.flightBooked === "no"}
                onChange={handleChange}
                style={{ accentColor: brandColor }}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Remarks */}
        <div className="col-span-12">
          <textarea
            name="remarks"
            rows={4}
            value={form.remarks}
            onChange={handleChange}
            placeholder="Remarks"
            className="block w-full rounded-xl bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Submit */}
        <div className="col-span-12">
          <button
            type="submit"
            className="w-full rounded-xl px-6 py-3.5 text-base font-semibold text-white"
            style={{ backgroundColor: brandColor }}
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------- Small UI atoms ---------- */

function TopPill({ icon: Icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 text-gray-700">
      <Icon className="h-5 w-5 text-gray-700" />
      <span className="text-[15px] font-medium">{label}</span>
    </div>
  );
}

/* ---------- Icons (inline SVG) ---------- */
function BedIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 7v10M3 12h18" strokeLinecap="round" />
      <rect x="6" y="9" width="5" height="3" rx="1" />
      <rect x="12" y="9" width="8" height="5" rx="1" />
    </svg>
  );
}
function EyeIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function TicketIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 9a2 2 0 0 0 0 6h18a2 2 0 0 0 0-6H3Z" />
      <path d="M8 9v6M16 9v6" />
    </svg>
  );
}
function MealIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M7 3v10" />
      <path d="M4 3v10" />
      <path d="M10 3v10" />
      <path d="M14 3v7a3 3 0 0 0 6 0V3" />
    </svg>
  );
}
function ActivityIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        d="M3 12h3l3 7 4-14 3 7h5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function TransferIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 17h16M4 7h16" />
      <path
        d="M7 7l-3 3 3 3M17 17l3-3-3-3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
