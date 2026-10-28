import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.64648 5.14648C8.84175 4.95122 9.15825 4.95122 9.35352 5.14648L11.8535 7.64648C12.0488 7.84175 12.0488 8.15825 11.8535 8.35352L9.35352 10.8535C9.15825 11.0488 8.84175 11.0488 8.64648 10.8535C8.45122 10.6583 8.45122 10.3417 8.64648 10.1465L10.293 8.5H4.5C4.22386 8.5 4 8.27614 4 8C4 7.72386 4.22386 7.5 4.5 7.5H10.293L8.64648 5.85352C8.45122 5.65825 8.45122 5.34175 8.64648 5.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowRight;
