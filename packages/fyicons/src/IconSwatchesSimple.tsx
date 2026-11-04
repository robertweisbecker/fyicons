import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwatchesSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwatchesSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="swatches-simple"><path fill="currentColor" d="M6 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 11V3.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V11a2.5 2.5 0 0 0 5 0m0-8 3.26 1.45a1.2 1.2 0 0 1 .542 1.713L7.5 12.5" /><path stroke="currentColor" strokeLinejoin="round" d="m11.5 5.5 1.818 3.09a1.2 1.2 0 0 1-.548 1.706L6 13.3" /></SvgRoot>;
});
export default IconSwatchesSimple;
