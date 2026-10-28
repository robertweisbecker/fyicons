import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="search"><path d="M6.5 1C9.53757 1 12 3.46243 12 6.5C12 7.66897 11.6335 8.75153 11.0117 9.64258C11.0814 9.68412 11.1481 9.73399 11.208 9.79395L14.458 13.0439C14.8482 13.4345 14.8484 14.0676 14.458 14.458C14.0676 14.8483 13.4345 14.8481 13.0439 14.458L9.79395 11.208C9.73401 11.1481 9.68412 11.0813 9.64258 11.0117C8.75153 11.6335 7.66897 12 6.5 12C3.46243 12 1 9.53757 1 6.5C1 3.46243 3.46243 1 6.5 1ZM6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconSearch;
