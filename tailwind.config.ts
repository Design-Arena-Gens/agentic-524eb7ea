import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7A3EFF",
          foreground: "#0B051C"
        },
        accent: {
          DEFAULT: "#1AE5FF",
          muted: "#C3F4FF"
        },
        base: {
          DEFAULT: "#05030F",
          foreground: "#E8E8F8",
          subtle: "#14122A"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(122, 62, 255, 0.25)"
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at 20% 20%, rgba(26,229,255,0.35), transparent 40%), radial-gradient(circle at 80% 10%, rgba(122,62,255,0.4), transparent 45%), radial-gradient(circle at 50% 80%, rgba(252,70,107,0.3), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
