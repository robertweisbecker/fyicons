import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.2603 7.83218C11.5469 7.50973 11.318 7 10.8866 7H5.11342C4.682 7 4.45309 7.50973 4.73972 7.83218L7.6263 11.0796C7.82519 11.3033 8.17481 11.3033 8.3737 11.0796L11.2603 7.83218Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretDown;
