import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        section: "3rem",
      },
      fontFamily: {
        worksans: ["var(--font-worksans)"],
        eczar: ["var(--font-eczar)"],
        roboto: ["var(--font-roboto)"],
        studiofeixen: [
          "studiofeixen",
          {
            fontVariationSettings: '"wght" 600,"wdth" 100',
          },
        ],
      },
      colors: {
        primary: "#44444c",
        borderPrimary: "#595960",
        scdark: "#212127",
        bghover: "#303039",
        bgColor: "#303039",
        textMain: "#aab2d1",
      },
      aspectRatio: {
        "2/3": "2/3",
        "3/4": "3/4",
        "3/2": "3/2",
      },
    },
  },
  plugins: [],
};
export default config;
