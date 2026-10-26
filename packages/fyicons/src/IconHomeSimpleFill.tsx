import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeSimpleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeSimpleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.292 1.957a1 1 0 0 1 1.414 0L13.56 6.81c.28.282.439.664.439 1.062V13a1 1 0 0 1-1 1h-3a.5.5 0 0 1-.5-.5V9.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v3.75a.5.5 0 0 1-.5.5h-3a1 1 0 0 1-1-1V7.872c0-.398.158-.78.44-1.062z" /></SvgRoot>;
});
export default IconHomeSimpleFill;
