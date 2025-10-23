// import './Style/about.css'


// const IMAGES = [
//   {
//     src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop",
//     alt: "City waterfront",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1543007619-084f0cb8e7d1?q=80&w=1600&auto=format&fit=crop",
//     alt: "City skyline",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1591328247869-85a9d41c1403?q=80&w=1600&auto=format&fit=crop",
//     alt: "Desert sunset with camels",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1526481280698-8fcc13fd2b66?q=80&w=1600&auto=format&fit=crop",
//     alt: "Resort pool",
//   },
// ];

// export default function About() {
//   return (
//     <section className="relative overflow-x-clip bg-white">
//       {/* Subtle dotted backdrop behind headline (brand-tinted) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-x-0 top-6 -z-10 flex justify-center"
//       >
//         <div
//           className="h-40 sm:h-48 w-full"
//           style={{
//             maxWidth: "1320px",
//             backgroundImage:
//               "radial-gradient(currentColor 1.1px, transparent 1.6px)",
//             color: "rgba(255,83,78,0.22)", // brand-600 tint
//             backgroundSize: "14px 14px",
//             maskImage:
//               "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
//             WebkitMaskImage:
//               "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
//             borderRadius: "18px",
//           }}
//         />
//       </div>

//       {/* Wider page with pleasing side space on big screens */}
//       <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
//         {/* Headline and paragraph share the same content width */}
//         <div className="mx-auto w-full max-w-[1100px]">
//           {/* Headline */}
//           <div className="pt-10 sm:pt-12">
//             <div className="flex items-start gap-4">
//               <div className="flex-1 min-w-0">
//                 <h2 className="text-3xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold tracking-tight text-slate-900">
//                   Delivering Unforgettable
//                 </h2>

