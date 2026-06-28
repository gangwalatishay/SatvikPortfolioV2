import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/common/ScrollProgress";

import useLenis from "../hooks/useLenis";

import Contact from "../components/Contact";

import Services from "../components/Services";

export default function Home() {
  useLenis();

  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">
      <Loader />

      <CustomCursor />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Projects />
     <Services />
      <Contact />

      <Footer />
    </main>
  );
}