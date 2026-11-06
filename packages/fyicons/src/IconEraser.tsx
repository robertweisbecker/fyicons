import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEraser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEraser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eraser"><path fill="currentColor" d="M8.94 1.354a1.5 1.5 0 0 1 2.12 0l3.587 3.586a1.5 1.5 0 0 1 0 2.12l-6.083 6.084q-.245.246-.534.437l-1.388.926a2.5 2.5 0 0 1-3.154-.312l-1.681-1.682a2.5 2.5 0 0 1-.313-3.154L2.42 7.97a3.5 3.5 0 0 1 .438-.533zm-6.614 8.56a1.5 1.5 0 0 0 .188 1.892l1.68 1.682a1.5 1.5 0 0 0 1.893.187l1.128-.753-4.138-4.138zm8.028-7.853a.5.5 0 0 0-.707 0L3.707 8 8 12.292l5.94-5.94a.5.5 0 0 0 0-.706z" /></SvgRoot>;
});
export default IconEraser;
