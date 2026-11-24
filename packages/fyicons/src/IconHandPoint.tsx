import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHandPoint = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHandPoint(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hand-point"><path fill="currentColor" d="M6.499 1A1.5 1.5 0 0 1 8 2.5v1.586a1.497 1.497 0 0 1 1.945 1.02 1.498 1.498 0 0 1 2 1A1.497 1.497 0 0 1 14 7.5v1.47l.002.03v1.5a4.5 4.5 0 0 1-4.5 4.5h-1.25a.5.5 0 0 1-.129-.019A5.35 5.35 0 0 1 3.71 12.04L2.052 8.724a.5.5 0 0 1-.033-.362 1.797 1.797 0 0 1 2.758-.977L5 7.539V2.5A1.5 1.5 0 0 1 6.5 1m0 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 1-.787.41l-1.009-.707a.797.797 0 0 0-1.157.274l1.558 3.116a4.35 4.35 0 0 0 3.672 2.4q.03.001.056.007h1.169l.18-.005A3.5 3.5 0 0 0 13 10.5V9.026L12.999 9V7.5a.5.5 0 0 0-.4-.49L12.5 7a.5.5 0 0 0-.49.4l-.02.2a.5.5 0 0 1-.07.17l-.016.021-.044.053-.02.02a.5.5 0 0 1-.154.099l-.06.018-.033.01a.5.5 0 0 1-.593-.49V6.499a.5.5 0 0 0-.99-.1L10 6.49l.001.01v1a.5.5 0 0 1-1 0v-.982L8.999 6.5v-1a.5.5 0 0 0-.99-.1L8 5.49V7.5a.5.5 0 0 1-1 0V5.509L6.999 5.5v-3a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconHandPoint;
