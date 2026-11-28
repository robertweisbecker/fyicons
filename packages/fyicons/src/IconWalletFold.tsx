import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWalletFold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWalletFold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wallet-fold"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 5v7A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5H9.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 5.5V3.713a1 1 0 0 0-1.19-.981l-7.256 1.41A.685.685 0 0 0 3.185 5.5z" /><path stroke="currentColor" d="M13.5 8.5h-2a1 1 0 1 0 0 2h2z" />{props.children}</SvgRoot>;
});
export default IconWalletFold;
