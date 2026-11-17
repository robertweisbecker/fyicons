import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-ruler"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="m8.116 15.116-1.232-1.232a1.25 1.25 0 0 1 0-1.768l5.232-5.232a1.25 1.25 0 0 1 1.768 0l1.232 1.232a1.25 1.25 0 0 1 0 1.768l-5.232 5.232a1.25 1.25 0 0 1-1.768 0ZM11.5 7.5l1.25 1.25M9.5 9.5l1.25 1.25m-3.25.75 1.25 1.25" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 13.5v-12m11 1h-12" /><path fill="currentColor" d="M4.5 13H5v-1h-.5zm-3-1a.5.5 0 0 0 0 1zm3 .5V12h-3v1h3zm8.5-8V5h-1v-.5zm-1-3a.5.5 0 0 1 1 0zm.5 3H12v-3h1v3zM7 8.5V9h1v-.5zm1-7a.5.5 0 0 0-1 0zm-.5 7H8v-7H7v7z" /><path fill="currentColor" d="M8.5 8H9V7h-.5zm-7-1a.5.5 0 0 0 0 1zm7 .5V7h-7v1h7z" />{props.children}</SvgRoot>;
});
export default IconGridRuler;
