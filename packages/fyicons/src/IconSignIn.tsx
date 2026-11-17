import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignIn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sign-in"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.75 5.5 11.5 8l-2.75 2.5M10.5 8h-8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 10.5V12A1.5 1.5 0 0 0 7 13.5h5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5H7A1.5 1.5 0 0 0 5.5 4v1.5" />{props.children}</SvgRoot>;
});
export default IconSignIn;
