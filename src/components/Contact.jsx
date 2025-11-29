import {
  Mail,
  Linkedin,
  Github,
  Trophy,
  ExternalLink,
} from "lucide-react";

import { useState } from "react";

const contactMethods = [
  {
    label: "Email",
    value: "sreesahithi1357@gmail.com",
    icon: Mail,
    href: "mailto:sreesahithi1357@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sree-sahithi-bokam-12a543285/",
  },
  {
    label: "GitHub",
    value: "View my repos",
    icon: Github,
    href: "https://github.com/sahithi709",
  },
  {
    label: "LeetCode",
    value: "Problem solving",
    icon: Trophy,
    href: "https://leetcode.com/u/B_Sree_Sahithi/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sreesahithi1357@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject:
              form.subject.trim() || `Portfolio Inquiry from ${form.name}`,
            message: form.message,
            _replyto: form.email,
            _autoresponse:
              "Thanks for reaching out to Sree Sahithi! Your message has been received and she will reply shortly.",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus("success");
      setFeedback("Message sent successfully!");
    } catch (err) {
      setStatus("error");
      setFeedback("Something went wrong. Please try again in a moment.");
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>
        <h2 className="text-2xl sm:text-4xl font-bold">
          Let&apos;s <span className="text-purpleSoft">Connect</span>
        </h2>
        <p className="text-base text-slate-300">
          Have a project idea, opportunity, or just want to say hi? I&apos;d love
          to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.6fr,1.4fr] gap-8">
        <form
          onSubmit={handleSubmit}
          className="glass-card p-6 space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-2xl text-base dark:bg-bgDark/80 bg-white border border-white/10 px-4 py-3 outline-none focus:border-purpleMain text-slate-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="rounded-2xl text-base dark:bg-bgDark/80 bg-white border border-white/10 px-4 py-3 outline-none focus:border-purpleMain text-slate-900 dark:text-white"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full rounded-2xl text-base dark:bg-bgDark/80 bg-white border border-white/10 px-4 py-3 outline-none focus:border-purpleMain text-slate-900 dark:text-white"
          />

          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full rounded-2xl text-base dark:bg-bgDark/80 bg-white border border-white/10 px-4 py-3 outline-none focus:border-purpleMain resize-none text-slate-900 dark:text-white"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-purpleMain px-8 py-3 text-base font-semibold shadow-glow hover:bg-purpleSoft transition disabled:opacity-60 disabled:pointer-events-none"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {feedback && (
            <p
              className={`text-lg font-bold ${
                status === "error"
                  ? "text-rose-400"
                  : "text-emerald-400"
              }`}
            >
              {feedback}
            </p>
          )}
        </form>

        <div className="space-y-5">
          <div className="rounded-3xl border border-slate-200/60 dark:border-white/10 dark:bg-white/5 bg-white/80 p-6 space-y-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              Open to Opportunities
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              I&apos;m looking for internships and collaborative projects in
              AI/ML, Web Development, and Data Science.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Visakhapatnam, Andhra Pradesh, India
            </p>
          </div>

          <div className="space-y-3 text-base">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-slate-200/60 dark:border-white/10 dark:bg-white/5 bg-white/80 p-4 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purpleMain/20 text-purpleSoft">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-base">
                        {method.label}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 dark:text-white/60" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
