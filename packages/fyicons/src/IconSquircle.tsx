import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquircle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquircle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squircle"><path stroke="currentColor" d="M8 1.5C2.647 1.5 1.5 2.647 1.5 8s1.147 6.5 6.5 6.5 6.5-1.147 6.5-6.5S13.353 1.5 8 1.5Z" />{props.children}</SvgRoot>;
});
export default IconSquircle;
