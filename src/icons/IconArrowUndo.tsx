import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowUndo = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUndo(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 3.50003C5.99996 3.08818 5.52978 2.85285 5.2002 3.09964L2.5332 5.09964C2.26654 5.29964 2.26654 5.70042 2.5332 5.90042L5.2002 7.90042C5.5298 8.14728 6 7.91193 6 7.50003V6.00003H10C11.6569 6.00003 13 7.34318 13 9.00003C12.9999 10.6568 11.6568 12 10 12H7.5C7.22386 12 7 12.2239 7 12.5C7.00005 12.7761 7.22389 13 7.5 13H10C12.2091 13 13.9999 11.2091 14 9.00003C14 6.79089 12.2091 5.00003 10 5.00003H6V3.50003Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowUndo;
