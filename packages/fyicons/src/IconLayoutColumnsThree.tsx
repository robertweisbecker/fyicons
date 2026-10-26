import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutColumnsThree = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutColumnsThree(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 9h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2zm-5 0h4V4H6zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2V4z" /></SvgRoot>;
});
export default IconLayoutColumnsThree;
