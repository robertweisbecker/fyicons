import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiamond = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiamond(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={"url(#" + idPrefix + "clip0_1167_1437)"}><path d="M7.29334 0.499887C7.68386 0.109413 8.31689 0.109413 8.70741 0.499887L15.5004 7.29286C15.8908 7.68337 15.8908 8.3164 15.5004 8.70692L8.70741 15.4999C8.31689 15.8904 7.68386 15.8904 7.29334 15.4999L0.500375 8.70692C0.109901 8.3164 0.109901 7.68337 0.500375 7.29286L7.29334 0.499887ZM1.20741 7.99989L8.00037 14.7929L14.7933 7.99989L8.00037 1.20692L1.20741 7.99989Z" fill="currentColor" /></g><defs><clipPath id={idPrefix + "clip0_1167_1437"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconDiamond;
