import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileAudio = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileAudio(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><g fill="currentColor" clipPath={"url(#" + idPrefix + "clip0_1056_764)"}><path d="M9.166 7.5a.5.5 0 0 1 .834.373v4.254a.5.5 0 0 1-.834.372l-1.666-1.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z" /><path d="M8.879 1a2 2 0 0 1 1.414.586l2.121 2.121A2 2 0 0 1 13 5.121V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5V2zm4 2.5a.5.5 0 0 0 .5.5h2.492a1 1 0 0 0-.285-.586L9.586 2.293A1 1 0 0 0 9 2.008z" /></g><defs><clipPath id={idPrefix + "clip0_1056_764"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconFileAudio;
