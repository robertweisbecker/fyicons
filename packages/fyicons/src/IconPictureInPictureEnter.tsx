import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPictureInPictureEnter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPictureInPictureEnter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="picture-in-picture-enter"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5H13A1.5 1.5 0 0 1 14.5 5v6a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 11V9.5" /><path stroke="currentColor" strokeLinecap="round" d="m1.5 3.5 3 3" /><path fill="currentColor" d="M6 4.604V7.75a.25.25 0 0 1-.25.25H2.604a.25.25 0 0 1-.177-.427l3.146-3.146A.25.25 0 0 1 6 4.604m7 5.896v-3a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />{props.children}</SvgRoot>;
});
export default IconPictureInPictureEnter;
