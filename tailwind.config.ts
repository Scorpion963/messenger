import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import scrollbarPlugin from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    scrollbarPlugin
  ],
} satisfies Config;
