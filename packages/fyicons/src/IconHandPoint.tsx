import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHandPoint = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHandPoint(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hand-point"><path fill="currentColor" d="M6.499 1a1.5 1.5 0 0 1 1.5 1.5v1.586a1.497 1.497 0 0 1 1.946 1.02 1.498 1.498 0 0 1 2 1A1.497 1.497 0 0 1 14 7.5v3A4.5 4.5 0 0 1 9.5 15H8.25a.5.5 0 0 1-.13-.019 5.35 5.35 0 0 1-4.41-2.941L2.052 8.724a.5.5 0 0 1-.034-.362 1.797 1.797 0 0 1 2.76-.977l.22.154V2.5a1.5 1.5 0 0 1 1.5-1.5m0 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 1-.787.41l-1.01-.707a.8.8 0 0 0-1.156.274l1.558 3.116a4.35 4.35 0 0 0 3.672 2.4q.029.001.056.007H9.5l.18-.005A3.5 3.5 0 0 0 13 10.5V9.026L12.999 9V7.5a.5.5 0 0 0-.4-.49L12.5 7a.5.5 0 0 0-.49.4l-.02.2a.5.5 0 0 1-.07.17l-.016.021-.044.053-.02.02a.5.5 0 0 1-.214.117l-.033.01a.5.5 0 0 1-.593-.49V6.499a.5.5 0 0 0-.99-.1l-.01.09.002.01v1a.5.5 0 1 1-1 0v-.982L8.999 6.5v-1a.5.5 0 0 0-.99-.1l-.01.09V7.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 0-.5-.5" /></SvgRoot>;
});
export default IconHandPoint;
