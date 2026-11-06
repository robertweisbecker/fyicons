import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipBackward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-backward"><path fill="currentColor" d="M11.655 3.69A.967.967 0 0 1 13 4.578v6.842a.966.966 0 0 1-1.468.826L6 8.888V11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.11l5.533-3.357zM6.463 8 12 11.36V4.637zm-2.464 3h1V5h-1z" /></SvgRoot>;
});
export default IconSkipBackward;
