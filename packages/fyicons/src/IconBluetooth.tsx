import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBluetooth = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBluetooth(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.5 10.5 8-5.5-4-3.5v13l4-3.5-8-5.5" /></SvgRoot>;
});
export default IconBluetooth;
