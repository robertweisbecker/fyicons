import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineOverflow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineOverflow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="line-overflow"><path fill="currentColor" d="M9 13.5a.5.5 0 0 1-1 0V10h1zm2.146-7.354a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.707-.707L12.294 9H2.5a.5.5 0 0 1 0-1h9.793l-1.146-1.146a.5.5 0 0 1 0-.708M8.5 2a.5.5 0 0 1 .5.5V7H8V2.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconLineOverflow;
