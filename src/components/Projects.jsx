const projects = [
  {
    tag: "AgriConnect – Detection & E-Commerce Platform",
    title: "Plant Disease Detection & Farmer to Consumer Marketplace",
    period: "Jul 2025 – Oct 2025",
    logo:
      "https://tse2.mm.bing.net/th/id/OIP.HbwImznSHxGr5_3SDbyzRwHaHa?pid=Api&P=0&h=180",
    description:
      "Comprehensive farmer enablement platform that fuses AI-driven plant disease diagnostics with a curated e-commerce experience.",
    bullets: [
      "Trained CNN-based leaf disease detector using TensorFlow and OpenCV.",
      "Integrated ML microservice with Django + SQLite backend APIs.",
      "Implemented responsive React + Tailwind storefront with secure checkout.",
    ],
    stack: ["React", "Tailwind CSS", "Django", "SQLite", "OpenCV", "CNN"],
    links: {
      code: "https://github.com/sahithi709/plant-disease-detection-with-farmer-marketpace",
      demo: "https://agriconnect-demo.vercel.app/",
    },
  },

  {
    tag: "Quantum Machine Learning Weather Forecaster",
    title: "Time Series Forecasting using QML",
    period: "Jan 2025 – Apr 2025",
    logo: "https://tse4.mm.bing.net/th/id/OIP.GJnAxu_zRgM9gaHuHzf10wHaEw?pid=Api&P=0&h=180",
    description:
      "Designed a hybrid quantum-classical model to predict long-term climate trends and extreme events using adaptive output weighting.",
    bullets: [
      "Achieved ~80% accuracy on multi-seasonal forecasts.",
      "Leveraged Qiskit quantum circuits for feature transformations.",
      "Built monitoring dashboards to visualize accuracy drifts over time.",
    ],
    stack: ["Python", "Qiskit", "Pytorch", "TensorFlow", "NumPy", "Pandas"],
    links: {
      code: "https://github.com/sahithi709/TSF-Quantum-ML",
      demo: "https://youtu.be/dQw4w9WgXcQ",
    },
  },

  {
  tag: "E-Commerce Web Application",
  title: "Amazon Clone",
  period: "Nov 2024 – Dec 2024",
  logo: "https://tse4.mm.bing.net/th/id/OIP.3meF7mC6eHnDmied3AsDTwHaFj?pid=Api&P=0&h=180",
  description:
    "Developed an Amazon-inspired e-commerce platform with user authentication, product listings, and responsive UI.",
  bullets: [
    "Implemented custom authentication system for secure login and session handling.",
    "Created modular and reusable React components for scalable UI development.",
    "Built a fully functional cart system with dynamic updates to quantity and total price.",
    "Ensured mobile-friendly responsive layout with smooth interactive UI transitions."
  ],
  stack: [
    "React",
    "JavaScript",
    "CSS",
    "HTML"
  ],
  links: {
    code: "https://github.com/sahithi709/Amazon-clone",
    demo: "https://sahithi709.github.io/Amazon-clone",
  },
}

];

export default function Projects() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
            Projects 
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Real-world solutions built with passion, showcasing the intersection
            of AI, web technologies, and impact-driven development.
          </p>
        </div>
        <a
          href="https://github.com/sahithi709"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-white/15 px-3 py-1 text-[11px] hover:bg-slate-200/50 dark:hover:bg-white/10 transition"
        >
          View All Projects on GitHub ↗
        </a>
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-[2rem] border border-slate-200/60 dark:border-white/10 bg-gradient-to-br dark:from-white/5 dark:to-transparent from-white/90 to-white/50 p-6 space-y-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 overflow-hidden rounded-2xl bg-purpleMain/20">
                <img
                  src={p.logo}
                  alt={`${p.title} logo`}
                  className="h-full w-full object-cover"
                />
              </span>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      {p.tag}
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-[11px] text-slate-400">{p.period}</span>
                </div>
                <p className="mt-3 text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>

            <ul className="list-disc list-inside text-base text-slate-700 dark:text-slate-200 space-y-1 pl-1">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 dark:bg-white/5 bg-white/70 px-3 py-1 transition-colors duration-200 group-hover:border-purpleMain/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={p.links.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 dark:border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-slate-200/70 dark:hover:bg-white/10 transition"
              >
                View Code ↗
              </a>
              {/* <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-purpleMain px-4 py-2 text-xs font-semibold shadow-glow hover:bg-purpleSoft transition"
              >
                Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
