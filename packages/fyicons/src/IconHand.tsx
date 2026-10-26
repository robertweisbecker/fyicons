import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1a1.5 1.5 0 0 1 1.446 1.106A1.5 1.5 0 0 1 12 3.5v.587A1.496 1.496 0 0 1 14 5.5v3c0 1.64-.245 2.901-.576 3.857C12.727 14.371 10.597 15 8.74 15h-.108a5.4 5.4 0 0 1-3.24-1.08 4.2 4.2 0 0 1-1.228-1.472L2.053 8.224a.5.5 0 0 1 .093-.578 2.13 2.13 0 0 1 2.786-.198L5 7.5v-4a1.5 1.5 0 0 1 2.053-1.394A1.5 1.5 0 0 1 8.5 1m0 1a.5.5 0 0 0-.5.5v5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v4.793l.146.146C6.693 8.986 7 9.727 7 10.5a.5.5 0 0 1-1 0c0-.508-.202-.995-.56-1.354l-.268-.267-.84-.631a1.13 1.13 0 0 0-1.198-.099l1.926 3.852c.22.44.54.824.934 1.12.761.57 1.687.879 2.639.879h.108c1.737 0 3.26-.588 3.738-1.97.29-.841.521-1.991.521-3.53v-3a.5.5 0 0 0-1 0v2a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconHand;
