import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackpack = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackpack(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.497 2a3.5 3.5 0 0 1 3.5 3.5v.549A2.5 2.5 0 0 1 15.001 8.5v2a2.5 2.5 0 0 1-2.268 2.488A2 2 0 0 1 10.997 14h-6a2 2 0 0 1-1.738-1.013A2.5 2.5 0 0 1 1 10.501V8.499a2.5 2.5 0 0 1 1.996-2.45V5.5a3.5 3.5 0 0 1 3.5-3.5zm-5.5 10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8.068a11 11 0 0 1-1 .4L11 8.5v2A1.5 1.5 0 0 1 9.5 12h-3A1.5 1.5 0 0 1 5 10.5v-2l.003-.031a11 11 0 0 1-1.006-.404zm9-.086a1.5 1.5 0 0 0 1.004-1.414v-2a1.5 1.5 0 0 0-1.004-1.415zm-10-4.826c-.58.207-.996.76-.996 1.411v2.002c0 .651.416 1.203.996 1.41zM6 10.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V8.756A8.8 8.8 0 0 1 8.001 9 8.8 8.8 0 0 1 6 8.755zM6.497 3a2.5 2.5 0 0 0-2.5 2.5v.97L4 6.5l-.003.03v.422L4.086 7c.217.11.533.26.923.408C5.792 7.708 6.855 8 8 8s2.209-.293 2.992-.592c.39-.149.706-.297.923-.408l.081-.044V5.5a2.5 2.5 0 0 0-2.5-2.5zM10 6H6V5h4z" /></SvgRoot>;
});
export default IconBackpack;
