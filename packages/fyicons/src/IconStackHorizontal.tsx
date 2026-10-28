import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStackHorizontal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStackHorizontal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="stack-horizontal"><path fill="currentColor" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h5c.653 0 1.206.418 1.412 1h.588c.653 0 1.206.418 1.412 1h.588A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-.588a1.5 1.5 0 0 1-1.412 1h-.588A1.5 1.5 0 0 1 8.5 14h-5A1.5 1.5 0 0 1 2 12.5zM12 11h.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H12zm-1.5 1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H10v8zm-7.5.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5z" /></SvgRoot>;
});
export default IconStackHorizontal;
