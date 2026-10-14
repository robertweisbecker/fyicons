import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowToRight = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12 3.5C12 3.22386 12.2239 3 12.5 3C12.7761 3 13 3.22386 13 3.5V12.5C13 12.7761 12.7761 13 12.5 13C12.2239 13 12 12.7761 12 12.5V3.5ZM2 8C2 7.72386 2.22386 7.5 2.5 7.5H8.79297L6.64648 5.35352C6.45122 5.15825 6.45122 4.84175 6.64648 4.64648C6.84175 4.45122 7.15825 4.45122 7.35352 4.64648L10.3535 7.64648C10.5244 7.81735 10.5461 8.08131 10.418 8.27539L10.3535 8.35352L7.35352 11.3535C7.15825 11.5488 6.84175 11.5488 6.64648 11.3535C6.45122 11.1583 6.45122 10.8417 6.64648 10.6465L8.79297 8.5H2.5C2.22386 8.5 2 8.27614 2 8Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToRight;
