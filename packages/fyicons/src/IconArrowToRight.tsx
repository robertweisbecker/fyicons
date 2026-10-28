import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14 3.5C14 3.22386 14.2239 3 14.5 3C14.7761 3 15 3.22386 15 3.5V13.5C15 13.7761 14.7761 14 14.5 14C14.2239 14 14 13.7761 14 13.5V3.5ZM2 8.5C2 8.22386 2.22386 8 2.5 8H11.293L9.14648 5.85352C8.95122 5.65825 8.95122 5.34175 9.14648 5.14648C9.34175 4.95122 9.65825 4.95122 9.85352 5.14648L12.8535 8.14648C13.0244 8.31735 13.0461 8.58131 12.918 8.77539L12.8535 8.85352L9.85352 11.8535C9.65825 12.0488 9.34175 12.0488 9.14648 11.8535C8.95122 11.6583 8.95122 11.3417 9.14648 11.1465L11.293 9H2.5C2.22386 9 2 8.77614 2 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToRight;
