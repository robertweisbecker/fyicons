export const palettes = {
  Sage: {
    background: '#cbd8c9',
    case: '#445854',
    command: '#f28b51',
    secondary: '#49736d',
  },
  Cobalt: {
    background: '#bdd2ec',
    case: '#314970',
    command: '#f6be4f',
    secondary: '#496bb0',
  },
  Clay: {
    background: '#ead5c9',
    case: '#81554b',
    command: '#ad4c39',
    secondary: '#d79d7e',
  },
  Midnight: {
    background: '#242736',
    case: '#515365',
    command: '#b2a0e2',
    secondary: '#6d6686',
  },
};

export type PaletteName = keyof typeof palettes;
