import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLadyBug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLadyBug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lady-bug"><circle cx={8} cy={9} r={4.5} stroke="currentColor" /><path fill="currentColor" d="M10 4v1H6V4a2 2 0 1 1 4 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 8.5h2m9 0h2M3 4l1.5 1.5m7 7 1 1m-9 0 1-1m7-7L13 4" /><path fill="currentColor" d="M5.525 12.475a3.5 3.5 0 0 0 4.95 0L8 10z" /><circle cx={9} cy={7} r={1} fill="currentColor" /><circle cx={11} cy={10} r={1} fill="currentColor" /><circle cx={5} cy={10} r={1} fill="currentColor" /><circle cx={7.5} cy={8.5} r={0.5} fill="currentColor" /><circle cx={6.5} cy={6.5} r={0.5} fill="currentColor" />{props.children}</SvgRoot>;
});
export default IconLadyBug;
