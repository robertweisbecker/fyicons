import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGasFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGasFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gas-fill"><path fill="currentColor" d="M8.9 2c.272 0 .506 0 .698.016.197.016.394.05.583.147.282.144.512.374.656.656.096.19.131.386.147.583.016.192.016.426.016.698V15H3V4.1c0-.272 0-.506.016-.698.016-.197.05-.394.147-.583.144-.282.374-.512.656-.656.19-.096.386-.131.583-.147C4.594 2 4.828 2 5.1 2zM4.5 3a.5.5 0 0 0-.5.5V7h6V3.5a.5.5 0 0 0-.5-.5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5h1a1 1 0 0 1 1 1v3a1 1 0 1 0 2 0v-6" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5 13 5l1-1 .5.5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 4.5-2-2m-1 12h-9" /></SvgRoot>;
});
export default IconGasFill;
