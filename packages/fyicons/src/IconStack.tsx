import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStack = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStack(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 2A1.5 1.5 0 0 1 14 3.5v5c0 .653-.418 1.206-1 1.412v.588c0 .653-.418 1.206-1 1.412v.588a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5v-.588A1.5 1.5 0 0 1 3 10.5v-.588A1.5 1.5 0 0 1 2 8.5v-5A1.5 1.5 0 0 1 3.5 2zM5 12v.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V12zm-1-1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V10H4zM3.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconStack;
