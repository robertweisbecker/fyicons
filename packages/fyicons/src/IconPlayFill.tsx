import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play-fill"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.077 7.345 5.616 2.623a.75.75 0 0 0-1.116.655v9.445a.75.75 0 0 0 1.116.654l8.46-4.722a.75.75 0 0 0 0-1.31" /></SvgRoot>;
});
export default IconPlayFill;
