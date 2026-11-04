import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackgroundCutout = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackgroundCutout(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background-cutout"><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM3.985 12.72c.298.177.644.28 1.015.28h.293l2.068-2.07a3 3 0 0 1-1.098-.487zm6.898-3.897a3 3 0 0 1-2.06 2.06L6.707 13h1.586L13 8.293V6.707zM9.707 13H11a2 2 0 0 0 2-2V9.707zM3 10.707V11c0 .37.103.716.278 1.014l2.278-2.278a3 3 0 0 1-.488-1.098zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 7.707v1.586l2.116-2.117a3 3 0 0 1 2.06-2.06L9.293 3H7.707zm7.443-1.444c.232.324.4.696.488 1.098L13 5.293V5c0-.37-.103-.717-.28-1.015zM5 3a2 2 0 0 0-2 2v1.293L6.293 3zm3.638 2.068c.402.088.774.257 1.098.488l2.278-2.278A2 2 0 0 0 11 3h-.293z" /></SvgRoot>;
});
export default IconBackgroundCutout;
