import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUndo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUndo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="undo"><path d="M5.85352 2.14637C5.65824 1.95126 5.3417 1.95116 5.14648 2.14637L2.14648 5.14637C1.95137 5.3416 1.9514 5.65817 2.14648 5.85341L5.14648 8.85438C5.34165 9.04929 5.65831 9.04922 5.85352 8.85438C6.04878 8.65912 6.04878 8.34164 5.85352 8.14637L3.70703 5.99989H9.5C11.433 5.99989 12.9999 7.56695 13 9.49989C13 11.4329 11.433 12.9999 9.5 12.9999H7.5C7.2239 12.9999 7.00007 13.2238 7 13.4999C7 13.776 7.22386 13.9999 7.5 13.9999H9.5C11.9853 13.9999 14 11.9852 14 9.49989C13.9999 7.01466 11.9852 4.99989 9.5 4.99989H3.70703L5.85352 2.85341C6.04878 2.65814 6.04878 2.34164 5.85352 2.14637Z" fill="currentColor" /></SvgRoot>;
});
export default IconUndo;
