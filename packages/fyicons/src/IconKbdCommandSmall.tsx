import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdCommandSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommandSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 3a2 2 0 1 1 0 4h-1v2h1a2 2 0 1 1-2 2v-1H7v1a2 2 0 1 1-2-2h1V7H5a2 2 0 1 1 2-2v1h2V5a2 2 0 0 1 2-2m-6 7a1 1 0 1 0 1 1v-1zm5 1a1 1 0 1 0 1-1h-1zM7 9h2V7H7zM5 4a1 1 0 0 0 0 2h1V5a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v1h1a1 1 0 1 0 0-2" /></SvgRoot>;
});
export default IconKbdCommandSmall;
