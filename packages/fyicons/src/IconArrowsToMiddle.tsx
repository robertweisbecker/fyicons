import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsToMiddle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsToMiddle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-to-middle"><path fill="currentColor" d="M8.5 9a.5.5 0 0 1 .354.146l2.5 2.5a.5.5 0 1 1-.707.707L9 10.708V14.5a.5.5 0 0 1-1 0v-3.793l-1.646 1.646a.5.5 0 1 1-.708-.707l2.5-2.5.077-.062A.5.5 0 0 1 8.5 9m5-2a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zm-5-7a.5.5 0 0 1 .5.5v3.793l1.646-1.647a.5.5 0 1 1 .707.708l-2.5 2.5a.5.5 0 0 1-.63.062l-.077-.062-2.5-2.5a.5.5 0 1 1 .708-.708L8 4.293V.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconArrowsToMiddle;
