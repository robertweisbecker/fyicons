import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNotePad = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNotePad(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 1a.5.5 0 0 1 .5.5V2h2v10.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V2h2v-.5a.5.5 0 0 1 1 0V2h1.5v-.5a.5.5 0 0 1 1 0V2H10v-.5a.5.5 0 0 1 .5-.5M4 12.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V3h-1v.5a.5.5 0 0 1-1 0V3H8.5v.5a.5.5 0 0 1-1 0V3H6v.5a.5.5 0 0 1-1 0V3H4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.5 7.5.419-.419a.82.82 0 0 1 1.162 0c.25.25.632.312.949.154l.977-.488a2.34 2.34 0 0 1 1.045-.247h.448m-5 4a1.57 1.57 0 0 1 1.892-.492l.066.03a1.66 1.66 0 0 0 1.848-.344L9.5 9.5" /></SvgRoot>;
});
export default IconNotePad;
