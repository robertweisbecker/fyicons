import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyeSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyeSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eye-slash-fill"><path fill="currentColor" d="M2.147 2.146a.5.5 0 0 1 .707 0l1.808 1.808C5.599 3.397 6.717 3 8 3c2.043 0 3.668 1.006 4.81 2.062a11.4 11.4 0 0 1 2.06 2.574.73.73 0 0 1 0 .727 11.4 11.4 0 0 1-2.06 2.574q-.295.273-.633.534l1.676 1.675a.5.5 0 0 1-.707.707l-1.809-1.808C10.4 12.601 9.283 13 8 13c-2.044 0-3.669-1.007-4.81-2.063a11.4 11.4 0 0 1-2.06-2.574.73.73 0 0 1 0-.727 11.4 11.4 0 0 1 2.06-2.574q.294-.272.63-.534L2.148 2.853a.5.5 0 0 1 0-.707m2.514 1.807a8 8 0 0 0-.84.575l7.518 7.517q.447-.269.84-.575l-1.736-1.735A3 3 0 0 0 11.001 8a3 3 0 0 0-4.737-2.444zM8 6a2 2 0 0 1 2 2c0 .36-.1.708-.28 1.013L6.986 6.278A2 2 0 0 1 8.001 6" /></SvgRoot>;
});
export default IconEyeSlashFill;
