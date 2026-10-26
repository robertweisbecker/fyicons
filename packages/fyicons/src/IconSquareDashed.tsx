import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareDashed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareDashed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.5 12a.5.5 0 0 1 .49.4l.02.201c.04.195.195.35.39.39l.201.02a.5.5 0 0 1-.1.99A1.5 1.5 0 0 1 2 12.5a.5.5 0 0 1 .5-.5M7 13a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1 0-1zm3.5 0a.5.5 0 1 1 0 1H9a.5.5 0 0 1 0-1zm3-1a.5.5 0 0 1 .5.5 1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 1-.1-.99l.201-.02a.5.5 0 0 0 .39-.389l.02-.201a.5.5 0 0 1 .49-.4m-11-3.5A.5.5 0 0 1 3 9v1.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M2.5 5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5m-10-3a.5.5 0 0 1 .101.99l-.201.02a.5.5 0 0 0-.39.39l-.02.201a.501.501 0 0 1-.99-.1A1.5 1.5 0 0 1 3.5 2m9 0A1.5 1.5 0 0 1 14 3.5a.5.5 0 0 1-.99.101l-.02-.201a.5.5 0 0 0-.389-.39l-.201-.02a.5.5 0 0 1 .1-.99M7 2a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1 0-1zm3.5 0a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconSquareDashed;
