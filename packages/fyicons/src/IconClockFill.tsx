import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClockFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClockFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8.5 3C8.22386 3 8 3.22386 8 3.5V8H4.5C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H8.5C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 8.77614 3 8.5 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconClockFill;
