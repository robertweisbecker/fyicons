import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconItalic = React.forwardRef<SVGSVGElement, IconProps>(function IconItalic(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 2C12.7761 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H10.3496L6.71387 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H3.5C3.22386 14 3 13.7761 3 13.5C3 13.2239 3.22386 13 3.5 13H5.65039L9.28613 3H6.5C6.22386 3 6 2.77614 6 2.5C6 2.22386 6.22386 2 6.5 2H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconItalic;
