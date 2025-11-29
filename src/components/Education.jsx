import educationJourney from "../data/education";

export default function Education() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          Education
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
          Education <span className="text-purpleSoft">Journey</span>
        </h2>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purpleSoft/50 via-white/10 to-transparent" />
        <div className="space-y-4">
          {educationJourney.map((edu, idx) => (
            <article
              key={edu.name}
            className="relative rounded-3xl border border-slate-200/60 dark:border-white/10 dark:bg-white/5 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span className="absolute -left-[34px] top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purpleMain/30 text-base font-semibold text-purpleSoft">
                {idx + 1}
              </span>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={edu.image}
                    alt={edu.name}
                    className="h-14 w-14 rounded-2xl object-cover border border-white/10"
                  />
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">
                      {edu.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {edu.role}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{edu.period}</p>
                  <span className="inline-flex mt-2 rounded-full bg-purpleMain/15 px-3 py-1 text-xs text-purpleSoft">
                    {edu.highlight}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
