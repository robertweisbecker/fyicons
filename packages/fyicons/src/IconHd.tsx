import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hd"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm7.589 1.007c1.527.035 2.413 1.466 2.412 3.118-.001 1.442-.98 2.831-2.411 2.867-.338.009-.801.01-1.176.007l-.476-.004-.143-.002h-.052a.5.5 0 0 1-.493-.5V5.506a.5.5 0 0 1 .493-.5h.014l.039-.001.142-.001L9.414 5c.375-.002.838-.002 1.175.006M6.5 4.993a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-1.75H4v1.75a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v2.25h2v-2.25a.5.5 0 0 1 .5-.5m2.75 1.009v3.995l.169.002c.374.002.824.002 1.146-.006.72-.018 1.435-.782 1.436-1.869l-.008-.252c-.078-1.221-.73-1.85-1.428-1.865a46 46 0 0 0-1.315-.005" /></SvgRoot>;
});
export default IconHd;
