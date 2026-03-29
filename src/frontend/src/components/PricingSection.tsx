import { Check, X, Zap } from "lucide-react";
import { useState } from "react";

type Plan = {
  id: string;
  name: string;
  price: string;
  icon: string;
  tag: string;
  pages: string;
  description: string;
  features: { text: string; included: boolean }[];
  highlighted: boolean;
};

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  business: "",
  message: "",
};

// ── Per-plan design tokens ──────────────────────────────────────────────────
const starterStyle = {
  card: {
    background: "#f8f6ff",
    border: "2px solid #e4daff",
    color: "#111827",
    boxShadow: "0 4px 20px rgba(140,82,255,0.06)",
  },
  topBorder: "linear-gradient(90deg,#a78bfa 0%,#8c52ff 50%,#c4b5fd 100%)",
  iconBg: { background: "rgba(140,82,255,0.1)" },
  tagBg: { background: "rgba(140,82,255,0.1)", color: "#8c52ff" },
  pagesBadge: {
    background: "rgba(140,82,255,0.08)",
    color: "#8c52ff",
    border: "1px solid rgba(140,82,255,0.2)",
  },
  price: "#0f172a",
  priceUnit: "#64748b",
  desc: "#4b5563",
  label: "#6b7280",
  featureText: "#374151",
  mutedText: "#9ca3af",
  checkBg: { background: "rgba(140,82,255,0.1)" },
  checkColor: "#8c52ff",
  xBg: { background: "#f3f4f6" },
  xColor: "#d1d5db",
  btn: { background: "#ffffff", color: "#8c52ff", border: "2px solid #8c52ff" },
  hoverGlow: "rgba(140,82,255,0.15)",
  cornerDecor: true,
};

