/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './content/**/*.html',
    './exampleSite/layouts/**/*.html',
    './exampleSite/content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary:      'var(--color-primary, #0AA8A7)',
        secondary:    'var(--color-secondary, #0AA8A7)',
        'text-default': 'var(--text-color, #777)',
        'text-dark':  'var(--text-dark, #222)',
        'text-light': 'var(--text-light, #999)',
        'body-bg':    'var(--body-bg, #fff)',
        'border-color': 'var(--border-color, #ECECEC)',
        light:        'var(--light-bg, #EDF6F5)',
        dark:         'var(--dark, #1b2229)',
      },
      fontFamily: {
        primary: 'var(--font-primary, "Lato", sans-serif)',
        icon:    'var(--font-icon, "Font Awesome 6 Free")',
      },
    },
  },
  plugins: [],
  safelist: [
    // grid fractions used in templates
    { pattern: /^w-(1\/2|1\/3|2\/3|1\/4|3\/4|5\/12|6\/12|7\/12|8\/12|9\/12|10\/12|11\/12|full)$/ },
    'md:w-1/2', 'md:w-1/3', 'md:w-2/3', 'lg:w-1/2', 'lg:w-1/3', 'lg:w-2/3', 'lg:w-1/4', 'lg:w-3/4',
    'sm:w-1/2', 'xl:w-3/12', 'xl:w-5/12', 'xl:w-6/12', 'xl:w-7/12', 'xl:w-11/12',
    'lg:w-4/12', 'lg:w-5/12', 'lg:w-6/12', 'lg:w-7/12', 'lg:w-8/12', 'lg:w-10/12', 'lg:w-11/12',
    'md:w-5/12', 'md:w-6/12', 'md:w-7/12',
    // order classes
    { pattern: /^order-(1|2)$/ },
    // misc
    'space-y-2',
    'container',
  ],
}
