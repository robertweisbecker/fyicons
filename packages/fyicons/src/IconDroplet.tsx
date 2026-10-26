import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDroplet = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDroplet(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.81 7.362 8 1.5 4.19 7.362a4.544 4.544 0 1 0 7.62 0" /></SvgRoot>;
});
export default IconDroplet;
