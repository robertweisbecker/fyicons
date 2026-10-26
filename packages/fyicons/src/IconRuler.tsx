import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.44 1.853a1.5 1.5 0 0 1 2.12 0l2.586 2.586a1.5 1.5 0 0 1 0 2.12L6.56 14.147a1.5 1.5 0 0 1-2.12 0L1.852 11.56a1.5 1.5 0 0 1 0-2.121zm1.413.707a.5.5 0 0 0-.707 0l-.94.94 1.5 1.5-.706.707-1.501-1.5-.792.792 2.5 2.5-.707.707-2.501-2.5-.793.793 1.147 1.147.354.353L7 8.706l-.354-.353L5.5 7.206 4.706 8l2.5 2.501-.706.707-2.501-2.5-1.439 1.439a.5.5 0 0 0 0 .707l2.586 2.586a.5.5 0 0 0 .707 0l7.586-7.586a.5.5 0 0 0 0-.707z" /></SvgRoot>;
});
export default IconRuler;
