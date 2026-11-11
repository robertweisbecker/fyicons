import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMapFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMapFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="map-fill"><path fill="currentColor" d="M5.065 2.094a1.5 1.5 0 0 1 .921.063l4.4 1.76a.5.5 0 0 0 .306.02l3.066-.767A1 1 0 0 1 15 4.14v7.97a1 1 0 0 1-.758.97l-3.307.827a1.5 1.5 0 0 1-.921-.063l-4.4-1.76a.5.5 0 0 0-.306-.02l-3.066.766A1 1 0 0 1 1 11.86V3.89c0-.458.313-.858.758-.97zM10.5 5a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0v-7a.5.5 0 0 0-.5-.5m-5-2a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0v-7a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconMapFill;
