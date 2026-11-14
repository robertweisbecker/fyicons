import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCreditCard = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCreditCard(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="credit-card"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM2 11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H2zm3.5-1a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm7-1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM3 4a1 1 0 0 0-1 1v1h12V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconCreditCard;
