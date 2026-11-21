import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import {
  IconImage,
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
];

export function AssetMenu() {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="grid grid-cols-[minmax(0,1fr)]">
      <div className="rounded-xl border border-black/5 bg-surface p-2 text-ink shadow-sm">
        <div className="mb-1 text-xs text-muted">Design assets</div>
        <div className="flex h-7 items-center gap-1.5 rounded-md bg-active px-2 text-xs font-medium">
          <IconFileImage />
          logo.png
          {favorite && <IconStarFill className="ml-auto text-amber-500" />}
        </div>
        <div className="relative mt-2 flex h-24 items-center overflow-hidden rounded-lg bg-[#ffbd88] pl-4 text-[#502b54]">
          <span className="absolute -top-14 -right-8 size-36 rounded-full bg-[#ffe9b3]" />
          <span className="absolute -bottom-16 -left-6 size-36 rounded-full bg-[#e58f93]" />
          <IconImage size={32} className="relative" />
        </div>
      </div>
      <div
        role="group"
        aria-label="File actions for logo.png"
        className="relative z-1 -mt-10 mr-2 ml-auto flex w-40 max-w-[90%] flex-col items-stretch rounded-xl border border-line bg-surface p-1 text-ink shadow-lg"
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
        <Button variant="ghost" size="sm" className="justify-start font-normal">
          <IconTrash />
          Move to trash
        </Button>
      </div>
    </div>
  );
}
