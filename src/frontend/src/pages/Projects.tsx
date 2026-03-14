import {
  ExternalLink,
  Palette,
  Share2,
  Smartphone,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

const projects = [
  {
    title: "Restaurant Website",
    desc: "Modern digital menus and integrated online booking systems designed for the local foodie scene.",
    emoji: "🍽️",
    color: "#872642",
  },
  {
    title: "Beauty Salon",
    desc: "A beautiful, elegant design paired with a seamless booking system to keep your chairs full.",
    emoji: "💄",
    color: "#a34060",
  },
];

const ocids = ["projects.restaurant.button", "projects.salon.button"];

const services = [
  {
    icon: <Palette size={24} />,
    title: "Website Design",
    desc: "Creating modern, beautiful, and easy-to-use websites to get your business noticed online.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Website Maintenance",
    desc: "Keeping your site fresh with content updates, adding new images, and small changes.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Social Media Integration",
    desc: "Connecting your site to social media pages like Facebook and Instagram.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile-Friendly Websites",
    desc: "Ensuring the site works perfectly and looks great on any device.",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="w-12 h-1 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#872642" }}
            />
            <h1
              className="font-display text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#872642" }}
            >
              Explore Our Project
            </h1>
            <p className="mt-3 text-gray-500 text-lg">
              Helping Local Shops Shine Online
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-raspberry-mist shadow-xs hover:shadow-raspberry transition-shadow duration-300"
                style={{ backgroundColor: "rgba(135,38,66,0.05)" }}
              >
                <div
                  className="h-48 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: `${p.color}14` }}
                >
                  {p.emoji}
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {p.title}
                  </h2>
                  <p className="text-charcoal-soft text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <button
                    type="button"
                    data-ocid={ocids[i]}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-white text-sm font-semibold transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#872642" }}
                  >
                    Live Site <ExternalLink size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div
              className="w-12 h-1 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#872642" }}
            />
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "#872642" }}
            >
              Our Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-5 p-6 rounded-xl border border-gray-100 bg-gray-50 hover:shadow-xs transition-shadow"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(135,38,66,0.1)",
                    color: "#872642",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-gray-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
