import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSideUnlink = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSideUnlink(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 4.5H4a3.5 3.5 0 1 0 0 7h1.5m5 0H12a3.5 3.5 0 1 0 0-7h-1.5" /></SvgRoot>;
});
export default IconLinkSideUnlink;
