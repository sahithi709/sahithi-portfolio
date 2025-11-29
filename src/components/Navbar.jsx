import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
  "contact",
];

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;

        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 200) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center">
      <nav
        className={`w-full max-w-[1800px] mt-5 px-10 py-3 flex items-center justify-between rounded-full backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "bg-white/70 dark:bg-black/40 shadow-[0_8px_25px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* BRAND TITLE */}
        <button
  onClick={() => scrollTo("home")}
  className="flex items-center gap-2"
>
  <span className="font-bold tracking-wide text-lg md:text-xl text-purpleMain dark:text-purpleSoft hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition">
    &lt;Sree/<span className="text-purpleMain dark:text-purpleSoft">Sahithi</span>&gt;
  </span>
</button>


        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium">
          {navItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  active === id
                    ? "bg-purpleMain text-white shadow-md"
                    : "text-slate-700 dark:text-slate-300 hover:bg-purpleMain/30 hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* THEME SWITCH + RESUME */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/40 hover:bg-black/70 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-slate-900" />
            )}
          </button>

          <a
            href="/Bokam_Sree_Sahithi_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center rounded-full bg-purpleMain px-5 py-2 text-sm font-semibold text-white shadow hover:bg-purpleSoft transition"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
