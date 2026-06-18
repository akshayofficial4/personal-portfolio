import About from "@/Components/About";
import BackToTop from "@/Components/BackToTop";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import TechStack from "@/Components/TechStack";

export default function Home() {
  return (
    <main className=" w-full ">
      {/* NAVBAR CONTAINER */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/90 to-transparent z-40" />
      <div className="fixed top-4 left-0 w-full z-50 px-4">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>

      {/* HERO FULL WIDTH */}
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
