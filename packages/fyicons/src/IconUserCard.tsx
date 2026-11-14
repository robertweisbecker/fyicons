import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserCard = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserCard(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-card"><rect width={13} height={9} x={1.5} y={3.5} stroke="currentColor" rx={1.5} /><path fill="currentColor" d="M5.495 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-2.088 3c-.33 0-.555-.312-.388-.596C3.365 9.814 4.097 9 5.502 9c1.402 0 2.133.814 2.479 1.404.167.284-.058.596-.388.596z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.5h3m-2 2h2m-2-4h2" /></SvgRoot>;
});
export default IconUserCard;
