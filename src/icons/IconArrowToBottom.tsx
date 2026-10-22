import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowToBottom = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 14C12.7761 14 13 14.2239 13 14.5C13 14.7761 12.7761 15 12.5 15H3.5C3.22386 15 3 14.7761 3 14.5C3 14.2239 3.22386 14 3.5 14H12.5ZM8 1C8.27614 1 8.5 1.22386 8.5 1.5V10.793L11.6465 7.64648C11.8417 7.45122 12.1583 7.45122 12.3535 7.64648C12.5488 7.84175 12.5488 8.15825 12.3535 8.35352L8.35352 12.3535C8.18265 12.5244 7.91869 12.5461 7.72461 12.418L7.64648 12.3535L3.64648 8.35352C3.45122 8.15825 3.45122 7.84175 3.64648 7.64648C3.84175 7.45122 4.15825 7.45122 4.35352 7.64648L7.5 10.793V1.5C7.5 1.22386 7.72386 1 8 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToBottom;
