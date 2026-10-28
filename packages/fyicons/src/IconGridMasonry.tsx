import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridMasonry = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridMasonry(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-masonry"><path fill="currentColor" d="M6 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm7-2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM3 11v2h3v-2zm7 2h3V9h-3zM6 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 7h3V3H3zm10-5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 3h3V3h-3z" /></SvgRoot>;
});
export default IconGridMasonry;
