import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQueuePlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQueuePlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="queue-play"><path fill="currentColor" d="M10 9.35a.5.5 0 0 1 .743-.437l2.97 1.65a.5.5 0 0 1 0 .874l-2.97 1.65A.5.5 0 0 1 10 12.65zM12.5 2A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7H4v.5A1.5 1.5 0 0 0 5.5 9h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 4 9.496V10.5A1.5 1.5 0 0 0 5.5 12h2a.5.5 0 1 1 0 1h-2A2.5 2.5 0 0 1 3 10.5V8a.5.5 0 0 1 .026-.156A3 3 0 0 1 3 7.5v-.587A1.5 1.5 0 0 1 2 5.5v-2A1.5 1.5 0 0 1 3.5 2zm-9 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconQueuePlay;
