import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignOut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sign-out"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.25 5.5 1.5 8l2.75 2.5M2.5 8.001h7M7.5 5.5V4A1.5 1.5 0 0 1 9 2.5h3A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 12v-1.5" />{props.children}</SvgRoot>;
});
export default IconSignOut;
