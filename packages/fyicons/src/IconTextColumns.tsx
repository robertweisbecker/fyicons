import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextColumns = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextColumns(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-columns"><path fill="currentColor" d="M6.5 12a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm-7-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm-7-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm-7-3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7 0a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextColumns;
