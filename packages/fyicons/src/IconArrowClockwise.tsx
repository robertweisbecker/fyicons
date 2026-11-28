import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowClockwise = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowClockwise(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-clockwise"><g fill="currentColor"><path d="M8 2a6 6 0 0 1 6 6 .5.5 0 0 1-1 0 5 5 0 1 0-5 5 .5.5 0 0 1 0 1A6 6 0 0 1 8 2" /><path d="M13.133 10.852a.5.5 0 0 0 .734 0l1.858-2.013A.5.5 0 0 0 15.358 8h-3.716a.5.5 0 0 0-.367.84z" /></g>{props.children}</SvgRoot>;
});
export default IconArrowClockwise;
