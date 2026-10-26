import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><rect width={11} height={9} x={2.5} y={5.5} stroke="currentColor" strokeLinejoin="round" rx={0.5} /><path stroke="currentColor" strokeLinejoin="round" d="M4.5 7.5h7v5h-7z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="m11 5.5-3-4-3 4" /><rect width={2} height={2} x={7} y={1} fill="currentColor" rx={1} /></SvgRoot>;
});
export default IconPictureFrame;
