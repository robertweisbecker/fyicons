import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSuitcase = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSuitcase(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="suitcase"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V4h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2v-.5A1.5 1.5 0 0 1 6.5 2zM3 5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2V5zm8 7h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2zm-5 0h4V5H6zm.5-9a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconSuitcase;
