import { BadgeCheck } from "lucide-react";

const experiences = [
  {
    label: "Internship",
    title: "Web Development Intern",
    org: "Hippo Cloud",
    location: "Visakhapatnam",
    period: "Jul 2025 – Oct 2025",
    logo:
      "https://tse4.mm.bing.net/th/id/OIP.-wdH18rl4oFTK2klVfqYWQHaDt?pid=Api&P=0&h=180",
    bullets: [
      "Built responsive, production-ready web interfaces using the MERN stack.",
      "Implemented interactive UI components with React.js and Bootstrap.",
      "Collaborated with cross-functional teams to improve usability and performance.",
    ],
    tags: [ "HTML" , "CSS" , "JavaScript", "Tailwind CSS", "SQL","React","Node.js", "Bootstrap", "REST APIs"],
  },
  {
    label: "Training Program",
    title: "Salesforce Developer – Agentblazer Champion",
    org: "SmartBridge",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    logo:
      "https://tse2.mm.bing.net/th/id/OIP._qkBPmJrngRfMBOR2nRDFwHaEK?pid=Api&P=0&h=180",
    bullets: [
      "Completed Salesforce Developer track via Trailhead and guided sessions.",
      "Configured org setup, object relationships, and process automation.",
      "Built Lightning Web Components (LWC) and practiced Apex basics.",
    ],
    tags: ["Salesforce", "Apex", "LWC", "Trailhead"],
  },
];

export default function Experience() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          Internships
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Internship <span className="text-purpleSoft">Journey</span>
        </h2>
        <p className="text-sm text-slate-300">
          Gaining real-world experience through internships and immersive
          training programs.
        </p>
      </div>

      <div className="relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purpleSoft/60 via-white/10 to-transparent" />
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <article
              key={exp.title}
              className="relative rounded-[2rem] border border-slate-200/60 dark:border-white/10 dark:bg-white/5 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <span className="absolute -left-[33px] top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purpleMain/25 text-xs font-semibold text-slate-900 dark:text-white">
                {idx + 1}
              </span>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-purpleMain/20 px-3 py-1 text-[10px] text-purpleSoft">
                    <BadgeCheck className="w-3 h-3" />
                    {exp.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    {exp.org} · {exp.location}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400">{exp.period}</span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={exp.logo}
                    alt={`${exp.org} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Tools: {exp.tags.join(", ")}
                </p>
              </div>

              <ul className="mt-3 list-disc list-inside text-base text-slate-700 dark:text-slate-200 space-y-1">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 text-[11px]">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 dark:bg-white/5 bg-white/70 px-3 py-1 transition-colors duration-200 hover:border-purpleMain/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
