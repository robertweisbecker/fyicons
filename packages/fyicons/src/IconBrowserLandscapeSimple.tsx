import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrowserLandscapeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrowserLandscapeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm.5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m2 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconBrowserLandscapeSimple;
