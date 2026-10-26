import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquares = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquares(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.376 2.362a2 2 0 0 1 2.563-1.195l4.7 1.71a2 2 0 0 1 1.195 2.563l-1.71 4.698c-.2.552-.62.96-1.124 1.165V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.78zM4 5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm4.598-2.894a1 1 0 0 0-1.282.598L6.844 4H10a2 2 0 0 1 2 2v4.109a1 1 0 0 0 .184-.313l1.71-4.698a1 1 0 0 0-.598-1.282z" /></SvgRoot>;
});
export default IconSquares;
