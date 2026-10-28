import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><rect width={11} height={9} x={2.5} y={5.5} stroke="currentColor" strokeLinejoin="round" rx={0.5} /><path stroke="currentColor" strokeLinejoin="round" d="M4.5 7.5h7v5h-7z" /><mask id={idPrefix + "path-3-inside-1_1001_664"} fill="white"><path d="M5.586 9H5v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H8.828a2 2 0 0 1-1.414-.586L6.293 9.293A1 1 0 0 0 5.586 9" /></mask><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5.586 9H5v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H8.828a2 2 0 0 1-1.414-.586L6.293 9.293A1 1 0 0 0 5.586 9Z" mask={"url(#" + idPrefix + "path-3-inside-1_1001_664)"} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="m11 5.5-3-4-3 4" /><rect width={2} height={2} x={7} y={1} fill="currentColor" rx={1} /></SvgRoot>;
});
export default IconPictureFrame;
