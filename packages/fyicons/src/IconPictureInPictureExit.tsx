import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureExit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureExit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-exit"><path fill="currentColor" d="M12.5 7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 7.5-4-4" /><path fill="currentColor" d="M1 6.396V3.25A.25.25 0 0 1 1.25 3h3.146a.25.25 0 0 1 .177.427L1.427 6.573A.25.25 0 0 1 1 6.396" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5H13A1.5 1.5 0 0 1 14.5 5v6a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 11V9.5" /></SvgRoot>;
});
export default IconPictureInPictureExit;
