import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChecklistChecked = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChecklistChecked(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="checklist-checked"><path fill="currentColor" d="M5.066 9.255a.5.5 0 1 1 .871.49l-2.25 4a.5.5 0 0 1-.812.085l-1.75-2a.5.5 0 0 1 .751-.659l1.286 1.468zM13.499 11a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM5.066 2.255a.5.5 0 1 1 .871.49l-2.25 4a.5.5 0 0 1-.811.085l-1.751-2a.5.5 0 0 1 .751-.659L3.161 5.64zM13.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconChecklistChecked;
