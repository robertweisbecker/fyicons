import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensions = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensions(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="extensions"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 6.5h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5m0 7h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5m7 0h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5m-.439-9.189L11.69 6.44a.44.44 0 0 0 .622 0l2.128-2.13a.44.44 0 0 0 0-.622L12.31 1.56a.44.44 0 0 0-.622 0L9.56 3.69a.44.44 0 0 0 0 .622" />{props.children}</SvgRoot>;
});
export default IconExtensions;
