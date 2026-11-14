import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPrinterFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPrinterFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="printer-fill"><path fill="currentColor" d="M10.5 2A1.5 1.5 0 0 1 12 3.5V5h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v.5a1.5 1.5 0 0 1-1.347 1.492L11.5 14h-7l-.153-.008A1.5 1.5 0 0 1 3 12.5V12a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V3.5A1.5 1.5 0 0 1 5.5 2zM4 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V9H4zM5.5 3a.5.5 0 0 0-.5.5V5h6V3.5a.5.5 0 0 0-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconPrinterFill;
