import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPilcrow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPilcrow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 2a.5.5 0 0 1 0 1H12v10h1a.5.5 0 0 1 0 1h-1a1 1 0 0 1-1-1V3H9v10a1 1 0 0 1-1 1H7a.5.5 0 0 1 0-1h1V9H6.5a3.5 3.5 0 0 1 0-7zm-7 1a2.5 2.5 0 0 0 0 5H8V3z" /></SvgRoot>;
});
export default IconPilcrow;
