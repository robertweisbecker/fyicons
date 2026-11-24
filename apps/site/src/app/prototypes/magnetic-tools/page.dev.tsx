import categoryRules from '../../../../public/icon-categories.json';
import { icons } from '@/lib/catalog';
import { categorizeIcons } from '@/lib/icon-categories';
import { iconSourceUrl } from '@/lib/icon-source';
import { MagneticTools } from '@/prototypes/magnetic-tools/MagneticTools';

export const metadata = { title: 'Magnetic tools prototype' };

// LinkBreak is an alias for LinkUnlink.
const additionalIcons = new Set([
  'arrow-up-right',
  'squarrow-up-right',
  'key',
  'leaf',
  'tag-tilt',
  'airplane-diagonal',
  'link',
  'link-unlink',
  'link-slash',
  'microphone-music',
  'paint-can',
  'paperclip-tilt',
  'paperclip-wide-tilt',
  'party-popper',
  'pin',
  'pin-fill',
  'plug',
  'plug-simple',
  'plugs',
  'plugs-plugged',
  'plugs-unplug',
  'radar',
  'screw',
  'send-tilt',
  'umbrella',
  'vector-curve',
  'arrows-expand',
  'chevrons-expand',
  'carets-maximize',
  'compass',
  'compass-fill',
  'compass-simple',
  'drawing',
  'edit',
  'edit-solid',
  'extensions-alt',
  'flashlight-on',
  'layout-pin',
  'layout-pinned',
  'quill',
]);

export default function MagneticToolsPage() {
  const tools = categorizeIcons(icons, categoryRules)
    .icons.filter(
      (icon) =>
        (icon.categories.includes('tools') && icon.name !== 'pencil-ruler') ||
        additionalIcons.has(icon.name),
    )
    .map((icon) => ({ name: icon.name, url: iconSourceUrl(icon) }));
  return <MagneticTools tools={tools} />;
}
