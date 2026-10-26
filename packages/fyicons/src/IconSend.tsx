import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSend = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSend(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2 3.772a1.75 1.75 0 0 1 2.532-1.565l8.903 4.451c1.105.553 1.105 2.13 0 2.684l-8.903 4.45A1.75 1.75 0 0 1 2 12.228v-2.37c0-.835.515-1.56 1.257-1.857A2 2 0 0 1 2 6.142zm2.085-.67A.75.75 0 0 0 3 3.771v2.37a1 1 0 0 0 .9.996l3.65.365a.5.5 0 0 1 0 .994l-3.65.365a1 1 0 0 0-.9.995v2.37a.75.75 0 0 0 1.085.671l8.902-4.45a.5.5 0 0 0 0-.895z" /></SvgRoot>;
});
export default IconSend;
