import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.13 },
  }),
};

const features = [
  {
    num: "01",
    icon: <Zap size={24} />,
    title: "Fast Loading",
    desc: "No one likes to wait. We keep it snappy — optimised images, lean code, instant load.",
  },
  {
    num: "02",
    icon: <Smartphone size={24} />,
    title: "Mobile First",
    desc: "Your site will look stunning on every screen, from a 4-inch phone to a 4K monitor.",
  },
  {
    num: "03",
    icon: <Search size={24} />,
    title: "SEO Ready",
    desc: "Built so local customers can actually find you when they search nearby.",
  },
];

const portfolioCards = [
  {
    title: "Restaurant Website",
    desc: "Modern digital menus and integrated online booking.",
    tag: "Food & Dining",
    image: "/assets/generated/restaurant-website.dim_800x500.jpg",
  },
  {
    title: "Beauty Salon",
    desc: "Elegant design with seamless booking system.",
    tag: "Beauty & Wellness",
    image: "/assets/generated/beauty-salon.dim_800x500.jpg",
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
            "radial-gradient(ellipse 120% 90% at 60% -10%, #c0405e 0%, #872642 30%, #5e1a2e 65%, #2d0a15 100%)",
          minHeight: "94vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Radial spotlight glow */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "70vh",
            background:
              "radial-gradient(ellipse at center, rgba(220,80,110,0.28) 0%, rgba(135,38,66,0.12) 45%, transparent 70%)",
            zIndex: 1,
          }}
        />

        {/* Diagonal geometric band overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "55%",
              height: "140%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              transform: "skewX(-12deg)",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "5%",
              width: "30%",
              height: "140%",
              background: "rgba(255,255,255,0.02)",
              transform: "skewX(-12deg)",
              borderLeft: "1px solid rgba(255,255,255,0.04)",
            }}
          />
        </div>

        {/* Ghost typographic watermark */}
        <div
          className="absolute inset-0 flex items-end justify-start pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        >
          <span
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(8rem, 26vw, 20rem)",
              color: "rgba(255,255,255,0.035)",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              marginBottom: "-0.1em",
              marginLeft: "-0.05em",
            }}
          >
            MG
          </span>
        </div>

        {/* Decorative ring accents */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-52 h-52 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.04)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        />

        <div
          className="container mx-auto px-6 py-32 md:py-44 text-center max-w-4xl relative"
          style={{ zIndex: 10 }}
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold tracking-[0.24em] uppercase mb-6 inline-flex items-center gap-2"
            style={{ color: "rgba(255,200,210,0.85)" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: "rgba(255,200,210,0.6)",
                verticalAlign: "middle",
              }}
            />
            Web Design Studio · Gorakhpur, India
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: "rgba(255,200,210,0.6)",
                verticalAlign: "middle",
              }}
            />
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06] text-white mb-8"
            style={{ letterSpacing: "-0.025em" }}
          >
            Crafting{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffd4de 0%, #ffaec0 50%, #ff7da0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clean, Modern
            </span>
            <br />
            Websites for Businesses
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,220,228,0.78)" }}
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
              className="cta-pulse inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-sm tracking-wide text-white transition-all duration-200 hover:scale-[1.04]"
              style={{
                background:
                  "linear-gradient(135deg, #b03460 0%, #872642 50%, #6e2038 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Launch Your Website
            </Link>
            <Link
              to="/projects"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white/12 hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              View Our Work <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Hero → Local Impact wave (fills into #3d0e1d) */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
          aria-hidden="true"
          style={{ zIndex: 10 }}
        >
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
            style={{ height: "clamp(40px, 6vw, 80px)", display: "block" }}
          >
            <title>Section divider</title>
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z"
              fill="#3d0e1d"
            />
          </svg>
        </div>
      </section>

      {/* ── Local Impact ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28"
        style={{ background: "#3d0e1d" }}
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(200,60,90,0.15) 0%, transparent 65%)",
          }}
        />
        {/* Dot pattern overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,200,210,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className="container mx-auto px-6 max-w-4xl relative"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col md:flex-row gap-10 md:gap-16 items-center"
          >
            {/* Left: stat/accent block */}
            <div
              className="flex-shrink-0 rounded-2xl text-white text-center p-10 w-full md:w-56"
              style={{
                background: "linear-gradient(145deg, #a83058 0%, #6e2038 100%)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="font-display font-bold leading-none mb-2"
                style={{ fontSize: "3.5rem" }}
              >
                100%
              </p>
              <p className="text-sm font-semibold tracking-wider uppercase opacity-80">
                Local Focus
              </p>
              <div
                className="mt-4 mx-auto"
                style={{
                  width: 32,
                  height: 2,
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: 999,
                }}
              />
              <p
                className="mt-3 text-xs leading-relaxed"
                style={{ color: "rgba(255,200,210,0.85)" }}
              >
                Built for businesses like yours
              </p>
            </div>

            {/* Right: text */}
            <div>
              <div
                className="w-10 h-0.5 mb-6"
                style={{ backgroundColor: "rgba(255,150,175,0.6)" }}
              />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Your Business Deserves{" "}
                <span style={{ color: "#ff9ab8" }}>a Digital Home.</span>
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgba(255,220,228,0.82)" }}
              >
                In Gorakhpur and beyond, your customers are searching for you on
                their phones right now. If you aren't online, you're invisible.
                We bridge that gap — building websites that look like a million
                bucks and work hard for your local business.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Local Impact → Feature Grid wave */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
            style={{ height: "clamp(30px, 5vw, 60px)", display: "block" }}
          >
            <title>Section divider</title>
            <path
              d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
              fill="#5e1a2e"
            />
          </svg>
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #5e1a2e 0%, #872642 55%, #6e2038 100%)",
        }}
      >
        {/* Decorative grid texture overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 60px)",
          }}
        />
        {/* Radial glow center */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,60,90,0.22) 0%, transparent 70%)",
          }}
        />

        <div
          className="container mx-auto px-6 max-w-5xl relative"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-14"
          >
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "rgba(255,200,210,0.75)" }}
            >
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Built to perform.
              <br />
              <span style={{ color: "rgba(255,190,205,0.9)" }}>
                Designed to impress.
              </span>
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
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}
              >
                <span
                  className="absolute top-4 right-5 font-display font-bold select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "5rem",
                    color: "rgba(135,38,66,0.06)",
                    letterSpacing: "-0.04em",
                  }}
                  aria-hidden="true"
                >
                  {f.num}
                </span>

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                    style={{
                      background:
                        "linear-gradient(135deg, #fce8ed 0%, #ffd0da 100%)",
                      color: "#872642",
                      boxShadow: "0 4px 16px rgba(135,38,66,0.18)",
                    }}
                  >
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

        {/* Feature Grid → Portfolio wave (fills into #2d0a15) */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 70"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full"
            style={{ height: "clamp(35px, 5vw, 70px)", display: "block" }}
          >
            <title>Section divider</title>
            <path
              d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z"
              fill="#2d0a15"
            />
          </svg>
        </div>
      </section>

      {/* ── Mini Portfolio ───────────────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "#2d0a15" }}
      >
        {/* Atmospheric glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(135,38,66,0.25) 0%, transparent 65%)",
          }}
        />

        <div
          className="container mx-auto px-6 max-w-5xl relative"
          style={{ zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "rgba(255,160,185,0.85)" }}
            >
              Our Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Helping Local Shops{" "}
              <span style={{ color: "#ff9ab8" }}>Shine</span>
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
                className="portfolio-card group rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
              >
                {/* Real photo thumbnail */}
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark overlay for contrast */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.28) 100%)",
                    }}
                  />
                  {/* Glassmorphism tag badge */}
                  <span
                    className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(45,10,21,0.65)",
                      color: "rgba(255,210,225,0.95)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
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
                  <div
                    className="flex-shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #872642 0%, #5e1a2e 100%)",
                    }}
                  >
                    <ArrowRight size={15} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/projects"
              data-ocid="portfolio.see_all.link"
              className="inline-flex items-center gap-2 font-bold text-sm tracking-wide text-white px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(135,38,66,0.4)]"
              style={{
                background:
                  "linear-gradient(135deg, #b03460 0%, #872642 60%, #5e1a2e 100%)",
                boxShadow: "0 6px 28px rgba(135,38,66,0.35)",
              }}
            >
              See All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
