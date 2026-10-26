import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTimerFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTimerFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 1a.5.5 0 0 1 0 1h-1v1l-.003.021a5.97 5.97 0 0 1 3.376 1.398l.774-.773a.5.5 0 1 1 .707.708l-.774.772a6 6 0 1 1-5.078-2.104L7.5 3V2h-1a.5.5 0 0 1 0-1zM5.8 6.463a.244.244 0 0 0-.334.335c.588 1.007 1.56 2.642 1.827 2.909a1 1 0 0 0 1.414-1.414c-.267-.267-1.9-1.24-2.906-1.83" /></SvgRoot>;
});
export default IconTimerFill;
