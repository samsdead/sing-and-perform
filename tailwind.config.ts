import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette (friendly + modern)
        ink: "#0B1020",         // deep navy text
        canvas: "#FFF9F2",      // warm off-white background
        surface: "#FFFFFF",     // card background
        accent: "#FF4D6D",      // coral/pink CTA
        accent2: "#2EC4B6",     // teal accent
        muted: "#6B7280"        // gray-500
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 16, 32, 0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
