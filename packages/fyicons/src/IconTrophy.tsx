import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTrophy = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTrophy(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 2.5H11.5V7C11.5 8.933 9.933 10.5 8 10.5V10.5C6.067 10.5 4.5 8.933 4.5 7V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 4.5C1.5 3.39543 2.39543 2.5 3.5 2.5H4.5V6.5H3.5C2.39543 6.5 1.5 5.60457 1.5 4.5V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 2.5H12.5C13.6046 2.5 14.5 3.39543 14.5 4.5V4.5C14.5 5.60457 13.6046 6.5 12.5 6.5H11.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 10.5V13.5" stroke="currentColor" strokeLinecap="round" /><path d="M10.5 13.5H5.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconTrophy;
