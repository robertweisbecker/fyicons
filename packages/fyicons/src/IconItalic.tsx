import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconItalic = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconItalic(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="italic"><path fill="currentColor" d="M12.5 2a.5.5 0 0 1 0 1h-2.15L6.714 13H9.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1h2.15L9.286 3H6.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconItalic;
