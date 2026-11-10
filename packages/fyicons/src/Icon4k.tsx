import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const Icon4k = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function Icon4k(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="4k"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm6.5.938c.31 0 .563.251.563.562v1.814l2.023-2.195a.563.563 0 0 1 .828.762l-1.726 1.873 1.721 2.459a.5.5 0 0 1-.818.574l-1.597-2.281-.431.47V10.5a.562.562 0 1 1-1.126 0v-5c0-.31.252-.562.563-.562M6.1 5.2a.5.5 0 0 1 .9.3V9h.5a.5.5 0 0 1 0 1H7v.5a.5.5 0 0 1-1 0V10H3.5a.5.5 0 0 1-.4-.8zM4.5 9H6V7z" /></SvgRoot>;
});
export default Icon4k;
