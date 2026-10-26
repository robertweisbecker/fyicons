import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14 3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.446c-.759.168-1.243.713-1.56 1.296-.23.422-.565.84-.983 1.15.418.31.752.728.982 1.15.318.584.803 1.128 1.561 1.296V10a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.539c-1.264-.186-2.02-1.063-2.44-1.834-.364-.67-.946-1.127-1.542-1.128H6V9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.5h.018c.596 0 1.178-.457 1.543-1.127C7.98 5.6 8.736 4.724 10 4.538V4a1 1 0 0 1 1-1zm-3 9h3v-2h-3zM2 9h3V7H2zm9-3h3V4h-3z" /></SvgRoot>;
});
export default IconFlow;
