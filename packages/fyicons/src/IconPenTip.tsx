import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPenTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPenTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pen-tip"><path fill="currentColor" d="M9.25 1a.5.5 0 0 1 .497.45 6.54 6.54 0 0 0 1.883 3.973l.224.223a.5.5 0 0 1 .12.512l-1.318 3.954A2 2 0 0 1 12 12v1.5a.5.5 0 0 1-.5.5h-.292l-.29 1H5.082l-.29-1H4.5a.5.5 0 0 1-.5-.5V12a2 2 0 0 1 1.343-1.888L4.026 6.158a.5.5 0 0 1 .12-.512l.224-.223A6.54 6.54 0 0 0 6.253 1.45l.018-.093A.5.5 0 0 1 6.75 1zM6 11a1 1 0 0 0-1 1v1h6v-1a1 1 0 0 0-1-1zm1.188-9a7.54 7.54 0 0 1-2.11 4.13l-.006.005L6.361 10H9.64l1.288-3.865-.005-.005A7.54 7.54 0 0 1 8.813 2H8.5v4.135A.999.999 0 0 1 8 8a1 1 0 0 1-.5-1.865V2z" /></SvgRoot>;
});
export default IconPenTip;
