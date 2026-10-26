import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontCapital = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontCapital(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.012 2.5h.643c.208 0 .394.129.468.323L13 13h.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1l-1.167-3h-4.79L4.26 13H5.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h.67L7.54 2.803a.5.5 0 0 1 .472-.303M5.972 9h3.972l-1.89-4.858z" /></SvgRoot>;
});
export default IconFontCapital;
