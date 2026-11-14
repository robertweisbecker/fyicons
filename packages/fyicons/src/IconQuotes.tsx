import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuotes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuotes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quotes"><path stroke="currentColor" strokeLinejoin="round" d="M4.5 3.5a3 3 0 0 1 3 3l-.01.384a6.47 6.47 0 0 1-1.76 4.141 6.5 6.5 0 0 1-1.715 1.333l-.008.009-.078.037a1 1 0 0 1-1.284-.386l-.05-.09a1 1 0 0 1 .477-1.333c.11-.071.229-.13.338-.203.268-.18.644-.477 1.001-.895A2.999 2.999 0 0 1 4.5 3.5Zm7 0a3 3 0 0 1 3 3l-.01.384a6.47 6.47 0 0 1-1.76 4.141 6.5 6.5 0 0 1-1.715 1.333l-.008.01-.078.036a1 1 0 0 1-1.284-.385l-.05-.091a1 1 0 0 1 .477-1.332c.11-.072.229-.13.338-.203.268-.18.644-.478 1.001-.896A2.999 2.999 0 0 1 11.5 3.5Z" /></SvgRoot>;
});
export default IconQuotes;
