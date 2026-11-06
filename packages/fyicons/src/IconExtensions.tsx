import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensions = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensions(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="extensions"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zm0 7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm2.189-8.439a.44.44 0 0 1 .622 0L14.44 3.69a.44.44 0 0 1 0 .622L12.31 6.44a.44.44 0 0 1-.622 0L9.56 4.31a.44.44 0 0 1 0-.622z" /></SvgRoot>;
});
export default IconExtensions;
