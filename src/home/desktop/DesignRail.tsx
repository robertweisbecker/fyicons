import { Glyph } from '../Study';

/** The compact rail moved from the standalone Examples study. */
export function DesignRail() {
  return (
    <div
      className="flex w-15 shrink-0 flex-col items-center gap-3 border-r border-line bg-surface p-2 text-[10px] text-muted"
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
        ['book-open', 'Libraries'],
      ].map(([icon, label], i) => (
        <div key={i} className="flex flex-col items-center gap-0">
          <Glyph
            name={icon}
            className={
              label === 'File'
                ? 'size-10 rounded-lg bg-selection text-control-accent'
                : !label
                  ? 'text-border'
                  : ''
            }
          />
          {label && (
            <span className={label === 'File' ? 'text-ink' : ''}>{label}</span>
          )}
        </div>
      ))}
    </div>
  );
}
