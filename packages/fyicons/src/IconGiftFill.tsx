import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGiftFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGiftFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gift-fill"><path fill="currentColor" d="M8 15H4.5A1.5 1.5 0 0 1 3 13.5V9h5zm5-1.5a1.5 1.5 0 0 1-1.5 1.5H9V9h4zM6.5 1c.999 0 1.857.587 2.258 1.434A2 2 0 0 1 11.73 5h1.519a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H9V5h1a1 1 0 1 0-1-1v1H8V3.5A1.5 1.5 0 1 0 6.5 5H8v3H2.75A.75.75 0 0 1 2 7.25v-1.5A.75.75 0 0 1 2.75 5h1.754A2.5 2.5 0 0 1 4 3.5 2.5 2.5 0 0 1 6.5 1" /></SvgRoot>;
});
export default IconGiftFill;
