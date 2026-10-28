import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeaderFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="header-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM2 7v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" /></SvgRoot>;
});
export default IconHeaderFill;
