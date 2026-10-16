import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGift = React.forwardRef<SVGSVGElement, IconProps>(function IconGift(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 1C7.49865 1 8.35729 1.58709 8.75781 2.43359C9.09909 2.16259 9.53036 2 10 2C11.1046 2 12 2.89543 12 4C12 4.36464 11.9009 4.70563 11.7305 5H13C13.5523 5 14 5.44772 14 6V8C14 8.55228 13.5523 9 13 9V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V9C2.44772 9 2 8.55228 2 8V6C2 5.44772 2.44772 5 3 5H4.50391C4.18917 4.58183 4 4.06369 4 3.5C4 2.11929 5.11929 1 6.5 1ZM9 14H11C11.5523 14 12 13.5523 12 13V9H9V14ZM4 13C4 13.5523 4.44772 14 5 14H8V9H4V13ZM3 8H8V6H3V8ZM9 8H13V6H9V8ZM6.5 2C5.67157 2 5 2.67157 5 3.5C5 4.32843 5.67157 5 6.5 5H8V3.5C8 2.67157 7.32843 2 6.5 2ZM10 3C9.44772 3 9 3.44772 9 4V5H10C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconGift;
