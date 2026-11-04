import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToken = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToken(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="token"><path fill="currentColor" d="M7.205 1.247a1.5 1.5 0 0 1 1.59 0l4.383 2.739c.511.32.822.88.822 1.483v5.06l-.015.224a1.75 1.75 0 0 1-.807 1.26l-4.383 2.74a1.5 1.5 0 0 1-1.497.053l-.093-.054-4.383-2.739a1.75 1.75 0 0 1-.807-1.26L2 10.53V5.47c0-.529.239-1.024.64-1.353l.182-.131zm1.06.847a.5.5 0 0 0-.53 0l-4.382 2.74A.75.75 0 0 0 3 5.469v5.06a.75.75 0 0 0 .353.636l4.382 2.74a.5.5 0 0 0 .53 0l4.383-2.74A.75.75 0 0 0 13 10.53V5.47a.75.75 0 0 0-.352-.636zM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconToken;
