import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToTop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToTop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-to-top"><path d="M7.72461 3.58203C7.91869 3.45387 8.18265 3.47562 8.35352 3.64648L11.8535 7.14648C12.0488 7.34175 12.0488 7.65825 11.8535 7.85352C11.6583 8.04878 11.3417 8.04878 11.1465 7.85352L8.5 5.20703V13.5C8.5 13.7761 8.27614 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V5.20703L4.85352 7.85352C4.65825 8.04878 4.34175 8.04878 4.14648 7.85352C3.95122 7.65825 3.95122 7.34175 4.14648 7.14648L7.64648 3.64648L7.72461 3.58203ZM12.5 1C12.7761 1 13 1.22386 13 1.5C13 1.77614 12.7761 2 12.5 2H3.5C3.22386 2 3 1.77614 3 1.5C3 1.22386 3.22386 1 3.5 1H12.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToTop;
