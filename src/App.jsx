import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import SectionWrapper from "./components/SectionWrapper.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    root.classList.toggle("dark", isDark);
    document.body.classList.toggle("light-mode", !isDark);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-bgDark via-bgDark to-bgDarker text-white"
          : "bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900"
      }`}
    >
      <div className="bg-grid">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 space-y-40">
          <SectionWrapper id="home">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="skills">
            <Skills />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <Projects />
          </SectionWrapper>

          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>

          <SectionWrapper id="education">
            <Education />
          </SectionWrapper>

          <SectionWrapper id="certifications">
            <Certifications />
          </SectionWrapper>

          <SectionWrapper id="contact">
            <Contact />
          </SectionWrapper>
        </main>

        <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Bokam Sree Sahithi. Made with ❤️ in India.
        </footer>
      </div>
    </div>
  );
}

export default App;
