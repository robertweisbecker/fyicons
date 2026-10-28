import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotePad = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotePad(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5V2h1.5a.5.5 0 0 1 .5.5v10a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5v-10a.5.5 0 0 1 .5-.5H5v-.5a.5.5 0 0 1 1 0V2h1.5v-.5a.5.5 0 0 1 1 0V2H10v-.5a.5.5 0 0 1 .5-.5M4 12.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V3h-1v.5a.5.5 0 0 1-1 0V3H8.5v.5a.5.5 0 0 1-1 0V3H6v.5a.5.5 0 0 1-1 0V3H4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.5 8.5.419-.419a.82.82 0 0 1 1.162 0c.25.25.632.312.949.154l.977-.488a2.34 2.34 0 0 1 1.045-.247h.448m-4 4 .05-.09c.281-.499.918-.67 1.412-.377a1.02 1.02 0 0 0 1.338-.266l.2-.267" /></SvgRoot>;
});
export default IconNotePad;
