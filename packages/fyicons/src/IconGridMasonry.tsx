import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridMasonry = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridMasonry(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 10C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10H6ZM13 7C13.5523 7 14 7.44771 14 8V13C14 13.5523 13.5523 14 13 14H10C9.44772 14 9 13.5523 9 13V8C9 7.44772 9.44772 7 10 7H13ZM3 11V13H6V11H3ZM10 13H13V8H10V13ZM6 2C6.55228 2 7 2.44771 7 3V8C7 8.55228 6.55228 9 6 9H3C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2H6ZM3 8H6V3H3V8ZM13 2C13.5523 2 14 2.44772 14 3V5C14 5.55228 13.5523 6 13 6H10C9.44772 6 9 5.55228 9 5V3C9 2.44772 9.44772 2 10 2H13ZM10 5H13V3H10V5Z" fill="currentColor" /></SvgRoot>;
});
export default IconGridMasonry;
