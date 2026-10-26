import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCalculatorSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCalculatorSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 1A1.5 1.5 0 0 1 13 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5v-11A1.5 1.5 0 0 1 4.5 1zM4 13.5a.5.5 0 0 0 .5.5H6v-2H4zm6 .5h1.5a.5.5 0 0 0 .5-.5V9h-2zm-3-2v2h2v-2zm0-1h2V9H7zm-3 0h2V9H4zm0-3h2V6H4zm6 0h2V6h-2zM7 8h2V6H7zM4.5 2a.5.5 0 0 0-.5.5V5h8V2.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconCalculatorSimple;
