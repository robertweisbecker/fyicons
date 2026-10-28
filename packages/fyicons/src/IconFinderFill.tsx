import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFinderFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFinderFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="finder-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM7.22 8.342A.5.5 0 0 0 7.693 9H8.5a.5.5 0 0 1 0 1H8v1l-.218-.005c-.495-.022-.902-.123-1.255-.3-.403-.201-.77-.518-1.127-.995a.5.5 0 0 0-.8.6c.428.571.908 1.004 1.48 1.29.501.25 1.049.377 1.656.404L8 12v1h3.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3H9zM10.6 9.7a.5.5 0 0 1 .8.6c-.625.833-1.35 1.36-2.285 1.58A4.8 4.8 0 0 1 8 12v-1c.33 0 .622-.032.885-.094.666-.157 1.203-.523 1.715-1.206M5.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m5 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconFinderFill;
