import { createIconLookup } from '@/components/createIconLookup';
import { createGlyph } from '../Study';

/** The compact rail moved from the standalone Examples study. */
export function DesignRail() {
  return (
    <div
      className="flex w-10 shrink-0 flex-col items-center gap-3 border-r border-line bg-surface px-1 py-2 text-[10px] text-muted @3xl/window:w-15 @3xl/window:px-2"
      aria-label="Design navigation"
      data-figma-id="732:5383"
    >
      {[
        ['file', 'File'],
        ['sparkle', 'Agents'],
        ['circle-plus', 'Assets'],
        ['toolbox', 'Tools'],
        ['line-horizontal', ''],
        ['token', 'Variables'],
        ['line-horizontal', ''],
        ['book-open-3', 'Libraries'],
      ].map(([icon, label], i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-0"
          title={label || undefined}
        >
          <Glyph
            name={icon}
            className={
              label === 'File'
                ? 'size-6 rounded-md bg-selection text-control-accent @3xl/window:size-7'
                : !label
                  ? 'text-border'
                  : ''
            }
          />
          {label && (
            <span
              className={`sr-only @3xl/window:not-sr-only ${label === 'File' ? 'text-ink' : ''}`}
            >
              {label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

import Glyph0 from 'fyicons/icons/IconFile';
import Glyph1 from 'fyicons/icons/IconSparkle';
import Glyph2 from 'fyicons/icons/IconCirclePlus';
import Glyph3 from 'fyicons/icons/IconToolbox';
import Glyph4 from 'fyicons/icons/IconLineHorizontal';
import Glyph5 from 'fyicons/icons/IconToken';
import Glyph6 from 'fyicons/icons/IconBookOpen3';
const Icon = createIconLookup({
  file: { Component: Glyph0, id: '224:14313' },
  sparkle: { Component: Glyph1, id: '732:5505' },
  'circle-plus': { Component: Glyph2, id: '721:395' },
  toolbox: { Component: Glyph3, id: '702:1828' },
  'line-horizontal': { Component: Glyph4, id: '475:520' },
  token: { Component: Glyph5, id: '158:11621' },
  'book-open-3': { Component: Glyph6, id: '918:31793' },
});

const Glyph = createGlyph(Icon);
