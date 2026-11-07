import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureEnter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureEnter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-enter"><path fill="currentColor" d="M12.5 3A1.5 1.5 0 0 1 14 4.5v3.587A1.5 1.5 0 0 1 15 9.5v3a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.413-1H3.5A1.5 1.5 0 0 1 2 11.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5H7V9.5A1.5 1.5 0 0 1 8.5 8H13V4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1 0-1zm-4 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="m2.5 3.5 3 3" /><path fill="currentColor" d="M6 3.604V6.75a.25.25 0 0 1-.25.25H2.604a.25.25 0 0 1-.177-.427l3.146-3.146A.25.25 0 0 1 6 3.604" /></SvgRoot>;
});
export default IconPictureInPictureEnter;
