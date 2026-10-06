import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconMinus = React.forwardRef<SVGSVGElement, IconProps>(function IconMinus(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 8C13 8.27614 12.7761 8.5 12.5 8.5H3.5C3.22386 8.5 3 8.27614 3 8C3 7.72386 3.22386 7.5 3.5 7.5H12.5C12.7761 7.5 13 7.72386 13 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconMinus;
