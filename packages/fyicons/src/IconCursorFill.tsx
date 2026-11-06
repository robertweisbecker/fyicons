import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-fill"><path fill="currentColor" d="M2.001 2.956a.75.75 0 0 1 .953-.954l10.352 3.57c.893.307.9 1.569.01 1.887l-2.843 1.015 3.026 3.026a1.414 1.414 0 0 1-2 2l-3.026-3.026-1.016 2.843c-.318.89-1.578.883-1.887-.01z" /></SvgRoot>;
});
export default IconCursorFill;
