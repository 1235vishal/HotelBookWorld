import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Login
 * A responsive login page matching the provided design:
 * - Left: rounded image frame with 4-slide carousel + dots
 * - Right: heading, form (email + password with toggle), forgot password,
 *          primary orange login button, signup link, social buttons row
 * - Theme color: #F17232 (orange) by default
 *
 * TailwindCSS required.
 *
 * Props:
 * - themeColor?: string                       // default "#F17232"
 * - slides?: string[]                         // 4+ image URLs for the left carousel
 * - rotateIntervalMs?: number                 // default 5000
 * - onLogin?: (payload: { email: string; password: string }) => void
 */
export default function Login({
  themeColor = "#F17232",
  slides,
  rotateIntervalMs = 5000,
  onLogin,
}) {
  // Default slides (aviation/travel vibe)
  const defaultSlides = useMemo(
    () => [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484494789010-20fc1a011197?q=80&w=1600&auto=format&fit=crop",
    ],
    []
  );
  const images = slides?.length ? slides.slice(0, 8) : defaultSlides;

  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      rotateIntervalMs
    );
    return () => clearInterval(id);
  }, [images.length, rotateIntervalMs]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const colorVars = {
    "--primary": themeColor,
    "--primary-600": shade(themeColor, -8),
    "--primary-700": shade(themeColor, -14),
    "--primary-800": shade(themeColor, -20),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email: email.trim(), password };
    if (onLogin) onLogin(payload);
    else {
      console.log("Login:", payload);
      alert("Logged in (demo). Implement your auth flow.");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50" style={colorVars}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Image carousel */}
          <div className="lg:col-span-5">
            <div className="relative h-[340px] sm:h-[420px] lg:h-[550px] rounded-[28px] overflow-hidden bg-black/5 ring-1 ring-black/10">
              {/* Slides */}
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Travel scene"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    idx === active ? "opacity-100" : "opacity-0"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : undefined}
                />
              ))}

              {/* Gradient edges for depth, optional */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

              {/* Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active
                        ? "w-6 bg-[var(--primary)]"
                        : "w-2 bg-white/70 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="lg:col-span-7">
            <div className="mx-auto max-w-xl">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Login
              </h1>
              <p className="mt-2 text-neutral-500">
                Login to access your account
              </p>

              {/* Card */}
              <div className="mt-6 rounded-2xl bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)] ring-1 ring-black/5 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-neutral-800"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      inputMode="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border-2 border-neutral-700/90 focus:border-[var(--primary)] px-3 py-3 outline-none transition"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1.5 block text-sm font-medium text-neutral-800"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPw ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full rounded-xl border-2 border-neutral-700/90 focus:border-[var(--primary)] px-3 py-3 pr-11 outline-none transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPw((v) => !v)}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 inline-grid place-items-center h-8 w-8 rounded-md text-neutral-500 hover:text-neutral-700"
                        aria-label={showPw ? "Hide password" : "Show password"}
                        title={showPw ? "Hide password" : "Show password"}
                      >
                        {showPw ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <div className="mt-2 text-right">
                      {/* <a
                        href="/forget"
                        className="text-sm text-[var(--primary)] hover:text-[var(--primary-700)]"
                      >
                        Forgot Password
                      </a> */}
                      <Link
                        to="/forget"
                        className="text-sm text-[var(--primary)] hover:text-[var(--primary-700)]"
                      >
                        Forgot Password
                      </Link>
                    </div>
                  </div>

                  {/* Login button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-600)] active:bg-[var(--primary-700)] text-white font-medium py-3.5 transition shadow-[0_6px_20px_rgba(241,114,50,0.35)]"
                  >
                    Login
                  </button>

                  {/* Signup link */}
                  <p className="text-center text-sm text-neutral-600">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-[var(--primary)] hover:text-[var(--primary-700)]"
                    >
                      Signup
                    </Link>
                  </p>

                  {/* Divider */}
                  <div className="relative my-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-3 text-xs text-neutral-400">
                        Or Login With
                      </span>
                    </div>
                  </div>

                  {/* Social row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--primary)]/35 hover:border-[var(--primary)]/60 py-3 text-neutral-800"
                      onClick={() => alert("Facebook OAuth – wire up in app")}
                    >
                      <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
                      <span className="hidden sm:inline">Facebook</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--primary)]/35 hover:border-[var(--primary)]/60 py-3 text-neutral-800"
                      onClick={() => alert("Google OAuth – wire up in app")}
                    >
                      <GoogleIcon className="h-5 w-5" />
                      <span className="hidden sm:inline">Google</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--primary)]/35 hover:border-[var(--primary)]/60 py-3 text-neutral-800"
                      onClick={() => alert("Apple Sign In – wire up in app")}
                    >
                      <AppleIcon className="h-5 w-5" />
                      <span className="hidden sm:inline">Apple</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End right */}
        </div>
      </div>
    </main>
  );
}

