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
    <div className="min-h-screen" style={{ backgroundColor: "#872642" }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h1>
            <p className="text-white/70 text-lg">
              Let's build something extraordinary together.
            </p>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-raspberry-lg p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"
                >
                  <User size={14} style={{ color: "#872642" }} /> Name{" "}
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
                  className="w-full px-4 py-3 rounded-md text-sm text-charcoal bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#872642",
                      "--tw-ring-color": "rgba(135,38,66,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"
                >
                  <Phone size={14} style={{ color: "#872642" }} /> Phone Number
                </label>
                <input
                  id="phone"
                  data-ocid="contact.phone.input"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-md text-sm text-charcoal bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#872642",
                      "--tw-ring-color": "rgba(135,38,66,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"
                >
                  <Mail size={14} style={{ color: "#872642" }} /> Email{" "}
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
                  className="w-full px-4 py-3 rounded-md text-sm text-charcoal bg-white border focus:outline-none focus:ring-2 transition-all"
                  style={
                    {
                      borderColor: "#872642",
                      "--tw-ring-color": "rgba(135,38,66,0.3)",
                    } as React.CSSProperties
                  }
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-semibold text-charcoal mb-2"
                >
                  <MessageSquare size={14} style={{ color: "#872642" }} />{" "}
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your vision for your website..."
                  className="w-full px-4 py-3 rounded-md text-sm text-charcoal bg-white border focus:outline-none focus:ring-2 transition-all resize-none"
                  style={
                    {
                      borderColor: "#872642",
                      "--tw-ring-color": "rgba(135,38,66,0.3)",
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
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-md font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "white",
                  color: "#872642",
                  border: "2px solid #872642",
                }}
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Get In Touch */}
          <div className="mt-12 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
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
