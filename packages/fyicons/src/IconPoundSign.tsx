import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPoundSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPoundSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.59 2.008c.271.05.451.31.402.582L11.554 5H13.5a.5.5 0 0 1 0 1h-2.128l-.727 4H12.5a.5.5 0 0 1 0 1h-2.037l-.47 2.59a.5.5 0 0 1-.985-.18L9.446 11H5.463l-.47 2.59a.5.5 0 0 1-.985-.18L4.446 11H2.5a.5.5 0 1 1 0-1h2.128l.727-4H3.5a.5.5 0 1 1 0-1h2.037l.47-2.59a.501.501 0 0 1 .985.18L6.554 5h3.983l.47-2.59a.5.5 0 0 1 .583-.402M5.645 10h3.983l.727-4H6.372z" /></SvgRoot>;
});
export default IconPoundSign;
