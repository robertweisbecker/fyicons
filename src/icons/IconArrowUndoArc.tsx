import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowUndoArc = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUndoArc(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.99707 3C5.23567 3 2.9971 5.2386 2.99707 8H1.60059C1.37789 8.00003 1.26637 8.26927 1.42383 8.42676L3.32031 10.3232C3.41794 10.4208 3.5762 10.4208 3.67383 10.3232L5.57031 8.42676C5.72777 8.26927 5.61625 8.00003 5.39355 8H3.99707C3.9971 5.79089 5.78795 4 7.99707 4C10.2062 4 11.997 5.79089 11.9971 8C11.997 10.2091 10.2062 12 7.99707 12C7.72095 12 7.4971 12.2239 7.49707 12.5C7.4971 12.7761 7.72095 13 7.99707 13C10.7585 13 12.997 10.7614 12.9971 8C12.997 5.2386 10.7585 3 7.99707 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowUndoArc;
