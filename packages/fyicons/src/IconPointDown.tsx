import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.13864 12.2894L3.13932 5.50798C2.74619 4.84136 3.22678 4 4.00069 4H11.9993C12.7732 4 13.2538 4.84136 12.8607 5.50798L8.86137 12.2894C8.47448 12.9454 7.52552 12.9454 7.13864 12.2894Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointDown;
