import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-to-right"><path d="M14 3.5C14 3.22386 14.2239 3 14.5 3C14.7761 3 15 3.22386 15 3.5V13.5C15 13.7761 14.7761 14 14.5 14C14.2239 14 14 13.7761 14 13.5V3.5ZM1 8.5C1 8.22386 1.22386 8 1.5 8H10.293L7.14648 4.85352C6.95122 4.65825 6.95122 4.34175 7.14648 4.14648C7.34175 3.95122 7.65825 3.95122 7.85352 4.14648L11.8535 8.14648C12.0244 8.31735 12.0461 8.58131 11.918 8.77539L11.8535 8.85352L7.85352 12.8535C7.65825 13.0488 7.34175 13.0488 7.14648 12.8535C6.95122 12.6583 6.95122 12.3417 7.14648 12.1465L10.293 9H1.5C1.22386 9 1 8.77614 1 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToRight;
