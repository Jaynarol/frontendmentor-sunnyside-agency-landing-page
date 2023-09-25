import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'highlight-red': 'hsl(7, 99%, 90%)',
        'highlight-red-focus': 'hsl(7, 99%, 70%)',
        'highlight-yellow': 'hsl(51, 100%, 84%)',
        'highlight-yellow-focus': 'hsl(51, 100%, 49%)',
        'dark-desaturated': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-cyan': 'hsl(168, 34%, 41%)',

        'very-dark-desaturated': 'hsl(212, 27%, 19%)',
        'dark-grayish': 'hsl(213, 9%, 39%)',
        'very-dark-grayish': 'hsl(232, 10%, 55%)',
        grayish: 'hsl(210, 4%, 67%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
    darkTheme: '',
    logs: false,
  },
}

export default config
