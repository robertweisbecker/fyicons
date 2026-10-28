import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureEnter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureEnter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-enter"><path fill="currentColor" d="M12 8V4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5H7V9a1 1 0 0 1 1-1zm-4 5h6V9H8zm6-5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1H2.5A1.5 1.5 0 0 1 1 10.5v-6A1.5 1.5 0 0 1 2.5 3h9A1.5 1.5 0 0 1 13 4.5V8z" /><path stroke="currentColor" strokeLinecap="round" d="m3.5 5.5 1 1" /><path fill="currentColor" d="M6 5.604V7.75a.25.25 0 0 1-.25.25H3.604a.25.25 0 0 1-.177-.427l2.146-2.146A.25.25 0 0 1 6 5.604" /></SvgRoot>;
});
export default IconPictureInPictureEnter;
