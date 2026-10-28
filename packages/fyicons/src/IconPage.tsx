import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3.5 6a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconPage;
