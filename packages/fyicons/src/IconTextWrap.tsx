import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextWrap = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrap(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 6a3 3 0 1 1 0 6h-1v.896a.25.25 0 0 1-.427.177l-1.396-1.396a.25.25 0 0 1 0-.354l1.396-1.396a.25.25 0 0 1 .427.177V11h1a2 2 0 1 0 0-4H2.5a.5.5 0 0 1 0-1zm-5.5 6a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm6-6a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextWrap;
