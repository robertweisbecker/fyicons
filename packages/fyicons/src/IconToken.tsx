import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToken = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToken(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.168 1.305a1.5 1.5 0 0 1 1.664 0l4.389 2.926c.486.325.779.87.779 1.456v4.627l-.014.217a1.75 1.75 0 0 1-.765 1.239l-4.389 2.926-.096.058a1.5 1.5 0 0 1-1.472 0l-.096-.058-4.389-2.926a1.75 1.75 0 0 1-.765-1.24L2 10.315V5.687c0-.512.224-.994.606-1.324l.173-.132zm1.11.832a.5.5 0 0 0-.555 0L3.334 5.063A.75.75 0 0 0 3 5.687v4.627c0 .25.125.485.334.624l4.389 2.926a.5.5 0 0 0 .554 0l4.389-2.926a.75.75 0 0 0 .334-.624V5.687a.75.75 0 0 0-.334-.624zM8 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconToken;
