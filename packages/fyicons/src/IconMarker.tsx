import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="marker"><path fill="currentColor" d="M12.751.89a2.621 2.621 0 0 1 1.603 4.463l-6.44 6.44A4.12 4.12 0 0 1 5 13a.5.5 0 0 1-.335-.13l-1.922 1.068a.5.5 0 0 1-.68-.68l1.067-1.924A.5.5 0 0 1 3 11c0-1.093.434-2.14 1.207-2.914L8.793 3.5l-.44-.44a.5.5 0 0 0-.707 0L5.854 4.855a.5.5 0 0 1-.708-.707L6.94 2.354a1.5 1.5 0 0 1 2.122 0l.438.438 1.146-1.145A2.62 2.62 0 0 1 12.752.89M4.914 8.794a3.12 3.12 0 0 0-.885 1.78 2 2 0 0 1 1.397 1.397 3.12 3.12 0 0 0 1.781-.884l3.685-3.685-.243-.485a3.5 3.5 0 0 0-1.565-1.565l-.485-.243zM12.5 1.88q-.156 0-.31.03c-.306.059-.6.207-.836.445l-2.01 2.009.187.093a4.5 4.5 0 0 1 2.013 2.013l.093.187 2.01-2.01A1.622 1.622 0 0 0 12.5 1.88" /></SvgRoot>;
});
export default IconMarker;
