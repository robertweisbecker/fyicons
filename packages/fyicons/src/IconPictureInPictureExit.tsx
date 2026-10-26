import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureExit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureExit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 3A1.5 1.5 0 0 1 13 4.5V8h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1H2.5A1.5 1.5 0 0 1 1 10.5v-6A1.5 1.5 0 0 1 2.5 3zm-9 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H7V9a1 1 0 0 1 1-1h4V4.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 7.5-1-1" /><path fill="currentColor" d="M3 7.396V5.25A.25.25 0 0 1 3.25 5h2.146a.25.25 0 0 1 .177.427L3.427 7.573A.25.25 0 0 1 3 7.396" /></SvgRoot>;
});
export default IconPictureInPictureExit;
