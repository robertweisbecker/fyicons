import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSearch = React.forwardRef<SVGSVGElement, IconProps>(function IconSearch(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56246 10.6304 8.5378 10.0146 9.30762L10.6035 9.89648L10.6465 9.85352C10.8417 9.65835 11.1583 9.65832 11.3535 9.85352L13.749 12.25C14.1631 12.6642 14.1632 13.3358 13.749 13.75C13.3348 14.1641 12.6632 14.1642 12.249 13.75L9.85352 11.3535C9.6583 11.1582 9.65827 10.8417 9.85352 10.6465L9.89648 10.6035L9.30762 10.0146C8.5378 10.6304 7.56246 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2ZM6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconSearch;
