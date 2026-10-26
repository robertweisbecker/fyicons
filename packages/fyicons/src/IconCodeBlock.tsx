import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCodeBlock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCodeBlock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5a.5.5 0 0 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1zm-6.872-.485c.267.067.43.339.364.606l-1 4a.501.501 0 0 1-.97-.242l1-4a.5.5 0 0 1 .606-.364m-3.475.632a.5.5 0 0 1 .707.707L1.214 4 2.36 5.147a.5.5 0 0 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707zm5 0a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.707-.707L7.8 4 6.653 2.854a.5.5 0 0 1 0-.707" /></SvgRoot>;
});
export default IconCodeBlock;
