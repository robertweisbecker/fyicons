import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontSmallCaps = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontSmallCaps(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V4H7v8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H6V4H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm3 4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-1v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h.5V8h-1v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconFontSmallCaps;
