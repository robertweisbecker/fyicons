import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-arrow-down"><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 4C8.27614 4 8.5 4.22386 8.5 4.5V10.293L10.1465 8.64648C10.3417 8.45122 10.6583 8.45122 10.8535 8.64648C11.0488 8.84175 11.0488 9.15825 10.8535 9.35352L8.35352 11.8535C8.15825 12.0488 7.84175 12.0488 7.64648 11.8535L5.14648 9.35352C4.95122 9.15825 4.95122 8.84175 5.14648 8.64648C5.34175 8.45122 5.65825 8.45122 5.85352 8.64648L7.5 10.293V4.5C7.5 4.22386 7.72386 4 8 4Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowDown;
