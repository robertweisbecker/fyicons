import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUsersFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUsersFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="users-fill"><path fill="currentColor" d="M11.253 9.25a3.75 3.75 0 0 1 3.619 2.762c.145.532-.316.988-.869.988h-12c-.552 0-1.014-.456-.869-.988a3.75 3.75 0 0 1 3.62-2.762c1.39 0 2.6.757 3.248 1.88a3.75 3.75 0 0 1 3.251-1.88m-6.5-6a2.25 2.25 0 1 1-.001 4.5 2.25 2.25 0 0 1 0-4.5m6.498 0a2.25 2.25 0 1 1-.001 4.5 2.25 2.25 0 0 1 0-4.5" />{props.children}</SvgRoot>;
});
export default IconUsersFill;
