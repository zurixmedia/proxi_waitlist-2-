import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D5463",
          teal: "#1D5463",
          tealLight: "#E5F4F7",
          secondary: "#2F6F7E",
          accent: "#62C3D4",
          accentLight: "#7AD462",
          green: "#5C9028",
          greenLight: "#EBF7EE",
          dark: "#111827",
          footerDark: "#0B1A1E",
          footerBorder: "#1A3540",
          footerInput: "#132B32",
          background: "#F8FBFC",
          surface: "#FFFFFF",
          border: "#E5E7EB",
          textPrimary: "#111827",
          textSecondary: "#6B7280",
          textMuted: "#9CA3AF",
          success: "#5C9028",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(29, 84, 99, 0.08)",
        card: "0 20px 40px rgba(29, 84, 99, 0.06)",
        badge: "0 8px 20px rgba(0, 0, 0, 0.06)",
        glow: "0 0 25px rgba(98, 195, 212, 0.25)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
      screens: {
        mobile: "320px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
        "large-desktop": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
