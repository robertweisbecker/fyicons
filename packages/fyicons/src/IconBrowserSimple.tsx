import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowserSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm.5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconBrowserSimple;
