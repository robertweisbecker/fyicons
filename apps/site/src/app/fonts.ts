import localFont from 'next/font/local';

// Share the family so obliques load on demand while only upright Allo is
// preloaded. All files remain the original, complete webfonts.
export const allo = localFont({
  src: '../assets/fonts/AlloVariable.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-allo',
  display: 'swap',
  declarations: [{ prop: 'font-family', value: 'Allo' }],
});

export const alloObliques = localFont({
  src: [
    {
      path: '../assets/fonts/Allo-Oblique.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/Allo-BoldOblique.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: 'font-family', value: 'Allo' }],
});

export const paperMono = localFont({
  src: '../assets/fonts/PaperMono-Variable.woff2',
  weight: '100 800',
  variable: '--font-paper-mono',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
});