const professionalStyle = {
  card: {
    background: "#8c52ff",
    border: "2px solid #8c52ff",
    color: "white",
    boxShadow: "0 25px 50px -12px rgba(140,82,255,0.45)",
  },
  sheen: true,
  iconBg: { background: "rgba(255,255,255,0.2)" },
  tagBg: {
    background: "rgba(255,255,255,0.18)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  pagesBadge: {
    background: "rgba(255,255,255,0.18)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  price: "#ffffff",
  priceUnit: "rgba(255,255,255,0.7)",
  desc: "rgba(255,255,255,0.85)",
  label: "rgba(255,255,255,0.6)",
  featureText: "#ffffff",
  mutedText: "rgba(255,255,255,0.45)",
  checkBg: { background: "rgba(255,255,255,0.25)" },
  checkColor: "white",
  xBg: { background: "rgba(255,255,255,0.1)" },
  xColor: "rgba(255,255,255,0.35)",
  btn: {
    background: "#ffffff",
    color: "#8c52ff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  hoverGlow: "rgba(140,82,255,0.3)",
};

const premiumStyle = {
  card: {
    background: "#0f0a1e",
    border: "2px solid #2d2250",
    color: "white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  iconBg: { background: "rgba(245,200,66,0.15)" },
  tagBg: {
    background: "rgba(245,200,66,0.12)",
    color: "#f5c842",
    border: "1px solid rgba(245,200,66,0.3)",
  },
  pagesBadge: {
    background: "rgba(245,200,66,0.1)",
    color: "#f5c842",
    border: "1px solid rgba(245,200,66,0.25)",
  },
  price: "#f5c842",
  priceUnit: "rgba(245,200,66,0.7)",
  desc: "rgba(255,255,255,0.7)",
  label: "rgba(255,255,255,0.4)",
  featureText: "rgba(255,255,255,0.9)",
  mutedText: "rgba(255,255,255,0.3)",
  checkBg: { background: "rgba(245,200,66,0.15)" },
  checkColor: "#f5c842",
  xBg: { background: "rgba(255,255,255,0.05)" },
  xColor: "rgba(255,255,255,0.2)",
  btn: { background: "#f5c842", color: "#0f0a1e" },
  hoverGlow: "rgba(245,200,66,0.2)",
  goldGlow: true,
};

type PlanStyle =
  | typeof starterStyle
  | typeof professionalStyle
  | typeof premiumStyle;

function getPlanStyle(id: string): PlanStyle {
  if (id === "professional") return professionalStyle;
  if (id === "premium") return premiumStyle;
  return starterStyle;
}

export default function PricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>("professional");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [form, setForm] = useState(emptyForm);

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      price: "499",
      icon: "🚀",
      tag: "Perfect for New Businesses",
      pages: "3-5 Pages",
      description: "Get your online presence started",
      features: [
        { text: "Website Design & Development", included: true },
        { text: "Mobile Responsive Design", included: true },
        { text: "Basic SEO Setup", included: true },
        { text: "Basic Social Media Integration", included: true },
        { text: "3 Months Free Support", included: true },
        { text: "AI Chatbox Integration", included: false },
        { text: "Website Maintenance & Updates", included: false },
      ],
      highlighted: false,
    },
    {
      id: "professional",
      name: "Professional",
      price: "999",
      icon: "⭐",
      tag: "Most Popular",
      pages: "5-7 Pages",
      description: "Best for growing businesses",
      features: [
        { text: "Website Design & Development", included: true },
        { text: "Advanced AI Chatbox", included: true },
        { text: "Fast Loading in Mobile", included: true },
        { text: "Enhanced SEO Optimization", included: true },
        { text: "6 Months Free Support", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Website Maintenance & Updates", included: true },
        { text: "Free Logo Design", included: true },
      ],
      highlighted: true,
    },
    {
      id: "premium",
      name: "Premium",
      price: "1499",
      icon: "👑",
      tag: "For Established Brands",
      pages: "Unlimited Pages",
      description: "Complete digital solution",
      features: [
        { text: "Website Design & Development", included: true },
        { text: "Full AI Trained Chatbox", included: true },
        {
          text: "Fast Loading (Mobile, Laptop, Tablet, Computer)",
          included: true,
        },
        { text: "Advanced SEO & Analytics", included: true },
        { text: "1 Year Free Support", included: true },
        { text: "Social Media Integration", included: true },
        { text: "Website Maintenance & Updates", included: true },
        { text: "Professional Brand Logo Design", included: true },
        { text: "Google My Business Setup", included: true },
      ],
      highlighted: false,
    },
  ];

  function closeModal() {
    setSelectedPlan(null);
    setForm(emptyForm);
  }

  function handleSubmit(e: React.FormEvent) {
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
      `Message:\n${form.message}`,
    ].join("\n");

    window.location.href = `mailto:monikamkg0725@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  }

  return (
    <div id="pricing-section" className="bg-white py-20 px-4">
      {/* Decorative top accent line */}
      <div className="flex justify-center mb-6">
        <div
          className="h-1 w-16 rounded-full"
          style={{ background: "#8c52ff" }}
        />
      </div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-600 mb-3">
          Website Design + Social Media Integration + SEO in every plan
        </p>
        <p className="text-lg text-slate-500">
          Build. Grow. Scale — packages designed for local businesses.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-center">
          {plans.map((plan) => {
            const s = getPlanStyle(plan.id);
            const isPro = plan.id === "professional";
            const isPremium = plan.id === "premium";
            const isStarter = plan.id === "starter";

            return (
              <div
                key={plan.id}
                className={`relative group transition-all duration-300 transform ${
                  isPro ? "md:scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Hover glow layer */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: s.hoverGlow }}
                />

                {/* Card */}
                <div
                  className="relative h-full rounded-3xl overflow-hidden transition-all duration-300 group-hover:-translate-y-2"
                  style={s.card}
                >
                  {/* ── Starter: gradient top border + diagonal bg decor ── */}
                  {isStarter && (
                    <>
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                        style={{
                          background: (starterStyle as typeof starterStyle)
                            .topBorder,
                        }}
                      />
                      {/* soft radial bg decor corner */}
                      <div
                        className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(140,82,255,0.07) 0%, transparent 70%)",
                        }}
                      />
                    </>
                  )}

                  {/* ── Professional: glossy sheen overlay ── */}
                  {isPro && (
                    <>
                      <div
                        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle at top left, rgba(255,255,255,0.18) 0%, transparent 65%)",
                        }}
                      />
                      {/* large faint circle bottom-right */}
                      <div
                        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                        style={{ border: "2px solid rgba(255,255,255,0.1)" }}
                      />
                      <div
                        className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
                        style={{ border: "2px solid rgba(255,255,255,0.07)" }}
                      />
                    </>
                  )}

                  {/* ── Premium: faint gold glow corner ── */}
                  {isPremium && (
                    <div
                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 70%)",
                      }}
                    />
                  )}

                  {/* ── Professional badge ── */}
                  {isPro && (
                    <div
                      className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full z-10"
                      style={
                        (professionalStyle as typeof professionalStyle).tagBg
                      }
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{plan.tag}</span>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                      style={s.iconBg}
                    >
                      {plan.icon}
                    </div>

                    {/* Name */}
                    <h3
                      className="text-3xl font-bold mb-1"
                      style={{
                        color: isPremium
                          ? "#f5c842"
                          : isPro
                            ? "white"
                            : "#0f172a",
                      }}
                    >
                      {plan.name}
                    </h3>

                    {/* Tag pill (non-pro plans) */}
                    {!isPro && (
                      <span
                        className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3"
                        style={s.tagBg}
                      >
                        {plan.tag}
                      </span>
                    )}

                    {/* Description */}
                    <p className="text-sm mb-5" style={{ color: s.desc }}>
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mb-4">
                      <span
                        className="text-5xl font-bold"
                        style={{ color: s.price }}
                      >
                        ₹{plan.price}
                      </span>
                      <span className="text-sm" style={{ color: s.priceUnit }}>
                        /project
                      </span>
                    </div>

                    {/* Pages badge */}
                    <div
                      className="inline-block self-start px-4 py-2 rounded-xl text-xs font-bold mb-7"
                      style={s.pagesBadge}
                    >
                      {plan.pages}
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      data-ocid={`pricing.${plan.id}.button`}
                      className="w-full py-4 px-6 rounded-2xl font-bold mb-7 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                      style={s.btn}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      Get Started
                    </button>

                    {/* Features list */}
                    <div className="space-y-3 flex-1">
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ color: s.label }}
                      >
                        What&apos;s Included
                      </p>

                      {plan.features.map((feature) => (
                        <div
                          key={feature.text}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={s.checkBg}
                            >
                              <Check
                                className="w-3 h-3"
                                style={{ color: s.checkColor }}
                              />
                            </div>
                          ) : (
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={s.xBg}
                            >
                              <X
                                className="w-3 h-3"
                                style={{ color: s.xColor }}
                              />
                            </div>
                          )}
                          <span
                            className="text-sm leading-snug"
                            style={
                              feature.included
                                ? { color: s.featureText, fontWeight: 500 }
                                : {
                                    color: s.mutedText,
                                    textDecoration: "line-through",
                                  }
                            }
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Highlight Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Every Plan is Built to Perform
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: "🎨",
              title: "Professional Design",
              desc: "Clean, modern layouts that convert",
            },
            {
              icon: "🤖",
              title: "AI Chatbox",
              desc: "24/7 customer support automation",
            },
            {
              icon: "📱",
              title: "Mobile Ready",
              desc: "Fully responsive on all devices",
            },
            {
              icon: "⚡",
              title: "Fast & Secure",
              desc: "Optimized performance guaranteed",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border"
              style={{
                background: "rgba(140, 82, 255, 0.05)",
                borderColor: "rgba(140, 82, 255, 0.3)",
              }}
            >
              <p className="text-4xl mb-4">{item.icon}</p>
              <h4 className="font-bold text-slate-900 mb-2 text-sm">
                {item.title}
              </h4>
              <p className="text-slate-600 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Launch Your Website?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Let&apos;s build something extraordinary together. Choose your plan
          and get started today!
        </p>
        <button
          type="button"
          data-ocid="pricing.cta.button"
          className="bg-white text-purple-600 font-bold px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          onClick={() => {
            document
              .getElementById("pricing-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us Now
        </button>
      </div>

      {/* suppress unused warning */}
      <span className="hidden">{hoveredPlan}</span>

      {/* Contact Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          data-ocid="pricing.modal"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/50 cursor-default"
            aria-label="Close modal"
            onClick={closeModal}
          />
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              data-ocid="pricing.modal.close_button"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Plan header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl">{selectedPlan.icon}</span>
                <div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "#8c52ff" }}
                  >
                    {selectedPlan.name} Plan
                  </h2>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#8c52ff" }}
                  >
                    ₹{selectedPlan.price}/project
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-2">
                Fill in your details and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold text-slate-600 mb-1"
                  htmlFor="modal-name"
                >
                  Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  data-ocid="pricing.modal.input"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8c52ff] transition-colors"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-600 mb-1"
                  htmlFor="modal-phone"
                >
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  data-ocid="pricing.modal.input"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8c52ff] transition-colors"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-600 mb-1"
                  htmlFor="modal-email"
                >
                  Email *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  data-ocid="pricing.modal.input"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8c52ff] transition-colors"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-600 mb-1"
                  htmlFor="modal-business"
                >
                  Business Name *
                </label>
                <input
                  id="modal-business"
                  type="text"
                  required
                  placeholder="Your business name"
                  data-ocid="pricing.modal.input"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8c52ff] transition-colors"
                  value={form.business}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, business: e.target.value }))
                  }
                />
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-slate-600 mb-1"
                  htmlFor="modal-message"
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  data-ocid="pricing.modal.textarea"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8c52ff] transition-colors resize-none"
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>
              <button
                type="submit"
                data-ocid="pricing.modal.submit_button"
                className="w-full py-4 rounded-2xl font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#8c52ff" }}
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
