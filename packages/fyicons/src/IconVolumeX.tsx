import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-x"><path d="M6.91992 2.23747C7.726 1.52096 8.99983 2.09264 9 3.17107V12.8312C8.99972 13.9095 7.72596 14.4812 6.91992 13.7648L3.81055 11.0011H1.5C0.671628 11.0011 7.7676e-05 10.3295 0 9.50115V6.50115C9.43067e-05 5.67284 0.671672 5.0012 1.5 5.00115H3.80957L6.91992 2.23747ZM8 3.17107C7.99983 2.95549 7.74516 2.84128 7.58398 2.98454L4.33203 5.87517C4.24055 5.95636 4.12232 6.00114 4 6.00115H1.5C1.22393 6.00117 1.00009 6.2251 1 6.50115V9.50115C1.00008 9.77723 1.22391 10.0011 1.5 10.0011H4L4.09082 10.009C4.17993 10.0254 4.26343 10.0662 4.33203 10.1271L7.58398 13.0177C7.74512 13.1609 7.99972 13.0467 8 12.8312V3.17107Z" fill="currentColor" /><path d="M14.5 6.5L11.5 9.5" stroke="currentColor" strokeLinecap="round" /><path d="M11.5 6.5L14.5 9.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconVolumeX;
