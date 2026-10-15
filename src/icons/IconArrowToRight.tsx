import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowToRight = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 2.5C12 2.22386 12.2239 2 12.5 2C12.7761 2 13 2.22386 13 2.5V13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5V2.5ZM2 8.5C2 8.22386 2.22386 8 2.5 8H9.29297L7.14648 5.85352C6.95122 5.65825 6.95122 5.34175 7.14648 5.14648C7.34175 4.95122 7.65825 4.95122 7.85352 5.14648L10.8535 8.14648C11.0244 8.31735 11.0461 8.58131 10.918 8.77539L10.8535 8.85352L7.85352 11.8535C7.65825 12.0488 7.34175 12.0488 7.14648 11.8535C6.95122 11.6583 6.95122 11.3417 7.14648 11.1465L9.29297 9H2.5C2.22386 9 2 8.77614 2 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToRight;
