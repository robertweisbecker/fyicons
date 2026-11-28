import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUndoSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUndoSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="undo-sm"><path fill="currentColor" d="M6.161 4.275a.5.5 0 0 1 .84.367V6H9a3 3 0 1 1 0 6h-.5a.5.5 0 0 1 0-1H9a2 2 0 0 0 0-4H7.001v1.358a.5.5 0 0 1-.84.367L4.148 6.867a.5.5 0 0 1 0-.735z" />{props.children}</SvgRoot>;
});
export default IconUndoSm;
