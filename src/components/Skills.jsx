import { useState } from "react";

const categories = {
  Languages: [
    {
      name: "Python",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ],
  "Web Dev": [
    {
      name: "React.js",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Django",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg",
    },
    {
      name: "Bootstrap",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "REST APIs",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ],
  "AI / ML": [
    {
      name: "NumPy",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Pandas",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "TensorFlow",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "OpenCV",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    },
    {
      name: "CNN",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    },
  ],
  Databases: [
    {
      name: "SQLite",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "MySQL",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git & GitHub",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "VS Code",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Salesforce",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
      name: "Qiskit",
      icon: "https://avatars.githubusercontent.com/u/22425016?s=200&v=4",
    },
  ],
};

const techStack = [
  "Python",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Django",
  "Tailwind",
  "Bootstrap",
  "REST APIs",
  "NumPy",
  "Pandas",
  "TensorFlow",
  "OpenCV",
  "CNN",
  "SQLite",
  "MySQL",
  "Git",
  "GitHub",
  "VS Code",
  "Salesforce",
  "Qiskit",
];

export default function Skills() {
  const [active, setActive] = useState("Languages");

  return (
    <div className="space-y-10">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Technical Expertise
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold">
            Skills &amp; <span className="text-purpleSoft">Technologies</span>
          </h2>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200/60 dark:border-white/10 dark:bg-white/5 bg-white/80 p-6 space-y-6">
        <div className="flex flex-wrap gap-3 text-base font-semibold">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 border transition-all ${
                active === cat
                  ? "bg-purpleMain text-white border-purpleMain shadow-glow"
                  : "border-slate-200/60 dark:border-white/15 text-slate-700 dark:text-slate-200 hover:border-purpleMain/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories[active].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br dark:from-white/5 dark:to-white/0 from-white/90 to-white/50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-purpleMain/60"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-12 w-12 object-contain"
              />
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400 mb-3 font-semibold">
            Complete Tech Stack
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200/70 dark:border-white/10 dark:bg-white/5 bg-white/70 px-4 py-1.5 transition hover:bg-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
