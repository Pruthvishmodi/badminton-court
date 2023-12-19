import type { Config } from 'tailwindcss'
import { Oregano } from 'next/font/google';

const {fontFamily} = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        container: `max(
          1rem,
          calc((100vw - calc(1280px - 1rem * 2)) / 2)
        )`,
        'md-container': `max(
          1rem,
          calc((100vw - calc(1024px - 1rem * 2)) / 2)
        )`,
        'sm-container': `max(
          1rem,
          calc((100vw - calc(550px - 1rem * 2)) / 2)
        )`,
      },
      aspectRatio: {
        image: '3 / 4',
        'h-image': '4 / 3',
        'blog-image': '16/9',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        oregano : ["var(--font-oregano)", ...fontFamily.sans]
      },
    },
  },
  plugins: [],
}
export default config
