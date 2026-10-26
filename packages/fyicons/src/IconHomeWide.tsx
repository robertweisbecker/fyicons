import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 7.5 8.969 2.82a1.5 1.5 0 0 0-1.938 0L1.5 7.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 6.75v5.417c0 .736-.597 1.333-1.333 1.333H3.833A1.333 1.333 0 0 1 2.5 12.167V6.75" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 13.5V10a1.5 1.5 0 1 0-3 0v3.5" /></SvgRoot>;
});
export default IconHomeWide;
