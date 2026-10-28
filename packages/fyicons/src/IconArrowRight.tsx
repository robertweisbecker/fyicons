import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.14648 3.14697C8.34174 2.95171 8.65825 2.95171 8.85352 3.14697L13.3535 7.64697C13.5485 7.84226 13.5487 8.15884 13.3535 8.354L8.85352 12.854C8.65831 13.049 8.34169 13.049 8.14648 12.854C7.9513 12.6588 7.95146 12.3423 8.14648 12.147L11.793 8.50049H2.5C2.22405 8.50049 2.00032 8.27636 2 8.00049C2 7.72435 2.22386 7.50049 2.5 7.50049H11.793L8.14648 3.854C7.9513 3.65882 7.95146 3.34225 8.14648 3.14697Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowRight;
