import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayout = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayout(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM7 7v6h5a1 1 0 0 0 1-1V7zm-4 5a1 1 0 0 0 1 1h2V7H3zm4-6h6V4a1 1 0 0 0-1-1H7zM4 3a1 1 0 0 0-1 1v2h3V3z" /></SvgRoot>;
});
export default IconLayout;
