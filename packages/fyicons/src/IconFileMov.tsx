import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileMov = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileMov(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-mov"><path stroke="currentColor" strokeLinecap="round" d="M12.5 7.5V6.121a1.5 1.5 0 0 0-.44-1.06L9.233 2.232A2.5 2.5 0 0 0 7.464 1.5H5A1.5 1.5 0 0 0 3.5 3v4.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 13.5v-4L3 11.45 4.5 9.5v4M8 9.433c-1.257 0-1.75 1.103-1.75 2.063s.493 2.062 1.75 2.062 1.75-1.103 1.75-2.062c0-.96-.493-2.063-1.75-2.063m2.75.067 1.75 4 1.75-4" /><path fill="currentColor" d="M12 7.5a.5.5 0 0 0 1 0zm-.75-2V5H9.5v1h1.75zm-2.75-1H9v-3H8v3zm4 2.25H12v.75h1v-.75zm-3-1.25V5a.5.5 0 0 1-.5-.5H8A1.5 1.5 0 0 0 9.5 6zm1.75 0V6a.75.75 0 0 1 .75.75h1A1.75 1.75 0 0 0 11.25 5z" />{props.children}</SvgRoot>;
});
export default IconFileMov;
