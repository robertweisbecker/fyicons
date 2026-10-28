import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListLog = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListLog(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-log"><path fill="currentColor" d="M13.5 13a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-9-2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm9 0a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-9-2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm9 0a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListLog;
