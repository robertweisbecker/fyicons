import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListLog = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListLog(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-log"><path fill="currentColor" d="M3.5 12a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm9 0a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-9-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm6 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm4 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-10-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm9 0a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-9-3a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm6 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm4 0a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconListLog;
