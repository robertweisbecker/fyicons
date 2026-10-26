import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserSilhouette = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserSilhouette(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.999 1c1.76 0 3.5 1.352 3.5 3.714 0 1.287-.366 2.697-1.17 3.657a7.5 7.5 0 0 1 4.045 3.175c.52.838.393 1.735-.106 2.394-.485.643-1.313 1.06-2.222 1.06h-8.09c-.91 0-1.737-.417-2.223-1.06-.498-.66-.626-1.556-.105-2.394a7.5 7.5 0 0 1 4.039-3.174c-.803-.96-1.168-2.37-1.168-3.658C4.499 2.352 6.239 1 7.999 1m0 1c-1.24 0-2.5.934-2.5 2.714 0 1.38.474 2.727 1.294 3.371a.613.613 0 0 1-.24 1.078 6.5 6.5 0 0 0-4.076 2.91c-.282.454-.22.903.054 1.265.287.38.813.662 1.425.662h8.09l.225-.013c.515-.06.949-.317 1.2-.65.273-.361.335-.81.053-1.264a6.5 6.5 0 0 0-4.079-2.91.613.613 0 0 1-.24-1.078l.15-.13c.727-.684 1.144-1.947 1.144-3.241 0-1.78-1.261-2.714-2.5-2.714" /></SvgRoot>;
});
export default IconUserSilhouette;
