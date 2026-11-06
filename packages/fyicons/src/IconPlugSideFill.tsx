import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugSideFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSideFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="plug-side-fill"><path fill="currentColor" d="M12.5 3a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1H13v1h1.5a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-.5.5h-1.793c-.453 0-.887-.18-1.207-.5l-.148-.148A1.2 1.2 0 0 0 8.502 7a1.5 1.5 0 0 1-1.415-1H3.5a1.5 1.5 0 1 0 0 3h4a2.5 2.5 0 0 1 0 5h-4a.5.5 0 0 1 0-1h4a1.5 1.5 0 0 0 0-3h-4a2.5 2.5 0 0 1 0-5h3.587c.206-.582.762-1 1.415-1 .318 0 .624-.127.85-.352L9.5 3.5c.32-.32.754-.5 1.207-.5z" /></SvgRoot>;
});
export default IconPlugSideFill;
