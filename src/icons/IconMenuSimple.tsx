import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconMenuSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconMenuSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 10C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5C2 10.2239 2.22386 10 2.5 10H10.5ZM13.5 5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H2.5C2.22386 6 2 5.77614 2 5.5C2 5.22386 2.22386 5 2.5 5H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconMenuSimple;
