import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUndo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUndo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.167 2.115A6.003 6.003 0 0 0 1.997 8H.638a.5.5 0 0 0-.367.84l1.858 2.012a.5.5 0 0 0 .734 0l1.86-2.012A.5.5 0 0 0 4.356 8h-1.36a5 5 0 0 1 3.087-4.62 5 5 0 0 1 5.448 1.084 5 5 0 0 1-.757 7.693c-.822.55-1.79.843-2.778.843a.5.5 0 0 0 0 1 6.002 6.002 0 0 0 5.885-7.171 6 6 0 0 0-4.714-4.714" /></SvgRoot>;
});
export default IconArrowUndo;
