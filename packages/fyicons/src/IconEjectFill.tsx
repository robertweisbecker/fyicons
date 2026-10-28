import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEjectFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEjectFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eject-fill"><path fill="currentColor" d="M12.75 11a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM7.317 2.39a1 1 0 0 1 1.366 0L13.9 7.27c.662.619.224 1.73-.683 1.73H2.784C1.877 9 1.438 7.889 2.1 7.27z" /></SvgRoot>;
});
export default IconEjectFill;
