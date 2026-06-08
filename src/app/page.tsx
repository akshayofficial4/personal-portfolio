import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Projects from "@/Components/Projects";
import TechStack from "@/Components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full">

      {/* NAVBAR CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sticky top-4 z-50">
        <Navbar />
      </div>

      {/* HERO FULL WIDTH */}
      <Hero />
      <About />
      <TechStack />
      <Projects />

    </main>
  );
}
