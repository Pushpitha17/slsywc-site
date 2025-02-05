import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      screens: {
        // Add a custom screen for viewport height less than 600px
        "vh-less-600": { raw: "(max-height: 700px)" }
      },
      colors: {
        "main-blue-1": "rgba(0, 76, 241, 1)",
        "main-blue-2": "rgba(0,187,187,1)",
        "main-green": "rgba(0,184,54,1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          background: "hsl(var(--primary-background))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        }
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to right, rgba(0,76,241,1) 0%, rgba(0,187,187,1) 50%, rgba(0,184,54,1) 100%)",
        "text-gradient":
          "linear-gradient(to right, rgba(0,76,241,1) 0%, rgba(0,187,187,1) 50%, rgba(0,184,54,1) 100%)"
        // 'text-gradient': 'linear-gradient(to right, #FFBB00 0%, #ED1B34 100%)'
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "gradient-animation": {
          from: { "background-position": "200% center" }
        },
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-animation": "gradient-animation 6s linear infinite",
        "infinite-scroll-left": "infinite-scroll-left 25s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 25s linear infinite",
        "infinite-scroll-left-mobile":
          "infinite-scroll-left 16s linear infinite",
        "infinite-scroll-right-mobile":
          "infinite-scroll-right 14s linear infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")]
} satisfies Config

export default config
