import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const LOGO =
  "/assets/uploads/Red-and-Beige-Simple-Modern-Bold-Typographic-Fashion-Store-Logo_20260313_094713_0000-1.png";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ backgroundColor: "#872642" }} className="text-white">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <img
          src={LOGO}
          alt="MG Media Logo"
          className="w-16 h-16 rounded-full object-cover border-2 border-white/40"
        />
        <p className="font-display text-xl font-bold tracking-wide">MG Media</p>
        <a
          href="mailto:monikamkg0725@gmail.com"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
        >
          <Mail size={15} />
          monikamkg0725@gmail.com
        </a>
        <div className="w-16 h-px bg-white/20" />
        <p className="text-white/60 text-xs">
          © {year} MG Media. Built with passion by Monika Gupta.
        </p>
        <p className="text-white/40 text-xs">
          Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
