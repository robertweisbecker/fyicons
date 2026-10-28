import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutApp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutApp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-app"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 6v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6zm1-3a1 1 0 0 0-1 1v1h10V4a1 1 0 0 0-1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 6v7m5-7v7" /></SvgRoot>;
});
export default IconLayoutApp;
