import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.1479 6.14644C12.3432 5.95119 12.6597 5.95119 12.8549 6.14644C13.0502 6.3417 13.0502 6.65821 12.8549 6.85347L8.35493 11.3535C8.15967 11.5487 7.84316 11.5487 7.6479 11.3535L3.1479 6.85347C2.95266 6.65821 2.95265 6.34169 3.1479 6.14644C3.34316 5.95121 3.65967 5.95121 3.85493 6.14644L8.00142 10.2929L12.1479 6.14644Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronDown;
