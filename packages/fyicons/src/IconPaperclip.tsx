import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaperclip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1A2.5 2.5 0 0 1 11 3.5v8a3.5 3.5 0 1 1-7 0v-3a.5.5 0 0 1 1 0v3a2.5 2.5 0 0 0 5 0v-8a1.5 1.5 0 1 0-3 0v8a.5.5 0 0 0 1 0v-7a.5.5 0 0 1 1 0v7a1.5 1.5 0 0 1-3 0v-8A2.5 2.5 0 0 1 8.5 1" /></SvgRoot>;
});
export default IconPaperclip;
