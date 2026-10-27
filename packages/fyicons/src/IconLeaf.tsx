import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLeaf = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLeaf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 8.5C2.5 5.73858 4.73858 3.5 7.5 3.5H10.1972C11.3727 3.5 12.5219 3.15205 13.5 2.5V8C13.5 11.0376 11.0376 13.5 8 13.5H7.5C4.73858 13.5 2.5 11.2614 2.5 8.5Z" stroke="currentColor" strokeLinejoin="round" /><path d="M8.5 7.5L1.5 14.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconLeaf;
