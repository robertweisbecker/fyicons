import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterU = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterU(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-u"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm5.75 2a.5.5 0 0 1 .5.5v3a2.75 2.75 0 1 1-5.5 0v-3a.5.5 0 0 1 1 0v3a1.75 1.75 0 1 0 3.5 0v-3a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconLetterU;
