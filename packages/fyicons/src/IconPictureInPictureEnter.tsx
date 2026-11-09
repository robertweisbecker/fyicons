import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureEnter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureEnter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-enter"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 1 0V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.5a.5.5 0 0 1 0-1z" /><path stroke="currentColor" strokeLinecap="round" d="m1.5 3.5 3 3" /><path fill="currentColor" d="M6 4.604V7.75a.25.25 0 0 1-.25.25H2.604a.25.25 0 0 1-.177-.427l3.146-3.146A.25.25 0 0 1 6 4.604m7 5.896v-3a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" /></SvgRoot>;
});
export default IconPictureInPictureEnter;
