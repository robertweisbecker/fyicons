import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignOut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sign-out"><path fill="currentColor" d="M4.854 5.147a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0-.064.629l.064.078 2.5 2.5a.5.5 0 0 0 .708-.707L3.208 8.5H9.5a.5.5 0 0 0 0-1H3.206l1.648-1.647a.5.5 0 0 0 0-.707" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 5.5V4A1.5 1.5 0 0 1 9 2.5h3A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 12v-1.5" /></SvgRoot>;
});
export default IconSignOut;
