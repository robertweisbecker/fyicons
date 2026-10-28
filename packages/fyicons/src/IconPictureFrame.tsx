import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={2.5} y={5.5} width={11} height={9} rx={0.5} stroke="currentColor" strokeLinejoin="round" /><rect x={4.5} y={7.5} width={7} height={5} stroke="currentColor" strokeLinejoin="round" /><mask id={idPrefix + "path-3-inside-1_1001_664"} fill="white"><path d="M5.58579 9H5V12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12V11H8.82843C8.29799 11 7.78929 10.7893 7.41421 10.4142L6.29289 9.29289C6.10536 9.10536 5.851 9 5.58579 9Z" /></mask><path d="M5.58579 9H5V12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12V11H8.82843C8.29799 11 7.78929 10.7893 7.41421 10.4142L6.29289 9.29289C6.10536 9.10536 5.851 9 5.58579 9Z" fill="currentColor" stroke="currentColor" strokeWidth={2} strokeLinecap="round" mask={"url(#" + idPrefix + "path-3-inside-1_1001_664)"} /><path d="M11 5.5L8 1.5L5 5.5" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" /><rect x={7} y={1} width={2} height={2} rx={1} fill="currentColor" /></SvgRoot>;
});
export default IconPictureFrame;
