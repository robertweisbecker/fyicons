import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontUpper = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontUpper(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="font-upper"><path fill="currentColor" d="M3.335 3.48c.272-.534 1.058-.534 1.33 0l.051.123 2.762 8.739a.5.5 0 0 1-.954.3l-.844-2.67H2.32l-.843 2.67a.5.5 0 0 1-.953-.3l2.761-8.739zm-.698 5.492h2.727L4 4.658zm8.698-5.492c.272-.534 1.058-.534 1.33 0l.051.123 2.762 8.739a.5.5 0 0 1-.954.3l-.844-2.67h-3.36l-.843 2.67a.5.5 0 0 1-.953-.3l2.762-8.739zm-.698 5.492h2.727L12 4.658z" /></SvgRoot>;
});
export default IconFontUpper;
