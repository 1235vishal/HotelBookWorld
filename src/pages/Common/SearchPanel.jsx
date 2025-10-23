import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SearchPanel({
  initialWhere = "",
  initialStartOffsetDays = 2, // start date = today + 2
  initialEndOffsetDays = 7, // end date = today + 7
  initialGuests = 2,
  onSearch,
}) {
  const today = useMemo(() => new Date(), []);
  const [where, setWhere] = useState(initialWhere);
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + initialStartOffsetDays);
    return d;
  });
  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + initialEndOffsetDays);
    return d;
  });
  const [guests, setGuests] = useState(initialGuests);

  useEffect(() => {
    if (endDate <= startDate) {
      const next = new Date(startDate);
      next.setDate(next.getDate() + 1);
      setEndDate(next);
    }
  }, [startDate, endDate]);

  const changeGuests = (delta) => {
    setGuests((g) => Math.min(12, Math.max(1, g + delta)));
  };

  const quickPick = (value) => setWhere(value);

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch({ where, startDate, endDate, guests });
    } else {
      alert(
        `Searching: ${
          where || "Anywhere"
        } | ${startDate.toDateString()} → ${endDate.toDateString()} | ${guests} traveler(s)`
      );
    }
  };

  return (
    <div id="search" className="-mt-4 md:-mt-6 lg:-mt-8">
      <div className="rounded-2xl bg-white p-3 md:p-4 shadow-card ring-1 ring-slate-100">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Where */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-brand-600 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <label className="text-[11px] md:text-xs font-semibold text-slate-500">
                Destination or activity
              </label>
              <input
                type="text"
                value={where}
                onChange={(e) => setWhere(e.target.value)}
                placeholder="e.g., Dubai Desert Safari, Burj Khalifa, Abu Dhabi"
                className="w-full bg-transparent outline-none placeholder:text-slate-400 text-sm md:text-[15px] font-medium"
              />
            </div>
          </div>

          {/* From date */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-brand-600 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2v-8H3v8a2 2 0 0 0 2 2Z"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <label className="text-[11px] md:text-xs font-semibold text-slate-500">
                From date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                minDate={today}
                dateFormat="dd MMM yyyy"
                popperPlacement="bottom-start"
                className="w-full bg-transparent outline-none text-sm md:text-[15px] font-medium"
                calendarClassName="gtg-datepicker"
                dayClassName={() => "gtg-datepicker-day"}
                wrapperClassName="block"
              />
            </div>
          </div>

          {/* To date */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-brand-600 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2v-8H3v8a2 2 0 0 0 2 2Z"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <label className="text-[11px] md:text-xs font-semibold text-slate-500">
                To date
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => date && setEndDate(date)}
                minDate={
                  new Date(
                    startDate.getFullYear(),
                    startDate.getMonth(),
                    startDate.getDate() + 1
                  )
                }
                dateFormat="dd MMM yyyy"
                popperPlacement="bottom-start"
                className="w-full bg-transparent outline-none text-sm md:text-[15px] font-medium"
                calendarClassName="gtg-datepicker"
                dayClassName={() => "gtg-datepicker-day"}
                wrapperClassName="block"
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-brand-600 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M15 19a4 4 0 0 0-8 0m12 0a8 8 0 1 0-16 0"
              />
            </svg>
            <div className="flex-1 min-w-0">
              <label className="text-[11px] md:text-xs font-semibold text-slate-500">
                Travelers
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeGuests(-1)}
                  className="h-8 w-8 md:h-9 md:w-9 grid place-items-center rounded-lg bg-slate-100 text-slate-700"
                  aria-label="Decrease travelers"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={guests}
                  onChange={(e) => {
                    const n = parseInt(e.target.value || "1", 10);
                    setGuests(
                      Number.isNaN(n) ? 1 : Math.min(12, Math.max(1, n))
                    );
                  }}
                  className="w-12 md:w-14 text-center bg-transparent outline-none text-sm md:text-[15px] font-medium"
                  aria-label="Number of travelers"
                />
                <button
                  type="button"
                  onClick={() => changeGuests(1)}
                  className="h-8 w-8 md:h-9 md:w-9 grid place-items-center rounded-lg bg-slate-100 text-slate-700"
                  aria-label="Increase travelers"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Search */}
          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 md:px-5 py-2.5 md:py-3 font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -ml-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              />
            </svg>
            Search
          </button>
        </form>

        {/* Popular quick picks */}
        <div className="mt-2 md:mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11px] md:text-xs font-semibold text-slate-500 mr-1">
            Popular:
          </span>
          {[
            "Dubai Desert Safari",
            "Burj Khalifa At The Top",
            "Abu Dhabi City Tour",
            "Marina Dhow Cruise",
            "Ferrari World",
          ].map((p) => (
            <button
              key={p}
              onClick={() => quickPick(p)}
              className="px-3 py-1.5 rounded-full text-xs md:text-sm bg-slate-100 hover:bg-slate-200"
              type="button"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
