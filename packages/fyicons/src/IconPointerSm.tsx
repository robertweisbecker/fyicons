import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer-sm"><path fill="currentColor" d="M8.03 11.853c-.578 1.252-2.398 1.127-2.798-.193L3.233 5.057c-.347-1.147.724-2.217 1.87-1.87l6.603 2c1.32.399 1.446 2.22.193 2.797L9.586 9.05c-.216.1-.39.274-.49.49zm-1.841-.483a.5.5 0 0 0 .933.064l1.066-2.313c.2-.432.546-.78.978-.979l2.314-1.067a.5.5 0 0 0-.065-.932L4.813 4.144a.5.5 0 0 0-.623.624z" /></SvgRoot>;
});
export default IconPointerSm;
