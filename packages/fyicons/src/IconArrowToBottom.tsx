import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 14a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM8 2a.5.5 0 0 1 .5.5v8.293l2.646-2.647a.5.5 0 1 1 .707.708l-3.5 3.5a.5.5 0 0 1-.628.064l-.079-.064-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 10.793V2.5A.5.5 0 0 1 8 2" /></SvgRoot>;
});
export default IconArrowToBottom;
