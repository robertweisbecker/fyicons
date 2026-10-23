import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareArrowFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareArrowFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 3.30981C7.00047 2.19671 8.34643 1.63914 9.13379 2.42603L13.6465 6.93872C14.2321 7.52441 14.2319 8.47403 13.6465 9.05981L9.13379 13.5725C8.34635 14.3599 7.00009 13.8022 7 12.6887V10.9993H6.5C5.08385 10.9993 3.75026 11.6663 2.90039 12.7991C2.77126 12.9712 2.54597 13.0419 2.3418 12.9739C2.1377 12.9058 2 12.7144 2 12.4993V10.4993C2.00024 7.63049 4.19695 5.27535 7 5.02271V3.30981Z" fill="currentColor" /></SvgRoot>;
});
export default IconShareArrowFill;
