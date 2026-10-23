import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M3.5 10C4.88071 10 6 11.1193 6 12.5C6 13.8807 4.88071 15 3.5 15C2.11929 15 1 13.8807 1 12.5C1 11.1193 2.11929 10 3.5 10ZM3.5 11C2.67157 11 2 11.6716 2 12.5C2 13.3284 2.67157 14 3.5 14C4.32843 14 5 13.3284 5 12.5C5 11.6716 4.32843 11 3.5 11ZM12.5 1C13.8807 1 15 2.11929 15 3.5C15 4.88071 13.8807 6 12.5 6C11.1193 6 10 4.88071 10 3.5C10 2.11929 11.1193 1 12.5 1ZM12.5 2C11.6716 2 11 2.67157 11 3.5C11 4.32843 11.6716 5 12.5 5C13.3284 5 14 4.32843 14 3.5C14 2.67157 13.3284 2 12.5 2Z" fill="currentColor" /><path d="M10.5 3.5H7.5C5.29086 3.5 3.5 5.29086 3.5 7.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconVectorCurve;
