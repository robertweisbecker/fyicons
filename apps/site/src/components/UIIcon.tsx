'use client';
import {
  IconFileText,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconAtom,
  IconAtomReact,
  IconBookOpen,
  IconBookmark,
  IconBookmarkFill,
  IconChevronLeft,
  IconChevronRight,
  IconCircleXFill,
  IconDownloadSquare,
  IconEye,
  IconEyeClosed,
  IconGhost,
  IconInfo,
  IconKbdReturn,
  IconLayoutPin,
  IconLayoutPinned,
  IconNote,
  IconPalette,
  IconSearch,
  IconTerminal,
  IconX,
} from 'fyicons';

import type { ComponentProps, ReactElement } from 'react';
import { createIconLookup } from '@/components/icon-lookup';

/** Interface icon for the site chrome and the shared controls. */
export const UIIcon = createIconLookup({
  'file-text': IconFileText,
  'arrow-down': IconArrowDown,
  'arrow-left': IconArrowLeft,
  'arrow-right': IconArrowRight,
  atom: IconAtom,
  'atom-react': IconAtomReact,
  'book-open': IconBookOpen,
  bookmark: IconBookmark,
  'bookmark-fill': IconBookmarkFill,
  'chevron-left': IconChevronLeft,
  'chevron-right': IconChevronRight,
  'circle-x-fill': IconCircleXFill,
  'download-square': IconDownloadSquare,
  eye: IconEye,
  'eye-closed': IconEyeClosed,
  ghost: IconGhost,
  info: IconInfo,
  'kbd-return': IconKbdReturn,
  'layout-pin': IconLayoutPin,
  'layout-pinned': IconLayoutPinned,
  note: IconNote,
  palette: IconPalette,
  search: IconSearch,
  terminal: IconTerminal,
  x: IconX,
});

export type UIIconName = ComponentProps<typeof UIIcon>['name'];

/** A `UIIcon` name, or an element for an icon outside that set. */
export type IconSlot = UIIconName | ReactElement;
