import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignIn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sign-in"><path fill="currentColor" d="M8.646 5.147a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 .064.63l-.064.077-2.5 2.5a.5.5 0 0 1-.708-.707l1.647-1.646H2.5a.5.5 0 0 1 0-1h7.793L8.646 5.854a.5.5 0 0 1 0-.707" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 10.5V12A1.5 1.5 0 0 0 8 13.5h4a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4v1.5" /></SvgRoot>;
});
export default IconSignIn;
