import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBasket = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBasket(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="basket"><path fill="currentColor" d="M6.026 2.342a.5.5 0 0 1 .95.316L6.528 4h2.945l-.448-1.342a.501.501 0 0 1 .95-.316L10.527 4h2.307a2.166 2.166 0 0 1 1.691 3.518l-.315.395a2.6 2.6 0 0 0-.415.738l-1.466 4.033A2 2 0 0 1 10.45 14H5.551a2 2 0 0 1-1.88-1.316L2.205 8.65a2.6 2.6 0 0 0-.415-.738l-.315-.395A2.166 2.166 0 0 1 3.166 4h2.308zM3.166 5a1.166 1.166 0 0 0-.91 1.893l.315.396c.246.307.44.651.574 1.02l1.466 4.033a1 1 0 0 0 .94.658h4.898a1 1 0 0 0 .94-.658l1.467-4.033c.134-.369.327-.713.573-1.02l.315-.396A1.165 1.165 0 0 0 12.834 5H10.86l.34 1.018a1 1 0 1 1-.95.318L9.807 5h-3.61L5.75 6.338a1 1 0 1 1-.948-.32L5.14 5z" /></SvgRoot>;
});
export default IconBasket;
