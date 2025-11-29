const certs = [
  {
    name: "Data Analytics Basics for Everyone",
    provider: "IBM",
    link: "https://drive.google.com/file/d/1TS5hXZvIutX4tRMUSio4goc0b5aiEllu/view?usp=sharing",
  },
  {
    name: "Database Management System",
    provider: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1qJ8lYaFmA1SV9rRFTOBNNBMD549esSbz/view?usp=sharing",
  },
  {
    name: "Introduction to Industry 4.0 and IIoT",
    provider: "NPTEL",
    link: "https://drive.google.com/file/d/1gnGHWP82KChuARoIC4DMDHBTLkKCdDDX/view?usp=sharing",
  },
  {
    name: "Prompt Engineering for ChatGPT",
    provider: "Coursera",
    link: "https://drive.google.com/file/d/1hCfpWChZrwrsBKRMC9qINCkg5-HjmOg_/view?usp=sharing",
  },
  {
    name: "Real-World Machine Learning",
    provider: "L&T EduTech",
    link: "https://drive.google.com/file/d/1g9DRwsrGFMjCwYfKWHH_2jYvb6SLhYiN/view?usp=sharing",
  },
  {
    name: "Deep Learning for Professionals",
    provider: "L&T EduTech",
    link: "https://drive.google.com/file/d/16JSwfobsZc8RaL3J_m5P7ED1swxIoYFI/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Certifications
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold">
          Continuous <span className="text-purpleSoft">Learning</span>
        </h2>
        <p className="text-base text-slate-300">
          Validated expertise through industry-recognized certifications.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card p-6 space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-purpleMain"
          >
            <span className="inline-flex rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-semibold text-emerald-300">
              Certified
            </span>

            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {c.name}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-300">
              {c.provider}
            </p>

            <p className="text-sm font-medium text-purpleSoft underline tracking-wide">
              View Credential ↗
            </p>
          </a>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-purpleMain/20 via-purpleSoft/10 to-transparent p-6 flex flex-wrap gap-8 justify-between">
        {[
          { value: "6+", label: "Certifications" },
          { value: "3", label: "Projects" },
          { value: "2", label: "Internships" },
        ].map((metric) => (
          <div key={metric.label}>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">
              {metric.value}
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
