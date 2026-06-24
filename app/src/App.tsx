import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
