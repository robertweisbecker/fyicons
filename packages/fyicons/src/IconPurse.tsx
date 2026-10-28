import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPurse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPurse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="purse"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V5h.786a1.5 1.5 0 0 1 1.42 1.013l1.606 4.675A2.5 2.5 0 0 1 12.447 14H3.553a2.5 2.5 0 0 1-2.364-3.312l1.606-4.675A1.5 1.5 0 0 1 4.214 5h.785V3.5A1.5 1.5 0 0 1 6.5 2zM4.213 6a.5.5 0 0 0-.473.338l-1.607 4.675A1.5 1.5 0 0 0 3.553 13h8.894a1.5 1.5 0 0 0 1.42-1.987l-1.608-4.675A.5.5 0 0 0 11.786 6zm2.285-3a.5.5 0 0 0-.5.5V5h4V3.5a.5.5 0 0 0-.5-.5z" /><circle cx={10.5} cy={7.5} r={0.5} fill="currentColor" /><circle cx={5.5} cy={7.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconPurse;
