import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.547 1.576a2.25 2.25 0 0 1 2.906 0l4.839 4.093A2 2 0 0 1 15 7.196V12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7.196a2 2 0 0 1 .708-1.527zm4.763 7.942 1.552 1.639a.5.5 0 0 1-.725.687l-1.778-1.876a3.25 3.25 0 0 0-4.718 0l-1.778 1.876a.5.5 0 0 1-.726-.687l1.552-1.639L2 7.5V12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5zm-2.502-7.18a1.25 1.25 0 0 0-1.616 0L2.354 6.433l-.05.046 3.123 2.34a4.25 4.25 0 0 1 5.145 0l3.122-2.34q-.023-.024-.049-.046z" /></SvgRoot>;
});
export default IconEnvelopeOpen;
