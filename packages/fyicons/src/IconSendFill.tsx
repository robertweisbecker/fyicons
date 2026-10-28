import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-fill"><path fill="currentColor" d="M2 3.163a1.5 1.5 0 0 1 2.203-1.325l9.116 4.837c1.063.563 1.063 2.086 0 2.65l-9.116 4.837A1.5 1.5 0 0 1 2 12.837v-2.683a1.25 1.25 0 0 1 1.081-1.238l4.108-.56a.36.36 0 0 0 0-.712l-4.107-.56a1.25 1.25 0 0 1-1.081-1.239z" /></SvgRoot>;
});
export default IconSendFill;
