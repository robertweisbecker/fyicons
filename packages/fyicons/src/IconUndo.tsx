import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUndo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUndo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="undo"><path fill="currentColor" d="M5.854 2.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .707l3 3.001a.5.5 0 0 0 .708-.708L3.707 6H9.5a3.5 3.5 0 0 1 0 7h-2a.5.5 0 0 0 0 1h2a4.5 4.5 0 1 0 0-9H3.707l2.147-2.147a.5.5 0 0 0 0-.707" /></SvgRoot>;
});
export default IconUndo;
