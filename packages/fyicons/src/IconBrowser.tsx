import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrowser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 7v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7zm1-4a1 1 0 0 0-1 1v2h10V4a1 1 0 0 0-1-1zm.5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconBrowser;
