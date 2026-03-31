import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const LOGO =
  "/assets/uploads/Red-and-Beige-Simple-Modern-Bold-Typographic-Fashion-Store-Logo_20260322_103554_0000-1-1.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Projects & Services", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const navigate = useNavigate();
  const location = useLocation();

  function handlePlansClick() {
    if (location.pathname === "/") {
      document
        .getElementById("pricing-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          document
            .getElementById("pricing-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      });
    }
  }

  return (
    <footer style={{ backgroundColor: "#8C52FF" }}>
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="MG Media Logo"
                className="w-12 h-12 object-contain rounded-full"
                loading="lazy"
                decoding="async"
              />
              <span className="font-bold text-white text-lg tracking-wide">
                MG Media
              </span>
            </div>
            <p className="text-white/80 text-sm font-medium">Monika Gupta</p>
            <p className="text-white/60 text-xs">Designer behind MG Media</p>
            <a
              href="mailto:monikamkg0725@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors mt-1"
            >
              <Mail size={14} />
              monikamkg0725@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "instant" as ScrollBehavior,
                  })
                }
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handlePlansClick}
              className="text-white/70 hover:text-white text-sm transition-colors text-left"
            >
              Plans
            </button>
          </div>

          {/* Tagline */}
          <div className="flex flex-col items-center sm:items-end justify-center">
            <p className="text-white/80 text-sm text-center sm:text-right font-medium leading-relaxed">
              Building digital growth engines
              <br />
              for local businesses in Gorakhpur &amp; beyond.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-white/70 text-xs">
            &copy; {year} MG Media &middot; All rights reserved.
          </p>
          <p className="text-white/50 text-xs">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
