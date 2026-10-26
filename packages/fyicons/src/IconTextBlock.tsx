import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBlock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBlock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8.5a.5.5 0 0 1 0-1zM5.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V3H4v3h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H3V3H2v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconTextBlock;
