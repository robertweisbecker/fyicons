import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugSideFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSideFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 3a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1H13v1h1.5a.5.5 0 0 1 0 1H13v.5a.5.5 0 0 1-.5.5h-.833c-.433 0-.854-.14-1.2-.4l-1.13-.847a1.26 1.26 0 0 0-.758-.253H8a1 1 0 0 1-.865-.5H3.5a1.5 1.5 0 1 0 0 3h4a2.5 2.5 0 0 1 0 5h-4a.5.5 0 0 1 0-1h4a1.5 1.5 0 0 0 0-3h-4a2.5 2.5 0 0 1 0-5h3.635A1 1 0 0 1 8 4.5h.58c.272 0 .538-.089.757-.253l1.13-.847c.346-.26.767-.4 1.2-.4z" /></SvgRoot>;
});
export default IconPlugSideFill;
