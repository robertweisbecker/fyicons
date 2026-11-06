import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNetwork = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNetwork(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="network"><path fill="currentColor" d="M8 1.165a1.835 1.835 0 0 1 .498 3.599v1.3a2 2 0 0 1 1.394 1.292l1.507-.487a1.835 1.835 0 1 1 .308.95l-1.745.566c-.085.434-.31.816-.627 1.1l1.267 1.744a1.834 1.834 0 1 1-.854 2.799 1.834 1.834 0 0 1 .044-2.212L8.436 9.95c-.14.03-.285.05-.435.05q-.226-.002-.437-.05l-1.355 1.867a1.835 1.835 0 1 1-.808-.588l1.264-1.744a2 2 0 0 1-.627-1.097L4.29 7.823a1.834 1.834 0 1 1-.954-2.767 1.83 1.83 0 0 1 1.265 1.815l1.506.489a2 2 0 0 1 1.391-1.294V4.763A1.834 1.834 0 0 1 8 1.165M5.257 12.274a.836.836 0 1 0-.98 1.353.836.836 0 0 0 .98-1.353m6.65.184a.836.836 0 1 0-1.35.984.836.836 0 0 0 1.35-.984M8.001 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4.974-.993a.835.835 0 1 0-.516 1.59.835.835 0 0 0 .516-1.59m10.998.535a.836.836 0 0 0-1.59.516.836.836 0 0 0 1.59-.516M7.999 2.165a.836.836 0 1 0 .002 1.672.836.836 0 0 0-.002-1.672" /></SvgRoot>;
});
export default IconNetwork;
