import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHatSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHatSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hat-side"><path fill="currentColor" d="M3.833 3.697a.75.75 0 0 1 .917.41q.354-.068.751-.11c1.295-.134 2.433-.002 3.411.686.94.662 1.652 1.784 2.261 3.448l3.513 1.405a.5.5 0 0 1 .252.707 3.794 3.794 0 0 1-4.303 1.82l-4.015-1.08-.329-.09c-1.378.183-3.03.064-3.988-.036A1.47 1.47 0 0 1 .993 9.37c.014-1.057.067-2.307.677-3.34A3.6 3.6 0 0 1 2.877 4.8v-.002a.75.75 0 0 1 .48-.946zm6.889 5.358a15 15 0 0 1-.85.518c-.46.26-1.034.55-1.669.8l2.692.725a2.79 2.79 0 0 0 2.835-.869l-2.983-1.192zM8.337 5.5c-.7-.493-1.557-.63-2.732-.508-1.803.187-2.643.816-3.074 1.545-.457.774-.524 1.767-.538 2.844a.47.47 0 0 0 .413.48c1.18.123 3.19.248 4.465-.095.944-.253 1.84-.687 2.509-1.064.317-.179.577-.344.764-.466C9.59 6.8 8.998 5.966 8.337 5.5" />{props.children}</SvgRoot>;
});
export default IconHatSide;
