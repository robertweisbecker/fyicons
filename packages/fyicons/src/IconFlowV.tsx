import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlowV = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlowV(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10 2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8.502c.005.36.172.696.475 1.001.31.313.74.568 1.188.735.457.17.924.451 1.275.913.274.36.459.809.529 1.352H13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.956a1.7 1.7 0 0 0-.312-.748c-.208-.272-.497-.458-.828-.58-.55-.205-1.114-.529-1.55-.967A3 3 0 0 1 8 7.396q-.123.165-.265.31c-.435.438-1 .762-1.55.966-.33.123-.62.309-.827.581a1.7 1.7 0 0 0-.312.748H6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1.033c.07-.544.255-.991.53-1.352.35-.462.817-.743 1.274-.913.448-.167.878-.422 1.188-.735.303-.305.47-.642.475-1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 13h3v-2H3zm7 0h3v-2h-3zM6 5h4V3H6z" /></SvgRoot>;
});
export default IconFlowV;
