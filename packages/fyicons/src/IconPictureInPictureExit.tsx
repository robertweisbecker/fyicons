import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureExit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureExit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-exit"><path fill="currentColor" d="M11.5 2A1.5 1.5 0 0 1 13 3.5V7h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1H2.5A1.5 1.5 0 0 1 1 10.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5H7V8a1 1 0 0 1 1-1h4V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1 0-1z" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 6.5-3-3" /><path fill="currentColor" d="M1 5.396V2.25A.25.25 0 0 1 1.25 2h3.146a.25.25 0 0 1 .177.427L1.427 5.573A.25.25 0 0 1 1 5.396" /></SvgRoot>;
});
export default IconPictureInPictureExit;
