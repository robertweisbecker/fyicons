import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextUnderline = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextUnderline(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-underline"><path fill="currentColor" d="M12.5 14a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm-1-12a.5.5 0 0 1 .5.5v5.49a4.05 4.05 0 0 1-1.174 2.85A4.02 4.02 0 0 1 8 12a4.02 4.02 0 0 1-2.826-1.16A4.05 4.05 0 0 1 4 7.99V2.5a.5.5 0 0 1 1 0v5.49c0 .792.32 1.588.877 2.14a3.02 3.02 0 0 0 4.246 0A3.05 3.05 0 0 0 11 7.99V2.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconTextUnderline;
