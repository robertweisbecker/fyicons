import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontSize = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontSize(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="font-size"><path fill="currentColor" d="M3.354 6.313a.752.752 0 0 1 1.293.001l.053.113 2.267 5.893a.5.5 0 0 1-.934.36L5.387 11H2.611l-.644 1.673a.5.5 0 0 1-.934-.36L3.3 6.427zM2.995 10h2.007L4 7.392zm7.84-6.518c.272-.535 1.058-.535 1.33 0l.05.123 2.762 8.745a.5.5 0 0 1-.954.3L13.187 10H9.813l-.836 2.65a.5.5 0 0 1-.954-.3l2.762-8.745zM10.129 9h2.742L11.5 4.66z" /></SvgRoot>;
});
export default IconFontSize;
