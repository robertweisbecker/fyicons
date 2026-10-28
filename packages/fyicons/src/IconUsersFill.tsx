import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUsersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUsersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="users-fill"><path fill="currentColor" d="M11.253 9.25a3.75 3.75 0 0 1 3.618 2.762c.145.532-.316.988-.868.988h-12c-.552 0-1.013-.456-.868-.988a3.752 3.752 0 0 1 6.868-.881 3.75 3.75 0 0 1 3.25-1.881m-6.5-6a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m6.497 0a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5" /></SvgRoot>;
});
export default IconUsersFill;
