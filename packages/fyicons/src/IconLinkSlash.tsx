import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="link-slash"><g clipPath={"url(#" + idPrefix + "clip0_747_267)"}><path d="M2.14638 2.14574C2.34163 1.95083 2.65824 1.95071 2.85341 2.14574L13.8534 13.1457C14.0486 13.3409 14.0484 13.6575 13.8534 13.8528C13.6582 14.048 13.3416 14.048 13.1464 13.8528L2.14638 2.85277C1.95125 2.6575 1.95116 2.34096 2.14638 2.14574Z" fill="currentColor" /><path d="M7.49951 3.50098L8.49951 2.50098C9.88022 1.12027 12.1188 1.12026 13.4995 2.50098C14.8802 3.88169 14.8802 6.12026 13.4995 7.50098L12.4995 8.50098" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.50049 12.499L7.50049 13.499C6.11978 14.8797 3.8812 14.8797 2.50049 13.499C1.11978 12.1183 1.11978 9.87974 2.50049 8.49902L3.50049 7.49902" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g><defs><clipPath id={idPrefix + "clip0_747_267"}><rect width={16} height={16} fill="white" /></clipPath></defs></SvgRoot>;
});
export default IconLinkSlash;
