import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDiamondFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDiamondFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="diamond-fill"><g clipPath={"url(#" + idPrefix + "clip0_1167_1446)"}><path d="M7.29334 0.499887C7.68386 0.109413 8.31689 0.109413 8.70741 0.499887L15.5004 7.29286C15.8907 7.68338 15.8908 8.31644 15.5004 8.70692L8.70741 15.4999C8.31693 15.8903 7.68387 15.8902 7.29334 15.4999L0.500375 8.70692C0.109901 8.3164 0.109901 7.68337 0.500375 7.29286L7.29334 0.499887Z" fill="currentColor" /></g><defs><clipPath id={idPrefix + "clip0_1167_1446"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconDiamondFill;
