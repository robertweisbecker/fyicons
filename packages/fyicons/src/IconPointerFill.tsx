import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer-fill"><path fill="currentColor" d="M1.938 3.501A1.25 1.25 0 0 1 3.501 1.94l9.572 2.945c1.135.35 1.19 1.935.081 2.361L8.887 8.888l-1.642 4.268c-.426 1.107-2.012 1.053-2.361-.081z" /></SvgRoot>;
});
export default IconPointerFill;
