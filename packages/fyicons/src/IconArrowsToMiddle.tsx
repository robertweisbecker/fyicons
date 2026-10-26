import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsToMiddle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsToMiddle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.225 9.082a.5.5 0 0 1 .629.064l2 2a.5.5 0 1 1-.707.707L9 10.708V14.5a.5.5 0 0 1-1 0v-3.793l-1.146 1.146a.5.5 0 1 1-.708-.707l2-2zM13.5 7a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zm-5-7a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 1 1 .707.708l-2 2a.5.5 0 0 1-.63.062l-.077-.062-2-2a.5.5 0 1 1 .708-.708L8 4.293V.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconArrowsToMiddle;
