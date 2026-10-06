import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCreditCard = React.forwardRef<SVGSVGElement, IconProps>(function IconCreditCard(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 3C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5C1 4.11929 2.11929 3 3.5 3H12.5ZM2 10.5C2 11.3284 2.67157 12 3.5 12H12.5C13.3284 12 14 11.3284 14 10.5V8H2V10.5ZM5.5 10C5.77614 10 6 10.2239 6 10.5C6 10.7761 5.77614 11 5.5 11H3.5C3.22386 11 3 10.7761 3 10.5C3 10.2239 3.22386 10 3.5 10H5.5ZM12.5 9C12.7761 9 13 9.22386 13 9.5V10.5C13 10.7761 12.7761 11 12.5 11H10.5C10.2239 11 10 10.7761 10 10.5V9.5C10 9.22386 10.2239 9 10.5 9H12.5ZM3.5 4C2.67157 4 2 4.67157 2 5.5V6H14V5.5C14 4.67157 13.3284 4 12.5 4H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconCreditCard;
