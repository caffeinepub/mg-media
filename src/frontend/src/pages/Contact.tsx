import { useActor } from "@/hooks/useActor";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, Mail, MessageSquare, Phone, User } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { actor } = useActor();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      if (actor) {
        await actor.submit(form.name, form.phone, form.email, form.message);
      }
      navigate({ to: "/thank-you" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#8C52FF" }}>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h1>
            <p className="text-white/70 text-base sm:text-lg">
              Let's build something extraordinary together.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                >
                  <User size={14} style={{ color: "#8C52FF" }} /> Name{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  data-ocid="contact.name.input"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 min-h-[44px] rounded-md text-sm text-gray-800 bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#8C52FF",
                      "--tw-ring-color": "rgba(140,82,255,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                >
                  <Phone size={14} style={{ color: "#8C52FF" }} /> Phone Number
                </label>
                <input
                  id="phone"
                  data-ocid="contact.phone.input"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 min-h-[44px] rounded-md text-sm text-gray-800 bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#8C52FF",
                      "--tw-ring-color": "rgba(140,82,255,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                >
                  <Mail size={14} style={{ color: "#8C52FF" }} /> Email{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  data-ocid="contact.email.input"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 min-h-[44px] rounded-md text-sm text-gray-800 bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#8C52FF",
                      "--tw-ring-color": "rgba(140,82,255,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                >
                  <MessageSquare size={14} style={{ color: "#8C52FF" }} />{" "}
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your vision for your website..."
                  className="w-full px-4 py-3 rounded-md text-sm text-gray-800 bg-white border focus:outline-none focus:ring-2 transition-all resize-none"
                  style={
                    {
                      borderColor: "#8C52FF",
                      "--tw-ring-color": "rgba(140,82,255,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              {error && (
                <p
                  data-ocid="contact.error_state"
                  className="text-red-500 text-sm"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[44px] rounded-full font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white"
                style={{ backgroundColor: "#8C52FF" }}
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div
            className="mt-10 sm:mt-12 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-white/80 text-base">Monika Gupta</p>
            <a
              href="mailto:monikamkg0725@gmail.com"
              className="text-white/70 hover:text-white transition-colors underline text-sm mt-1 inline-block"
            >
              monikamkg0725@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
