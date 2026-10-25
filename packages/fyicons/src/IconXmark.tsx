import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconXmark = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconXmark(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="xmark"><path d="M12.1474 3.14693C12.3427 2.95167 12.6592 2.95167 12.8544 3.14693C13.0495 3.34222 13.0496 3.65879 12.8544 3.85397L8.70698 8.00045L12.8535 12.1469C13.0487 12.3421 13.0485 12.6587 12.8535 12.854C12.6582 13.0492 12.3417 13.0492 12.1464 12.854L7.99995 8.70748L3.85444 12.854C3.65924 13.0489 3.34261 13.0489 3.14741 12.854C2.95223 12.6588 2.95239 12.3422 3.14741 12.1469L7.29292 8.00045L3.14643 3.85397C2.9512 3.6587 2.95118 3.34219 3.14643 3.14693C3.3417 2.95186 3.65826 2.95176 3.85347 3.14693L7.99995 7.29342L12.1474 3.14693Z" fill="currentColor" /></SvgRoot>;
});
export default IconXmark;
