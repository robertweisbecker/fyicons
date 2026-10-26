import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSizes = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSizes(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1 4.5A1.5 1.5 0 0 1 2.5 3h5A1.5 1.5 0 0 1 9 4.5V5h1.5A1.5 1.5 0 0 1 12 6.5V7h1.5A1.5 1.5 0 0 1 15 8.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5zM13.5 12a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H12v3.5c0 .176-.032.343-.088.5zm-3 0a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H9v5.5c0 .176-.032.343-.088.5zM2 11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5z" /></SvgRoot>;
});
export default IconSizes;
