import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWalletFold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWalletFold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wallet-fold"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 5v7A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5H9.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 4.815c0-.328.232-.61.554-.673l7.255-1.41a1 1 0 0 1 1.191.981V5.5H3.185a.685.685 0 0 1-.685-.685" /><mask id={idPrefix + "path-3-inside-1_780_1745"} fill="white"><path d="M10 9.5A1.5 1.5 0 0 1 11.5 8h1.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H11.5A1.5 1.5 0 0 1 10 9.5" /></mask><path stroke="currentColor" strokeWidth={2} d="M10 9.5A1.5 1.5 0 0 1 11.5 8h1.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H11.5A1.5 1.5 0 0 1 10 9.5Z" mask={"url(#" + idPrefix + "path-3-inside-1_780_1745)"} /></SvgRoot>;
});
export default IconWalletFold;
