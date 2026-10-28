import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPersonFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPersonFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="person-fill"><path fill="currentColor" d="M7.997 1C9.474 1 11 1.882 11 4.088c0 1.707-.357 3.254-1.186 4.138-.155.165-.087.486.13.549a7 7 0 0 1 4.344 3.65c.638 1.302-.54 2.575-1.99 2.575H3.701c-1.45 0-2.627-1.273-1.99-2.575a7 7 0 0 1 4.342-3.65c.217-.063.285-.383.13-.548-.828-.884-1.184-2.432-1.184-4.14C5 1.883 6.521 1 7.997 1" /></SvgRoot>;
});
export default IconPersonFill;
