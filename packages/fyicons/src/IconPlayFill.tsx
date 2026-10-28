import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play-fill"><path fill="currentColor" d="M4 3.977C4 2.61 5.495 1.772 6.661 2.483l6.599 4.023a1.75 1.75 0 0 1 0 2.988l-6.6 4.024c-1.166.71-2.66-.129-2.661-1.494z" /></SvgRoot>;
});
export default IconPlayFill;
