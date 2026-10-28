import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-text"><path fill="currentColor" d="M5.6 1a2.65 2.65 0 0 1 1.245.31A2.4 2.4 0 0 1 8 2.705q.083-.263.226-.503a2.4 2.4 0 0 1 1.346-1.07C9.84 1.046 10.12 1 10.4 1h.1a.5.5 0 0 1 0 1h-.1a1.65 1.65 0 0 0-.775.193c-.24.128-.456.302-.629.522-.205.26-.347.585-.383.935A24 24 0 0 0 8.5 5.704v5.414c0 .41.03.821.07 1.231.04.36.197.689.412.945.182.216.403.385.643.512A1.64 1.64 0 0 0 10.4 14h.1a.5.5 0 0 1 0 1h-.1a2.65 2.65 0 0 1-1.245-.31 2.3 2.3 0 0 1-.916-.901A2.4 2.4 0 0 1 8 13.186a2.4 2.4 0 0 1-.24.603c-.21.373-.53.696-.915.9A2.64 2.64 0 0 1 5.6 15h-.1a.5.5 0 0 1 0-1h.1a1.65 1.65 0 0 0 .775-.193c.24-.127.46-.296.643-.512.216-.256.373-.585.413-.945.039-.41.069-.82.069-1.231V5.704c0-.685-.055-1.37-.113-2.054a1.8 1.8 0 0 0-.383-.935 2 2 0 0 0-.629-.522A1.65 1.65 0 0 0 5.6 2h-.1a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconCursorText;
