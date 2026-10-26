import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1a2.5 2.5 0 0 1 2 1l2.4 3.2a.5.5 0 0 1 .1.3v7a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6h-1.5A1.5 1.5 0 0 1 9 4.5V2.086A1.5 1.5 0 0 0 8.5 2zm4.303 5.276a.5.5 0 0 1 .894.448l-2 4a.5.5 0 0 1-.847.076l-1.5-2a.5.5 0 0 1 .8-.6l1.014 1.352zM10 4.5a.5.5 0 0 0 .5.5h1L10 2.999z" /></SvgRoot>;
});
export default IconFileCheck;
