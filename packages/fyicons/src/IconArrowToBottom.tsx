import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 14a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM8 1a.5.5 0 0 1 .5.5v9.293l3.146-3.147a.5.5 0 1 1 .707.708l-4 4a.5.5 0 0 1-.628.064l-.079-.064-4-4a.5.5 0 1 1 .708-.708L7.5 10.793V1.5A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconArrowToBottom;
