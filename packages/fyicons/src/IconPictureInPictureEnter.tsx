import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureEnter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureEnter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-enter"><path fill="currentColor" d="M11.5 2A1.5 1.5 0 0 1 13 3.5V7h.5A1.5 1.5 0 0 1 15 8.5v4a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 12.5V12H2.5A1.5 1.5 0 0 1 1 10.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5H7V8.5A1.5 1.5 0 0 1 8.5 7H12V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1 0-1zm-3 6a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="m1.5 2.5 3 3" /><path fill="currentColor" d="M6 3.604V6.75a.25.25 0 0 1-.25.25H2.604a.25.25 0 0 1-.177-.427l3.146-3.146A.25.25 0 0 1 6 3.604" /></SvgRoot>;
});
export default IconPictureInPictureEnter;
