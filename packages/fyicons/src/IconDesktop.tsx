import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDesktop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDesktop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="desktop"><path fill="currentColor" d="M12.5 2A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1.5 1.5H10v2h.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1H6v-2H3.5A1.5 1.5 0 0 1 2 9.5v-6A1.5 1.5 0 0 1 3.5 2zM7 13h2v-2H7zM3 9.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9H3zM3.5 3a.5.5 0 0 0-.5.5V8h10V3.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconDesktop;
