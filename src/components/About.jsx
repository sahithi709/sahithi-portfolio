const highlights = [
  "AI & Data Science undergraduate with hands-on research exposure.",
  "Experienced in building ML-powered products with polished UI.",
  "Comfortable collaborating with cross-functional teams and stakeholders.",
];

export default function About() {
  return (
    <div className="space-y-8">
      <p className="inline-flex rounded-full border border-purpleMain/40 bg-purpleMain/10 px-4 py-1 text-[11px] text-purpleSoft">
        About Me
      </p>

      <div className="space-y-6">
        <h2 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white">
          Passionate About <span className="text-purpleSoft">Innovation</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
          I&apos;m a B.Tech student specializing in{" "}
          <span className="font-semibold">
            Artificial Intelligence and Data Science
          </span>{" "}
          at GMR Institute of Technology. I love transforming complex challenges
          into delightful, data-driven experiences across machine learning, web
          development, and analytics.
        </p>
        <div className="space-y-4 text-base text-slate-700 dark:text-slate-200">
          {highlights.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 dark:text-slate-200 text-slate-800 px-4 py-3 backdrop-blur"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-purpleSoft" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
