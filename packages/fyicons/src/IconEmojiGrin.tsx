import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEmojiGrin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiGrin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m3.123 7.89c.371-.121.75.182.61.547a4 4 0 0 1-7.466 0c-.14-.364.239-.667.61-.545 2.026.664 4.22.663 6.246-.001M6 5c.552 0 1 .672 1 1.5S6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5m4 0c.552 0 1 .672 1 1.5S10.552 8 10 8s-1-.672-1-1.5S9.448 5 10 5" /></SvgRoot>;
});
export default IconEmojiGrin;
