import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link } from "./index-CG6rFHoP.js";
import { A as ArrowRight } from "./arrow-right-BQb1ETc9.js";
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
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const approaches = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 24 }),
    title: "Client-First",
    desc: "Every decision centres around your goals and what's best for your business."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 24 }),
    title: "Detail Obsessed",
    desc: "Pixel-perfect designs that look amazing on every screen, every device."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { size: 24 }),
    title: "Fast Delivery",
    desc: "From brief to live site in days — no long waits, no unnecessary delays."
  }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white dark:bg-[#121212]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-16 md:px-16 md:py-20 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -24 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-1 rounded-full mb-6",
              style: { backgroundColor: "#8C52FF" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight", children: "Meet the Designer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg", children: "Hi, I am Monika Gupta, the designer behind MG Media. I am a passionate website designer focused on creating modern, beautiful, and easy-to-use websites for local businesses. My goal is to maximize your growth with a strong online presence, improving visitor engagement, and helping you reach your biggest business goal. Let me help you build a captivating brand online and achieve the digital success you deserve." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              "data-ocid": "about.contact.button",
              className: "inline-flex items-center justify-center sm:justify-start gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-all w-full sm:w-auto",
              style: { backgroundColor: "#8C52FF" },
              children: [
                "Work With Me ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gray-50 dark:bg-[#1a1a1a] py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 max-w-3xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.55 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Design That Works Hard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base", children: "Every project is treated as a unique story. From the first pixel to the final launch, I ensure your brand looks its absolute best — on every screen, every time." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white dark:bg-[#121212] py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
                style: { color: "#8C52FF" },
                children: "My Approach"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white", children: "How I Work" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: approaches.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.12 },
          className: "text-center p-7 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e] hover:shadow-md transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5",
                style: {
                  backgroundColor: "rgba(140,82,255,0.1)",
                  color: "#8C52FF"
                },
                children: a.icon
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-gray-900 dark:text-white mb-2", children: a.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400 text-sm leading-relaxed", children: a.desc })
          ]
        },
        a.title
      )) })
    ] }) })
  ] });
}
export {
  About as default
};
