import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInfoFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInfoFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="info-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.5 6a.5.5 0 0 0 0 1h.434l-.369 2.941A.942.942 0 0 0 8.5 12a.5.5 0 0 0 .065-.994l.36-2.882A1 1 0 0 0 7.935 7zM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconInfoFill;
