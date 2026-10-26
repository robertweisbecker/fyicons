import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBraces = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBraces(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.499 2a.5.5 0 0 1 0 1h-.25a1 1 0 0 0-1 1v.92A3.39 3.39 0 0 1 2.265 8a3.39 3.39 0 0 1 1.984 3.08V12a1 1 0 0 0 1 1h.25a.5.5 0 0 1 0 1h-.25a2 2 0 0 1-2-2v-.92a2.39 2.39 0 0 0-1.631-2.264c-.785-.261-.785-1.37 0-1.632a2.39 2.39 0 0 0 1.63-2.264V4a2 2 0 0 1 2-2zM11 2a2 2 0 0 1 2 2v1.037c0 .968.605 1.833 1.515 2.164.746.272.746 1.326 0 1.598A2.3 2.3 0 0 0 13 10.963V12a2 2 0 0 1-2 2h-.5a.5.5 0 1 1 0-1h.5a1 1 0 0 0 1-1v-1.037A3.3 3.3 0 0 1 13.849 8a3.3 3.3 0 0 1-1.848-2.963V4a1 1 0 0 0-1-1h-.5a.5.5 0 1 1 0-1z" /></SvgRoot>;
});
export default IconBraces;
