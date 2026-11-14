import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyePupilSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyePupilSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eye-pupil-slash-fill"><path fill="currentColor" d="M2.146 2.146a.5.5 0 0 1 .707 0l1.808 1.808C5.598 3.397 6.717 3 8 3c2.043 0 3.668 1.007 4.81 2.063a11.4 11.4 0 0 1 2.06 2.574.73.73 0 0 1 0 .726 11.4 11.4 0 0 1-2.06 2.575q-.295.272-.633.534l1.675 1.675a.5.5 0 1 1-.707.707l-1.809-1.81C10.4 12.602 9.284 13 8 13c-2.043 0-3.668-1.007-4.81-2.062a11.4 11.4 0 0 1-2.06-2.575.73.73 0 0 1 0-.726 11.4 11.4 0 0 1 2.06-2.574 10 10 0 0 1 .63-.535L2.147 2.854a.5.5 0 0 1 0-.708M4.66 3.953a8 8 0 0 0-.84.575l7.517 7.517q.45-.269.84-.574L9.72 9.014C9.9 8.709 10 8.36 10 8a2.001 2.001 0 0 0-3.015-1.722z" />{props.children}</SvgRoot>;
});
export default IconEyePupilSlashFill;
