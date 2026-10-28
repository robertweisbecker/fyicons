import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-small"><path fill="currentColor" d="M7.818 3a2 2 0 0 1 1.33.506l2.182 1.942A2 2 0 0 1 12 6.942V11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7H9.5A1.5 1.5 0 0 1 8 5.5V4.017A1 1 0 0 0 7.818 4z" /></SvgRoot>;
});
export default IconFileSmall;
