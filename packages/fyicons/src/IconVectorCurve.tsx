import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorCurve = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorCurve(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="vector-curve"><path d="M4.5 9C5.88071 9 7 10.1193 7 11.5C7 12.8807 5.88071 14 4.5 14C3.11929 14 2 12.8807 2 11.5C2 10.1193 3.11929 9 4.5 9ZM4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10ZM11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5C9 3.11929 10.1193 2 11.5 2ZM11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3Z" fill="currentColor" /><path d="M9.5 4.5C6.73858 4.5 4.5 6.73858 4.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconVectorCurve;
