import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBriefcase = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBriefcase(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="briefcase"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V5h2.5A1.5 1.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-5A1.5 1.5 0 0 1 2.5 5H5V3.5A1.5 1.5 0 0 1 6.5 2zM14 9.231A3 3 0 0 1 12 10H9v.25a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75V10H4a2.98 2.98 0 0 1-2-.769V11.5A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5zM2.5 6a.5.5 0 0 0-.5.5V7a2 2 0 0 0 2 2h3v-.25A.75.75 0 0 1 7.75 8h.5a.75.75 0 0 1 .75.75V9h3a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-.5-.5zm4-3a.5.5 0 0 0-.5.5V5h4V3.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconBriefcase;
