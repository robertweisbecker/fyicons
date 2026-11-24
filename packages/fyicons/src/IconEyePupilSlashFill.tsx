import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEyePupilSlashFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEyePupilSlashFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eye-pupil-slash-fill"><path fill="currentColor" d="M2.146 2.147a.5.5 0 0 1 .708 0L4.66 3.955C5.598 3.397 6.717 3 8.001 3c2.044 0 3.668 1.007 4.81 2.063a11.4 11.4 0 0 1 2.06 2.574.73.73 0 0 1 0 .727 11.4 11.4 0 0 1-2.06 2.574q-.295.273-.632.534l1.675 1.675a.5.5 0 0 1-.707.707l-1.81-1.809c-.936.557-2.053.955-3.336.956-2.044 0-3.668-1.007-4.81-2.063a11.4 11.4 0 0 1-2.06-2.574.73.73 0 0 1 0-.727c.214-.373.917-1.517 2.06-2.574q.293-.272.63-.534L2.146 2.854a.5.5 0 0 1 0-.707M4.66 3.954a8 8 0 0 0-.839.575l7.517 7.516q.448-.268.84-.574L9.903 9.197a2.248 2.248 0 0 0-3.1-3.1z" />{props.children}</SvgRoot>;
});
export default IconEyePupilSlashFill;
