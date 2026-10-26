import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.58 2.438c.456-1.366 2.39-1.366 2.845 0l.64 1.92a2.5 2.5 0 0 0 1.581 1.58l1.919.64c1.367.456 1.367 2.39 0 2.846l-1.919.64a2.5 2.5 0 0 0-1.581 1.58l-.64 1.92c-.456 1.366-2.39 1.366-2.845 0l-.64-1.92a2.5 2.5 0 0 0-1.581-1.58l-1.92-.64c-1.366-.456-1.366-2.39 0-2.846l1.92-.64a2.5 2.5 0 0 0 1.58-1.58zm1.897.317a.5.5 0 0 0-.95 0l-.639 1.919a3.5 3.5 0 0 1-2.213 2.212l-1.919.64a.5.5 0 0 0 0 .95l1.92.639a3.5 3.5 0 0 1 2.212 2.213l.64 1.919a.5.5 0 0 0 .95 0l.639-1.92a3.5 3.5 0 0 1 2.213-2.212l1.918-.64a.5.5 0 0 0 0-.949l-1.918-.64a3.5 3.5 0 0 1-2.213-2.212z" /></SvgRoot>;
});
export default IconSparkle;
