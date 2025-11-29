import { motion } from "framer-motion";
import { Sparkles, Code2, Brain } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-white/90 dark:bg-gradient-to-br dark:from-[#070b1d] dark:via-[#090b23] dark:to-[#2b0b3f] px-8 py-16 sm:px-12 border border-slate-200/60 dark:border-white/10 shadow-glow dark:text-white text-slate-900">
      <div className="pointer-events-none absolute -right-14 -top-16 h-64 w-64 rounded-full bg-purpleMain/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purpleSoft/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.3),_transparent_55%)]" />

      <div className="relative flex flex-col items-start gap-8 max-w-3xl mx-auto text-center lg:text-left">
        <div className="space-y-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/10 px-4 py-1 text-[11px] text-slate-800 dark:text-slate-100 self-center lg:self-start"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-purpleSoft">Sree Sahithi</span>, AI &amp; Data
            Science Enthusiast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed"
          >
            Transforming ideas into intelligent solutions through{" "}
            <span className="font-semibold">Machine Learning</span>,{" "}
            <span className="font-semibold">Web Development</span>, and{" "}
            <span className="font-semibold">Data Analytics</span>. I love
            crafting clean, modern interfaces backed by strong engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="rounded-full bg-purpleMain px-5 py-2 text-xs sm:text-sm font-semibold shadow-glow hover:bg-purpleSoft transition-all duration-300 text-white"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-5 py-2 text-xs sm:text-sm text-slate-700 dark:text-slate-100 hover:bg-white/10 transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap gap-3 text-[11px]"
          >
            {[
              { label: "AI/ML", icon: Brain },
              { label: "Web Dev", icon: Code2 },
              { label: "Data & Analytics", icon: Sparkles },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 text-slate-900 dark:bg-white/5 dark:text-white px-4 py-2 backdrop-blur"
              >
                <Icon className="w-4 h-4 text-purpleSoft" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="hidden sm:flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-slate-400 pt-4 justify-center lg:justify-start"
          >
            <span className="h-px w-10 bg-slate-300 dark:bg-white/30" />
            Scroll
            <span className="h-10 w-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center text-slate-600 dark:text-white/70">
              ↓
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
