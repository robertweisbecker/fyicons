import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSearch = React.forwardRef<SVGSVGElement, IconProps>(function IconSearch(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.83872 11.5206 9.06482 10.7256 10.0186L11.2412 10.5342C11.5748 10.4451 11.9453 10.5313 12.207 10.793L14.707 13.293C15.0976 13.6835 15.0976 14.3165 14.707 14.707C14.3165 15.0976 13.6835 15.0976 13.293 14.707L10.793 12.207C10.5313 11.9453 10.4451 11.5748 10.5342 11.2412L10.0186 10.7256C9.06482 11.5206 7.83872 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconSearch;
