import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclipWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paperclip-wide"><path fill="currentColor" d="M9.5 1A3.5 3.5 0 0 1 13 4.5V10a5 5 0 0 1-10 0V8.5a.5.5 0 0 1 1 0V10a4 4 0 0 0 8 0V4.5a2.5 2.5 0 0 0-5 0V10a1 1 0 1 0 2 0V6.5a.5.5 0 0 1 1 0V10a2 2 0 1 1-4 0V4.5A3.5 3.5 0 0 1 9.5 1" /></SvgRoot>;
});
export default IconPaperclipWide;
