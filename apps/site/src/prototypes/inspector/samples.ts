import {
  IconBackpack,
  IconBinoculars,
  IconCamera,
  IconCloud,
  IconCompass,
  IconGlobe,
  IconLeaf,
  IconMapPin,
  IconMoon,
  IconPlanet,
  IconSun,
  IconTree,
} from 'fyicons';

export const samples = [
  {
    name: 'Compass',
    category: 'Navigation',
    glyph: IconCompass,
    color: 'moss',
  },
  { name: 'Sun', category: 'Weather', glyph: IconSun, color: 'sand' },
  { name: 'Leaf', category: 'Nature', glyph: IconLeaf, color: 'moss' },
  { name: 'Moon', category: 'Astronomy', glyph: IconMoon, color: 'lilac' },
  {
    name: 'Binoculars',
    category: 'Equipment',
    glyph: IconBinoculars,
    color: 'sand',
  },
  { name: 'Cloud', category: 'Weather', glyph: IconCloud, color: 'sky' },
  { name: 'Planet', category: 'Astronomy', glyph: IconPlanet, color: 'lilac' },
  { name: 'Tree', category: 'Nature', glyph: IconTree, color: 'moss' },
  { name: 'Map pin', category: 'Navigation', glyph: IconMapPin, color: 'sky' },
  { name: 'Camera', category: 'Equipment', glyph: IconCamera, color: 'lilac' },
  {
    name: 'Backpack',
    category: 'Equipment',
    glyph: IconBackpack,
    color: 'sand',
  },
  { name: 'Globe', category: 'Navigation', glyph: IconGlobe, color: 'sky' },
] as const;

export type Sample = (typeof samples)[number];
