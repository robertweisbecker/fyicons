import { cn } from '../lib/utils';
import { useRef, useState } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { Toggle } from '@base-ui/react/toggle';
import { Icon } from './Icon';
import { Button, IconButton } from './ui';
import { copy, download } from '../lib/downloads';
import { icons, type IconRecord } from '../lib/catalog';
import { useMobile } from '../lib/preferences';

type Props = {
  item: IconRecord | null;
  visible: IconRecord[];
  saved: string[];
  select: (icon: IconRecord) => void;
  navigate: (step: number) => void;
  close: () => void;
  toggleSaved: (id: string) => void;
  notify: (message: string) => void;
  finalFocus: () => HTMLElement | false;
};
export function Inspector({
  item,
  visible,
  saved,
  select,
  navigate,
  close,
  toggleSaved,
  notify,
  finalFocus,
}: Props) {
  const mobile = useMobile();
  const popup = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState(true);
  const index = visible.findIndex((icon) => icon.id === item?.id);
  return (
    <Dialog.Root
      open={!!item}
      onOpenChange={(open) => {
        if (!open) close();
      }}
      modal={mobile}
      disablePointerDismissal
    >
      <Dialog.Portal>
        <Dialog.Popup
          id="inspector"
          ref={popup}
          initialFocus={popup}
          finalFocus={finalFocus}
          className={cn(
            'inspector fixed inset-y-0 right-0 z-50 flex h-dvh w-(--inspector-width) max-w-full flex-col overflow-y-auto border-l border-line bg-surface text-ink outline-none max-[760px]:w-screen max-[760px]:border-l-0',
          )}
          onKeyDown={(event) => {
            // Dialog contains keyboard events, so handle navigation inside the popup.
            if (
              event.defaultPrevented ||
              event.metaKey ||
              event.ctrlKey ||
              event.altKey
            )
              return;
            if (
              ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(
                event.key,
              )
            ) {
              event.preventDefault();
              navigate(
                event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1,
              );
            }
          }}
        >
          {item && (
            <>
              <div
                className={cn(
                  'inspector-toolbar sticky top-0 z-10 flex min-h-15 shrink-0 items-center justify-between border-b border-line bg-surface px-4 py-2 [&_button]:size-8 max-[760px]:[&_button]:size-10',
                )}
              >
                <strong className={cn('text-xs font-semibold')}>
                  Inspector
                </strong>
                <div className={cn('flex items-center gap-1')}>
                  <IconButton
                    icon="chevron-left-sm"
                    label="Previous icon"
                    disabled={index <= 0}
                    onClick={() => navigate(-1)}
                  />
                  <span
                    className={cn(
                      'min-w-15 text-center text-[11px] text-muted tabular-nums',
                    )}
                    aria-live="polite"
                  >
                    {index + 1} / {visible.length}
                  </span>
                  <IconButton
                    icon="chevron-right-sm"
                    label="Next icon"
                    disabled={index < 0 || index >= visible.length - 1}
                    onClick={() => navigate(1)}
                  />
                  <Dialog.Close
                    className={cn(
                      'icon-button ml-1 inline-flex size-9 shrink-0 items-center justify-center rounded-lg hover:bg-hover aria-pressed:bg-selection',
                    )}
                    aria-label="Close icon details"
                  >
                    <Icon name="xmark" />
                  </Dialog.Close>
                </div>
              </div>
              <div
                className={cn(
                  'inspector-preview group/preview flex h-58 shrink-0 items-center justify-center overflow-hidden bg-canvas',
                  grid ? '' : 'no-grid',
                )}
              >
                <span
                  className={cn(
                    "preview-canvas relative block size-32 shrink-0 before:pointer-events-none before:absolute before:-inset-128 before:bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] before:bg-size-[8px_8px] before:content-[''] group-[.no-grid]/preview:before:hidden after:pointer-events-none after:absolute after:inset-0 after:outline after:outline-[#638bac] after:content-[''] group-[.no-grid]/preview:after:hidden [&>svg]:relative [&>svg]:size-full",
                  )}
                >
                  <Icon name={item.id} />
                </span>
              </div>
              <div
                className={cn(
                  'flex items-center gap-2 border-y border-line px-5 py-2',
                )}
              >
                <Icon name={item.id} />
                <span className={cn('text-[11px] text-muted')}>
                  16px display
                </span>
                <Toggle
                  className={cn(
                    'ml-auto inline-flex min-h-9 items-center justify-center gap-2 text-xs text-muted hover:text-ink',
                  )}
                  aria-label="Grid and bounds"
                  title={grid ? 'Hide grid and bounds' : 'Show grid and bounds'}
                  pressed={grid}
                  onPressedChange={setGrid}
                >
                  <Icon name={grid ? 'eye-open' : 'eye-closed'} />
                  Grid
                </Toggle>
              </div>
              <div className={cn('p-5 pt-6')}>
                <Dialog.Title
                  className={cn(
                    'text-xl font-semibold tracking-tight break-words',
                  )}
                >
                  {item.name}
                </Dialog.Title>
                <Dialog.Description
                  className={cn('mt-1.5 mb-6 text-xs text-muted')}
                >
                  {item.category}
                </Dialog.Description>
                <dl className={cn('space-y-3 text-[11px]')}>
                  {[
                    ['Figma name', item.originalName],
                    ['Node', item.id],
                    ['Source canvas', '16 × 16px'],
                    ['Filename', item.filename],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className={cn('grid grid-cols-[86px_1fr] gap-4')}
                    >
                      <dt className={cn('text-muted')}>{label}</dt>
                      <dd className={cn('font-mono leading-relaxed break-all')}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {item.duplicate && (
                  <div className={cn('my-5')}>
                    <p className={cn('mb-2 text-xs text-muted')}>
                      Variants with the same Figma name
                    </p>
                    <div className={cn('flex flex-wrap gap-2')}>
                      {icons
                        .filter((icon) => icon.baseName === item.baseName)
                        .map((icon) => (
                          <Button
                            key={icon.id}
                            variant="outline"
                            className={cn('text-xs')}
                            aria-pressed={icon.id === item.id}
                            aria-label={'Compare variant ' + icon.id}
                            onClick={() => select(icon)}
                          >
                            <Icon name={icon.id} />
                            {icon.id}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
                <div className={cn('mt-7 flex flex-wrap items-center gap-2')}>
                  <Button
                    variant="primary"
                    onClick={async () =>
                      notify(
                        (await copy(item.svg))
                          ? 'SVG copied'
                          : 'Clipboard unavailable. Use Download SVG.',
                      )
                    }
                  >
                    <Icon name="copy" />
                    Copy SVG
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      download(item.svg, item.filename, 'image/svg+xml')
                    }
                  >
                    <Icon name="download-square" />
                    Download SVG
                  </Button>
                  <Toggle
                    className={cn(
                      'icon-button ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-lg hover:bg-hover aria-pressed:bg-selection',
                    )}
                    aria-label={
                      saved.includes(item.id)
                        ? 'Remove from shortlist'
                        : 'Add to shortlist'
                    }
                    pressed={saved.includes(item.id)}
                    onPressedChange={() => toggleSaved(item.id)}
                  >
                    <Icon
                      name={
                        saved.includes(item.id) ? 'bookmark-fill' : 'bookmark'
                      }
                    />
                  </Toggle>
                </div>
                <a
                  className={cn(
                    'mt-6 flex items-center gap-2 text-[11px] text-muted hover:text-ink',
                  )}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open component in Figma
                  <Icon name="external-link" />
                </a>
                <p className={cn('mt-7 text-[11px] text-muted')}>
                  ← → Previous / next · Esc Close
                </p>
              </div>
            </>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
