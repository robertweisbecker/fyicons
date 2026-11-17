import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRaysCorner = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRaysCorner(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="rays-corner"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 9.5-4-4m3 8h-6m11-11v6" />{props.children}</SvgRoot>;
});
export default IconRaysCorner;
