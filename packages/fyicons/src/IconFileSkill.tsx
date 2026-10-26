import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileSkill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileSkill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.75 2A2.25 2.25 0 0 1 12 4.25V6h1.5a.5.5 0 0 1 .5.5v6a1.5 1.5 0 0 1-1.5 1.5h-8A2.5 2.5 0 0 1 2 11.5V4.25A2.25 2.25 0 0 1 4.25 2zm-5.5 1C3.56 3 3 3.56 3 4.25v7.25A1.5 1.5 0 0 0 4.5 13h6.587a1.5 1.5 0 0 1-.087-.5V4.25C11 3.56 10.44 3 9.75 3zM12 12.5a.5.5 0 0 0 1 0V7h-1zM5.552 9a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM9.5 9a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-3-2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm3 0a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm-5-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m5 0a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconFileSkill;
