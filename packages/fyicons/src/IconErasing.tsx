import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconErasing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconErasing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="erasing"><path fill="currentColor" d="M3.001 14h-1.5a.5.5 0 0 1 0-1h1.5zM8.939 1.353a1.5 1.5 0 0 1 2.121 0l3.586 3.586a1.5 1.5 0 0 1 0 2.121l-6.792 6.793A.5.5 0 0 1 7.5 14h-2a.5.5 0 0 1-.326-.12L2.93 11.955a2.5 2.5 0 0 1-.544-3.139l1.18-2.064.037-.056.043-.05zM12 14h-2v-1h2zm2.501-1a.5.5 0 0 1 0 1h-1.5v-1zM3.254 9.313a1.5 1.5 0 0 0 .326 1.883L5.685 13h1.608l1-1-4.185-4.185zm7.1-7.253a.5.5 0 0 0-.708 0L4.706 7 9 11.293l4.94-4.94a.5.5 0 0 0 0-.707z" />{props.children}</SvgRoot>;
});
export default IconErasing;
