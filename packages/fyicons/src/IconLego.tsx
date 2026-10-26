import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLego = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLego(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 3A1.5 1.5 0 0 1 7 4.5v1h2v-1A1.5 1.5 0 0 1 10.5 3h1A1.5 1.5 0 0 1 13 4.5v1h.5A1.5 1.5 0 0 1 15 7v5.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7a1.5 1.5 0 0 1 1.5-1.5H3v-1A1.5 1.5 0 0 1 4.5 3zm-3 3.5A.5.5 0 0 0 2 7v5h12V7a.5.5 0 0 0-.5-.5zm2-2.5a.5.5 0 0 0-.5.5v1h2v-1a.5.5 0 0 0-.5-.5zm6 0a.5.5 0 0 0-.5.5v1h2v-1a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconLego;
