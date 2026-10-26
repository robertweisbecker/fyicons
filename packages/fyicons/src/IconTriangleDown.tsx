import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTriangleDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.8 11.733c.1.134.3.134.4 0L10.7 8.4a.25.25 0 0 0-.2-.4h-5a.25.25 0 0 0-.2.4z" /></SvgRoot>;
});
export default IconTriangleDown;
