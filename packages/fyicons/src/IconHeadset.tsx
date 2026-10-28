import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadset = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadset(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.004 6a2 2 0 0 1 2 2v1c0 .741-.405 1.387-1.004 1.732v.768a2.5 2.5 0 0 1-2.5 2.5H8v-1h2.5a1.5 1.5 0 0 0 1.5-1.5V11h-.746c-.69 0-1.25-.56-1.25-1.25v-2.5c0-.69.56-1.25 1.25-1.25zM4.749 6c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-.75a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm-.75 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h.75a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zm7.255 0a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.75a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" /><path fill="currentColor" d="M5 12.75a.75.75 0 0 1 .75-.75H8a1 1 0 1 1 0 2H5.75a.75.75 0 0 1-.75-.75z" /><path stroke="currentColor" d="M2.5 7a5.5 5.5 0 1 1 11 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 7v1m-11-1v1" /></SvgRoot>;
});
export default IconHeadset;
