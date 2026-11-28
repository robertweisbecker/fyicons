import { createIconLookup } from '@/components/createIconLookup';
import { createGlyph } from '../Study';
import {
  IconFile,
  IconSparkle,
  IconCirclePlus,
  IconToolbox,
  IconLineHorizontal,
  IconToken,
  IconBookOpen3,
} from 'fyicons';

/** The compact rail moved from the standalone Examples study. */
export function DesignRail() {
  return (
    <div
      className="flex w-10 shrink-0 flex-col items-center gap-3 border-r border-line bg-surface px-1 py-2 text-[10px] text-muted @3xl/window:w-15 @3xl/window:px-2"
      aria-label="Design navigation"
      data-figma-id="732:5383"
    >
      {(
        [
          ['file', 'File'],
          ['sparkle', 'Agents'],
          ['circle-plus', 'Assets'],
          ['toolbox', 'Tools'],
          ['line-horizontal', ''],
          ['token', 'Variables'],
          ['line-horizontal', ''],
          ['book-open-3', 'Libraries'],
        ] as const
      ).map(([icon, label], i) => (
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

const Icon = createIconLookup({
  file: IconFile,
  sparkle: IconSparkle,
  'circle-plus': IconCirclePlus,
  toolbox: IconToolbox,
  'line-horizontal': IconLineHorizontal,
  token: IconToken,
  'book-open-3': IconBookOpen3,
});

const Glyph = createGlyph(Icon);
