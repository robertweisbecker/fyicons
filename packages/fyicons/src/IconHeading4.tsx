import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-4"><path fill="currentColor" d="M11.642 9.334c.426-.59 1.358-.288 1.358.44V13h.5a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-1 0V14H9.74a.75.75 0 0 1-.61-1.19zM10.227 13H12v-2.453zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading4;
