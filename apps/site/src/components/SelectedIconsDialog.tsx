import { useRef, useState, type MouseEvent } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { Icon } from './Icon';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getIconDisplayName, type IconRecord } from '@/lib/catalog';

export function SelectedIconsDialog({
  icons,
  onRemove,
  onClear,
  onDownload,
  packing,
}: {
  icons: IconRecord[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onDownload: () => Promise<boolean>;
  packing: boolean;
}) {
  const [open, setOpen] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);

  function remove(id: string, event: MouseEvent<HTMLButtonElement>) {
    const row = event.currentTarget.closest('li');
    const next = (
      row?.nextElementSibling ?? row?.previousElementSibling
    )?.querySelector('button');
    (next ?? cancel.current)?.focus();
    onRemove(id);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger render={<Button variant="text" size="sm" />}>
        <Icon name="files-tilt" />
        Selected
        <Badge variant="elevated">{icons.length}</Badge>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-70 bg-black/20 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none" />
        <Dialog.Popup
          data-selection-dialog=""
          initialFocus={title}
          className="fixed top-1/2 left-1/2 z-70 flex max-h-[min(40rem,85dvh)] w-[min(30rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-surface text-ink shadow-xl outline-1 outline-ink/10 transition-[opacity,scale] duration-150 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 motion-reduce:transition-none"
        >
          <div className="shrink-0 border-b border-line p-5">
            <div className="flex items-center justify-between gap-4">
              <Dialog.Title
                ref={title}
                tabIndex={-1}
                className="text-base font-semibold outline-none"
              >
                <Icon name="file-zip" className="me-2 inline size-[1lh]" />
                Download{' '}
                {icons.length &&
                  `${icons.length} ${icons.length === 1 ? 'icon' : 'icons'}`}
              </Dialog.Title>
              <Button
                variant="ghost"
                className="text-red-500 dark:text-red-400"
                disabled={!icons.length || packing}
                onClick={() => {
                  cancel.current?.focus();
                  onClear();
                }}
              >
                <Icon name="trash" />
                Clear
              </Button>
            </div>
            {/* {icons.length && (
              <Dialog.Description className="mt-1 text-sm text-muted">
                {`${icons.length} ${icons.length === 1 ? 'icon' : 'icons'} ready to download.`}
              </Dialog.Description>
            )} */}
          </div>
          {icons.length ? (
            <ul
              role="list"
              aria-label="Selected icons"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2"
            >
              {icons.map((icon) => {
                const name = getIconDisplayName(icon);
                return (
                  <li
                    key={icon.id}
                    className="flex items-center gap-3 rounded-lg px-3 py-2"
                  >
                    <Icon name={icon.id} />
                    <span
                      className="min-w-0 flex-1 truncate text-sm"
                      title={name}
                    >
                      {name} ∙ {icon.id}.svg
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Remove ${name}`}
                      disabled={packing}
                      onClick={(event) => remove(icon.id, event)}
                    >
                      <Icon name="circle-minus" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex min-h-40 flex-col items-center justify-center gap-3 p-6 text-sm text-muted">
              <Icon name="files-tilt" size={32} />
              No icons selected.
            </div>
          )}
          <div className="flex shrink-0 justify-end gap-2 border-t border-line p-4">
            <Dialog.Close render={<Button ref={cancel} variant="outline" />}>
              Cancel
            </Dialog.Close>
            <Button
              disabled={!icons.length || packing}
              onClick={async () => {
                if (await onDownload()) setOpen(false);
              }}
            >
              <Icon
                name={packing ? 'spinner' : 'download-square'}
                className={
                  packing
                    ? 'animate-spin motion-reduce:animate-none'
                    : undefined
                }
              />
              {packing ? 'Preparing…' : 'Download'}
            </Button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
