import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
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

  function handleContactClick() {
    setOpen(false);
    window.location.href = "/#pricing-section";
  }

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
      <div className="container mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 flex items-center gap-2 min-w-0">
          <img
            src={LOGO}
            alt="MG Media Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
          />
          <span
            className="font-display font-bold text-sm sm:text-base tracking-wide truncate"
            style={{ color: "#8C52FF" }}
          >
            MG Media
          </span>
        </Link>

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
          <a
            href="/#pricing-section"
            data-ocid="nav.contact.link"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
            style={{
              backgroundColor: "transparent",
              color: "#8C52FF",
              border: "1.5px solid #8C52FF",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#8C52FF";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#8C52FF";
            }}
          >
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2.5 rounded-md text-gray-600 hover:text-[#8C52FF] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.menu.toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t"
            style={{
              borderColor: "rgba(140,82,255,0.1)",
              backgroundColor: "rgba(255,255,255,0.98)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors block${
                    currentPath === link.to
                      ? " text-[#8C52FF] bg-[#8C52FF]/5 font-semibold"
                      : " text-gray-700 hover:text-[#8C52FF] hover:bg-[#8C52FF]/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                data-ocid="nav.contact.link"
                className="mt-2 text-sm font-semibold text-white bg-[#8C52FF] rounded-full px-4 py-3 text-center transition-opacity hover:opacity-90 block"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
