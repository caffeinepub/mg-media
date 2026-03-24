import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.13 },
  }),
};

const features = [
  {
    num: "01",
    icon: <Zap size={26} />,
    title: "Fast Loading",
    desc: "No one likes to wait. We keep it snappy — optimised images, lean code, instant load.",
  },
  {
    num: "02",
    icon: <Smartphone size={26} />,
    title: "Mobile First",
    desc: "Your site will look stunning on every screen, from a 4-inch phone to a 4K monitor.",
  },
  {
    num: "03",
    icon: <Search size={26} />,
    title: "SEO Ready",
    desc: "Built so local customers can actually find you when they search nearby.",
  },
];

const portfolioCards = [
  {
    title: "Restaurant Website",
    desc: "Modern digital menus and integrated online booking.",
    color: "#8C52FF",
    tag: "Food & Dining",
    img: "/assets/generated/restaurant-hero.dim_800x500.jpg",
    liveUrl:
      "https://funded-flex-fso.caffeine.xyz/#caffeineAdminToken=69eeb543d0838fa622176c17435394fb9d415dcb1cf2c461eaa6d83e29c05b28",
  },
  {
    title: "Beauty Salon",
    desc: "Elegant design with seamless booking system.",
    color: "#a87aff",
    tag: "Beauty & Wellness",
    img: "/assets/generated/salon-hero.dim_800x500.jpg",
    liveUrl:
      "https://glam-beauty-parlour-597.caffeine.xyz/#caffeineAdminToken=d06f2bb2b6b626b67872a02af0ed7d4f0dd52fd19eddf7962afdb46dd3e29c89",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden hero-grain"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #a87aff 0%, #8C52FF 45%, #5a2eb5 100%)",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Ghost typographic watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(10rem, 28vw, 22rem)",
              color: "rgba(255,255,255,0.04)",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
            }}
          >
            MG MEDIA
          </span>
        </div>

        {/* Decorative corner rings */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.02)" }}
        />

        <div className="container mx-auto px-6 py-28 md:py-40 text-center max-w-4xl relative z-10">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold tracking-[0.22em] uppercase mb-5 text-white/60"
          >
            Web Design Studio &nbsp;·&nbsp; MG Media
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-[3.75rem] lg:text-7xl font-bold leading-[1.08] text-white mb-7"
            style={{ letterSpacing: "-0.02em" }}
          >
            Crafting Clean,{" "}
            <em
              className="not-italic"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Modern
            </em>{" "}
            Websites for Businesses
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg leading-relaxed mb-11 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Get your local shop online with a professional website that converts
            visitors into loyal customers.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              data-ocid="hero.primary_button"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                backgroundColor: "#ffffff",
                color: "#8C52FF",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              Launch Your Website
            </Link>
            <Link
              to="/projects"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/10"
              style={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              View Our Work <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* White scallop exit at bottom */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 64"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16"
          >
            <title>Section divider</title>
            <path
              d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ── Build. Grow. Scale. ──────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-10 h-0.5 mx-auto mb-7"
              style={{ backgroundColor: "#8C52FF" }}
            />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Build. Grow. Scale.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Most local businesses are invisible to the customers searching for
              them online. We change that. At MG Media, we don't just build
              websites; we create digital growth engines that turn clicks into
              loyal customers for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f0ff" }} className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8C52FF" }}
            >
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              Built to perform.
              <br />
              Designed to impress.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="feature-card relative bg-white rounded-2xl p-8 overflow-hidden"
                style={{ boxShadow: "0 2px 12px rgba(140,82,255,0.06)" }}
              >
                <span
                  className="absolute top-4 right-5 font-display font-bold select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "5rem",
                    color: "rgba(140,82,255,0.055)",
                    letterSpacing: "-0.04em",
                  }}
                  aria-hidden="true"
                >
                  {f.num}
                </span>

                <div className="relative z-10">
                  <div className="mb-5" style={{ color: "#8C52FF" }}>
                    {f.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mini Portfolio ───────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8C52FF" }}
            >
              Our Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              Helping Local Shops Shine
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 4px 24px rgba(140,82,255,0.09)" }}
              >
                {/* Thumbnail */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.85)",
                      color: card.color,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <div className="bg-white p-7 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{card.desc}</p>
                  </div>
                  <a
                    href={card.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={
                      i === 0 ? "home.restaurant.link" : "home.salon.link"
                    }
                    className="flex-shrink-0 ml-4"
                    aria-label={`Visit ${card.title}`}
                  >
                    <ArrowRight size={18} style={{ color: card.color }} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/projects"
              data-ocid="portfolio.see_all.link"
              className="inline-flex items-center gap-2 font-semibold text-sm border-b-2 pb-0.5 transition-all hover:gap-3"
              style={{ borderColor: "#8C52FF", color: "#8C52FF" }}
            >
              See All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
