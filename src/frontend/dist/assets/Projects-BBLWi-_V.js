import { c as createLucideIcon, j as jsxRuntimeExports, m as motion } from "./index-CG6rFHoP.js";
import { S as Smartphone } from "./smartphone-CHS0fcBi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
];
const Palette = createLucideIcon("palette", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode);
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 }
  })
};
const projects = [
  {
    title: "Restaurant Website",
    desc: "Modern digital menus and integrated online booking systems designed for the local foodie scene.",
    img: "/assets/generated/restaurant-hero.dim_800x500.jpg",
    liveUrl: "https://funded-flex-fso.caffeine.xyz/#caffeineAdminToken=69eeb543d0838fa622176c17435394fb9d415dcb1cf2c461eaa6d83e29c05b28",
    color: "#8C52FF"
  },
  {
    title: "Beauty Salon",
    desc: "A beautiful, elegant design paired with a seamless booking system to keep your chairs full.",
    img: "/assets/generated/salon-hero.dim_800x500.jpg",
    liveUrl: "https://glam-beauty-parlour-597.caffeine.xyz/#caffeineAdminToken=d06f2bb2b6b626b67872a02af0ed7d4f0dd52fd19eddf7962afdb46dd3e29c89",
    color: "#a87aff"
  }
];
const ocids = ["projects.restaurant.button", "projects.salon.button"];
const services = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 24 }),
    title: "Website Design",
    desc: "Creating modern, beautiful, and easy-to-use websites to get your business noticed online."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 24 }),
    title: "Website Maintenance",
    desc: "Keeping your site fresh with content updates, adding new images, and small changes."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 24 }),
    title: "Social Media Integration",
    desc: "Connecting your site to social media pages like Facebook and Instagram."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 24 }),
    title: "Mobile-Friendly Websites",
    desc: "Ensuring the site works perfectly and looks great on any device."
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white dark:bg-[#121212] py-16 md:py-20 border-b border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-1 rounded-full mx-auto mb-4",
              style: { backgroundColor: "#8C52FF" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
              style: { color: "#8C52FF" },
              children: "Explore Our Project"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gray-500 dark:text-gray-400 text-base sm:text-lg", children: "Helping Local Shops Shine Online" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gray-50 dark:bg-[#1a1a1a] py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        custom: i,
        variants: fadeUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        className: "rounded-xl overflow-hidden border shadow-xs hover:shadow-md transition-shadow duration-300 bg-[rgba(140,82,255,0.05)] dark:bg-[#1e1e2e] border-[rgba(140,82,255,0.15)] dark:border-[rgba(140,82,255,0.3)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-52 sm:h-56 overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: p.title,
              className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500",
              loading: "lazy",
              decoding: "async"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-gray-900 dark:text-white mb-2", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-6", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: p.liveUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": ocids[i],
                className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-85",
                style: { backgroundColor: "#8C52FF" },
                children: [
                  "Live Site ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14 })
                ]
              }
            )
          ] })
        ]
      },
      p.title
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white dark:bg-[#121212] py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-10 sm:mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-1 rounded-full mx-auto mb-4",
                style: { backgroundColor: "#8C52FF" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold",
                style: { color: "#8C52FF" },
                children: "Our Services"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          custom: i,
          variants: fadeUp,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] hover:shadow-xs transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center",
                style: {
                  backgroundColor: "rgba(140,82,255,0.1)",
                  color: "#8C52FF"
                },
                children: s.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-gray-900 dark:text-white mb-1", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: s.desc })
            ] })
          ]
        },
        s.title
      )) })
    ] }) })
  ] });
}
export {
  Projects as default
};
