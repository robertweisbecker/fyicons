import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPersonFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPersonFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="person-fill"><path fill="currentColor" d="M7.998 1c1.476 0 3.001.882 3.001 3.088 0 1.707-.357 3.254-1.186 4.138-.154.165-.087.486.13.549a7 7 0 0 1 4.345 3.65c.637 1.302-.54 2.575-1.99 2.575H3.701c-1.45 0-2.63-1.273-1.992-2.575a7 7 0 0 1 4.343-3.65c.218-.063.285-.384.13-.548C5.355 7.343 5 5.795 5 4.087 5 1.883 6.52 1 7.998 1" />{props.children}</SvgRoot>;
});
export default IconPersonFill;
