// Tailwind runs as a PostCSS plugin. The @tailwindcss/turbopack loader was
// dropped because `next dev` stopped picking up edits to globals.css with it.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
