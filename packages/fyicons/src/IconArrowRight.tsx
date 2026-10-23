import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.64648 3.64693C8.84175 3.45167 9.15825 3.45167 9.35352 3.64693L13.3535 7.64693C13.5485 7.84222 13.5487 8.1588 13.3535 8.35397L9.35352 12.354C9.15833 12.5489 8.8417 12.5489 8.64648 12.354C8.45129 12.1588 8.45144 11.8422 8.64648 11.6469L11.793 8.50045H2.5C2.22404 8.50045 2.0003 8.27634 2 8.00045C2 7.72431 2.22386 7.50045 2.5 7.50045H11.793L8.64648 4.35397C8.45131 4.1588 8.4515 3.84222 8.64648 3.64693Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowRight;
