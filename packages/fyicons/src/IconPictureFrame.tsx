import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureFrame = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureFrame(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-frame"><rect width={11} height={9} x={2.5} y={5.5} stroke="currentColor" strokeLinejoin="round" rx={0.5} /><path fill="currentColor" d="M12 13H4V7h8zm-7-1h6v-1H9.605a2 2 0 0 1-1.109-.336l-1.664-1.11A3.3 3.3 0 0 0 5 9zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="m11.5 5.5-3-3m-4 3 3-3" /><rect width={2} height={2} x={7} y={1} fill="currentColor" rx={1} />{props.children}</SvgRoot>;
});
export default IconPictureFrame;
