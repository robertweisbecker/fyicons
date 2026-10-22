import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureFrame = React.forwardRef<SVGSVGElement, IconProps>(function IconPictureFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={2.5} y={5.5} width={11} height={9} rx={0.5} stroke="currentColor" strokeLinejoin="round" /><rect x={4.5} y={7.5} width={7} height={5} stroke="currentColor" strokeLinejoin="round" /><path d="M11 5.5L8 1.5L5 5.5" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" strokeLinejoin="round" /><rect x={7} y={1} width={2} height={2} rx={1} fill="currentColor" /></SvgRoot>;
});
export default IconPictureFrame;
