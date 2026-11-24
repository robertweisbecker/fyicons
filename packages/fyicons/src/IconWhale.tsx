import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWhale = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWhale(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="whale"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.5 7.5-.843-1.488A4 4 0 0 0 7.11 4.095L5.2 3.637a3 3 0 0 0-3.7 2.917V9.5h3m7.5-5-2.5-1v1.292a3 3 0 0 0 .317 1.341L10.5 7.5" /><path fill="currentColor" d="M5.375 8a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5c.128 1.95 1.455 3 3 3v-2m2.5-7 2.5-1c0 1.605 0 3.21-1.034 3.782-.484.267-.966.666-.966 1.218m0 0c0 2.333-2 3-3 3m-2.5 1c-4.5 0-4.5-3-4.5-3" />{props.children}</SvgRoot>;
});
export default IconWhale;
