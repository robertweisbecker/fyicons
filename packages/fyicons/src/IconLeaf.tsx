import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLeaf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLeaf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinejoin="round" d="M2.5 8.786A6.286 6.286 0 0 1 8.786 2.5H13.5v4.714A6.286 6.286 0 0 1 7.214 13.5 4.714 4.714 0 0 1 2.5 8.786Z" /><path stroke="currentColor" strokeLinecap="round" d="m8.5 7.5-7 7" /></SvgRoot>;
});
export default IconLeaf;
