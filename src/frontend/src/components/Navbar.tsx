import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LOGO =
  "/assets/uploads/Red-and-Beige-Simple-Modern-Bold-Typographic-Fashion-Store-Logo_20260322_103554_0000-1-1.png";

const navLinks = [
  { label: "Home", to: "/", ocid: "nav.home.link" },
  { label: "Projects & Services", to: "/projects", ocid: "nav.projects.link" },
  { label: "About Us", to: "/about", ocid: "nav.about.link" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 1px 20px rgba(140,82,255,0.08)"
          : "0 1px 0 #f3f4f6",
      }}
    >
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
          <img
            src={LOGO}
            alt="MG Media Logo"
            className="w-12 h-12 object-contain"
          />
          <span
            className="hidden sm:block font-display font-bold text-base tracking-wide"
            style={{ color: "#8C52FF" }}
          >
            MG Media
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className={`nav-link text-sm font-medium transition-colors duration-200 pb-0.5${
                currentPath === link.to
                  ? " active text-[#8C52FF] font-semibold"
                  : " text-gray-600 hover:text-[#8C52FF]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA pill */}
          <Link
            to="/contact"
            data-ocid="nav.contact.link"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor:
                currentPath === "/contact" ? "#8C52FF" : "transparent",
              color: currentPath === "/contact" ? "#ffffff" : "#8C52FF",
              border: "1.5px solid #8C52FF",
            }}
            onMouseEnter={(e) => {
              if (currentPath !== "/contact") {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#8C52FF";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPath !== "/contact") {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#8C52FF";
              }
            }}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#8C52FF] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-5 border-t"
          style={{
            borderColor: "rgba(140,82,255,0.1)",
            backgroundColor: "rgba(255,255,255,0.98)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="text-sm font-medium text-gray-700 hover:text-[#8C52FF] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            data-ocid="nav.contact.link"
            className="text-sm font-semibold text-[#8C52FF] border border-[#8C52FF] rounded-full px-4 py-2 text-center transition-colors hover:bg-[#8C52FF] hover:text-white"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
