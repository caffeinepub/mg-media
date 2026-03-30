import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-ocid="nav.theme.toggle"
      className="relative flex-shrink-0 w-14 h-7 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8c52ff] focus-visible:ring-offset-2"
      style={{
        backgroundColor: isDark ? "#1e1e2e" : "#ffffff",
        border: "2px solid #8c52ff",
        boxShadow: isDark
          ? "0 0 12px rgba(140,82,255,0.45)"
          : "0 0 8px rgba(140,82,255,0.2)",
      }}
    >
      {/* Sliding circle */}
      <span
        className="absolute top-0.5 flex items-center justify-center w-5 h-5 rounded-full transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: "#8c52ff",
          left: isDark ? "calc(100% - 1.375rem)" : "2px",
        }}
      >
        {isDark ? (
          <Moon size={11} color="white" strokeWidth={2.5} />
        ) : (
          <Sun size={11} color="white" strokeWidth={2.5} />
        )}
      </span>
      {/* Background icon hint */}
      <span
        className="absolute transition-opacity duration-300"
        style={{
          right: isDark ? "auto" : "5px",
          left: isDark ? "5px" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.35,
        }}
      >
        {isDark ? (
          <Sun size={10} color="#8c52ff" />
        ) : (
          <Moon size={10} color="#8c52ff" />
        )}
      </span>
    </button>
  );
}
