import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCirclePlusFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePlusFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 3.465a.5.5 0 0 0-.5.5V7.5H4.965a.5.5 0 0 0 0 1H7.5v2.536a.5.5 0 0 0 1 0V8.5h2.536a.5.5 0 0 0 0-1H8.5V4.965a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconCirclePlusFill;
