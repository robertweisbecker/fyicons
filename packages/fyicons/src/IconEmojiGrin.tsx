import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiGrin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiGrin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="emoji-grin"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.483 7.05c.352-.147.751.105.675.478C11.754 11.511 10.048 13 8.001 13c-2.046 0-3.754-1.488-4.158-3.47-.076-.374.323-.625.675-.478A9 9 0 0 0 8 9.75a9 9 0 0 0 3.483-.7M5.75 5C6.44 5 7 5.672 7 6.5c0 .249-.052.484-.142.69-.038.086-.154.087-.213.014-.227-.28-.544-.454-.895-.454s-.668.174-.895.454c-.059.073-.175.072-.213-.014A1.7 1.7 0 0 1 4.5 6.5c0-.828.56-1.5 1.25-1.5m4.5 0c.69 0 1.25.672 1.25 1.5 0 .249-.052.484-.142.69-.038.086-.154.087-.213.014-.227-.28-.544-.454-.895-.454s-.669.174-.896.454c-.059.073-.176.072-.213-.015A1.7 1.7 0 0 1 9 6.5c0-.828.56-1.5 1.25-1.5" /></SvgRoot>;
});
export default IconEmojiGrin;
