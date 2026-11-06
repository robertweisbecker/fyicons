import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeartFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heart-fill"><path fill="currentColor" d="m11.611 2.017.355.04.006.001c1.95.299 3.597 2.398 2.84 5.045-.201.7-.742 1.487-1.373 2.241-.643.77-1.43 1.559-2.185 2.266a49 49 0 0 1-2.878 2.482l-.05.038-.012.01-.003.002v.001a.5.5 0 0 1-.617 0h-.002l-.003-.003-.013-.01-.048-.039-.184-.146a49 49 0 0 1-2.696-2.335c-.757-.707-1.544-1.497-2.188-2.266-.631-.753-1.172-1.541-1.372-2.24-.757-2.648.89-4.747 2.839-5.046h.006c.849-.12 1.638-.01 2.377.35.572.28 1.095.703 1.586 1.254.46-.542.934-.974 1.483-1.262.631-.33 1.32-.45 2.132-.383" /></SvgRoot>;
});
export default IconHeartFill;
