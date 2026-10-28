import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolders = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolders(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folders"><path fill="currentColor" d="M7.634 2c.73 0 1.382.453 1.638 1.136L9.597 4H12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2zM4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H6.903l-.12-.324-.447-1.19A.75.75 0 0 0 5.634 6zm2-3a1 1 0 0 0-1 1v1h.634c.73 0 1.382.453 1.638 1.136L7.597 7H10a2 2 0 0 1 2 2v1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8.903l-.12-.324-.447-1.19A.75.75 0 0 0 7.634 3z" /></SvgRoot>;
});
export default IconFolders;
