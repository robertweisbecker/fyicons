import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowRightFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowRightFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM9.35352 5.14648C9.15825 4.95122 8.84175 4.95122 8.64648 5.14648C8.45122 5.34175 8.45122 5.65825 8.64648 5.85352L10.293 7.5H4.5C4.22386 7.5 4 7.72386 4 8C4 8.27614 4.22386 8.5 4.5 8.5H10.293L8.64648 10.1465C8.45122 10.3417 8.45122 10.6583 8.64648 10.8535C8.84175 11.0488 9.15825 11.0488 9.35352 10.8535L11.8535 8.35352C12.0488 8.15825 12.0488 7.84175 11.8535 7.64648L9.35352 5.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowRightFill;
