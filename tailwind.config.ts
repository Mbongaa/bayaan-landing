import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Quranic Display inspired palette
        islamic: {
          primary: "#0a3a3a", // Deep teal (from Quranic display)
          secondary: "#d4a574", // Golden (from Quranic display)
          accent: "#d4a574", // Golden accent
          light: "#fdf1f4", // Warm cream background
          dark: "#0a3a3a", // Deep teal
        },
        // Extended palette
        emerald: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#2B6E5C",
          600: "#235A4B",
          700: "#1B463A",
          800: "#133229",
          900: "#0B1E18",
        },
        gold: {
          50: "#FFFDF7",
          100: "#FFF9E6",
          200: "#F3E5AB",
          300: "#E8D170",
          400: "#D4AF37",
          500: "#B8962F",
          600: "#9C7D27",
          700: "#80641F",
          800: "#644B17",
          900: "#48320F",
        },
        cream: {
          50: "#FAFAF9",
          100: "#F6F4F0",
          200: "#EDE9E0",
          300: "#E4DED0",
          400: "#DBD3C0",
          500: "#D2C8B0",
          600: "#C9BDA0",
          700: "#C0B290",
          800: "#B7A780",
          900: "#AE9C70",
        },
        // Shadcn UI compatible colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["'Noto Sans Arabic'", "system-ui", "sans-serif"],
        arabic: ["'Noto Sans Arabic'", "system-ui", "sans-serif"],
        poppins: ["'Poppins'", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
