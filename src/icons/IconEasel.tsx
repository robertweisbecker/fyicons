import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEasel = React.forwardRef<SVGSVGElement, IconProps>(function IconEasel(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.5 1C9.32843 1 10 1.67157 10 2.5V3H12C12.5523 3 13 3.44772 13 4V9H13.5C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H11.1406L11.9844 13.3799C12.0507 13.6475 11.8877 13.9195 11.6201 13.9863C11.3527 14.0527 11.0808 13.8893 11.0137 13.6221L10.1094 10H5.88965L4.98438 13.6221C4.91698 13.8893 4.64547 14.0522 4.37793 13.9854C4.11072 13.9184 3.94768 13.6472 4.01367 13.3799L4.8584 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H3V4C3 3.44772 3.44772 3 4 3H6V2.5C6 1.67157 6.67157 1 7.5 1H8.5ZM4 9H12V4H4V9ZM7.5 2C7.22386 2 7 2.22386 7 2.5V3H9V2.5C9 2.22386 8.77614 2 8.5 2H7.5Z" fill="currentColor" /><path d="M11 11.5H5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconEasel;
