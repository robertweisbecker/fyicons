import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroomSweep = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroomSweep(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="broom-sweep"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5 5.75 6.75M2.5 8.5h.343a4 4 0 0 0 2.829-1.172L6.5 6.5a1.414 1.414 0 0 1 2 0h1a1 1 0 0 1 1 1v1.84a2 2 0 0 1-1.008 1.736l-1.936 1.106a2.4 2.4 0 0 1-1.196.318H3.5l1-1a2 2 0 0 1-2-2zm11-5-3 3" /><path stroke="currentColor" strokeLinecap="round" d="M4 2v2m1-1H3m7.5 9.5h3a1 1 0 1 0 0-2m-3 4h1m-5.25 0H8.5" />{props.children}</SvgRoot>;
});
export default IconBroomSweep;
