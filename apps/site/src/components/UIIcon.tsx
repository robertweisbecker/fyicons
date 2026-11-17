'use client';
import FileTextIcon from 'fyicons/icons/IconFileText';
import { createContext, useContext, type ComponentType } from 'react';
import { createIconLookup, type IconProps } from './createIconLookup';

import Glyph0 from 'fyicons/icons/IconMenuAlt';
import Glyph1 from 'fyicons/icons/IconArrowDown';
import Glyph2 from 'fyicons/icons/IconArrowLeft';
import Glyph3 from 'fyicons/icons/IconArrowRestart';
import Glyph4 from 'fyicons/icons/IconArrowRevert';
import Glyph5 from 'fyicons/icons/IconArrowRight';
import Glyph6 from 'fyicons/icons/IconArrowX';
import Glyph7 from 'fyicons/icons/IconArrowY';
import Glyph8 from 'fyicons/icons/IconAtom';
import Glyph9 from 'fyicons/icons/IconAtomReact';
import Glyph10 from 'fyicons/icons/IconBookOpen';
import Glyph11 from 'fyicons/icons/IconBookmark';
import Glyph12 from 'fyicons/icons/IconBookmarkFill';
import Glyph13 from 'fyicons/icons/IconBorderOuter';
import Glyph14 from 'fyicons/icons/IconCheck';
import Glyph15 from 'fyicons/icons/IconChevronLeft';
import Glyph16 from 'fyicons/icons/IconChevronRight';
import Glyph17 from 'fyicons/icons/IconCircleXFill';
import Glyph18 from 'fyicons/icons/IconCopiedFill';
import Glyph19 from 'fyicons/icons/IconCopy';
import Glyph20 from 'fyicons/icons/IconDownload';
import Glyph21 from 'fyicons/icons/IconDownloadSquare';
import Glyph22 from 'fyicons/icons/IconEye';
import Glyph23 from 'fyicons/icons/IconEyeClosed';
import Glyph24 from 'fyicons/icons/IconFireAltFill';
import Glyph25 from 'fyicons/icons/IconFolderAdd';
import Glyph26 from 'fyicons/icons/IconGhost';
import Glyph27 from 'fyicons/icons/IconGlobe';
import Glyph28 from 'fyicons/icons/IconGrid';
import Glyph29 from 'fyicons/icons/IconGridFill';
import Glyph30 from 'fyicons/icons/IconHistory';
import Glyph31 from 'fyicons/icons/IconHome';
import Glyph32 from 'fyicons/icons/IconInfo';
import Glyph33 from 'fyicons/icons/IconKbdReturn';
import Glyph34 from 'fyicons/icons/IconLayoutPin';
import Glyph35 from 'fyicons/icons/IconLayoutPinned';
import Glyph36 from 'fyicons/icons/IconLink';
import Glyph37 from 'fyicons/icons/IconLinkSide';
import Glyph38 from 'fyicons/icons/IconLinkSideUnlink';
import Glyph39 from 'fyicons/icons/IconLock';
import Glyph40 from 'fyicons/icons/IconLockOpen';
import Glyph41 from 'fyicons/icons/IconNote';
import Glyph42 from 'fyicons/icons/IconPalette';
import Glyph43 from 'fyicons/icons/IconPaperclipTilt';
import Glyph44 from 'fyicons/icons/IconSearch';
import Glyph45 from 'fyicons/icons/IconSend';
import Glyph46 from 'fyicons/icons/IconSettingsSmall';
import Glyph47 from 'fyicons/icons/IconShadow';
import Glyph48 from 'fyicons/icons/IconSortDown';
import Glyph49 from 'fyicons/icons/IconTag';
import Glyph50 from 'fyicons/icons/IconTerminal';
import Glyph51 from 'fyicons/icons/IconTerminalSquare';
import Glyph52 from 'fyicons/icons/IconX';
const ChromeIcon = createIconLookup({
  'file-text': { Component: FileTextIcon, id: '102:5434' },
  'menu-alt': { Component: Glyph0, id: '604:5223' },
  'arrow-down': { Component: Glyph1, id: '518:4788' },
  'arrow-left': { Component: Glyph2, id: '518:4811' },
  'arrow-restart': { Component: Glyph3, id: '101:4348' },
  'arrow-revert': { Component: Glyph4, id: '334:6730' },
  'arrow-right': { Component: Glyph5, id: '518:4810' },
  'arrow-x': { Component: Glyph6, id: '518:4795' },
  'arrow-y': { Component: Glyph7, id: '510:4786' },
  atom: { Component: Glyph8, id: '408:11465' },
  'atom-react': { Component: Glyph9, id: '360:11316' },
  'book-open': { Component: Glyph10, id: '325:4648' },
  bookmark: { Component: Glyph11, id: '124:2571' },
  'bookmark-fill': { Component: Glyph12, id: '506:2914' },
  'border-outer': { Component: Glyph13, id: '114:2149' },
  check: { Component: Glyph14, id: '96:1604' },
  'chevron-left': { Component: Glyph15, id: '546:8620' },
  'chevron-right': { Component: Glyph16, id: '506:3912' },
  'circle-x-fill': { Component: Glyph17, id: '297:3620' },
  'copied-fill': { Component: Glyph18, id: '892:30476' },
  copy: { Component: Glyph19, id: '245:15242' },
  download: { Component: Glyph20, id: '559:8913' },
  'download-square': { Component: Glyph21, id: '343:9460' },
  eye: { Component: Glyph22, id: '120:2551' },
  'eye-closed': { Component: Glyph23, id: '120:2553' },
  'fire-alt-fill': { Component: Glyph24, id: '1252:11274' },
  'folder-add': { Component: Glyph25, id: '747:3749' },
  ghost: { Component: Glyph26, id: '727:314' },
  globe: { Component: Glyph27, id: '158:11702' },
  grid: { Component: Glyph28, id: '102:4381' },
  'grid-fill': { Component: Glyph29, id: '811:8579' },
  history: { Component: Glyph30, id: '732:398' },
  home: { Component: Glyph31, id: '545:8586' },
  info: { Component: Glyph32, id: '132:4339' },
  'kbd-return': { Component: Glyph33, id: '505:502' },
  'layout-pin': { Component: Glyph34, id: '604:5245' },
  'layout-pinned': { Component: Glyph35, id: '604:5252' },
  link: { Component: Glyph36, id: '58:9555' },
  'link-side': { Component: Glyph37, id: '1042:708' },
  'link-side-unlink': { Component: Glyph38, id: '1042:735' },
  lock: { Component: Glyph39, id: '101:4339' },
  'lock-open': { Component: Glyph40, id: '193:13627' },
  note: { Component: Glyph41, id: '101:4342' },
  palette: { Component: Glyph42, id: '479:1759' },
  'paperclip-tilt': { Component: Glyph43, id: '315:17581' },
  search: { Component: Glyph44, id: '101:4349' },
  send: { Component: Glyph45, id: '600:4613' },
  'settings-small': { Component: Glyph46, id: '178:12405' },
  shadow: { Component: Glyph47, id: '130:2688' },
  'sort-down': { Component: Glyph48, id: '388:10428' },
  tag: { Component: Glyph49, id: '118:2265' },
  terminal: { Component: Glyph50, id: '749:5013' },
  'terminal-square': { Component: Glyph51, id: '604:5134' },
  x: { Component: Glyph52, id: '506:3897' },
});
export const IconRendererContext =
  createContext<ComponentType<IconProps> | null>(null);
export function Icon(props: IconProps) {
  const Renderer = useContext(IconRendererContext) ?? ChromeIcon;
  return <Renderer {...props} />;
}
