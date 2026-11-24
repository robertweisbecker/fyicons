import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAtSignPlug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAtSignPlug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="at-sign-plug"><path fill="currentColor" d="M4.913 1.717a7 7 0 0 0-3.736 7.846 7 7 0 0 0 9.516 4.899.5.5 0 0 0-.386-.922 6.002 6.002 0 0 1-8.156-4.201 6.002 6.002 0 0 1 7.115-7.204 6 6 0 0 1 3.367 2.051c.866 1.052 1.366 2.264 1.366 3.688 0 .7-.19 1.246-.472 1.603-.275.35-.651.542-1.096.542-.459 0-.95-.282-1.374-.641a5 5 0 0 1-.216-.198 2.79 2.79 0 0 0-1.055-3.533l-1.07-.669a.944.944 0 0 0-1.285.276l-1.312-.82a.5.5 0 1 0-.53.849l1.311.819-.969 1.55-1.31-.82a.5.5 0 1 0-.53.849l1.314.822a.945.945 0 0 0 .35 1.212l1.071.67a2.79 2.79 0 0 0 3.435-.377q.071.065.15.132c.47.4 1.195.878 2.02.878.766 0 1.426-.343 1.882-.921.449-.57.686-1.348.686-2.223C15 6.19 14.4 4.76 13.405 3.55a7 7 0 0 0-8.492-1.834m4.344 4.778a1.793 1.793 0 0 1-1.9 3.041l-1.024-.64 1.9-3.04z" />{props.children}</SvgRoot>;
});
export default IconAtSignPlug;
