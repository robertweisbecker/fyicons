import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileMov = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileMov(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-mov"><path fill="currentColor" d="M7.465 1a3 3 0 0 1 2.12.879l2.83 2.828A2 2 0 0 1 13 6.121V7.5a.5.5 0 0 1-1 0V6.121A1 1 0 0 0 11.992 6H9.5A1.5 1.5 0 0 1 8 4.5V2.074A2 2 0 0 0 7.465 2H5a1 1 0 0 0-1 1v4.5a.5.5 0 0 1-1 0V3a2 2 0 0 1 2-2zM9 4.5a.5.5 0 0 0 .5.5h1.793L9 2.707z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 13.5v-4L3 11.45 4.5 9.5v4M8 9.433c-1.257 0-1.75 1.103-1.75 2.063s.493 2.062 1.75 2.062 1.75-1.103 1.75-2.062c0-.96-.493-2.063-1.75-2.063m2.75.067 1.75 4 1.75-4" /></SvgRoot>;
});
export default IconFileMov;
