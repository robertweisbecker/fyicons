import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlipX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlipX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="flip-x"><path d="M8 2.00024C8.27614 2.00024 8.5 2.2241 8.5 2.50024V13.5002C8.49987 13.7763 8.27606 14.0002 8 14.0002C7.72394 14.0002 7.50013 13.7763 7.5 13.5002V2.50024C7.5 2.2241 7.72386 2.00024 8 2.00024ZM2.00195 5.55981C2.00195 5.13747 2.49315 4.90511 2.81934 5.1731L5.7832 7.6145C6.02588 7.81454 6.026 8.18603 5.7832 8.38599L2.81934 10.8264C2.49319 11.0947 2.00208 10.863 2.00195 10.4407V5.55981ZM13.1836 5.1731C13.5098 4.90511 14.001 5.13747 14.001 5.55981V10.4407C14.0008 10.863 13.5097 11.0947 13.1836 10.8264L10.2197 8.38599C9.97693 8.18603 9.97705 7.81454 10.2197 7.6145L13.1836 5.1731Z" fill="currentColor" /></SvgRoot>;
});
export default IconFlipX;
