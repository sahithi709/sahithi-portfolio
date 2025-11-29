import { motion } from "framer-motion";

export default function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="scroll-mt-32 py-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
