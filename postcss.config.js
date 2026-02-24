module.exports = {
  plugins: [
    // Temporarily disable Tailwind PostCSS plugin to avoid native transformer
    // issues in environments where lightningcss binaries are missing.
    // If you later install `lightningcss` or `lightningcss-wasm`, re-enable
    // Tailwind by uncommenting the next line.
    // require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
