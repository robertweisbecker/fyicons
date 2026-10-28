import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-arrow-up"><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM7.64648 4.14648C7.84175 3.95122 8.15825 3.95122 8.35352 4.14648L10.8535 6.64648C11.0488 6.84175 11.0488 7.15825 10.8535 7.35352C10.6583 7.54878 10.3417 7.54878 10.1465 7.35352L8.5 5.70703V11.5C8.5 11.7761 8.27614 12 8 12C7.72386 12 7.5 11.7761 7.5 11.5V5.70703L5.85352 7.35352C5.65825 7.54878 5.34175 7.54878 5.14648 7.35352C4.95122 7.15825 4.95122 6.84175 5.14648 6.64648L7.64648 4.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowUp;
