import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarePercent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarePercent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 2C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5ZM10.1465 5.14648C10.3417 4.95122 10.6583 4.95122 10.8535 5.14648C11.0488 5.34175 11.0488 5.65825 10.8535 5.85352L5.85352 10.8535C5.65825 11.0488 5.34175 11.0488 5.14648 10.8535C4.95122 10.6583 4.95122 10.3417 5.14648 10.1465L10.1465 5.14648ZM10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9ZM6 5C6.55228 5 7 5.44772 7 6C7 6.55228 6.55228 7 6 7C5.44772 7 5 6.55228 5 6C5 5.44772 5.44772 5 6 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconSquarePercent;
