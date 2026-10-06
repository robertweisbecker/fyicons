import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLineHorizontal = React.forwardRef<SVGSVGElement, IconProps>(function IconLineHorizontal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M15 8.5C15 8.77614 14.7761 9 14.5 9H1.5C1.22386 9 1 8.77614 1 8.5C1 8.22386 1.22386 8 1.5 8H14.5C14.7761 8 15 8.22386 15 8.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLineHorizontal;
