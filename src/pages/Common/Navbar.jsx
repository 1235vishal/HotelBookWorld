
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function NavLink({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      className={`relative inline-flex items-center pb-1 group ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="pointer-events-none absolute -bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRowRef = useRef(null);
  const [headerH, setHeaderH] = useState(0);

  useEffect(() => {
    const el = headerRowRef.current;
    if (!el) return;
    const update = () => setHeaderH(el.offsetHeight || 0);
    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = () => setOpen((v) => !v);

  return (
    <header className="relative z-50">
      <div className="container mx-auto">
        <div
          ref={headerRowRef}
          className="flex items-center justify-between py-1 md:py-2"
        >
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center leading-none"
            aria-label="Home"
          >
            <img
              src="/logo1.jpg"
              alt="GETTOURGUIDE"
              fetchPriority="high"
              decoding="async"
              className="h-[96px] w-[96px] sm:h-[112px] sm:w-[112px] md:h-[124px] md:w-[124px] object-contain select-none shrink-0"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              className="text-slate-700 hover:text-slate-900 font-medium"
              to="/"
            >
              Activities
            </NavLink>
            <NavLink
              className="text-slate-700 hover:text-slate-900 font-medium"
              to="/hotels"
            >
              Hotels
            </NavLink>
            <NavLink
              className="text-slate-700 hover:text-slate-900 font-medium"
              to="/tours"
            >
              Tours
            </NavLink>
            <NavLink
              className="text-slate-700 hover:text-slate-900 font-medium"
              to="/visas"
            >
              Visas
            </NavLink>
            <NavLink
              className="text-slate-700 hover:text-slate-900 font-medium"
              to="/cruises"
            >
              Cruises
            </NavLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg font-semibold text-slate-700 hover:text-slate-900"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-soft"
            >
              Signup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 -mr-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-sidebar"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-40 bg-slate-900/40 transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: `${headerH}px` }}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed left-0 z-50 w-80 max-w-[85%] bg-white shadow-card ring-1 ring-slate-100 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: `${headerH}px`, height: `calc(100vh - ${headerH}px)` }}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <nav className="flex flex-col p-4">
          <NavLink
            className="py-3 text-slate-700 font-medium"
            to="/activities"
            onClick={() => setOpen(false)}
          >
            Activities
          </NavLink>
          <NavLink
            className="py-3 text-slate-700 font-medium"
            to="/hotels"
            onClick={() => setOpen(false)}
          >
            Hotels
          </NavLink>
          <NavLink
            className="py-3 text-slate-700 font-medium"
            to="/tours"
            onClick={() => setOpen(false)}
          >
            Tours
          </NavLink>
          <NavLink
            className="py-3 text-slate-700 font-medium"
            to="/visas"
            onClick={() => setOpen(false)}
          >
            Visas
          </NavLink>
          <NavLink
            className="py-3 text-slate-700 font-medium"
            to="/cruises"
            onClick={() => setOpen(false)}
          >
            Cruises
          </NavLink>

          <div className="mt-4 flex gap-2">
            <Link
              to="/login"
              className="flex-1 px-4 py-2 rounded-lg font-semibold text-slate-700 bg-slate-100 text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex-1 px-4 py-2 rounded-lg font-semibold text-white bg-brand-600 text-center"
              onClick={() => setOpen(false)}
            >
              Signup
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
