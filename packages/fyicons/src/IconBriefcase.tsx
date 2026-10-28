import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBriefcase = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBriefcase(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="briefcase"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V5h3a1 1 0 0 1 1 1v1.5c0 .817-.395 1.54-1.001 1.996L14 9.5V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.496A2.5 2.5 0 0 1 1 7.5V6a1 1 0 0 1 1-1h3V3.5A1.5 1.5 0 0 1 6.5 2zM3 12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2H8.5v.5a.5.5 0 0 1-1 0V10H3zM2 7.5A1.5 1.5 0 0 0 3.5 9h4v-.5a.5.5 0 0 1 1 0V9h4A1.5 1.5 0 0 0 14 7.5V6H2zM6.5 3a.5.5 0 0 0-.5.5V5h4V3.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconBriefcase;
