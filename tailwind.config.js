/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './content/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary, #0AA8A7)',
        secondary: 'var(--color-secondary, #0AA8A7)',
        'text-default': 'var(--text-color, #777)',
        'text-dark': 'var(--text-dark, #222)',
        'text-light': 'var(--text-light, #999)',
        'body-bg': 'var(--body-bg, #fff)',
        'border-color': 'var(--border-color, #ECECEC)',
        'dark-body-bg': 'var(--dark-body-bg, #1e262c)',
        'dark-text': 'var(--dark-text-color, #cbcbcb)',
        'dark-text-dark': 'var(--dark-text-dark, #999)',
        'dark-text-light': 'var(--dark-text-light, #ddd)',
        'dark-border': 'var(--dark-border-color, #ECECEC)',
        light: 'var(--light, #EDF6F5)',
        dark: 'var(--dark, #1b2229)',
      },
      fontFamily: {
        primary: 'var(--font-primary, "Lato", sans-serif)',
        icon: 'var(--font-icon, "Font Awesome 6 Free")',
      },
      fontSize: {
        base: 'var(--font-size, 16px)',
      },
    },
  },
  plugins: [],
  safelist: [
    'container',
    'prose',
    'prose-dark',
  ],
}
