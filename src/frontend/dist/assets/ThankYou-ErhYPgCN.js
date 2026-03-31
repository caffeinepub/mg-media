import { c as createLucideIcon, j as jsxRuntimeExports, m as motion, L as Link } from "./index-CG6rFHoP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode);
function ThankYou() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-20 text-center max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8",
            style: { backgroundColor: "rgba(140,82,255,0.1)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 40, style: { color: "#8C52FF" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-display text-3xl md:text-4xl font-bold mb-4",
            style: { color: "#8C52FF" },
            children: "Thank You! Your vision is in safe hands."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-lg leading-relaxed mb-10", children: [
          "We've received your details and will reach out to you at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-800", children: "monikamkg0725@gmail.com" }),
          " ",
          "within 24 hours."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            "data-ocid": "thankyou.home.button",
            className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-white font-semibold text-sm hover:opacity-90 transition-all",
            style: { backgroundColor: "#8C52FF" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 }),
              " Back to Home"
            ]
          }
        )
      ]
    }
  ) }) });
}
export {
  ThankYou as default
};
