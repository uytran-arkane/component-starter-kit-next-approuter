import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import {
  generateTailwindcssColorKeysPattern,
  generateTailwindcssDimensionKeysPattern,
  generateTailwindcssFontKeysPattern,
  generateTailwindcssBorderKeysPattern,
} from '@uniformdev/design-extensions-tools/tailwindcss-conf';

import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import theme from './tailwind.config.theme.json';
import utilities from './tailwind.utilities.json';

const safelist = [
  { pattern: /grid-cols-(1[0-2]|[1-9]|none|subgrid)/, variants: ['lg', 'md'] },
  { pattern: /gap(?:-(x|y))?-(0(\.5)?|1(\.5)?|2(\.5)?|3(\.5)?|[1-9]?[0-9]|px)/, variants: ['lg', 'md'] },
  { pattern: /flex-(col|row|col-reverse|row-reverse)/, variants: ['lg', 'md'] },
  { pattern: /justify-(normal|start|end|center|between|around|evenly|stretch)/, variants: ['lg', 'md'] },
  { pattern: /items-(start|end|center|baseline|stretch)/, variants: ['lg', 'md'] },
  { pattern: /self-(start|end|center|baseline|stretch)/, variants: ['lg', 'md'] },
  { pattern: /(col|row)-start-(1[0-2]|[1-9]|none|subgrid)/, variants: ['lg', 'md'] },
  { pattern: /(col|row)-(auto|span-(1[0-2]|[1-9]|full))/, variants: ['lg', 'md'] },
  { pattern: /justify-(start|center|end)/ },
  { pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/, variants: ['lg', 'md'] },
  { pattern: /text-(left|center|right)/ },
  { pattern: /font-(normal|medium|bold|extrabold)/, variants: ['lg', 'md'] },
  { pattern: /line-clamp-(none|[1-6])/, variants: ['lg:[&>:not(script)]', 'md:[&>:not(script)]', '[&>:not(script)]'] },
  { pattern: /(uppercase|lowercase|capitalize)/, variants: ['lg', 'md'] },
  { pattern: /(underline|overline|line-through)/, variants: ['lg', 'md'] },
  { pattern: /tracking-(tighter|tight|normal|wide|wider|widest)/, variants: ['lg', 'md'] },
  { pattern: /aspect-(auto|square|video)/ },
  { pattern: /shrink-(0|1)/ },
];

const colorKeys = Object.keys(theme.extend.colors || {});
if (colorKeys.length) {
  safelist.push(generateTailwindcssColorKeysPattern(colorKeys));
}

const dimensionKeys = Object.keys(theme.extend.spacing || {});
if (dimensionKeys.length) {
  safelist.push(...generateTailwindcssDimensionKeysPattern(dimensionKeys));
}

const fontKeys = Object.keys(theme.extend.fontFamily || {});
if (fontKeys.length) {
  safelist.push(generateTailwindcssFontKeysPattern(fontKeys));
}

const borderKeys = Object.keys(utilities || {}).map(key => key.substring(1));
if (borderKeys.length) {
  safelist.push(generateTailwindcssBorderKeysPattern(borderKeys));
}

export default {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@uniformdev/csk-components/dist/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist,
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-gradient-2': 'radial-gradient(50% 50% at center, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8), black)',
        'radial-gradient-3':
          'radial-gradient(80% 80% at 80% 20%, rgba(9, 0, 10, 0.5), rgba(9, 0, 10, 0.65), rgb(9, 0, 10, 1))',
        'radial-gradient-4':
          'radial-gradient(60% 50% at 40% 50%, rgba(9, 0, 10, 0.1), rgba(9, 0, 10, 0.7), rgb(9, 0, 10, 1))',
      },
      colors: {
        'brand-charcoal': {
          100: '#F3F1F4',
          200: '#EAE8EB',
          500: '#969497',
          600: '#6D6C6E',
          800: '#1B1A1C',
        },
        gray: {
          100: '#FAFAFA',
          200: '#EEEEEE',
          500: '#9E9E9E',
          600: '#757575',
          800: '#424242',
        },
        'brand-purple': {
          100: '#DDB8DB',
          200: '#C78AC3',
          500: '#8E128B',
          600: '#820F85',
          800: '#460067',
          900: '#09000A',
        },
        success: {
          100: '#E9F9F1',
          200: '#B8E5CE',
          500: '#078445',
          600: '#044D28',
          800: '#013018',
        },
        error: {
          100: '#FDF2F3',
          200: '#FAC0C6',
          500: '#D21527',
          600: '#7E0611',
          800: '#490108',
        },
        warning: {
          100: '#FEF9E4',
          200: '#FEE691',
          500: '#FCD95F',
          600: '#F1C320',
          800: '#D3A605',
        },
      },
      fontSize: {
        'label-small': [
          '0.875rem',
          {
            lineHeight: '1.3rem',
            letterSpacing: '0.1rem',
            fontWeight: '600',
          },
        ],
        link: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        'link-large': [
          '1rem',
          {
            lineHeight: '1.625rem',
            fontWeight: '700',
          },
        ],
        cta: [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
        'body-small': [
          '0.875rem',
          {
            lineHeight: '1.313rem',
            fontWeight: '400',
          },
        ],
        body: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
          },
        ],
        'body-large': [
          '1.5rem',
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        h3: [
          '2rem',
          {
            lineHeight: '2.75rem',
            fontWeight: '400',
          },
        ],
        h2: [
          '3rem',
          {
            lineHeight: '3rem',
            fontWeight: '400',
          },
        ],
        h1: [
          '3.5rem',
          {
            lineHeight: '3.5rem',
            fontWeight: '300',
          },
        ],
        display3: [
          '3rem',
          {
            lineHeight: '3rem',
            fontWeight: '700',
          },
        ],
        display2: [
          '3.5rem',
          {
            lineHeight: '3.5rem',
            fontWeight: '700',
          },
        ],
        display1: [
          '4.5rem',
          {
            lineHeight: '4.5rem',
            fontWeight: '700',
          },
        ],
        'prose-h3': [
          '1.2rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
        'prose-h2': [
          '1.5rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
        'prose-h1': [
          '2rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
          },
        ],
      },
      fontFamily: {
        display: ['var(--font-poppins)'],
        body: ['var(--font-nunito)'],
        lexend: ['var(--font-lexend)'],
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '2.5rem',
        7: '3rem',
        8: '3.5rem',
        9: '4.5rem',
        10: '6rem',
        11: '6.5rem',
        12: '7.5rem',
        13: '15rem',
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
    containerQueries,
    plugin(function ({ addUtilities }) {
      addUtilities(utilities);
    }),
  ],
} satisfies Config;
