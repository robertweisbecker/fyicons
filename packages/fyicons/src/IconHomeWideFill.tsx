import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeWideFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeWideFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.005 2.287a1.75 1.75 0 0 1 1.992 0l.125.095 5.52 4.6a1 1 0 0 1-.64 1.768v3.75a1.5 1.5 0 0 1-1.5 1.499h-2.004a1 1 0 0 1-1-1v-2.501a1.5 1.5 0 0 0-3 0V13a1 1 0 0 1-1 1H3.501a1.5 1.5 0 0 1-1.499-1.499V8.75h-.001a1 1 0 0 1-.64-1.769l5.519-4.6z" /></SvgRoot>;
});
export default IconHomeWideFill;
