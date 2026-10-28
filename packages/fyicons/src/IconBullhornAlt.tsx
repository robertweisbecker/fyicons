import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBullhornAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBullhornAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bullhorn-alt"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 3.5 9.846 4.512A6.7 6.7 0 0 1 6.34 5.5a.84.84 0 0 0-.84.84v2.283c0 .485.392.877.877.877 1.384 0 2.738.41 3.89 1.178l1.233.822z" /><path fill="currentColor" d="M8.5 13.5v.5a.5.5 0 0 0 .5-.5zM5.985 9.379a.5.5 0 1 0-.97.242L5.5 9.5zM8.5 13.5V13H7.28v1H8.5zm-2.19-.758.486-.12-.81-3.243L5.5 9.5l-.485.121.81 3.243zM8.5 10H8v3.5h1V10zm-1.22 3.5V13a.5.5 0 0 1-.484-.379l-.485.121-.485.122A1.5 1.5 0 0 0 7.28 14z" /><rect width={2} height={10} x={11.5} y={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 6.5a1 1 0 0 1 1-1h1.75a.25.25 0 0 1 .25.25v3.5a.25.25 0 0 1-.25.25H3.5a1 1 0 0 1-1-1z" /><path fill="currentColor" d="M14 6.5a1 1 0 1 1 0 2z" /></SvgRoot>;
});
export default IconBullhornAlt;
