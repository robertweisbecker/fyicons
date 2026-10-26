import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.065 2.094a1.5 1.5 0 0 1 .921.062l4.4 1.76a.5.5 0 0 0 .306.02l3.066-.766A1 1 0 0 1 15 4.14v7.97c0 .458-.313.859-.758.97l-3.307.826a1.5 1.5 0 0 1-.921-.062l-4.4-1.76a.5.5 0 0 0-.306-.02l-3.066.766A1 1 0 0 1 1 11.86V3.89c0-.458.313-.859.758-.97zM11 4.89v7.97l3-.75V4.14zm-5 6.27 4 1.6V4.839l-4-1.6zM2 3.89v7.968l3-.75V3.14z" /></SvgRoot>;
});
export default IconMap;
