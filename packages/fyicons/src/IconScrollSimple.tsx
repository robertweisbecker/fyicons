import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScrollSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScrollSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scroll-simple"><path fill="currentColor" d="M11 4c0-.365.1-.706.27-1H6.5A1.5 1.5 0 0 0 5 4.5V10h3.5a.5.5 0 0 1 .5.5V12a1 1 0 1 0 2 0zm-9 7.5A1.5 1.5 0 0 0 3.5 13h4.77A2 2 0 0 1 8 12v-1H2zM13 3a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1m-1 9a2 2 0 0 1-2 2H3.5A2.5 2.5 0 0 1 1 11.5v-1a.5.5 0 0 1 .5-.5H4V4.5A2.5 2.5 0 0 1 6.5 2H13a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5H12z" /></SvgRoot>;
});
export default IconScrollSimple;
