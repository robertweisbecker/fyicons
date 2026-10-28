import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEasel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEasel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="easel"><path fill="currentColor" d="M8.5 1A1.5 1.5 0 0 1 10 2.5V3h2a1 1 0 0 1 1 1v5h.5a.5.5 0 0 1 0 1h-2.39l.88 4.403a.501.501 0 0 1-.98.196L10.09 10H5.91l-.92 4.599a.5.5 0 0 1-.588.392.5.5 0 0 1-.392-.589L4.89 10H2.5a.5.5 0 0 1 0-1H3V4a1 1 0 0 1 1-1h2v-.5A1.5 1.5 0 0 1 7.5 1zM4 9h8V4H4zm3.5-7a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" d="M11 12.5H5" /></SvgRoot>;
});
export default IconEasel;
