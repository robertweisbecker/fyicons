import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTextUnderline = React.forwardRef<SVGSVGElement, IconProps>(function IconTextUnderline(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 14C12.7761 14 13 14.2239 13 14.5C13 14.7761 12.7761 15 12.5 15H3.5C3.22386 15 3 14.7761 3 14.5C3 14.2239 3.22386 14 3.5 14H12.5ZM11.5 2C11.7761 2 12 2.22386 12 2.5V7.99023C11.9999 9.03652 11.5816 10.093 10.8262 10.8408C10.0757 11.5836 9.05905 12 8 12C6.94095 12 5.92431 11.5836 5.17383 10.8408C4.41841 10.093 4.00006 9.03652 4 7.99023V2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5V7.99023C5.00006 8.78174 5.31973 9.57823 5.87695 10.1299C6.43918 10.6864 7.20277 11 8 11C8.79723 11 9.56082 10.6864 10.123 10.1299C10.6803 9.57823 10.9999 8.78174 11 7.99023V2.5C11 2.22386 11.2239 2 11.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconTextUnderline;
