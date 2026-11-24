import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWalletCards = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWalletCards(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wallet-cards"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 8.5V7A1.5 1.5 0 0 1 3 5.5h10A1.5 1.5 0 0 1 14.5 7v1.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 7.5V4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4v3.5m-8.23 1q-.019.123-.02.25a1.75 1.75 0 1 0 3.48-.25h4.77V12a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12V8.5z" />{props.children}</SvgRoot>;
});
export default IconWalletCards;