/* ---------------- Icons (inline SVG) ---------------- */

function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function EyeOffIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.6 6.2C11.06 6.07 11.52 6 12 6c6 0 10 6 10 6a17 17 0 0 1-4.12 4.74M6.86 8.12A16.5 16.5 0 0 0 2 12s4 6 10 6c1.1 0 2.14-.2 3.12-.56"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.1 22 12.07Z"
      />
    </svg>
  );
}
function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#EA4335"
        d="M12 10.2v3.6h5.1c-.22 1.38-1.55 4.05-5.1 4.05-3.07 0-5.58-2.54-5.58-5.65S8.93 6.55 12 6.55c1.75 0 2.94.74 3.61 1.38l2.46-2.37C16.8 3.98 14.63 3 12 3 6.98 3 3 6.98 3 12s3.98 9 9 9c5.2 0 8.62-3.66 8.62-8.82 0-.59-.06-1.05-.14-1.49H12Z"
      />
      <path
        fill="#34A853"
        d="M4.74 7.19l2.96 2.17C8.63 7.2 10.2 6.55 12 6.55c1.75 0 2.94.74 3.61 1.38l2.46-2.37C16.8 3.98 14.63 3 12 3c-2.91 0-5.41 1.11-7.26 4.19Z"
      />
      <path
        fill="#FBBC05"
        d="M12 21c2.62 0 4.82-.86 6.39-2.36l-2.78-2.28c-.76.53-1.78.89-3.61.89-2.33 0-4.31-1.57-5.01-3.69l-2.95 2.27C5.9 18.95 8.67 21 12 21Z"
      />
      <path
        fill="#4285F4"
        d="M20.62 12.18c0-.59-.06-1.05-.14-1.49H12v3.6h5.1c-.22 1.38-1.55 4.05-5.1 4.05-3.07 0-5.58-2.54-5.58-5.65 0-.71.13-1.39.35-2.02l-2.96-2.17A8.88 8.88 0 0 0 3 12c0 5.02 3.98 9 9 9 5.2 0 8.62-3.66 8.62-8.82Z"
      />
    </svg>
  );
}
function AppleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.49 2c.13 1.01-.3 2.01-.95 2.72-.66.7-1.74 1.25-2.76 1.17-.15-1 .35-2.02 1-2.7.7-.73 1.86-1.25 2.71-1.19Zm3.48 15.27c-.32.74-.7 1.43-1.15 2.07-.61.87-1.11 1.47-1.47 1.8-.58.57-1.2 1.17-1.98 1.19-.76.02-.95-.38-1.98-.38s-1.23.37-1.99.39c-.79.02-1.4-.61-1.98-1.18-.35-.33-.82-.9-1.42-1.76-.6-.87-1.1-1.9-1.51-3.08-.43-1.26-.65-2.47-.66-3.62-.01-1.12.24-2.07.75-2.85.51-.78 1.19-1.17 2.03-1.18.8-.02 1.56.37 2.27 1.14.52.57 1.06.86 1.61.86.53 0 1.03-.29 1.59-.87.33-.35.69-.62 1.09-.81.42-.2.85-.3 1.3-.3.97.02 1.77.45 2.4 1.3-.94.59-1.41 1.44-1.4 2.54.02 1.1.52 1.93 1.49 2.49.44.26.89.38 1.34.36-.04.35-.12.73-.26 1.14Z"
      />
    </svg>
  );
}

/* ---------------- Utils ---------------- */
function shade(hex, percent = -10) {
  const col = hex.replace("#", "");
  const r = parseInt(col.substring(0, 2), 16);
  const g = parseInt(col.substring(4, 6), 16);
  const b = parseInt(col.substring(6, 8), 16);
  const amt = Math.round(2.55 * percent);
  const R = clamp(r + amt, 0, 255);
  const G = clamp(g + amt, 0, 255);
  const B = clamp(b + amt, 0, 255);
  return "#" + [R, G, B].map((v) => v.toString(16).padStart(2, "0")).join("");
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
