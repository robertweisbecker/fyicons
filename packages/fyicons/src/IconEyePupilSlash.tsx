import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyePupilSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyePupilSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.147 2.147a.5.5 0 0 1 .707 0l1.807 1.807C5.598 3.397 6.717 3 8 3c2.043 0 3.668 1.006 4.81 2.062a11.4 11.4 0 0 1 2.06 2.574.73.73 0 0 1 0 .727 11.4 11.4 0 0 1-2.06 2.574q-.295.272-.633.533l1.676 1.676a.5.5 0 0 1-.707.707l-1.809-1.808C10.401 12.601 9.283 13 8 13c-2.044 0-3.669-1.007-4.81-2.063a11.4 11.4 0 0 1-2.06-2.574.73.73 0 0 1 0-.727 11.4 11.4 0 0 1 2.06-2.574q.293-.273.63-.535L2.147 2.854a.5.5 0 0 1 0-.707m2.387 3.094a8 8 0 0 0-.665.557A10.5 10.5 0 0 0 2.079 8c.258.425.867 1.35 1.79 2.203C4.909 11.165 6.302 12 8 12c.97 0 1.842-.275 2.604-.689zM8 4c-.972 0-1.844.272-2.607.686L6.986 6.28a1.997 1.997 0 0 1 2.735 2.735l1.745 1.745q.354-.266.666-.555A10.5 10.5 0 0 0 13.921 8a10.5 10.5 0 0 0-1.789-2.203C11.092 4.836 9.7 4 8.001 4" /></SvgRoot>;
});
export default IconEyePupilSlash;
