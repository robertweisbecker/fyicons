import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensionsLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensionsLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 4.5a1 1 0 0 1 1-1h4v5h-5zm8-4h4a1 1 0 0 1 1 1v4h-5zm-8 8h5v5h-4a1 1 0 0 1-1-1zm5 0h5v4a1 1 0 0 1-1 1h-4z" /></SvgRoot>;
});
export default IconExtensionsLg;
