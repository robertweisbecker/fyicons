import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookFlat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookFlat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H5V3zM6 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6zm3.5-6a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBookFlat;
