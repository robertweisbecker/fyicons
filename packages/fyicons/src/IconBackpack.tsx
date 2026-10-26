import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackpack = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackpack(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.497 2a3.5 3.5 0 0 1 3.5 3.5v.62l1.698 3.266c.82 1.576-.24 3.445-1.96 3.601A2 2 0 0 1 10.996 14h-6c-.74 0-1.386-.404-1.731-1.002L3.25 13C1.394 13 .2 11.032 1.056 9.386l1.75-3.366a.5.5 0 0 1 .19-.2V5.5a3.5 3.5 0 0 1 3.5-3.5zm-5.5 10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.068a11 11 0 0 1-1 .4L11 7.5v2A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-2l.003-.031a11 11 0 0 1-1.006-.404zM1.944 9.848a1.47 1.47 0 0 0 1.053 2.128V7.82zm11.053 2.064a1.472 1.472 0 0 0 .81-2.064l-.81-1.56zM6 9.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7.756A8.8 8.8 0 0 1 8.001 8 8.8 8.8 0 0 1 6 7.755zM6.497 3a2.5 2.5 0 0 0-2.5 2.5v.452L4.086 6c.217.11.533.26.923.408C5.792 6.708 6.855 7 8 7s2.209-.293 2.992-.592c.39-.149.706-.297.923-.408l.081-.044V5.5a2.5 2.5 0 0 0-2.5-2.5zM10 5H6V4h4z" /></SvgRoot>;
});
export default IconBackpack;
