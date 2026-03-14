import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Split hero */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        {/* Left — white */}
        <div className="bg-white flex flex-col justify-center px-10 md:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-12 h-1 rounded-full mb-6"
              style={{ backgroundColor: "#872642" }}
            />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet the Designer
            </h1>
            <p className="text-charcoal leading-relaxed text-lg max-w-lg">
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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md text-white font-semibold text-sm shadow-raspberry hover:opacity-90 transition-all"
                style={{ backgroundColor: "#872642" }}
              >
                Work With Me <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right — raspberry */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center px-12 py-20 relative overflow-hidden"
          style={{ backgroundColor: "#872642" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute top-1/3 right-8 w-32 h-32 rounded-full bg-white/5" />

          {/* Big MG initials */}
          <div className="relative z-10 text-center">
            <p
              className="font-display font-bold leading-none select-none"
              style={{
                fontSize: "clamp(6rem, 15vw, 10rem)",
                color: "rgba(255,255,255,0.15)",
              }}
            >
              MG
            </p>
            <p className="text-white/70 text-sm font-medium tracking-widest uppercase mt-2">
              Media
            </p>
            <div className="mt-6 w-16 h-0.5 bg-white/30 mx-auto" />
            <p className="text-white/60 text-sm mt-3 font-light">
              Web Design Studio
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values strip */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Design That Works Hard
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Every project is treated as a unique story. From the first pixel
              to the final launch, I ensure your brand looks its absolute best —
              on every screen, every time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
