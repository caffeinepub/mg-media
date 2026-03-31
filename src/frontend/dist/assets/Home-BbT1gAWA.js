import { c as createLucideIcon, u as useTheme, r as reactExports, j as jsxRuntimeExports, X, m as motion, L as Link } from "./index-CG6rFHoP.js";
import { A as ArrowRight } from "./arrow-right-BQb1ETc9.js";
import { S as Smartphone } from "./smartphone-CHS0fcBi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode$1);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const emptyForm = {
  name: "",
  phone: "",
  email: "",
  business: "",
  message: ""
};
const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "499",
    icon: "🚀",
    tag: "Perfect for New Businesses",
    pages: "3–4 Pages",
    description: "Get your online presence started",
    features: [
      { text: "Website Design", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true }
    ],
    highlighted: false
  },
  {
    id: "professional",
    name: "Professional",
    price: "999",
    icon: "⭐",
    tag: "Most Popular",
    pages: "5–6 Pages",
    description: "Best for growing businesses",
    features: [
      { text: "Website Design", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true },
      { text: "Enhanced SEO Optimization", included: true },
      { text: "AI Chatbox", included: true },
      { text: "Free Logo Design", included: true }
    ],
    highlighted: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "1599",
    icon: "👑",
    tag: "For Established Brands",
    pages: "7–8 Pages",
    description: "Complete digital solution",
    features: [
      { text: "Website Design", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true },
      { text: "Enhanced SEO Optimization", included: true },
      { text: "AI Chatbox", included: true },
      { text: "Professional Brand Logo Design", included: true },
      { text: "Google My Business Setup", included: true }
    ],
    highlighted: false
  }
];
const aosDelays = ["0", "100", "200"];
function PricingSection() {
  const { isDark } = useTheme();
  const [hoveredPlan, setHoveredPlan] = reactExports.useState("professional");
  const [selectedPlan, setSelectedPlan] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(emptyForm);
  const sectionBg = isDark ? "#121212" : "#ffffff";
  const headingColor = isDark ? "#f3f4f6" : "#0f172a";
  const subColor = isDark ? "#9ca3af" : "#64748b";
  const cardBg = isDark ? "#1e1e1e" : "#ffffff";
  const cardBorder = isDark ? "#333" : "#e5e7eb";
  const featureItemColor = isDark ? "#d1d5db" : "#374151";
  function closeModal() {
    setSelectedPlan(null);
    setForm(emptyForm);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedPlan) return;
    const subject = `New Website Enquiry - ${selectedPlan.name} Plan (₹${selectedPlan.price})`;
    const body = [
      `Plan: ${selectedPlan.name} — ₹${selectedPlan.price}/project`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Business Name: ${form.business}`,
      "",
      `Message:
${form.message}`
    ].join("\n");
    window.location.href = `mailto:monikamkg0725@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      id: "pricing-section",
      className: "py-20 px-4 transition-colors duration-300",
      style: { backgroundColor: sectionBg },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1 w-16 rounded-full",
            style: { background: "#8c52ff" }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center mb-16", "data-aos": "fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-sm font-bold px-4 py-1.5 rounded-full text-white",
              style: { backgroundColor: "#8c52ff" },
              children: "Digital Presence (No Custom Domain)"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-4xl md:text-5xl font-bold mb-6 leading-tight",
              style: { color: headingColor },
              children: "Best Website Design Services in Gorakhpur"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-3", style: { color: subColor }, children: "Helping local businesses in Gorakhpur grow with affordable, high-quality, social media integration & SEO ready website." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base",
              style: { color: isDark ? "#6b7280" : "#94a3b8" },
              children: "Build. Grow. Scale — packages designed for local businesses."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto mb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-6 items-center", children: plans.map((plan, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-aos": "fade-up",
            "data-aos-delay": aosDelays[i],
            className: `relative group transition-all duration-300 transform ${plan.highlighted ? "md:scale-105" : ""}`,
            onMouseEnter: () => setHoveredPlan(plan.id),
            onMouseLeave: () => setHoveredPlan(null),
            children: [
              plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  style: { background: "rgba(140,82,255,0.25)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative h-full rounded-3xl overflow-hidden transition-all duration-300",
                  style: plan.highlighted ? {
                    background: "#8c52ff",
                    color: "white",
                    border: "2px solid #8c52ff",
                    boxShadow: "0 20px 25px -5px rgba(140,82,255,0.3)"
                  } : {
                    background: cardBg,
                    border: `2px solid ${cardBorder}`,
                    color: featureItemColor
                  },
                  children: [
                    plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full border",
                        style: {
                          background: "rgba(255,255,255,0.2)",
                          borderColor: "rgba(255,255,255,0.3)",
                          color: "white"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold", children: plan.tag })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col h-full", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: plan.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-4xl font-bold mb-2", children: plan.name }),
                        !plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-semibold mb-3",
                            style: { color: "#8c52ff" },
                            children: plan.tag
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-base mb-6",
                            style: {
                              color: plan.highlighted ? "rgba(255,255,255,0.85)" : subColor
                            },
                            children: plan.description
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mb-6", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-bold", children: [
                            "₹",
                            plan.price
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "span",
                            {
                              className: "text-base",
                              style: {
                                color: plan.highlighted ? "rgba(255,255,255,0.7)" : subColor
                              },
                              children: "/project"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "inline-block px-6 py-3 rounded-xl text-sm font-bold mb-8",
                            style: plan.highlighted ? {
                              background: "rgba(255,255,255,0.2)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              color: "white"
                            } : {
                              background: "rgba(140,82,255,0.1)",
                              color: "#8c52ff"
                            },
                            children: plan.pages
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `pricing.${plan.id}.button`,
                          className: "w-full py-4 px-6 rounded-2xl font-bold mb-8 transition-all duration-300 transform hover:-translate-y-1",
                          style: plan.highlighted ? {
                            background: "#ffffff",
                            color: "#8c52ff",
                            boxShadow: "0 10px 25px -5px rgba(140,82,255,0.2)"
                          } : { background: "#8c52ff", color: "#ffffff" },
                          onClick: () => setSelectedPlan(plan),
                          children: "Get Started"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs font-bold uppercase tracking-wider mb-6",
                            style: {
                              color: plan.highlighted ? "rgba(255,255,255,0.7)" : "#6b7280"
                            },
                            children: "What's Included"
                          }
                        ),
                        plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-start gap-3",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  style: plan.highlighted ? { background: "rgba(255,255,255,0.3)" } : { background: "rgba(140,82,255,0.1)" },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Check,
                                    {
                                      className: "w-4 h-4",
                                      style: {
                                        color: plan.highlighted ? "white" : "#8c52ff"
                                      }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-sm",
                                  style: {
                                    color: plan.highlighted ? "white" : featureItemColor,
                                    fontWeight: "500"
                                  },
                                  children: feature.text
                                }
                              )
                            ]
                          },
                          feature.text
                        ))
                      ] })
                    ] })
                  ]
                }
              )
            ]
          },
          plan.id
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-3xl font-bold mb-12 text-center",
              style: { color: headingColor },
              "data-aos": "fade-up",
              children: "Every Plan is Built to Perform"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6", children: [
            {
              icon: "🎨",
              title: "Professional Design",
              desc: "Clean, modern layouts that convert"
            },
            {
              icon: "🤖",
              title: "AI Chatbox",
              desc: "24/7 customer support automation"
            },
            {
              icon: "📱",
              title: "Mobile Ready",
              desc: "Fully responsive on all devices"
            },
            {
              icon: "⚡",
              title: "Fast & Secure",
              desc: "Optimized performance guaranteed"
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-6 rounded-2xl border",
              "data-aos": "zoom-in",
              "data-aos-delay": String(i * 100),
              style: {
                background: isDark ? "rgba(140,82,255,0.08)" : "rgba(140,82,255,0.05)",
                borderColor: "rgba(140,82,255,0.3)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl mb-4", children: item.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h4",
                  {
                    className: "font-bold mb-2 text-sm",
                    style: { color: headingColor },
                    children: item.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", style: { color: subColor }, children: item.desc })
              ]
            },
            item.title
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-4xl mx-auto text-center rounded-3xl p-12 text-white",
            style: { background: "#8c52ff" },
            "data-aos": "fade-up",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Ready to Launch Your Website?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/90 mb-8", children: "Let's build something extraordinary together. Choose your plan and get started today!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "pricing.cta.button",
                  className: "bg-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                  style: { color: "#8c52ff" },
                  onClick: () => {
                    var _a;
                    (_a = document.getElementById("pricing-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  children: "Contact Us Now"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden", children: hoveredPlan }),
        selectedPlan && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "fixed inset-0 z-50 flex items-center justify-center px-4",
            "data-ocid": "pricing.modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "absolute inset-0 bg-black/50 cursor-default",
                  "aria-label": "Close modal",
                  onClick: closeModal
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-3xl max-w-lg w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto",
                  style: { backgroundColor: isDark ? "#1e1e1e" : "#ffffff" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        "data-ocid": "pricing.modal.close_button",
                        className: "absolute top-4 right-4 transition-colors",
                        style: { color: isDark ? "#9ca3af" : "#9ca3af" },
                        onClick: closeModal,
                        "aria-label": "Close modal",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: selectedPlan.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "h2",
                            {
                              className: "text-2xl font-bold",
                              style: { color: "#8c52ff" },
                              children: [
                                selectedPlan.name,
                                " Plan"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "text-sm font-semibold",
                              style: { color: "#8c52ff" },
                              children: [
                                "₹",
                                selectedPlan.price,
                                "/project"
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-2", style: { color: subColor }, children: "Fill in your details and we'll get back to you within 24 hours." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
                      [
                        {
                          id: "modal-name",
                          label: "Name *",
                          key: "name",
                          type: "text",
                          placeholder: "Your full name",
                          required: true
                        },
                        {
                          id: "modal-phone",
                          label: "Phone Number *",
                          key: "phone",
                          type: "tel",
                          placeholder: "Your phone number",
                          required: true
                        },
                        {
                          id: "modal-email",
                          label: "Email *",
                          key: "email",
                          type: "email",
                          placeholder: "your@email.com",
                          required: true
                        },
                        {
                          id: "modal-business",
                          label: "Business Name *",
                          key: "business",
                          type: "text",
                          placeholder: "Your business name",
                          required: true
                        }
                      ].map((field) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-xs font-semibold mb-1",
                            htmlFor: field.id,
                            style: { color: subColor },
                            children: field.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: field.id,
                            type: field.type,
                            required: field.required,
                            placeholder: field.placeholder,
                            "data-ocid": "pricing.modal.input",
                            className: "w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors",
                            style: {
                              border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
                              backgroundColor: isDark ? "#111" : "#fff",
                              color: isDark ? "#f3f4f6" : "#1f2937"
                            },
                            value: form[field.key],
                            onChange: (e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))
                          }
                        )
                      ] }, field.id)),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            className: "block text-xs font-semibold mb-1",
                            htmlFor: "modal-message",
                            style: { color: subColor },
                            children: "Message"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            id: "modal-message",
                            rows: 4,
                            placeholder: "Tell us about your project...",
                            "data-ocid": "pricing.modal.textarea",
                            className: "w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none",
                            style: {
                              border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
                              backgroundColor: isDark ? "#111" : "#fff",
                              color: isDark ? "#f3f4f6" : "#1f2937"
                            },
                            value: form.message,
                            onChange: (e) => setForm((f) => ({ ...f, message: e.target.value }))
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "submit",
                          "data-ocid": "pricing.modal.submit_button",
                          className: "w-full py-4 rounded-2xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg",
                          style: { background: "#8c52ff" },
                          children: "Send Enquiry"
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.13 }
  })
};
const features = [
  {
    num: "01",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 26 }),
    title: "Fast Loading",
    desc: "No one likes to wait. We keep it snappy — optimised images, lean code, instant load."
  },
  {
    num: "02",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 26 }),
    title: "Mobile First",
    desc: "Your site will look stunning on every screen, from a 4-inch phone to a 4K monitor."
  },
  {
    num: "03",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 26 }),
    title: "SEO Ready",
    desc: "Built so local customers can actually find you when they search nearby."
  }
];
const portfolioCards = [
  {
    title: "Restaurant Website",
    desc: "Modern digital menus and integrated online booking.",
    color: "#8C52FF",
    tag: "Food & Dining",
    img: "/assets/generated/restaurant-hero.dim_800x500.jpg",
    liveUrl: "https://funded-flex-fso.caffeine.xyz/#caffeineAdminToken=69eeb543d0838fa622176c17435394fb9d415dcb1cf2c461eaa6d83e29c05b28"
  },
  {
    title: "Beauty Salon",
    desc: "Elegant design with seamless booking system.",
    color: "#a87aff",
    tag: "Beauty & Wellness",
    img: "/assets/generated/salon-hero.dim_800x500.jpg",
    liveUrl: "https://glam-beauty-parlour-597.caffeine.xyz/#caffeineAdminToken=d06f2bb2b6b626b67872a02af0ed7d4f0dd52fd19eddf7962afdb46dd3e29c89"
  }
];
function Home() {
  const { isDark } = useTheme();
  const sectionBg = isDark ? "#121212" : "#ffffff";
  const featureSectionBg = isDark ? "#1a1a1a" : "#f5f0ff";
  const headingColor = isDark ? "#f3f4f6" : "#111827";
  const textColor = isDark ? "#9ca3af" : "#6b7280";
  const cardBg = isDark ? "#1e1e1e" : "#ffffff";
  function scrollToPricing() {
    var _a;
    (_a = document.getElementById("pricing-section")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden hero-grain",
        style: {
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, #a87aff 0%, #8C52FF 45%, #5a2eb5 100%)",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-display font-bold leading-none",
                  style: {
                    fontSize: "clamp(6rem, 28vw, 22rem)",
                    color: "rgba(255,255,255,0.04)",
                    letterSpacing: "-0.04em",
                    whiteSpace: "nowrap"
                  },
                  children: "MG MEDIA"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -top-32 -left-32 w-80 h-80 rounded-full pointer-events-none",
              style: { border: "1px solid rgba(255,255,255,0.06)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none",
              style: { border: "1px solid rgba(255,255,255,0.05)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-24 md:py-40 text-center max-w-4xl relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                custom: 0,
                variants: fadeUp,
                initial: "hidden",
                animate: "visible",
                className: "text-xs font-semibold tracking-[0.22em] uppercase mb-5 text-white/60",
                children: "Web Design Studio  ·  MG Media"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                custom: 1,
                variants: fadeUp,
                initial: "hidden",
                animate: "visible",
                className: "font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.08] text-white mb-7",
                style: { letterSpacing: "-0.02em" },
                children: [
                  "Crafting Clean,",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "em",
                    {
                      className: "not-italic",
                      style: { color: "rgba(255,255,255,0.55)" },
                      children: "Modern"
                    }
                  ),
                  " ",
                  "Websites for Businesses"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                custom: 2,
                variants: fadeUp,
                initial: "hidden",
                animate: "visible",
                className: "text-sm sm:text-base md:text-lg leading-relaxed mb-11 max-w-xl mx-auto",
                style: { color: "rgba(255,255,255,0.72)" },
                children: "Get your local shop online with a professional website that converts visitors into loyal customers."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                custom: 3,
                variants: fadeUp,
                initial: "hidden",
                animate: "visible",
                className: "flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: scrollToPricing,
                      "data-ocid": "hero.primary_button",
                      className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl w-full sm:w-auto",
                      style: {
                        backgroundColor: "#ffffff",
                        color: "#8C52FF",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
                      },
                      children: "Launch Your Website"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/projects",
                      "data-ocid": "hero.secondary_button",
                      className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-200 hover:bg-white/10 w-full sm:w-auto",
                      style: {
                        borderColor: "rgba(255,255,255,0.5)",
                        color: "rgba(255,255,255,0.9)"
                      },
                      children: [
                        "View Our Work ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 1440 64",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "none",
                  className: "w-full h-12 md:h-16",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Section divider" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        d: "M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z",
                        fill: isDark ? "#121212" : "#ffffff"
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { backgroundColor: sectionBg },
        className: "py-16 md:py-24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 sm:px-6 max-w-3xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-0.5 mx-auto mb-7",
                  style: { backgroundColor: "#8C52FF" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight",
                  style: { color: headingColor },
                  children: "Build. Grow. Scale."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-base sm:text-lg leading-relaxed",
                  style: { color: textColor },
                  children: "Most local businesses are invisible to the customers searching for them online. We change that. At MG Media, we don't just build websites; we create digital growth engines that turn clicks into loyal customers for your business."
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { backgroundColor: featureSectionBg },
        className: "py-16 md:py-24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "mb-12 md:mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
                    style: { color: "#8C52FF" },
                    children: "Why Choose Us"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold",
                    style: { color: headingColor },
                    children: [
                      "Built to perform.",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Designed to impress."
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              custom: i,
              variants: fadeUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className: "feature-card relative rounded-2xl p-7 sm:p-8 overflow-hidden",
              style: {
                backgroundColor: cardBg,
                boxShadow: "0 2px 12px rgba(140,82,255,0.06)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute top-4 right-5 font-display font-bold select-none pointer-events-none leading-none",
                    style: {
                      fontSize: "5rem",
                      color: "rgba(140,82,255,0.055)",
                      letterSpacing: "-0.04em"
                    },
                    "aria-hidden": "true",
                    children: f.num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", style: { color: "#8C52FF" }, children: f.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display text-xl font-bold mb-3",
                      style: { color: headingColor },
                      children: f.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm leading-relaxed",
                      style: { color: textColor },
                      children: f.desc
                    }
                  )
                ] })
              ]
            },
            f.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { backgroundColor: sectionBg },
        className: "py-16 md:py-24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "mb-12 md:mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs font-semibold tracking-[0.2em] uppercase mb-3",
                    style: { color: "#8C52FF" },
                    children: "Our Work"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-display text-2xl sm:text-3xl md:text-4xl font-bold",
                    style: { color: headingColor },
                    children: "Helping Local Shops Shine"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8", children: portfolioCards.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              custom: i,
              variants: fadeUp,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              className: "group rounded-2xl overflow-hidden",
              style: { boxShadow: "0 4px 24px rgba(140,82,255,0.09)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-52 sm:h-64 relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: card.img,
                      alt: card.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                      loading: "lazy",
                      decoding: "async"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute top-3 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.85)",
                        color: card.color
                      },
                      children: card.tag
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "p-5 sm:p-7 flex items-center justify-between gap-4",
                    style: { backgroundColor: cardBg },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "font-display text-lg font-bold mb-1 truncate",
                            style: { color: headingColor },
                            children: card.title
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm line-clamp-2",
                            style: { color: textColor },
                            children: card.desc
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: card.liveUrl,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "data-ocid": i === 0 ? "home.restaurant.link" : "home.salon.link",
                          className: "flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110",
                          style: { backgroundColor: `${card.color}20` },
                          "aria-label": `Visit ${card.title}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, style: { color: card.color } })
                        }
                      )
                    ]
                  }
                )
              ]
            },
            card.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/projects",
              "data-ocid": "portfolio.see_all.link",
              className: "inline-flex items-center gap-2 font-semibold text-sm border-b-2 pb-0.5 transition-all hover:gap-3",
              style: { borderColor: "#8C52FF", color: "#8C52FF" },
              children: [
                "See All Projects ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 15 })
              ]
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  Home as default
};
