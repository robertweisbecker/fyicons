import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuotesFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuotesFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="quotes-fill"><path fill="currentColor" d="M4.75 3a3.25 3.25 0 0 1 3.249 3.292v.007L8 6.33c0 3.093-1.75 5.574-4.664 6.611a1 1 0 0 1-1.238-.51l-.04-.095a1 1 0 0 1 .606-1.277l.256-.098c.839-.342 1.518-.844 2.022-1.467A3.25 3.25 0 1 1 4.75 3m7 0a3.25 3.25 0 0 1 3.249 3.292l-.001.007.002.031c0 3.093-1.75 5.574-4.664 6.611a1 1 0 0 1-1.238-.51l-.04-.095a1 1 0 0 1 .606-1.277l.256-.098c.839-.342 1.518-.844 2.022-1.467A3.25 3.25 0 1 1 11.75 3" /></SvgRoot>;
});
export default IconQuotesFill;
