import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensions = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensions(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5zm2.189-7.396a.5.5 0 0 1 .707 0l2.043 2.042a.5.5 0 0 1 0 .708l-2.043 2.042a.5.5 0 0 1-.707 0L8.646 5.354a.5.5 0 0 1 0-.708z" /></SvgRoot>;
});
export default IconExtensions;
