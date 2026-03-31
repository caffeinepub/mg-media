import { useTheme } from "@/contexts/ThemeContext";
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

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "499",
    icon: "🚀",
    tag: "Perfect for New Businesses",
    pages: "3–4 Pages",
    description: "Get your online presence started",
    features: [
      { text: "Website Design & Development", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true },
    ],
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: "999",
    icon: "⭐",
    tag: "Most Popular",
    pages: "5–7 Pages",
    description: "Best for growing businesses",
    features: [
      { text: "Website Design & Development", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true },
      { text: "Enhanced SEO Optimization", included: true },
      { text: "AI Chatbox", included: true },
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
    pages: "Up to 10 Pages",
    description: "Complete digital solution",
    features: [
      { text: "Website Design & Development", included: true },
      { text: "Fast Loading in Mobile & Laptop", included: true },
      { text: "Basic Social Media Integration", included: true },
      { text: "Enhanced SEO Optimization", included: true },
      { text: "AI Chatbox", included: true },
      { text: "Professional Brand Logo Design", included: true },
      { text: "Google My Business Setup", included: true },
      { text: "Custom Design", included: true },
    ],
    highlighted: false,
  },
];

const aosDelays = ["0", "100", "200"];

export default function PricingSection() {
  const { isDark } = useTheme();
  const [hoveredPlan, setHoveredPlan] = useState<string | null>("professional");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [form, setForm] = useState(emptyForm);

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
    <div
      id="pricing-section"
      className="py-20 px-4 transition-colors duration-300"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Decorative top accent */}
      <div className="flex justify-center mb-6">
        <div
          className="h-1 w-16 rounded-full"
          style={{ background: "#8c52ff" }}
        />
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ color: headingColor }}
        >
          Best Website Design Services in Gorakhpur
        </h1>
        <p className="text-lg mb-3" style={{ color: subColor }}>
          Helping local businesses in Gorakhpur grow with affordable,
          high-quality, social media integration &amp; SEO ready website.
        </p>
        <p
          className="text-base"
          style={{ color: isDark ? "#6b7280" : "#94a3b8" }}
        >
          Build. Grow. Scale — packages designed for local businesses.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              data-aos="fade-up"
              data-aos-delay={aosDelays[i]}
              className={`relative group transition-all duration-300 transform ${
                plan.highlighted ? "md:scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.highlighted && (
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(140,82,255,0.25)" }}
                />
              )}
              <div
                className="relative h-full rounded-3xl overflow-hidden transition-all duration-300"
                style={
                  plan.highlighted
                    ? {
                        background: "#8c52ff",
                        color: "white",
                        border: "2px solid #8c52ff",
                        boxShadow: "0 20px 25px -5px rgba(140,82,255,0.3)",
                      }
                    : {
                        background: cardBg,
                        border: `2px solid ${cardBorder}`,
                        color: featureItemColor,
                      }
                }
              >
                {plan.highlighted && (
                  <div
                    className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      borderColor: "rgba(255,255,255,0.3)",
                      color: "white",
                    }}
                  >
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-bold">{plan.tag}</span>
                  </div>
                )}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-8">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <h3 className="text-4xl font-bold mb-2">{plan.name}</h3>
                    {!plan.highlighted && (
                      <p
                        className="text-sm font-semibold mb-3"
                        style={{ color: "#8c52ff" }}
                      >
                        {plan.tag}
                      </p>
                    )}
                    <p
                      className="text-base mb-6"
                      style={{
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.85)"
                          : subColor,
                      }}
                    >
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl font-bold">₹{plan.price}</span>
                      <span
                        className="text-base"
                        style={{
                          color: plan.highlighted
                            ? "rgba(255,255,255,0.7)"
                            : subColor,
                        }}
                      >
                        /project
                      </span>
                    </div>
                    <div
                      className="inline-block px-6 py-3 rounded-xl text-sm font-bold mb-8"
                      style={
                        plan.highlighted
                          ? {
                              background: "rgba(255,255,255,0.2)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              color: "white",
                            }
                          : {
                              background: "rgba(140,82,255,0.1)",
                              color: "#8c52ff",
                            }
                      }
                    >
                      {plan.pages}
                    </div>
                  </div>

                  <button
                    type="button"
                    data-ocid={`pricing.${plan.id}.button`}
                    className="w-full py-4 px-6 rounded-2xl font-bold mb-8 transition-all duration-300 transform hover:-translate-y-1"
                    style={
                      plan.highlighted
                        ? {
                            background: "#ffffff",
                            color: "#8c52ff",
                            boxShadow: "0 10px 25px -5px rgba(140,82,255,0.2)",
                          }
                        : { background: "#8c52ff", color: "#ffffff" }
                    }
                    onClick={() => setSelectedPlan(plan)}
                  >
                    Get Started
                  </button>

                  <div className="space-y-4 flex-1">
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-6"
                      style={{
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.7)"
                          : "#6b7280",
                      }}
                    >
                      What&apos;s Included
                    </p>
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={
                            plan.highlighted
                              ? { background: "rgba(255,255,255,0.3)" }
                              : { background: "rgba(140,82,255,0.1)" }
                          }
                        >
                          <Check
                            className="w-4 h-4"
                            style={{
                              color: plan.highlighted ? "white" : "#8c52ff",
                            }}
                          />
                        </div>
                        <span
                          className="text-sm"
                          style={{
                            color: plan.highlighted
                              ? "white"
                              : featureItemColor,
                            fontWeight: "500",
                          }}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Highlight */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: headingColor }}
          data-aos="fade-up"
        >
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
          ].map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border"
              data-aos="zoom-in"
              data-aos-delay={String(i * 100)}
              style={{
                background: isDark
                  ? "rgba(140,82,255,0.08)"
                  : "rgba(140,82,255,0.05)",
                borderColor: "rgba(140,82,255,0.3)",
              }}
            >
              <p className="text-4xl mb-4">{item.icon}</p>
              <h4
                className="font-bold mb-2 text-sm"
                style={{ color: headingColor }}
              >
                {item.title}
              </h4>
              <p className="text-xs" style={{ color: subColor }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white"
        data-aos="fade-up"
      >
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

      {/* Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          data-ocid="pricing.modal"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50 cursor-default"
            aria-label="Close modal"
            onClick={closeModal}
          />
          <div
            className="rounded-3xl max-w-lg w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: isDark ? "#1e1e1e" : "#ffffff" }}
          >
            <button
              type="button"
              data-ocid="pricing.modal.close_button"
              className="absolute top-4 right-4 transition-colors"
              style={{ color: isDark ? "#9ca3af" : "#9ca3af" }}
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
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
              <p className="text-sm mt-2" style={{ color: subColor }}>
                Fill in your details and we&apos;ll get back to you within 24
                hours.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  id: "modal-name",
                  label: "Name *",
                  key: "name",
                  type: "text",
                  placeholder: "Your full name",
                  required: true,
                },
                {
                  id: "modal-phone",
                  label: "Phone Number *",
                  key: "phone",
                  type: "tel",
                  placeholder: "Your phone number",
                  required: true,
                },
                {
                  id: "modal-email",
                  label: "Email *",
                  key: "email",
                  type: "email",
                  placeholder: "your@email.com",
                  required: true,
                },
                {
                  id: "modal-business",
                  label: "Business Name *",
                  key: "business",
                  type: "text",
                  placeholder: "Your business name",
                  required: true,
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    className="block text-xs font-semibold mb-1"
                    htmlFor={field.id}
                    style={{ color: subColor }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    data-ocid="pricing.modal.input"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{
                      border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
                      backgroundColor: isDark ? "#111" : "#fff",
                      color: isDark ? "#f3f4f6" : "#1f2937",
                    }}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field.key]: e.target.value }))
                    }
                  />
                </div>
              ))}
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  htmlFor="modal-message"
                  style={{ color: subColor }}
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  data-ocid="pricing.modal.textarea"
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  style={{
                    border: `1px solid ${isDark ? "#333" : "#e5e7eb"}`,
                    backgroundColor: isDark ? "#111" : "#fff",
                    color: isDark ? "#f3f4f6" : "#1f2937",
                  }}
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
