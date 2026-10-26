import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBolt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBolt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.088 1.217A.5.5 0 0 1 9 1.5V6h3.05a1 1 0 0 1 .823 1.566l-4.96 7.217A.5.5 0 0 1 7 14.5V10H3.95a1 1 0 0 1-.823-1.566zM3.95 9H7.5a.5.5 0 0 1 .5.5v3.39L12.05 7H8.5a.5.5 0 0 1-.5-.5V3.11z" /></SvgRoot>;
});
export default IconBolt;
