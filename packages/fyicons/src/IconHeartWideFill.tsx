import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartWideFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeartWideFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.55 2.611c.821-.508 1.717-.576 2.58-.344A3.865 3.865 0 0 1 15 6c0 1.696-.897 3.06-2.144 4.284-1.237 1.214-2.907 2.372-4.555 3.615a.5.5 0 0 1-.602 0c-1.648-1.243-3.318-2.4-4.555-3.615C1.897 9.06 1 7.696 1 6a3.865 3.865 0 0 1 2.87-3.733c.863-.232 1.759-.164 2.58.344.588.364 1.108.935 1.55 1.723.442-.788.962-1.359 1.55-1.723" /></SvgRoot>;
});
export default IconHeartWideFill;
