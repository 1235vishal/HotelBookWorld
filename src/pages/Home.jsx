import Hero from "./Common/Hero";
import About from "./Common/About";
import Activities from "./Common/Attractions";
import TopExp from "./Common/TopExp";
import MostPop from "./Common/MostPop";
import Contact from "./Common/Contact";
import Footer from "./Common/Footer";

export default function App() {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
          <Hero />
          <About />
          <Activities />
          <TopExp />
          <MostPop />
          <Contact />
          <Footer />

            {/* <SearchPanel /> */}
    </div>
  );
}
