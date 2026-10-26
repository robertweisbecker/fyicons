import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.879 1a2 2 0 0 1 1.414.586l2.121 2.121A2 2 0 0 1 13 5.121V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5V2zm3.5 9a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM9 4.5a.5.5 0 0 0 .5.5h2.492a1 1 0 0 0-.285-.586L9.586 2.293A1 1 0 0 0 9 2.008z" /></SvgRoot>;
});
export default IconFileText;
