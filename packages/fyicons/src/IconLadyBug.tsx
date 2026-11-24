import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLadyBug = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLadyBug(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lady-bug"><circle cx={8} cy={9} r={4.5} stroke="currentColor" /><path fill="currentColor" d="M10 4v1H6V4a2 2 0 1 1 4 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 8.5h2m9 0h2M3 4l1.5 1.5m7 7 1 1m-9 0 1-1m7-7L13 4" /><mask id={idPrefix + "stroke0_1880_3186"} fill="white"><path d="M5.879 12.975c.278.325.609.583.973.759.364.175.754.266 1.148.266s.784-.09 1.148-.266.695-.434.973-.76L8 10.5z" /></mask><path stroke="currentColor" strokeWidth={2} d="M5.879 12.975c.278.325.609.583.973.759.364.175.754.266 1.148.266s.784-.09 1.148-.266.695-.434.973-.76L8 10.5z" mask={"url(#" + idPrefix + "stroke0_1880_3186)"} /><circle cx={8} cy={7} r={1} fill="currentColor" /><circle cx={8} cy={9.5} r={0.5} fill="currentColor" /><circle cx={10.5} cy={9.5} r={0.75} fill="currentColor" /><circle cx={5.5} cy={9.5} r={0.75} fill="currentColor" /><circle cx={5.5} cy={7.5} r={0.5} fill="currentColor" /><circle cx={10.5} cy={7.5} r={0.5} fill="currentColor" />{props.children}</SvgRoot>;
});
export default IconLadyBug;
