import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackground = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackground(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={2} /><path stroke="currentColor" strokeLinecap="round" d="m12.5 3.5-9.25 9.25M10.5 2.5l-8 8m5-8-5 5m11-2-8 8m8-5-5 5" />{props.children}</SvgRoot>;
});
export default IconBackground;
