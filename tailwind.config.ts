import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette for CondoHub
        primary: "#2563EB", // Vibrant blue
        secondary: "#1E40AF", // Darker blue for contrast
        background: "var(--background)", // Keep your existing background variable
        foreground: "var(--foreground)", // Keep your existing foreground variable
        accent: "#1E3A8A", // Even darker blue for accents
        white: "#FFFFFF", // Pure white
        gray: {
          100: "#F3F4F6", // Light gray
          500: "#6B7280", // Medium gray
          900: "#111827", // Dark gray
        },
      },
      fontFamily: {
        // Add custom fonts (e.g., Poppins)
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        // Add custom animations
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        // Define keyframes for animations
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      container: {
        center: true,
        padding: "1rem", // Adds padding to the container
      },
      screens: {
        xs: "480px", // Extra small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        72: "18rem", // Adds a new spacing value
        84: "21rem",
        96: "24rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Custom card shadow
        button: "0 2px 4px rgba(0, 0, 0, 0.2)", // Custom button shadow
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB, #1E40AF)", // Blue gradient
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // For better form styling
  ],
} satisfies Config;