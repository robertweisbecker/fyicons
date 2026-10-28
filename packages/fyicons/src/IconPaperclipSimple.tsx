import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclipSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paperclip-simple"><path fill="currentColor" d="M9.5 1A2.5 2.5 0 0 1 12 3.5V11a4 4 0 0 1-8 0V6.5a.5.5 0 0 1 1 0V11a3 3 0 1 0 6 0V3.5a1.5 1.5 0 0 0-3 0v7a.5.5 0 0 1-1 0v-7A2.5 2.5 0 0 1 9.5 1" /></SvgRoot>;
});
export default IconPaperclipSimple;
