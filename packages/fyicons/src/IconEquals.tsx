import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEquals = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEquals(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="equals"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 6.5h11m-11 4h11" />{props.children}</SvgRoot>;
});
export default IconEquals;
