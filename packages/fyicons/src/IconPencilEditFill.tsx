import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilEditFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilEditFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil-edit-fill"><path fill="currentColor" d="M8.5 2a.5.5 0 1 1 0 1H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.5a.5.5 0 0 1 1 0V11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm4.25-.25a1.06 1.06 0 1 1 1.5 1.5L8.468 9.032a1.5 1.5 0 0 1-.504.332l-1.672.67a.25.25 0 0 1-.325-.326l.669-1.673a1.5 1.5 0 0 1 .332-.503z" /></SvgRoot>;
});
export default IconPencilEditFill;
