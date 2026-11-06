import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEjectFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEjectFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eject-fill"><path fill="currentColor" d="M13.5 11a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5zM7.34 2.33a1 1 0 0 1 1.32 0l5.598 4.919c.693.608.262 1.75-.66 1.75H2.403c-.922 0-1.353-1.142-.66-1.75z" /></SvgRoot>;
});
export default IconEjectFill;
