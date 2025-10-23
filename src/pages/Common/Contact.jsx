/**
 * Contact section with improved form design and a larger rocket image.
 * Orange theme, fully responsive, and your rocket image positioned exactly:
 * right: 9.5rem; top: 3rem; width: 255px
 *
 * Usage:
 *   <Contact rocketSrc="/images/your-rocket.png" />
 */
export default function Contact({ rocketSrc = "./roket.webp" }) {
  return (
    <section className="relative bg-white">
      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Leave A Message
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Need Assistance?
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            We are here to help you with any inquiries you may have about our
            products and services. Please feel free to call or email us, or use
            our contact form to get in touch. We look forward to hearing from
            you!
          </p>
        </div>

        {/* Mobile rocket (optional, centered). Remove if you don't want it on mobile */}
        <div className="mt-6 flex justify-center sm:hidden" aria-hidden="true">
          <img
            src={rocketSrc}
            alt="Rocket"
            className="w-24 drop-shadow-xl animate-float select-none"
            draggable="false"
            loading="eager"
          />
        </div>

        {/* Desktop/Tablet rocket with exact position and size requested */}
        <div
          className="pointer-events-none absolute right-[9.5rem] top-[3rem] hidden sm:block"
          aria-hidden="true"
        >
          <img
            src={rocketSrc}
            alt="Rocket"
            className="w-[255px] max-w-none drop-shadow-[0_12px_30px_rgba(249,115,22,0.35)] animate-float select-none"
            draggable="false"
            loading="eager"
          />
        </div>
      </div>

      {/* Form card */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: handle submit
          }}
          className="mx-auto mt-10 max-w-4xl rounded-3xl bg-white/90 p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(249,115,22,0.35)] ring-1 ring-orange-100 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                placeholder="056-4847249"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full resize-y rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
                placeholder="Write your message here..."
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-300/40 transition hover:from-orange-600 hover:to-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              SUBMIT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>

        {/* Contact info cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-dashed border-gray-300 p-6 transition hover:border-orange-300/60">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.1 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.64 2.6a2 2 0 0 1-.45 2.11L9.1 10.9a16 16 0 0 0 4 4l1.47-1.15a2 2 0 0 1 2.11-.45c.83.31 1.7.52 2.6.64A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Mobile</p>
            <p className="mt-1 text-center font-medium text-gray-900">
              056-4847249
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-gray-300 p-6 transition hover:border-orange-300/60">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Email</p>
            <p className="mt-1 text-center font-medium text-gray-900 break-all">
              info@joyfuladventure.ae
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-gray-300 p-6 transition hover:border-orange-300/60">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-gray-900">
              ADDRESS
            </p>
            <p className="mt-1 text-center text-gray-700">
              Al Marsa Street, Marina Mall, Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* Local animation for rocket image */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 3.2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </section>
  );
}
