import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.098 1.033a1.5 1.5 0 0 1 1.738 1.217l.173.985a1.5 1.5 0 0 1-1.216 1.738l-.186.032A1.5 1.5 0 0 1 14 6.5V11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6.564a1.5 1.5 0 0 1-.793-1.072l-.174-.984A1.5 1.5 0 0 1 2.25 2.769zM3 6.698V11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.5a.5.5 0 0 0-.5-.5H6.967zM9.001 7a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5zm3.271-4.982L2.424 3.755a.5.5 0 0 0-.406.579l.174.984a.5.5 0 0 0 .579.406l9.849-1.736a.5.5 0 0 0 .405-.579l-.174-.985a.5.5 0 0 0-.579-.406" /></SvgRoot>;
});
export default IconArchiveOpen;
