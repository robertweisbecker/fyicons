import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play-fill"><path fill="currentColor" d="M3 3.277a1.25 1.25 0 0 1 1.86-1.091l8.46 4.722a1.25 1.25 0 0 1 0 2.184l-8.46 4.723A1.25 1.25 0 0 1 3 12.723z" />{props.children}</SvgRoot>;
});
export default IconPlayFill;
