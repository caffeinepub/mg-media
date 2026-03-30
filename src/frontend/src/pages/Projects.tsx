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
    img: "/assets/generated/restaurant-hero.dim_800x500.jpg",
    liveUrl:
      "https://funded-flex-fso.caffeine.xyz/#caffeineAdminToken=69eeb543d0838fa622176c17435394fb9d415dcb1cf2c461eaa6d83e29c05b28",
    color: "#8C52FF",
  },
  {
    title: "Beauty Salon",
    desc: "A beautiful, elegant design paired with a seamless booking system to keep your chairs full.",
    img: "/assets/generated/salon-hero.dim_800x500.jpg",
    liveUrl:
      "https://glam-beauty-parlour-597.caffeine.xyz/#caffeineAdminToken=d06f2bb2b6b626b67872a02af0ed7d4f0dd52fd19eddf7962afdb46dd3e29c89",
    color: "#a87aff",
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
      <section className="bg-white dark:bg-[#121212] py-16 md:py-20 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="w-12 h-1 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#8C52FF" }}
            />
            <h1
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "#8C52FF" }}
            >
              Explore Our Project
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              Helping Local Shops Shine Online
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-[#1a1a1a] py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border shadow-xs hover:shadow-md transition-shadow duration-300 bg-[rgba(140,82,255,0.05)] dark:bg-[#1e1e2e] border-[rgba(140,82,255,0.15)] dark:border-[rgba(140,82,255,0.3)]"
              >
                <div className="h-52 sm:h-56 overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5 sm:p-7">
                  <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {p.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={ocids[i]}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#8C52FF" }}
                  >
                    Live Site <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12"
          >
            <div
              className="w-12 h-1 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#8C52FF" }}
            />
            <h2
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: "#8C52FF" }}
            >
              Our Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] hover:shadow-xs transition-shadow"
              >
                <div
                  className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(140,82,255,0.1)",
                    color: "#8C52FF",
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-gray-900 dark:text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
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
