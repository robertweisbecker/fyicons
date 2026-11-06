import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDoor = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDoor(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="door"><path fill="currentColor" d="M10.3 2c.201 0 .383 0 .533.012.156.012.322.042.484.125.236.12.426.31.546.546.083.162.113.328.125.484.013.15.012.332.012.533V14h2v1H2v-1h2V3.7c0-.201 0-.383.012-.533a1.3 1.3 0 0 1 .125-.484c.12-.235.31-.426.546-.546a1.3 1.3 0 0 1 .484-.125C5.317 1.999 5.499 2 5.7 2zM5.7 3c-.218 0-.352 0-.452.009a1 1 0 0 0-.092.012l-.015.004-.004.002a.25.25 0 0 0-.11.11l-.002.004-.004.015a1 1 0 0 0-.012.092C5 3.348 5 3.482 5 3.7V14h6V3.7c0-.218 0-.352-.009-.452a1 1 0 0 0-.012-.092l-.004-.015-.002-.004a.25.25 0 0 0-.11-.11l-.004-.002-.015-.004a1 1 0 0 0-.092-.012A6 6 0 0 0 10.3 3zm3.8 5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconDoor;
