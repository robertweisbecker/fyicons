import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextWrapSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrapSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 7a2.5 2.5 0 0 1 0 5H11v.896a.25.25 0 0 1-.427.177l-1.396-1.396a.25.25 0 0 1 0-.354l1.396-1.396a.25.25 0 0 1 .427.177V11h.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1 0-1zm-5 4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm5-8a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextWrapSimple;
