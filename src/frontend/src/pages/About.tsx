import { Link } from "@tanstack/react-router";
import { ArrowRight, Rocket, Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";

const approaches = [
  {
    icon: <Target size={24} />,
    title: "Client-First",
    desc: "Every decision centres around your goals and what's best for your business.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Detail Obsessed",
    desc: "Pixel-perfect designs that look amazing on every screen, every device.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Fast Delivery",
    desc: "From brief to live site in days — no long waits, no unnecessary delays.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-white dark:bg-[#121212]">
        <div className="container mx-auto px-6 py-16 md:px-16 md:py-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ backgroundColor: "#8C52FF" }}
            />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Meet the Designer
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
              Hi, I am Monika Gupta, the designer behind MG Media. I am a
              passionate website designer focused on creating modern, beautiful,
              and easy-to-use websites for local businesses. My goal is to
              maximize your growth with a strong online presence, improving
              visitor engagement, and helping you reach your biggest business
              goal. Let me help you build a captivating brand online and achieve
              the digital success you deserve.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                data-ocid="about.contact.button"
                className="inline-flex items-center justify-center sm:justify-start gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-all w-full sm:w-auto"
                style={{ backgroundColor: "#8C52FF" }}
              >
                Work With Me <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-gray-50 dark:bg-[#1a1a1a] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Design That Works Hard
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              Every project is treated as a unique story. From the first pixel
              to the final launch, I ensure your brand looks its absolute best —
              on every screen, every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach strip */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8C52FF" }}
            >
              My Approach
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How I Work
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {approaches.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center p-7 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] hover:shadow-md transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    backgroundColor: "rgba(140,82,255,0.1)",
                    color: "#8C52FF",
                  }}
                >
                  {a.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {a.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