//                 <div className="mt-1 flex items-start gap-3">
//                   <h3 className="text-[28px] sm:text-[40px] lg:text-[50px] leading-snug font-extrabold tracking-tight">
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FF5A5F] to-[#FF3D77]">
//                       TRAVEL
//                     </span>{" "}
//                     <span className="italic font-serif text-[#FF534E]">
//                       Experiences
//                     </span>{" "}
//                     <span className="text-[#FF534E]">IN THE UAE</span>
//                   </h3>

//                   {/* Brand arrow circle, rotates on hover, stays aligned to the right */}
//                   <button
//                     type="button"
//                     aria-label="Learn more"
//                     className="ml-auto hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF8A00] to-[#FF3D77] text-white h-12 w-12 sm:h-14 sm:w-14 shadow-card transition-transform duration-500 hover:rotate-180"
//                     style={{
//                       outline: "2px dotted rgba(255,83,78,0.5)",
//                       outlineOffset: "6px",
//                     }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 sm:h-6 sm:w-6"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                     >
//                       <path
//                         d="M7 17 17 7M9 7h8v8"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Paragraph */}
//             <p className="mt-4 text-sm sm:text-base leading-7 text-slate-700">
//               Welcome to Arabian Journeys, the renowned B2B Destination
//               Management Company (DMC) that specializes in providing exceptional
//               travel and visit experiences in the United Arab Emirates. With a
//               focus on excellence and innovation, we are dedicated to offering
//               comprehensive services that cater to the diverse needs of our
//               clients. From hotel reservations to a wide range of touring
//               visits, luxury experiences, adventure tours, and more,
//             </p>
//           </div>

//           {/* Collage area */}
//           <div className="relative mt-10 sm:mt-12">
//             {/* Soft curved band at the bottom (like reference) */}
//             <div
//               className="absolute inset-x-0 bottom-0 h-[44%] bg-slate-50 rounded-t-[30px]"
//               aria-hidden="true"
//             />

//             {/* Desktop: same-to-same 4-image staggered collage */}
//             <div className="relative z-10 hidden lg:block h-[540px] w-[1200px]">
//               {/* Bottom-left card (smaller than before for better balance) */}
//               <Card
//                 src={IMAGES[0].src}
//                 alt={IMAGES[0].alt}
//                 className="absolute left-0 bottom-10 w-[360px] h-[430px] rounded-[22px]"
//               />

//               {/* Tall middle card */}
//               <Card
//                 src={IMAGES[1].src}
//                 alt={IMAGES[1].alt}
//                 className="absolute left-1/2 -translate-x-1/2 top-6 w-[330px] h-[240px] rounded-[26px]"
//               />

//               {/* Bottom middle-right wide card */}
//               <Card
//                 src={IMAGES[2].src}
//                 alt={IMAGES[2].alt}
//                 className="absolute left-[52%] -translate-x-1/2 bottom-3 w-[430px] h-[210px] rounded-[20px]"
//               />

//               {/* Right square card */}
//               <Card
//                 src={IMAGES[3].src}
//                 alt={IMAGES[3].alt}
//                 className="absolute right-0 top-10 w-[330px] h-[430px] rounded-[24px]"
//               />
//             </div>

//             {/* Small screens: infinite horizontal scroll in one row (duplicate track for seamless loop) */}
//             <div className="relative z-10 lg:hidden overflow-hidden">
//               <div className="marquee-mask">
//                 <div className="marquee-track gap-3 sm:gap-4">
//                   {/* Track A */}
//                   {IMAGES.map((img) => (
//                     <SmallCard
//                       key={`A-${img.alt}`}
//                       src={img.src}
//                       alt={img.alt}
//                     />
//                   ))}
//                   {/* Track B (duplicate for seamless looping) */}
//                   {IMAGES.map((img) => (
//                     <SmallCard
//                       key={`B-${img.alt}`}
//                       src={img.src}
//                       alt={img.alt}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Large collage cards */
// function Card({ src, alt, className = "" }) {
//   return (
//     <div
//       className={`overflow-hidden ring-1 ring-slate-100 bg-white/40 shadow-card ${className}`}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="h-full w-full object-cover"
//         loading="lazy"
//         decoding="async"
//       />
//     </div>
//   );
// }

// /* Small-screen marquee cards */
// function SmallCard({ src, alt }) {
//   return (
//     <div className="shrink-0 w-[64vw] xs:w-[58vw] sm:w-[48vw] max-w-[320px]">
//       <div className="overflow-hidden rounded-[22px] ring-1 ring-slate-100 bg-white/40 shadow-card">
//         <div className="aspect-[4/3]">
//           <img
//             src={src}
//             alt={alt}
//             className="h-full w-full object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import "./Style/about.css";

const ARROW_LINK = "/about"; // TODO: set your desired link here

const IMAGES = [
  {
    src: "https://dhiz4uvf5rpaq.cloudfront.net/arabianjourney/images/about2.webp",
    alt: "City waterfront",
  },
  {
    src: "https://dhiz4uvf5rpaq.cloudfront.net/arabianjourney/images/about1.webp",
    alt: "City skyline",
  },
  {
    src: "https://dhiz4uvf5rpaq.cloudfront.net/arabianjourney/images/about3.webp",
    alt: "Desert sunset with camels",
  },
  {
    src: "https://dhiz4uvf5rpaq.cloudfront.net/arabianjourney/images/about4.webp",
    alt: "Resort pool",
  },
];

export default function About() {
  return (
    <section className="relative overflow-x-clip bg-white">
      {/* Subtle dotted backdrop behind headline (brand-tinted) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 -z-10 flex justify-center"
      >
        <div
          className="h-40 sm:h-48 w-full"
          style={{
            maxWidth: "1320px",
            backgroundImage:
              "radial-gradient(currentColor 1.1px, transparent 1.6px)",
            color: "rgba(255,83,78,0.22)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
            borderRadius: "18px",
          }}
        />
      </div>

      {/* Wider page with pleasing side space on big screens */}
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10">
        {/* Headline and paragraph share the same content width */}
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Headline */}
          <div className="pt-10 sm:pt-12">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold tracking-tight text-slate-900">
                  Delivering Unforgettable
                </h2>

                <div className="mt-1 flex items-start gap-3">
                  <h3 className="text-[28px] sm:text-[40px] lg:text-[50px] leading-snug font-extrabold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FF5A5F] to-[#FF3D77]">
                      TRAVEL
                    </span>{" "}
                    <span className="italic font-serif text-[#FF534E]">
                      Experiences
                    </span>{" "}
                    <span className="text-[#FF534E]">IN THE UAE</span>
                  </h3>

                  {/* Rotating dotted circle with arrow — fully responsive and linked */}
                  <div className="ml-auto ring-wrap text-[#FF534E]">
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

                    <a
                      href={ARROW_LINK}
                      aria-label="Learn more about us"
                      className="ring-btn bg-[#FF534E] text-white focus:outline-none focus-visible:ring-4 ring-[#FF534E]/35"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-700">
              Welcome to Arabian Journeys, the renowned B2B Destination
              Management Company (DMC) that specializes in providing exceptional
              travel and visit experiences in the United Arab Emirates. With a
              focus on excellence and innovation, we are dedicated to offering
              comprehensive services that cater to the diverse needs of our
              clients. From hotel reservations to a wide range of touring
              visits, luxury experiences, adventure tours, and more,
            </p>
          </div>

          {/* Collage area */}
          <div className="relative mt-10 sm:mt-12">
            {/* Removed the soft curved band background */}

            {/* Desktop: staggered 4-image collage with gentle float */}
            <div className="relative z-10 hidden lg:block h-[540px] w-[1200px]">
              {/* Bottom-left card */}
              <Card
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                className="absolute left-0 bottom-10 w-[360px] h-[430px] rounded-[22px] about-float float-1"
              />

              {/* Top middle card */}
              <Card
                src={IMAGES[1].src}
                alt={IMAGES[1].alt}
                className="absolute left-1/3 -translate-x-1/2 top-6 w-[420px] h-[240px] rounded-[26px] about-float float-2"
              />

              {/* Bottom middle-right wide card */}
              <Card
                src={IMAGES[2].src}
                alt={IMAGES[2].alt}
                className="absolute left-[34%] -translate-x-1/2 bottom-3 w-[430px] h-[210px] rounded-[20px] about-float float-3"
              />

              {/* Right square card */}
              <Card
                src={IMAGES[3].src}
                alt={IMAGES[3].alt}
                className="absolute right-0 top-10 w-[330px] h-[430px] rounded-[24px] about-float float-4"
              />
            </div>

            {/* Small screens: infinite horizontal scroll (duplicate track for seamless loop) */}
            <div className="relative z-10 lg:hidden overflow-hidden">
              <div className="about-marquee-mask">
                <div className="about-marquee-track gap-3 sm:gap-4">
                  {/* Track A */}
                  {IMAGES.map((img) => (
                    <SmallCard
                      key={`A-${img.alt}`}
                      src={img.src}
                      alt={img.alt}
                    />
                  ))}
                  {/* Track B */}
                  {IMAGES.map((img) => (
                    <SmallCard
                      key={`B-${img.alt}`}
                      src={img.src}
                      alt={img.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Large collage cards */
function Card({ src, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden ring-1 ring-slate-100 bg-white/40 shadow-card ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* Small-screen marquee cards */
function SmallCard({ src, alt }) {
  return (
    <div className="shrink-0 w-[64vw] xs:w-[58vw] sm:w-[48vw] max-w-[320px]">
      <div className="overflow-hidden rounded-[22px] ring-1 ring-slate-100 bg-white/40 shadow-card">
        <div className="aspect-[4/3]">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}