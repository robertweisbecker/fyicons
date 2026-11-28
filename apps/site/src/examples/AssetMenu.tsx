import { useId, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import {
  IconEllipsis,
  IconFileImage,
  IconStar,
  IconStarFill,
  IconDuplicate,
  IconPencil,
  IconTrash,
  IconCopy,
  IconClipboard,
  IconScissorsCut,
} from 'fyicons';

const commands = [
  ['Cut', IconScissorsCut],
  ['Copy', IconCopy],
  ['Paste', IconClipboard],
  ['Duplicate', IconDuplicate],
  ['Rename', IconPencil],
] as const;

export function AssetMenu() {
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(true);
  const actions = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="relative isolate grid justify-items-end px-4 pt-5 pb-7"
      onKeyDown={(event) => {
        if (open && event.key === 'Escape') {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-1 grid auto-rows-fr grid-cols-3 gap-2 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]"
      >
        {[
          '#ffbd88',
          '#afcdc9',
          '#d5c7e4',
          '#dccb91',
          '#b9d1dc',
          '#e7aeaa',
          '#c7d1a8',
          '#ecb797',
          '#c9c0d7',
          '#c3ced2',
          '#e4bfaf',
          '#c1d5b5',
        ].map((color, i) => (
          <span
            key={color}
            style={{ backgroundColor: color }}
            className="relative overflow-hidden rounded-md ring-2 ring-white/70"
          >
            <span
              className={
                'absolute -top-1/3 size-[80%] rounded-full bg-[#fff0c7]/80 ' +
                (i % 2 ? '-left-2' : '-right-2')
              }
            />
            <span
              className={
                'absolute -bottom-1/3 size-[92%] rounded-full bg-[#985875]/40 ' +
                (i % 3 ? '-right-4' : '-left-4')
              }
            />
          </span>
        ))}
      </div>
      <div className="relative flex items-center gap-2 rounded-lg bg-surface py-1 pr-1 pl-2.5 text-xs font-medium text-ink shadow-sm ring-1 ring-ink/10">
        <IconFileImage />
        logo.png
        {favorite && <IconStarFill className="text-amber-500" />}
        <Button
          ref={trigger}
          size="icon-xs"
          variant="ghost"
          aria-label="File actions for logo.png"
          aria-expanded={open}
          aria-controls={actions}
          className="bg-hover"
          onClick={() => setOpen(!open)}
        >
          <IconEllipsis />
        </Button>
      </div>
      <div
        role="group"
        id={actions}
        aria-label="File actions for logo.png"
        className={
          'relative mt-1.5 flex w-40 max-w-full flex-col items-stretch rounded-xl bg-surface p-1 text-ink shadow-md ring-1 ring-ink/10' +
          (open ? '' : ' invisible')
        }
      >
        {commands.map(([name, Glyph]) => (
          <Button
            key={name}
            variant="ghost"
            size="sm"
            className="justify-start font-normal"
          >
            <Glyph />
            {name}
          </Button>
        ))}
        <Toggle
          pressed={favorite}
          onPressedChange={setFavorite}
          size="sm"
          className="justify-start font-normal"
        >
          <span className="group-data-pressed/toggle:text-amber-500 motion-safe:transition-[color,scale] motion-safe:duration-150 motion-safe:ease-out motion-safe:group-data-pressed/toggle:scale-110">
            {favorite ? <IconStarFill /> : <IconStar />}
          </span>
          Favorite
        </Toggle>
        <hr className="my-1 border-line" />
        <Button
          variant="ghost"
          size="sm"
          className="justify-start font-normal text-red-700 dark:text-red-400"
        >
          <IconTrash />
          Move to trash
        </Button>
      </div>
    </div>
  );
}
