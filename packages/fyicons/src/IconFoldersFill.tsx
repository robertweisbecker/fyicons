import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFoldersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFoldersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="folders-fill"><path fill="currentColor" d="M7.634 2c.73 0 1.382.453 1.638 1.136L9.597 4H12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2zM6 3a1 1 0 0 0-1 1v1h.134c.52 0 .987.324 1.17.812L6.75 7H10a2 2 0 0 1 2 2v1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8.903l-.12-.324-.447-1.19A.75.75 0 0 0 7.634 3z" /></SvgRoot>;
});
export default IconFoldersFill;
