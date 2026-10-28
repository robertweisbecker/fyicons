import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLeaf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLeaf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 8C2.5 4.96243 4.96243 2.5 8 2.5H13.5V8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z" stroke="currentColor" strokeLinejoin="round" /><path d="M8.5 7.5L1.5 14.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconLeaf;
