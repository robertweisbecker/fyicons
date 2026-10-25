import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconXmarkLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconXmarkLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="xmark-lg"><path d="M14.1474 1.14693C14.3427 0.951673 14.6592 0.951673 14.8545 1.14693C15.0495 1.34222 15.0496 1.65879 14.8545 1.85397L8.70602 8.00143L14.8515 14.1469C15.0468 14.3422 15.0468 14.6587 14.8515 14.854C14.6563 15.0492 14.3398 15.0492 14.1445 14.854L7.99899 8.70846L1.85445 14.854C1.65925 15.0489 1.34262 15.0489 1.14742 14.854C0.952243 14.6588 0.952406 14.3422 1.14742 14.1469L7.29195 8.00143L1.14449 1.85397C0.949231 1.6587 0.949231 1.3422 1.14449 1.14693C1.33976 0.951673 1.65626 0.951673 1.85152 1.14693L7.99899 7.2944L14.1474 1.14693Z" fill="currentColor" /></SvgRoot>;
});
export default IconXmarkLg;
