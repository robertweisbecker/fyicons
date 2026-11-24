import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHookSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHookSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hook-simple"><circle cx={4.5} cy={3.5} r={2} stroke="currentColor" strokeLinecap="round" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5v5a4 4 0 0 0 8 0v-1" /><path fill="currentColor" d="m9.5 7.5 3-3v5a2 2 0 0 0-2-2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 9.5v-5l-3 3h1a2 2 0 0 1 2 2m0 0v1" />{props.children}</SvgRoot>;
});
export default IconHookSimple;
