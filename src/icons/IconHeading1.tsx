import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHeading1 = React.forwardRef<SVGSVGElement, IconProps>(function IconHeading1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.2227 9.08398C12.3761 8.9817 12.5737 8.97256 12.7363 9.05957C12.8986 9.14666 13 9.31578 13 9.5V14.5C13 14.7761 12.7761 15 12.5 15C12.2239 15 12 14.7761 12 14.5V10.4336L11.2773 10.916C11.0476 11.0692 10.7372 11.0071 10.584 10.7773C10.4308 10.5476 10.4929 10.2372 10.7227 10.084L12.2227 9.08398ZM5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H5V6H10V3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H11.5C11.7761 2 12 2.22386 12 2.5C12 2.77614 11.7761 3 11.5 3H11V8.5C11 8.77614 10.7761 9 10.5 9C10.2239 9 10 8.77614 10 8.5V7H5V11H5.5C5.77614 11 6 11.2239 6 11.5C6 11.7761 5.77614 12 5.5 12H3.5C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H4V3H3.5C3.22386 3 3 2.77614 3 2.5C3 2.22386 3.22386 2 3.5 2H5.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconHeading1;
