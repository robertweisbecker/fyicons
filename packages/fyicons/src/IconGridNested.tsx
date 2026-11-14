import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridNested = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridNested(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-nested"><path fill="currentColor" d="M13.5 1a.5.5 0 0 1 .5.5V2h.5a.5.5 0 0 1 0 1H14v4.5h.5a.5.5 0 0 1 0 1H14V13h.5a.5.5 0 0 1 0 1H14v.5a.5.5 0 0 1-1 0V14H8.5v.5a.5.5 0 0 1-1 0V14H3v.5a.5.5 0 0 1-1 0V14h-.5a.5.5 0 0 1 0-1H2V8.5h-.5a.5.5 0 0 1 0-1H2V3h-.5a.5.5 0 0 1 0-1H2v-.5a.5.5 0 0 1 1 0V2h4.5v-.5a.5.5 0 0 1 1 0V2H13v-.5a.5.5 0 0 1 .5-.5M3 13h10V3H3zm3-8h4V4h1v1h1v1h-1v4h1v1h-1v1h-1v-1H6v1H5v-1H4v-1h1V6H4V5h1V4h1zm0 5h4V6H6z" /><rect width={5} height={5} stroke="currentColor" strokeLinecap="round" rx={0.5} transform="matrix(1 0 0 -1 5.5 10.5)" /></SvgRoot>;
});
export default IconGridNested;
