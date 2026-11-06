import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSkipForward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="skip-forward"><path fill="currentColor" d="M3 4.578a.967.967 0 0 1 1.468-.826l5.28 3.207v-1.96a1 1 0 0 1 1-1h1.25a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1.25a1 1 0 0 1-1-1v-1.96l-5.28 3.208A.966.966 0 0 1 3 11.42zm1 6.782L9.533 8 4 4.636zm6.748-.36h1.25V5h-1.25z" /></SvgRoot>;
});
export default IconSkipForward;
