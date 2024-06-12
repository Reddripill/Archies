import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundColor: {
            main: "#F9F8F4",
            menu: "#E6E0DC",
         },
      },
   },
   plugins: [],
};
export default config;
