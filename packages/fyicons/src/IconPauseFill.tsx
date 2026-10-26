import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPauseFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPauseFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm5.5 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" /></SvgRoot>;
});
export default IconPauseFill;
