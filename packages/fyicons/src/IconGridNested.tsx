import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridNested = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridNested(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-nested"><path fill="currentColor" d="M12.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 0 1H13v3.5h.5a.5.5 0 0 1 0 1H13V12h.5a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-1 0V13H8.5v.5a.5.5 0 0 1-1 0V13H4v.5a.5.5 0 0 1-1 0V13h-.5a.5.5 0 0 1 0-1H3V8.5h-.5a.5.5 0 0 1 0-1H3V4h-.5a.5.5 0 0 1 0-1H3v-.5a.5.5 0 0 1 1 0V3h3.5v-.5a.5.5 0 0 1 1 0V3H12v-.5a.5.5 0 0 1 .5-.5M4 12h8V4H4zm4-7a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 8 5" /><rect width={5} height={5} stroke="currentColor" strokeLinecap="round" rx={0.5} transform="matrix(1 0 0 -1 5.5 10.5)" /></SvgRoot>;
});
export default IconGridNested;
