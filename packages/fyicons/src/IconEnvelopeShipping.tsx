import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeShipping = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeShipping(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-12A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3zm-12 1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h8.793l-1.854-1.853A1.5 1.5 0 0 1 9 9.087V6.69c0-.42.177-.822.486-1.106L11.215 4zm7.662 2.322A.5.5 0 0 0 10 6.69v2.396c0 .133.053.26.146.354L12.708 12H14V4h-1.306zM6.5 10.126a.375.375 0 0 1 0 .75h-3a.375.375 0 0 1 0-.75zm0-2a.375.375 0 1 1 0 .75h-3a.375.375 0 0 1 0-.75zM4.5 5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconEnvelopeShipping;
